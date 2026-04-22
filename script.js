// ─── Color Family Definitions (HSL ranges) ──────────────────────────────────
const colorFamilies = {
    all:     null,
    red:     [{ h: [340, 380], s: [55, 100], l: [20, 80] }],
    orange:  [{ h: [18,  45],  s: [70, 100], l: [25, 75] }],
    yellow:  [{ h: [45,  70],  s: [65, 100], l: [35, 85] }],
    green:   [{ h: [70,  160], s: [40, 100], l: [15, 75] }],
    teal:    [{ h: [160, 210], s: [40, 100], l: [20, 75] }],
    blue:    [{ h: [200, 265], s: [40, 100], l: [15, 75] }],
    purple:  [{ h: [260, 320], s: [30, 100], l: [15, 75] }],
    pink:    [{ h: [310, 352], s: [40, 100], l: [45, 90] }],
    neutral: [{ h: [0,   360], s: [0,  12],  l: [5,  95] }],
};

class ColorPalette {
    constructor() {
        this.colorDisplay       = document.getElementById('colorDisplay');
        this.rValue             = document.getElementById('rValue');
        this.gValue             = document.getElementById('gValue');
        this.bValue             = document.getElementById('bValue');
        this.rItem              = document.getElementById('rItem');
        this.gItem              = document.getElementById('gItem');
        this.bItem              = document.getElementById('bItem');
        this.hexValue           = document.getElementById('hexValue');
        this.colorNameDisp      = document.getElementById('colorNameDisplay');
        this.resetBtn           = document.getElementById('resetBtn');
        this.hexCopyBtn         = document.getElementById('hexCopyBtn');
        this.rgbCopyBtn         = document.getElementById('rgbCopyBtn');
        this.colorInput         = document.getElementById('colorInput');
        this.searchResults      = document.getElementById('searchResults');
        this.similarColors      = document.getElementById('similarColors');
        this.inspirationReel    = document.getElementById('inspirationReel');
        this.inspirationPalette = document.getElementById('inspirationPalette');
        this.spaceHint          = document.getElementById('spaceHint');
        this.colorLibrary       = document.getElementById('colorLibrary');
        this.toast              = document.getElementById('toast');
        this.mobileAdjLabel     = document.getElementById('mobileAdjLabel');

        this.r = 0; this.g = 0; this.b = 0;
        this.selectedChannel  = null;
        this.selectedFamily   = 'all';
        this.isRouletting     = false;

        this.reelRunning      = false;
        this.reelDecelerating = false;
        this.reelOffset       = 0;
        this.reelRAF          = null;
        this.reelCurrentSpeed = 0;
        this.reelItemHeight   = 100;
        this.totalDesigns     = typeof designInspiration !== 'undefined' ? designInspiration.length : 0;
        this.currentDesignIdx = 0;
        this.inspirationStopped = false;

        this.todayIndex = 0;
        this.volume = 0.5;
        this.history = [];
        this.favorites = [];
        this.activeFilter = 'all';
        this.mySearchQuery = '';
        this.adminClicks = 0;
        this.audioCtx = null;

        // Supabase 초기화 (지연 로딩 대응)
        this.initSupabase();

        this.init();
    }

    initSupabase() {
        if (typeof supabase !== 'undefined' && !this.supabase) {
            this.supabase = supabase.createClient('https://zluewlatcfawndimssmo.supabase.co', 'sb_publishable_9Kam_Ta3YaYropYmUhU8OA__2TESf0S');
        }
    }

    init() {
        if (typeof designGuides !== 'undefined') this.buildGuide();
        this.buildInspirationReel();
        this.buildColorLibrary('all');
        this.updateColor();
        this.displaySimilarColors();

        this.resetBtn?.addEventListener('click',   () => this.reset());
        this.hexCopyBtn?.addEventListener('click', () => this.copyToClipboard('hex'));
        this.rgbCopyBtn?.addEventListener('click', () => this.copyToClipboard('rgb'));
        this.colorInput?.addEventListener('input', () => this.searchColor());
        document.addEventListener('keydown',      (e) => this.handleKeyPress(e));

        [['r', this.rItem], ['g', this.gItem], ['b', this.bItem]].forEach(([ch, el]) => {
            el?.addEventListener('click', () => { if (!this.isRouletting) this.setSelectedChannel(ch); });
        });

        document.querySelectorAll('.family-chip').forEach(chip => {
            chip.addEventListener('click', () => this.setSelectedFamily(chip.dataset.family));
        });

        document.getElementById('inspoPrev')?.addEventListener('click', () => this.inspoPrev());
        document.getElementById('inspoNext')?.addEventListener('click', () => this.inspoNext());

        this.showInspoCard(0);
        setTimeout(() => this.startRoulette(), 400);
        this.loadStorage();

        document.body.addEventListener('pointerdown', () => {
            if (this.audioCtx && this.audioCtx.state === 'suspended') this.audioCtx.resume();
            else if (!this.audioCtx && this.volume > 0) this.initAudio();
        }, { once: true });

        document.getElementById('volumeSlider')?.addEventListener('input', (e) => {
            this.volume = parseFloat(e.target.value);
            this.updateVolumeIcon();
        });

        
        
        document.getElementById('favBtn')?.addEventListener('click', () => this.toggleFavorite());
        document.getElementById('exportCssBtn')?.addEventListener('click', () => this.openExportModal());
        document.getElementById('closeExportBtn')?.addEventListener('click', () => {
            document.getElementById('exportModal')?.classList.remove('show');
        });

        this.initFeedbackUI();

        // MY 탭 전용 이벤트 리스너
        document.getElementById('myPalSearch')?.addEventListener('input', (e) => {
            this.mySearchQuery = e.target.value.toLowerCase();
            this.renderFavorites();
        });
        document.querySelectorAll('#myFilterChips .filter-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                this.activeFilter = chip.dataset.filter;
                document.querySelectorAll('#myFilterChips .filter-chip').forEach(c => c.classList.toggle('active', c === chip));
                this.renderFavorites();
            });
        });

        // 비밀 관리자 모드 트리거
        document.getElementById('myPalTitle')?.addEventListener('click', () => {
            this.adminClicks++;
            if (this.adminClicks >= 5) {
                this.openAdminDashboard();
                this.adminClicks = 0;
            }
            setTimeout(() => { if (this.adminClicks > 0) this.adminClicks = 0; }, 3000);
        });
        document.getElementById('closeAdminBtn')?.addEventListener('click', () => {
            document.getElementById('adminModal')?.classList.remove('show');
            // 실시간 구독 해제
            if (this.supabase && this.feedbackChannel) {
                this.supabase.removeChannel(this.feedbackChannel);
                this.feedbackChannel = null;
            }
        });
    }

    // ═══════════════════════════════════════════════════════════
    //  Color Family & RGB Roulette
    // ═══════════════════════════════════════════════════════════

    setSelectedFamily(family) {
        this.selectedFamily = family;
        document.querySelectorAll('.family-chip').forEach(c => c.classList.toggle('active', c.dataset.family === family));
        if (!this.isRouletting) setTimeout(() => this.startRoulette(), 80);
    }

    randomInFamily(family) {
        const ranges = colorFamilies[family];
        if (!ranges) return { r: Math.floor(Math.random() * 256), g: Math.floor(Math.random() * 256), b: Math.floor(Math.random() * 256) };
        const range = ranges[Math.floor(Math.random() * ranges.length)];
        const h = (range.h[0] + Math.random() * (range.h[1] - range.h[0])) % 360;
        const s = range.s[0] + Math.random() * (range.s[1] - range.s[0]);
        const l = range.l[0] + Math.random() * (range.l[1] - range.l[0]);
        return this.hslToRgb(h, s, l);
    }

    hslToRgb(h, s, l) {
        h /= 360; s /= 100; l /= 100;
        let r, g, b;
        if (s === 0) r = g = b = l;
        else {
            const hue2rgb = (p, q, t) => {
                if (t < 0) t += 1; if (t > 1) t -= 1;
                if (t < 1/6) return p + (q - p) * 6 * t;
                if (t < 1/2) return q;
                if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            };
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3); g = hue2rgb(p, q, h); b = hue2rgb(p, q, h - 1/3);
        }
        return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
    }

    startRoulette() {
        if (this.isRouletting) return;
        this.isRouletting = true;
        this.setColorNameText('');
        const target = this.randomInFamily(this.selectedFamily);
        this.spinChannelToTarget('r', target.r, 1800, () => {
            this.spinChannelToTarget('g', target.g, 1800, () => {
                this.spinChannelToTarget('b', target.b, 1800, () => {
                    this.isRouletting = false;
                    this.r = target.r; this.g = target.g; this.b = target.b;
                    this.updateColor();
                });
            });
        });
    }

    spinChannelToTarget(channel, target, duration, onDone) {
        const el = { r: this.rValue, g: this.gValue, b: this.bValue }[channel];
        const item = { r: this.rItem, g: this.gItem, b: this.bItem }[channel];
        if (!el || !item) return;

        item.classList.add('spinning');
        let current = this[channel];
        let distance = target - current;
        while (distance < 0) distance += 256;
        distance += 256 * (3 + Math.floor(Math.random() * 3)); 
        
        let position = current;
        const friction = 0.95;
        let speed = distance * (1 - friction);
        let lastTickVal = current;

        const tick = () => {
            position += speed; speed *= friction;
            let val = Math.floor(position) % 256;
            if (val < 0) val += 256;
            if (val !== lastTickVal) {
                lastTickVal = val;
                if (val % 7 === 0) try { this.playTickSound(); } catch(e) {}
                el.textContent = val;
                this[channel] = val;
                this.colorDisplay.style.backgroundColor = `rgb(${this.r}, ${this.g}, ${this.b})`;
                this.hexValue.textContent = this.rgbToHex(this.r, this.g, this.b);
            }
            if (speed > 0.5) requestAnimationFrame(tick);
            else {
                this[channel] = target; el.textContent = target;
                this.colorDisplay.style.backgroundColor = `rgb(${this.r}, ${this.g}, ${this.b})`;
                this.hexValue.textContent = this.rgbToHex(this.r, this.g, this.b);
                item.classList.remove('spinning');
                item.classList.add('landed');
                setTimeout(() => item.classList.remove('landed'), 700);
                if (onDone) onDone();
            }
        };
        requestAnimationFrame(tick);
    }

    // ═══════════════════════════════════════════════════════════
    //  Updates & Name Search
    // ═══════════════════════════════════════════════════════════

    updateColor() {
        const hex = this.rgbToHex(this.r, this.g, this.b);
        if (this.colorDisplay) this.colorDisplay.style.backgroundColor = `rgb(${this.r}, ${this.g}, ${this.b})`;
        if (this.hexValue) this.hexValue.textContent = hex;
        if (this.rValue) this.rValue.textContent = this.r;
        if (this.gValue) this.gValue.textContent = this.g;
        if (this.bValue) this.bValue.textContent = this.b;

        if (!this.isRouletting) {
            const name = this.findColorName(this.r, this.g, this.b);
            this.setColorNameText(name || '');
        }
        this.displaySimilarColors();
        this.addToHistory(hex);
        this.updateFavBtnState(hex);
    }

    setColorNameText(text) {
        if (!this.colorNameDisp) return;
        this.colorNameDisp.textContent = text;
        this.colorNameDisp.classList.toggle('visible', !!text);
    }

    findColorName(r, g, b) {
        if (typeof colorNameReferences === 'undefined') return null;
        let closest = null; let minDist = Infinity;
        for (const [name, color] of Object.entries(colorNameReferences)) {
            const rgb = this.hexToRgb(color.hex);
            if (!rgb) continue;
            const dist = Math.sqrt((rgb.r - r) ** 2 + (rgb.g - g) ** 2 + (rgb.b - b) ** 2);
            if (dist < minDist) { minDist = dist; closest = name; }
        }
        return closest;
    }

    // ═══════════════════════════════════════════════════════════
    //  Reel & Cards
    // ═══════════════════════════════════════════════════════════

    buildInspirationReel() {
        if (!this.inspirationReel || typeof designInspiration === 'undefined') return;
        this.inspirationReel.innerHTML = [...designInspiration, ...designInspiration].map(d => `<div class="reel-item">${d.name}</div>`).join('');
    }

    startInspirationReel() {
        if (this.reelRunning || this.reelDecelerating) return;
        this.reelRunning = true; this.reelDecelerating = false; this.inspirationStopped = false;
        this.reelCurrentSpeed = 120; this.inspirationPalette.innerHTML = '';
        if (this.spaceHint) this.spaceHint.textContent = '▶ SPACE / 탭으로 멈추기';
        const maxOffset = this.reelItemHeight * this.totalDesigns;
        const spin = () => {
            if (!this.reelRunning) return;
            this.reelOffset = (this.reelOffset + this.reelCurrentSpeed) % maxOffset;
            this.inspirationReel.style.transform = `translateY(-${this.reelOffset}px)`;
            this.reelRAF = requestAnimationFrame(spin);
        };
        this.reelRAF = requestAnimationFrame(spin);
    }

    stopInspirationReel() {
        if (!this.reelRunning) return;
        this.reelRunning = false; this.reelDecelerating = true; cancelAnimationFrame(this.reelRAF);
        if (this.spaceHint) this.spaceHint.textContent = '◼ 멈추는 중...';
        const maxOffset = this.reelItemHeight * this.totalDesigns;
        let speed = this.reelCurrentSpeed;
        const decelerate = () => {
            if (!this.reelDecelerating) return;
            speed *= 0.88; this.reelOffset = (this.reelOffset + speed) % maxOffset;
            this.inspirationReel.style.transform = `translateY(-${this.reelOffset}px)`;
            if (speed < 0.8) {
                this.reelDecelerating = false;
                const rawIndex = Math.round(this.reelOffset / this.reelItemHeight);
                this.currentDesignIdx = rawIndex % this.totalDesigns;
                const snapOffset = (rawIndex * this.reelItemHeight) % maxOffset;
                this.reelOffset = snapOffset;
                this.inspirationReel.style.transition = 'transform 0.3s cubic-bezier(0.4,0,0.2,1)';
                this.inspirationReel.style.transform = `translateY(-${snapOffset}px)`;
                setTimeout(() => {
                    this.inspirationReel.style.transition = ''; this.inspirationStopped = true;
                    this.showInspirationPalette(this.currentDesignIdx);
                    if (this.spaceHint) this.spaceHint.textContent = '▶ SPACE / 탭으로 다시 돌리기';
                }, 330);
            } else this.reelRAF = requestAnimationFrame(decelerate);
        };
        this.reelRAF = requestAnimationFrame(decelerate);
    }

    showInspirationPalette(index) {
        const design = designInspiration[index]; if (!design || !this.inspirationPalette) return;
        this.inspirationPalette.innerHTML = `
            <p class="palette-name-label">${design.name}</p>
            <div class="palette-colors-row">
                ${design.colors.map(c => {
                    const rgb = this.hexToRgb(c); const name = rgb ? this.findColorName(rgb.r, rgb.g, rgb.b) : c;
                    const desc = (name && colorNameReferences[name]?.tags?.slice(0,3).join(' · ')) || '색상 팔레트';
                    return `<div class="palette-color" style="background-color:${c}" onclick="app.selectInspirationColor('${c}')">
                                <div class="palette-color-tooltip"><span class="pal-name">${name || c}</span><span class="pal-hex">${c}</span><span class="pal-desc">${desc}</span></div>
                                <span class="palette-mobile-label">${name || c}</span>
                            </div>`;
                }).join('')}
            </div>`;
    }

    selectInspirationColor(hex) { this.setColorFromHex(hex); this.switchTab('picker'); }

    showInspoCard(index) {
        if (typeof designCards === 'undefined') return;
        const d = designCards[index]; if (!d) return;
        this.todayIndex = index;
        const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
        set('inspoNumber', d.id); set('inspoCategory', d.category); set('inspoTitle', d.name); set('inspoDesc', d.description);
        const c0 = d.colors[0] || {}; const c1 = d.colors[1] || {};
        const b = document.getElementById('swatchBack'); const f = document.getElementById('swatchFront');
        if (b) b.style.backgroundColor = c0.hex || '#fff'; if (f) f.style.backgroundColor = c1.hex || '#000';
        set('swNameBack', c0.name); set('swHexBack', c0.hex); set('swNameFront', c1.name); set('swHexFront', c1.hex);
        [b, f].forEach((el, i) => { if (!el) return; const rgb = this.hexToRgb(d.colors[i].hex); const lum = (0.299*rgb.r + 0.587*rgb.g + 0.114*rgb.b)/255; el.style.color = lum > 0.55 ? '#111' : '#fff'; });
        const card = document.getElementById('inspoCard'); if (card) { card.classList.remove('inspo-anim'); void card.offsetWidth; card.classList.add('inspo-anim'); }
    }
    inspoNext() { if (typeof designCards === 'undefined') return; this.showInspoCard((this.todayIndex + 1) % designCards.length); }
    inspoPrev() { if (typeof designCards === 'undefined') return; this.showInspoCard((this.todayIndex - 1 + designCards.length) % designCards.length); }
    inspoPickColor(colorIdx) {
        if (typeof designCards === 'undefined') return;
        const d = designCards[this.todayIndex]; if (!d || !d.colors[colorIdx]) return;
        this.setColorFromHex(d.colors[colorIdx].hex); this.switchTab('picker');
    }

    // ═══════════════════════════════════════════════════════════
    //  Tabs & Library
    // ═══════════════════════════════════════════════════════════

    switchTab(tabName) {
        document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.nav-tab').forEach(btn => btn.classList.remove('active'));
        document.getElementById(tabName)?.classList.add('active');
        document.querySelector(`[data-tab="${tabName}"]`)?.classList.add('active');
        if (tabName === 'inspiration') { if (!this.inspirationStopped) this.startInspirationReel(); }
        else { this.reelRunning = false; this.reelDecelerating = false; cancelAnimationFrame(this.reelRAF); }
        if (tabName === 'today') this.showInspoCard(this.todayIndex);
    }

    buildColorLibrary(filterCat = 'all') {
        if (!this.colorLibrary || typeof designerColors === 'undefined') return;
        const meta = { ui_web:['🖥','UI/웹'], brand_global:['🌐','브랜드'], nature:['🌿','자연/어스'], pastel:['🌸','감성/파스텔'], neon_modern:['⚡','네온/모던'], earth:['🍂','어스 톤'], monochrome:['⬜','모노크롬'] };
        const chips = document.getElementById('libFilterChips');
        if (chips) {
            const btns = [['all','전체보기'], ['ui_web','UI/웹'], ['brand_global','브랜드'], ['nature','자연/어스'], ['pastel','감성/파스텔'], ['neon_modern','네온/모던']];
            chips.innerHTML = btns.map(([k,v]) => `<button class="lib-filter-chip ${filterCat===k?'active':''}" onclick="app.buildColorLibrary('${k}')">${v}</button>`).join('');
        }
        let html = '';
        for (const [key, colors] of Object.entries(designerColors)) {
            if (filterCat !== 'all' && filterCat !== key && !(filterCat==='nature' && key==='earth') && !(filterCat==='neon_modern' && key==='monochrome')) continue;
            const [icon, label] = meta[key] || ['🎨', key];
            html += `<div class="color-category-section"><h3 class="color-category-title"><span>${icon}</span> ${label}</h3><div class="color-category-grid">
                ${colors.map(c => `<div class="color-library-item" onclick="app.setColorFromHex('${c.hex}')"><div class="color-library-box" style="background-color:${c.hex}"><div class="color-library-info-popup"><div>${c.hex}</div></div></div><div class="color-library-name">${this.sanitizeInput(c.name)}</div></div>`).join('')}
            </div></div>`;
        }
        this.colorLibrary.innerHTML = html || '<div style="padding:40px;text-align:center;color:#999;">결과가 없습니다.</div>';
    }

    buildGuide() {
        const grid = document.getElementById('guideGrid'); if (!grid || typeof designGuides === 'undefined') return;
        grid.innerHTML = designGuides.map(g => `<div class="guide-card"><div class="guide-card-title">${g.title}</div><div class="guide-card-desc">${g.desc}</div><div class="guide-card-visual">${g.colors.map(c => `<div class="gc-box" style="background-color:${c}"></div>`).join('')}</div></div>`).join('');
    }

    // ═══════════════════════════════════════════════════════════
    //  Storage & Premium
    // ═══════════════════════════════════════════════════════════

    loadStorage() {
        this.history = JSON.parse(localStorage.getItem('designpick_history') || '[]');
        let savedFavs = JSON.parse(localStorage.getItem('designpick_favs') || '[]');
        // Migration: 기존 데이터에 필드 추가
        this.favorites = savedFavs.map(f => ({
            hex: f.hex,
            name: f.name,
            isStarred: f.isStarred || false,
            category: f.category || this.getCategoryFromRgb(...Object.values(this.hexToRgb(f.hex))),
            createdAt: f.createdAt || Date.now()
        }));
        this.renderHistory(); this.renderFavorites();
    }
    saveLocalHistory() { localStorage.setItem('designpick_history', JSON.stringify(this.history)); }
    saveLocalFavorites() { localStorage.setItem('designpick_favs', JSON.stringify(this.favorites)); }

    addToHistory(hex) {
        if (this.isRouletting || this.reelRunning || this.history[0] === hex) return;
        this.history.unshift(hex); if (this.history.length > 20) this.history.pop();
        this.saveLocalHistory(); this.renderHistory();
    }
    renderHistory() {
        const tr = document.getElementById('historyTray'); if (!tr) return;
        tr.innerHTML = this.history.length ? this.history.map(hex => `<div class="history-item" style="background:${hex}" onclick="app.setColorFromHex('${hex}')"></div>`).join('') : '';
    }

    toggleFavorite() {
        const hex = this.rgbToHex(this.r, this.g, this.b); 
        const name = this.colorNameDisp?.textContent || 'Custom Color';
        const idx = this.favorites.findIndex(f => f.hex === hex);
        if (idx !== -1) { 
            this.favorites.splice(idx, 1); 
            this.showToast('보관함에서 삭제되었습니다.'); 
        } else { 
            const cat = this.getCategoryFromRgb(this.r, this.g, this.b);
            this.favorites.unshift({ hex, name, isStarred: false, category: cat, createdAt: Date.now() }); 
            this.showToast('보관함에 저장되었습니다. (♥)'); 
            this.playSuccessSound(); 
        }
        this.saveLocalFavorites(); this.updateFavBtnState(hex); this.renderFavorites();
    }
    updateFavBtnState(hex) { document.getElementById('favBtn')?.classList.toggle('active', this.favorites.some(f => f.hex === hex)); }
    renderFavorites() {
        const list = document.getElementById('myPalettesList'); 
        const countBadge = document.getElementById('myPalCount');
        if (!list) return;

        // 필터링 및 검색 적용
        let filtered = this.favorites.filter(f => {
            const matchesSearch = f.name.toLowerCase().includes(this.mySearchQuery) || f.hex.toLowerCase().includes(this.mySearchQuery);
            const matchesFilter = this.activeFilter === 'all' || 
                                 (this.activeFilter === 'starred' && f.isStarred) || 
                                 (f.category === this.activeFilter);
            return matchesSearch && matchesFilter;
        });

        // 별표 항목 우선 정렬 (상단 고정 느낌)
        filtered.sort((a, b) => (b.isStarred ? 1 : 0) - (a.isStarred ? 1 : 0));

        if (countBadge) countBadge.textContent = this.favorites.length;

        if (filtered.length === 0) {
            list.innerHTML = `<div class="my-pal-empty" style="grid-column: 1/-1; padding: 60px; text-align: center; color: #999;">
                <svg style="width:48px; height:48px; margin-bottom:16px; opacity:0.3;"><use href="#icon-heart"/></svg>
                <p>${this.favorites.length === 0 ? '스크랩한 색상이 없습니다.' : '검색 결과가 없습니다.'}</p>
            </div>`;
            return;
        }

        list.innerHTML = filtered.map(f => `
            <div class="my-pal-card ${f.isStarred ? 'is-starred' : ''}" onclick="app.selectMyColor('${f.hex}')">
                <div class="my-pal-color" style="background:${f.hex}"></div>
                <div class="my-pal-info">
                    <div class="my-pal-name">${f.name}</div>
                    <div class="my-pal-hex">${f.hex}</div>
                </div>
                <div class="card-actions" onclick="event.stopPropagation()">
                    <button class="action-btn star-btn ${f.isStarred ? 'active' : ''}" onclick="app.toggleStar('${f.hex}')" title="중요 표시">
                        <svg class="chip-icon"><use href="#icon-${f.isStarred ? 'star-filled' : 'star'}"/></svg>
                    </button>
                    <button class="action-btn delete-btn" onclick="app.deleteFavorite('${f.hex}')" title="삭제">
                        <svg class="chip-icon"><use href="#icon-trash"/></svg>
                    </button>
                </div>
            </div>
        `).join('');
    }

    selectMyColor(hex) { this.setColorFromHex(hex); this.switchTab('picker'); }

    toggleStar(hex) {
        const item = this.favorites.find(f => f.hex === hex);
        if (item) {
            item.isStarred = !item.isStarred;
            this.saveLocalFavorites();
            this.renderFavorites();
            if (item.isStarred) this.playTickSound();
        }
    }

    deleteFavorite(hex) {
        const idx = this.favorites.findIndex(f => f.hex === hex);
        if (idx !== -1) {
            this.favorites.splice(idx, 1);
            this.saveLocalFavorites();
            this.updateFavBtnState(this.rgbToHex(this.r, this.g, this.b));
            this.renderFavorites();
            this.showToast('삭제되었습니다.');
        }
    }

    getCategoryFromRgb(r, g, b) {
        // HSL 변환 후 간단한 분류
        const { h, s, l } = this.rgbToHsl(r, g, b);
        if (s < 12) return 'neutral';
        if (h < 15 || h >= 345) return 'red';
        if (h < 45) return 'orange';
        if (h < 75) return 'yellow';
        if (h < 165) return 'green';
        if (h < 260) return 'blue';
        if (h < 345) return 'purple';
        return 'neutral';
    }

    rgbToHsl(r, g, b) {
        r /= 255; g /= 255; b /= 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        if (max === min) h = s = 0;
        else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
    }

    initAudio() { if (!this.audioCtx) { const AC = window.AudioContext || window.webkitAudioContext; if (AC) this.audioCtx = new AC(); } }
    updateVolumeIcon() { const on = document.getElementById('soundIconOn'), off = document.getElementById('soundIconOff'); if (on && off) { on.style.display = this.volume > 0 ? 'block' : 'none'; off.style.display = this.volume > 0 ? 'none' : 'block'; } }
    playSound(type) {
        if (this.volume <= 0) return; this.initAudio(); if (!this.audioCtx || this.audioCtx.state === 'suspended') return;
        const osc = this.audioCtx.createOscillator(); const gain = this.audioCtx.createGain(); osc.connect(gain); gain.connect(this.audioCtx.destination);
        const now = this.audioCtx.currentTime;
        if (type === 'tick') { osc.type = 'triangle'; osc.frequency.setValueAtTime(800, now); osc.frequency.exponentialRampToValueAtTime(100, now + 0.05); gain.gain.setValueAtTime(0.3 * this.volume, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05); osc.start(now); osc.stop(now + 0.05); }
        else if (type === 'click') { osc.type = 'sine'; osc.frequency.setValueAtTime(1200, now); gain.gain.setValueAtTime(0.2 * this.volume, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1); osc.start(now); osc.stop(now + 0.1); }
        else if (type === 'success') { osc.type = 'sine'; osc.frequency.setValueAtTime(500, now); osc.frequency.setValueAtTime(800, now + 0.1); gain.gain.setValueAtTime(0.2 * this.volume, now); gain.gain.linearRampToValueAtTime(0, now + 0.3); osc.start(now); osc.stop(now + 0.3); }
    }
    playTickSound() { this.playSound('tick'); }
    playClickSound() { this.playSound('click'); }
    playSuccessSound() { this.playSound('success'); }

    openExportModal() {
        const hex = this.rgbToHex(this.r, this.g, this.b); const name = this.colorNameDisp?.textContent || 'primary';
        const kebab = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'primary';
        document.getElementById('exportCssCode').textContent = `:root {\n  --color-${kebab}: ${hex};\n  --color-${kebab}-rgb: ${this.r}, ${this.g}, ${this.b};\n}`;
        document.getElementById('exportTwCode').textContent = `// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        '${kebab}': '${hex}',\n      }\n    }\n  }\n}`;
        const allHex = [...new Set([hex, ...this.favorites.map(f => f.hex)])].slice(0, 10);
        document.getElementById('exportHexCode').textContent = allHex.join(', ');
        document.getElementById('exportModal')?.classList.add('show');
    }
    copyExport(type) {
        if (type === 'figma') {
            const size = 100; const colors = this.favorites.length ? this.favorites.map(f => f.hex) : [this.rgbToHex(this.r, this.g, this.b)];
            const rects = colors.map((c, i) => `<rect x="${i*(size+20)}" y="0" width="${size}" height="${size}" fill="${c}" rx="12"/>`).join('');
            this.fallbackCopy(`<svg width="${colors.length*(size+20)}" height="${size}" xmlns="http://www.w3.org/2000/svg">${rects}</svg>`, 'Figma SVG가 복사되었습니다.');
        } else {
            const el = document.getElementById(type === 'css' ? 'exportCssCode' : type === 'tw' ? 'exportTwCode' : 'exportHexCode');
            if (el) this.fallbackCopy(el.textContent, '코드가 복사되었습니다!');
        }
    }

    displaySimilarColors() { if (!this.similarColors || typeof findSimilarColors === 'undefined') return; this.similarColors.innerHTML = findSimilarColors(this.r, this.g, this.b, 8).map(({ name, hex }) => `<div class="similar-color-group"><div class="similar-color-item" style="background-color:${hex}" onclick="app.selectSimilarColor('${hex}','${name}')"><div class="similar-color-tooltip"><span class="tooltip-name">${name}</span><span class="tooltip-hex">${hex}</span></div></div><span class="similar-color-label">${name}</span></div>`).join(''); }
    selectSimilarColor(hex, name) { this.setColorFromHex(hex); this.showToast(name); }
    rgbToHex(r, g, b) { return '#' + [r, g, b].map(x => { const h = x.toString(16); return h.length === 1 ? '0' + h : h; }).join('').toUpperCase(); }
    hexToRgb(hex) { const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex); return r ? { r: parseInt(r[1], 16), g: parseInt(r[2], 16), b: parseInt(r[3], 16) } : null; }
    setColorFromHex(hex) { if (!hex) return; try { this.playClickSound(); } catch(e) {} const rgb = this.hexToRgb(hex); if (rgb) { this.r = rgb.r; this.g = rgb.g; this.b = rgb.b; this.selectedChannel = null; this.isRouletting = false; this.updateColor(); } }
    reset() { this.r = this.g = this.b = 0; this.updateColor(); this.showToast('리셋되었습니다'); setTimeout(() => this.startRoulette(), 300); }
    copyToClipboard(type) { this.fallbackCopy(type === 'hex' ? (this.hexValue?.textContent||'') : `rgb(${this.r}, ${this.g}, ${this.b})`, type === 'hex' ? 'HEX 복사됨' : 'RGB 복사됨'); }
    fallbackCopy(text, msg) { const run = () => { this.showToast(msg); try { this.playSuccessSound(); } catch(e) {} }; if (navigator.clipboard) navigator.clipboard.writeText(text).then(run).catch(() => this.forceExecCopy(text, msg)); else this.forceExecCopy(text, msg); }
    forceExecCopy(text, msg) { const ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); this.showToast(msg); try { this.playSuccessSound(); } catch(e) {} } catch (e) {} document.body.removeChild(ta); }
    searchColor() { const q = this.sanitizeInput(this.colorInput.value).toLowerCase(); if (!q) { this.searchResults.innerHTML = ''; return; } const res = []; for (const [name, color] of Object.entries(colorNameReferences)) { if (name.toLowerCase().includes(q) || (color.tags || []).some(t => t.includes(q))) res.push({ name, color }); } this.searchResults.innerHTML = res.slice(0, 8).map(({ name, color }) => `<div class="search-result-item" onclick="app.setColorFromHex('${color.hex}')"><div class="search-result-color" style="background-color:${color.hex}"></div><div class="search-result-info"><div class="search-result-name">${name}</div><div class="search-result-hex">${color.hex}</div></div></div>`).join(''); }
    sanitizeInput(input) { const d = document.createElement('div'); d.textContent = input; return d.innerHTML.substring(0, 60); }
    handleKeyPress(e) {
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
        const activeId = document.querySelector('.tab-content.active')?.id;
        if (e.code === 'Space') { e.preventDefault(); if (activeId === 'inspiration') { if (this.reelRunning) this.stopInspirationReel(); else if (!this.reelDecelerating) { this.inspirationStopped = false; this.startInspirationReel(); } } else if (activeId === 'picker' && !this.isRouletting) this.startRoulette(); }
        else if (e.key === 'ArrowLeft') { e.preventDefault(); if (activeId === 'today') this.inspoPrev(); else if (activeId === 'picker' && !this.isRouletting) this.adjustColor(-1); }
        else if (e.key === 'ArrowRight') { e.preventDefault(); if (activeId === 'today') this.inspoNext(); else if (activeId === 'picker' && !this.isRouletting) this.adjustColor(1); }
    }
    adjustColor(step) { const clamp = v => Math.max(0, Math.min(255, v)); if (this.selectedChannel) this[this.selectedChannel] = clamp(this[this.selectedChannel] + step); else { if (this.r + step >= 0 && this.r + step <= 255) this.r = clamp(this.r + step); else if (this.g + step >= 0 && this.g + step <= 255) this.g = clamp(this.g + step); else if (this.b + step >= 0 && this.b + step <= 255) this.b = clamp(this.b + step); } this.updateColor(); }
    mobileAdjust(step) { if (!this.selectedChannel || this.isRouletting) return; this[this.selectedChannel] = Math.max(0, Math.min(255, this[this.selectedChannel] + step)); this.updateColor(); }
    setSelectedChannel(channel) { this.selectedChannel = this.selectedChannel === channel ? null : channel; [['r', this.rItem], ['g', this.gItem], ['b', this.bItem]].forEach(([ch, el]) => el?.classList.toggle('channel-selected', this.selectedChannel === ch)); if (this.mobileAdjLabel) this.mobileAdjLabel.textContent = this.selectedChannel ? { r: 'R 채널', g: 'G 채널', b: 'B 채널' }[this.selectedChannel] : '채널 선택'; }
    showToast(message) { if(!this.toast) return; this.toast.textContent = message; this.toast.classList.add('show'); clearTimeout(this._toastTimer); this._toastTimer = setTimeout(() => this.toast.classList.remove('show'), 2200); }
    initFeedbackUI() {
        const fab = document.getElementById('fabFeedback'), modal = document.getElementById('feedbackModal'), close = document.getElementById('closeFeedbackBtn'), form = document.getElementById('feedbackForm');
        fab?.addEventListener('click', () => modal.classList.add('show')); close?.addEventListener('click', () => modal.classList.remove('show'));
        document.querySelectorAll('.rating-star').forEach(star => { star.addEventListener('click', () => { const val = parseInt(star.dataset.val); document.getElementById('fbRating').value = val; document.querySelectorAll('.rating-star').forEach(s => s.classList.toggle('active', parseInt(s.dataset.val) <= val)); }); });
        form?.addEventListener('submit', (e) => { 
            e.preventDefault(); 
            const rating = parseInt(document.getElementById('fbRating').value);
            const text = document.getElementById('fbText').value;
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = '전송 중...';
            
            this.initSupabase(); // 전송 전 다시 한번 확인

            if (this.supabase) {
                this.supabase.from('feedbacks').insert([{ rating, text }]).then(({ error }) => {
                    if (error) {
                        console.error('Supabase Error:', error);
                        this.showToast('전송 실패: DB 설정을 확인해주세요.');
                        submitBtn.disabled = false;
                        submitBtn.textContent = originalText;
                    } else {
                        finalize();
                    }
                });
            } else {
                // 로컬 저장소 (오프라인 백업)
                const feedbacks = JSON.parse(localStorage.getItem('designpick_feedbacks') || '[]');
                feedbacks.push({ rating, text, date: new Date().toISOString() });
                localStorage.setItem('designpick_feedbacks', JSON.stringify(feedbacks));
                this.showToast('오프라인 상태로 저장되었습니다.');
                finalize();
            }

            const finalize = () => {
                this.showToast('소중한 피드백 감사합니다!'); 
                modal.classList.remove('show'); 
                form.reset(); 
                document.querySelectorAll('.rating-star').forEach(s => s.classList.remove('active'));
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            };
        });
    }

    openAdminDashboard() {
        const authModal = document.getElementById('adminAuthModal');
        if (authModal) {
            authModal.classList.add('show');
            document.getElementById('adminPassword').value = '';
            document.getElementById('adminPassword').focus();
        }
    }

    verifyAdmin() {
        const pw = document.getElementById('adminPassword').value;
        if (pw === 'rgb') { 
            document.getElementById('adminAuthModal').classList.remove('show');
            const modal = document.getElementById('adminModal');
            if (modal) {
                this.renderAdminFeedbacks();
                modal.classList.add('show');
                this.showToast('실시간 동기화 활성화됨');

                // 실시간 구독 시작
                if (this.supabase) {
                    this.feedbackChannel = this.supabase.channel('admin-feedbacks')
                        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'feedbacks' }, payload => {
                            this.renderAdminFeedbacks();
                            this.showToast('새로운 피드백이 도착했습니다! 🔔');
                        })
                        .subscribe();
                }
            }
        } else {
            this.showToast('비밀번호가 틀렸습니다.');
        }
    }

    async renderAdminFeedbacks() {
        const list = document.getElementById('adminFeedbackList');
        if (!list) return;
        
        list.innerHTML = '<div style="text-align:center; padding:40px; color:#888;">데이터를 불러오는 중...</div>';

        let feedbacks = [];
        if (this.supabase) {
            const { data, error } = await this.supabase.from('feedbacks').select('*').order('created_at', { ascending: false });
            if (!error) feedbacks = data;
        } else {
            feedbacks = JSON.parse(localStorage.getItem('designpick_feedbacks') || '[]').reverse();
        }

        if (feedbacks.length === 0) {
            list.innerHTML = '<div style="text-align:center; padding:40px; color:#888;">수집된 피드백이 없습니다.</div>';
            return;
        }

        list.innerHTML = feedbacks.map((f, i) => `
            <div class="admin-fb-item">
                <div class="admin-fb-meta">
                    <span class="admin-fb-rating">${'★'.repeat(f.rating)}</span>
                    <span class="admin-fb-date">${new Date(f.created_at || f.date).toLocaleString()}</span>
                </div>
                <div class="admin-fb-text">${this.sanitizeInput(f.text)}</div>
            </div>
        `).join('');
    }

    exportFeedbacks() {
        const feedbacks = localStorage.getItem('designpick_feedbacks') || '[]';
        const blob = new Blob([feedbacks], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `designpick_feedbacks_${new Date().toISOString().slice(0,10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        this.showToast('데이터를 다운로드합니다.');
    }
}

let app;
window.addEventListener('DOMContentLoaded', () => {
    app = new ColorPalette();
    document.querySelectorAll('.nav-tab').forEach(btn => btn.addEventListener('click', function () { app.switchTab(this.getAttribute('data-tab')); }));
});
