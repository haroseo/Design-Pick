require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');

const app = express();

// Multer Storage Setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'public/uploads/'),
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, `profile-${req.user ? req.user.id : Date.now()}${ext}`);
    }
});
const upload = multer({ 
    storage,
    limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) cb(null, true);
        else cb(new Error('이미지 파일만 업로드 가능합니다!'), false);
    }
});
const PORT = process.env.PORT || 3000;
const FEEDBACK_FILE = path.join(__dirname, 'feedback.json');
const USERS_FILE = path.join(__dirname, 'users_palettes.json');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Session Setup
app.use(session({
    secret: process.env.SESSION_SECRET || 'rgbdom-fallback-secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 } // 1 day
}));

app.use(passport.initialize());
app.use(passport.session());

// Helper: Database Read/Write
function readUsersDB() {
    try {
        const data = fs.readFileSync(USERS_FILE, 'utf8');
        return JSON.parse(data);
    } catch {
        return {};
    }
}
function writeUsersDB(data) {
    fs.writeFileSync(USERS_FILE, JSON.stringify(data, null, 2), 'utf8');
}

// Passport Serialize/Deserialize
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    const db = readUsersDB();
    if (db[id]) {
        done(null, db[id]);
    } else {
        done(new Error("User not found"), null);
    }
});

// Helper: Handle Login / OAuth Merge
function findOrCreateUser(profile, type) {
    const db = readUsersDB();
    let user = null;
    let userId = null;

    // Search by specific provider ID or email
    for (const id in db) {
        if (type === 'google' && db[id].googleId === profile.id) {
            userId = id; user = db[id]; break;
        }
        if (type === 'github' && db[id].githubId === profile.id) {
            userId = id; user = db[id]; break;
        }
        if (db[id].email && profile.emails && profile.emails.length > 0 && db[id].email === profile.emails[0].value) {
            userId = id; user = db[id]; break;
        }
    }

    if (!user) {
        userId = uuidv4();
        db[userId] = {
            id: userId,
            email: profile.emails && profile.emails.length > 0 ? profile.emails[0].value : null,
            name: profile.displayName || profile.username || 'User',
            picture: profile.photos && profile.photos.length > 0 ? profile.photos[0].value : null,
            palettes: [],
            googleId: type === 'google' ? profile.id : null,
            githubId: type === 'github' ? profile.id : null,
            status: 'active',
            addedAt: new Date().toISOString()
        };
    } else {
        // Merge provider ID just in case
        if (type === 'google' && !db[userId].googleId) db[userId].googleId = profile.id;
        if (type === 'github' && !db[userId].githubId) db[userId].githubId = profile.id;
        if (!db[userId].picture && profile.photos && profile.photos.length > 0) db[userId].picture = profile.photos[0].value;
        // If account was disabled, this OAuth login will find it.
    }

    writeUsersDB(db);
    return db[userId];
}

// ─── PASSPORT STRATEGIES ─────────────────────────────

// 1. Local (Email / Password)
passport.use(new LocalStrategy(
    { usernameField: 'email', passwordField: 'password' },
    async (email, password, done) => {
        try {
            const db = readUsersDB();
            let user = null;
            for (const id in db) {
                if (db[id].email === email && db[id].passwordHash) {
                    user = db[id]; break;
                }
            }
            if (!user) return done(null, false, { message: '가입되지 않은 이메일입니다.' });

            const isMatch = await bcrypt.compare(password, user.passwordHash);
            if (!isMatch) return done(null, false, { message: '비밀번호가 일치하지 않습니다.' });

            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }
));

// 2. Google OAuth
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_ID !== '1001891364154-1oq7nqrk375p2mvb84cnch7qffm1fndn.apps.googleusercontent.com' || process.env.GOOGLE_CLIENT_SECRET) {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'dummy',
        callbackURL: process.env.GOOGLE_CALLBACK_URL || '/api/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        try {
            const user = findOrCreateUser(profile, 'google');
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }));
}

// 3. GitHub OAuth
if (process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_ID !== '여기에_발급받으신_깃허브_클라이언트_ID를_적어주세요') {
    passport.use(new GitHubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_CALLBACK_URL || '/api/auth/github/callback'
    }, (accessToken, refreshToken, profile, done) => {
        try {
            const user = findOrCreateUser(profile, 'github');
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }));
}

// ─── AUTHENTICATION API ─────────────────────────────

// reCAPTCHA Validate Helper
async function validateRecaptcha(token) {
    // If secret is default/empty, bypass (for dev environment without proper keys)
    if (!process.env.RECAPTCHA_SECRET_KEY || process.env.RECAPTCHA_SECRET_KEY.includes('여기에')) return true;
    
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`, {
        method: 'POST'
    });
    const data = await response.json();
    return data.success;
}

// Local Register
app.post('/api/auth/register', async (req, res) => {
    const { email, password, name, captchaToken } = req.body;
    
    // Captcha Validate
    const isHuman = await validateRecaptcha(captchaToken);
    if (!isHuman) return res.status(400).json({ error: '자동가입방지(캡챠) 확인에 실패했습니다.' });

    // Password Strength Validate (국제 규칙: 최소 8자, 대소문자, 숫자, 특수문자 1개 이상 포함)
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regex.test(password)) {
        return res.status(400).json({ error: '비밀번호는 최소 8자 이상, 대소문자, 숫자, 특수문자를 포함해야 합니다.' });
    }

    const db = readUsersDB();
    for (const id in db) {
        if (db[id].email === email) {
            return res.status(400).json({ error: '이미 사용 중인 이메일입니다.' });
        }
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const userId = uuidv4();
    db[userId] = {
        id: userId,
        email,
        passwordHash,
        name: name || email.split('@')[0],
        picture: null, // Default placeholder handle by frontend
        palettes: [],
        status: 'active',
        addedAt: new Date().toISOString()
    };
    writeUsersDB(db);

    res.status(201).json({ success: true, message: '회원가입이 완료되었습니다. 로그인 해주세요!' });
});

// Local Login
app.post('/api/auth/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return res.status(500).json({ error: '서버 오류' });
        if (!user) return res.status(401).json({ error: info.message || '로그인 실패' });
        
        req.logIn(user, (err) => {
            if (err) return res.status(500).json({ error: '로그인 세션 생성 실패' });
            
            // 병합할 로컬 저장소가 있다면 여기서 병합 가능하지만, 보안상 프론트에서 인증 완료 후 별도 API호출을 권장
            return res.json({ success: true, user: { name: user.name, picture: user.picture } });
        });
    })(req, res, next);
});

// Local Post-Login Merge Tool (프론트에서 로그인 직후 호출)
app.post('/api/auth/merge', (req, res) => {
    if (!req.user) return res.status(401).json({ error: 'Unauthorized' });
    const { localFavs } = req.body;
    let mergedCount = 0;
    
    if (Array.isArray(localFavs)) {
        const db = readUsersDB();
        const user = db[req.user.id];
        if (user) {
            localFavs.forEach(localItem => {
                if (!user.palettes.find(p => p.hex === localItem.hex)) {
                    user.palettes.push({ hex: localItem.hex, name: localItem.name || 'Saved Color', addedAt: new Date().toISOString() });
                    mergedCount++;
                }
            });
            writeUsersDB(db);
        }
    }
    res.json({ success: true, merged: mergedCount });
});

app.get('/api/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/api/auth/google/callback', (req, res, next) => {
    passport.authenticate('google', (err, user, info) => {
        if (err || !user) return res.redirect('/?error=google_failed');
        if (user.status === 'disabled') return res.redirect('/?error=disabled');
        req.logIn(user, (lErr) => {
            if (lErr) return res.redirect('/?error=session_error');
            res.redirect('/?login=success');
        });
    })(req, res, next);
});

// OAuth GitHub
app.get('/api/auth/github', passport.authenticate('github', { scope: ['user:email'] }));
app.get('/api/auth/github/callback', (req, res, next) => {
    passport.authenticate('github', (err, user, info) => {
        if (err || !user) return res.redirect('/?error=github_failed');
        if (user.status === 'disabled') return res.redirect('/?error=disabled');
        req.logIn(user, (lErr) => {
            if (lErr) return res.redirect('/?error=session_error');
            res.redirect('/?login=success');
        });
    })(req, res, next);
});

// Session Info
app.get('/api/auth/session', (req, res) => {
    if (req.isAuthenticated()) {
        const db = readUsersDB();
        const user = db[req.user.id];
        res.json({ 
            loggedIn: true, 
            user: { 
                id: user.id,
                name: user.name, 
                picture: user.picture, 
                email: user.email,
                isLocal: !!user.passwordHash 
            } 
        });
    } else {
        res.json({ loggedIn: false });
    }
});

// Logout
app.post('/api/auth/logout', (req, res) => {
    req.logout((err) => {
        req.session.destroy();
        res.json({ success: true });
    });
});

// ─── USER PROFILE & ACCOUNT MANAGEMENT ─────────────

// Update Profile (Name & Picture)
app.put('/api/user/profile', (req, res) => {
    if (!req.isAuthenticated()) return res.status(401).json({ error: 'Unauthorized' });
    const { name } = req.body;
    const db = readUsersDB();
    const user = db[req.user.id];
    if (user) {
        if (name) user.name = name;
        writeUsersDB(db);
        res.json({ success: true, user: { name: user.name, picture: user.picture } });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

// Upload Profile Picture
app.post('/api/user/upload', upload.single('profileImg'), (req, res) => {
    if (!req.isAuthenticated()) return res.status(401).json({ error: 'Unauthorized' });
    if (!req.file) return res.status(400).json({ error: '파일이 없습니다.' });
    
    const db = readUsersDB();
    const user = db[req.user.id];
    if (user) {
        user.picture = `/uploads/${req.file.filename}`;
        writeUsersDB(db);
        res.json({ success: true, picture: user.picture });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

// Update Password (Local Only)
app.put('/api/user/password', async (req, res) => {
    if (!req.isAuthenticated()) return res.status(401).json({ error: 'Unauthorized' });
    const { currentPassword, newPassword } = req.body;
    
    const db = readUsersDB();
    const user = db[req.user.id];
    if (!user.passwordHash) return res.status(400).json({ error: '소셜 로그인 계정은 비밀번호를 변경할 수 없습니다.' });

    const isMatch = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!isMatch) return res.status(400).json({ error: '현재 비밀번호가 일치하지 않습니다.' });

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regex.test(newPassword)) {
        return res.status(400).json({ error: '비밀번호는 최소 8자 이상, 대소문자, 숫자, 특수문자를 포함해야 합니다.' });
    }

    const salt = await bcrypt.genSalt(10);
    user.passwordHash = await bcrypt.hash(newPassword, salt);
    writeUsersDB(db);
    res.json({ success: true, message: '비밀번호가 변경되었습니다.' });
});

// Toggle Account Status (Active / Disabled)
app.post('/api/user/status', (req, res) => {
    // If logged in, we are disabling
    // If NOT logged in, but provided email/pass (for reactivate flow)
    const { email, password, action } = req.body; // action: 'disable' or 'enable'
    
    const db = readUsersDB();
    if (req.isAuthenticated() && action === 'disable') {
        db[req.user.id].status = 'disabled';
        writeUsersDB(db);
        req.logout(() => {
            req.session.destroy();
            res.json({ success: true, message: '계정이 비활성화되었습니다.' });
        });
    } else if (action === 'enable') {
        // Re-enable logic via login credentials
        let foundUser = null;
        for (const id in db) {
            if (db[id].email === email) { foundUser = db[id]; break; }
        }
        if (!foundUser) return res.status(404).json({ error: '사용자를 찾을 수 없습니다.' });
        
        bcrypt.compare(password, foundUser.passwordHash).then(isMatch => {
            if (!isMatch) return res.status(401).json({ error: '비밀번호가 틀립니다.' });
            foundUser.status = 'active';
            writeUsersDB(db);
            res.json({ success: true, message: '계정이 활성화되었습니다. 이제 로그인 해주세요!' });
        });
    } else {
        res.status(400).json({ error: '잘못된 요청입니다.' });
    }
});

// Delete Account Permanent
app.delete('/api/user/account', (req, res) => {
    if (!req.isAuthenticated()) return res.status(401).json({ error: 'Unauthorized' });
    const db = readUsersDB();
    const userId = req.user.id;
    
    // Optional: Delete uploaded profile image file if exists
    if (db[userId].picture && db[userId].picture.startsWith('/uploads/')) {
        const filePath = path.join(__dirname, 'public', db[userId].picture);
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }

    delete db[userId];
    writeUsersDB(db);
    req.logout(() => {
        req.session.destroy();
        res.json({ success: true, message: '계정이 영구적으로 삭제되었습니다.' });
    });
});

// Palette APIs removed, switched to localStorage





// ─── FEEDBACK API ──────────────────────────
app.post('/api/feedback', (req, res) => {
    const { rating, feedback, hex } = req.body;
    if (!feedback) return res.status(400).json({ error: '피드백 내용이 없습니다.' });

    const newEntry = {
        id: Date.now(),
        userId: req.isAuthenticated() ? req.user.id : 'anonymous',
        date: new Date().toISOString(),
        rating, feedback, hex: hex || null
    };

    fs.readFile(FEEDBACK_FILE, 'utf8', (err, data) => {
        let feedbacks = [];
        if (!err && data) {
            try { feedbacks = JSON.parse(data); } catch (e) {}
        }
        feedbacks.unshift(newEntry);
        fs.writeFile(FEEDBACK_FILE, JSON.stringify(feedbacks, null, 2), 'utf8', (err) => {
            if (err) return res.status(500).json({ error: '저장 실패' });
            res.status(201).json({ message: '피드백 접수', data: newEntry });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
