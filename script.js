// ─── Color Family Definitions (HSL ranges) ──────────────────────────────────
const colorFamilies = {
    all:     null,
    red:     [{ h: [340, 380], s: [55, 100], l: [20, 80] }],   // 380 % 360 = 20
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
        // ─── Elements
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

        // ─── State
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.selectedChannel  = null;
        this.selectedFamily   = 'all';
        this.isRouletting     = false;

        // ─── Reel state
        this.reelRunning      = false;
        this.reelDecelerating = false;
        this.reelOffset       = 0;
        this.reelRAF          = null;
        this.reelCurrentSpeed = 0;
        this.reelItemHeight   = 100;
        this.totalDesigns     = designInspiration.length;
        this.currentDesignIdx = 0;
        this.inspirationStopped = false;

        // ─── Today's Pick Card state
        this.todayIndex = 0;

        // ─── Premium Features state
        this.volume = 0.5; // default volume
        this.history = [];
        this.favorites = [];
        this.audioCtx = null;

        // ─── Supabase Initialization
        const SUPABASE_URL = 'https://zluewlatcfawndimssmo.supabase.co';
        const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsdWV3bGF0Y2Zhd25kaW1zc21vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3NjkxMTksImV4cCI6MjA5MjM0NTExOX0.4ouEBY1Nti24pYW_dXmVUb0VbNQ9H35N8ISehrKd9vc';
        this.supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

        this.init();
    }

    init() {
        if (typeof designGuides !== 'undefined') this.buildGuide();
        this.buildInspirationReel();
        this.buildColorLibrary('all');
        this.updateColor();
        this.displaySimilarColors();

        // Button events
        this.resetBtn.addEventListener('click',   () => this.reset());
        this.hexCopyBtn.addEventListener('click', () => this.copyToClipboard('hex'));
        this.rgbCopyBtn.addEventListener('click', () => this.copyToClipboard('rgb'));
        this.colorInput.addEventListener('input', () => this.searchColor());
        document.addEventListener('keydown',      (e) => this.handleKeyPress(e));

        // Channel click (R/G/B 미세조정 선택)
        [['r', this.rItem], ['g', this.gItem], ['b', this.bItem]].forEach(([ch, el]) => {
            if (el) el.addEventListener('click', () => {
                if (!this.isRouletting) this.setSelectedChannel(ch);
            });
        });

        // Family chips
        document.querySelectorAll('.family-chip').forEach(chip => {
            chip.addEventListener('click', () => this.setSelectedFamily(chip.dataset.family));
        });

        // Touch — inspiration reel
        const reelWrapper = document.getElementById('reelWrapper');
        if (reelWrapper) {
            reelWrapper.addEventListener('touchend', (e) => {
                e.preventDefault();
                const activeId = document.querySelector('.tab-content.active')?.id;
                if (activeId !== 'inspiration') return;
                if (this.reelRunning) {
                    this.stopInspirationReel();
                } else if (!this.reelDecelerating && this.inspirationStopped) {
                    this.inspirationStopped = false;
                    this.startInspirationReel();
                }
            }, { passive: false });
        }

        // ─── Today's Pick Card navigation
        const prevBtn = document.getElementById('inspoPrev');
        const nextBtn = document.getElementById('inspoNext');
        if (prevBtn) prevBtn.addEventListener('click', () => this.inspoPrev());
        if (nextBtn) nextBtn.addEventListener('click', () => this.inspoNext());

        const inspoCard = document.getElementById('inspoCard');
        if (inspoCard) {
            let touchStartX = 0;
            inspoCard.addEventListener('touchstart', (e) => {
                touchStartX = e.touches[0].clientX;
            }, { passive: true });
            inspoCard.addEventListener('touchend', (e) => {
                const dx = e.changedTouches[0].clientX - touchStartX;
                if (Math.abs(dx) > 40) {
                    if (dx < 0) this.inspoNext();
                    else        this.inspoPrev();
                }
            }, { passive: true });
        }

        this.showInspoCard(0);

        // Auto-start roulette
        setTimeout(() => this.startRoulette(), 400);

        // Load premium storage
        this.loadStorage();

        // Premium events
        document.body.addEventListener('pointerdown', () => {
            if (this.audioCtx && this.audioCtx.state === 'suspended') {
                this.audioCtx.resume();
            } else if (!this.audioCtx && this.volume > 0) {
                this.initAudio();
            }
        }, { once: true });

        const volSlider = document.getElementById('volumeSlider');
        if (volSlider) {
            volSlider.addEventListener('input', (e) => {
                this.volume = parseFloat(e.target.value);
                this.updateVolumeIcon();
            });
        }
        document.getElementById('favBtn')?.addEventListener('click', () => this.toggleFavorite());
        document.getElementById('exportCssBtn')?.addEventListener('click', () => this.openExportModal());
        document.getElementById('closeExportBtn')?.addEventListener('click', () => {
            document.getElementById('exportModal')?.classList.remove('show');
        });

        // Authentication & Feedback
        this.initAuthUI();
        this.initFeedbackUI();

        // ─── Document click to close dropdowns
        document.addEventListener('click', (e) => {
            const dropdown = document.getElementById('profileDropdown');
            const trigger  = document.getElementById('profileTrigger');
            if (dropdown && dropdown.classList.contains('show') && !trigger.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.classList.remove('show');
            }
        });
    }

    // ═══════════════════════════════════════════════════════════
    //  Color Family
    // ═══════════════════════════════════════════════════════════

    setSelectedFamily(family) {
        this.selectedFamily = family;
        document.querySelectorAll('.family-chip').forEach(c => {
            c.classList.toggle('active', c.dataset.family === family);
        });
        // 선택 즉시 룰렛 실행
        if (!this.isRouletting) {
            setTimeout(() => this.startRoulette(), 80);
        }
    }

    randomInFamily(family) {
        const ranges = colorFamilies[family];
        if (!ranges) {
            return {
                r: Math.floor(Math.random() * 256),
                g: Math.floor(Math.random() * 256),
                b: Math.floor(Math.random() * 256),
            };
        }
        const range = ranges[Math.floor(Math.random() * ranges.length)];
        const h = (range.h[0] + Math.random() * (range.h[1] - range.h[0])) % 360;
        const s = range.s[0] + Math.random() * (range.s[1] - range.s[0]);
        const l = range.l[0] + Math.random() * (range.l[1] - range.l[0]);
        return this.hslToRgb(h, s, l);
    }

    hslToRgb(h, s, l) {
        h /= 360; s /= 100; l /= 100;
        let r, g, b;
        if (s === 0) {
            r = g = b = l;
        } else {
            const hue2rgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1/6) return p + (q - p) * 6 * t;
                if (t < 1/2) return q;
                if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            };
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }
        return {
            r: Math.round(r * 255),
            g: Math.round(g * 255),
            b: Math.round(b * 255),
        };
    }

    // ═══════════════════════════════════════════════════════════
    //  RGB Roulette
    // ═══════════════════════════════════════════════════════════

    startRoulette() {
        if (this.isRouletting) return;
        this.isRouletting = true;
        this.setColorNameText('');

        // 목표 색을 먼저 계열에서 뽑아놓음
        const target = this.randomInFamily(this.selectedFamily);

        this.spinChannelToTarget('r', target.r, 1800, () => {
            this.spinChannelToTarget('g', target.g, 1800, () => {
                this.spinChannelToTarget('b', target.b, 1800, () => {
                    this.isRouletting = false;
                    this.r = target.r;
                    this.g = target.g;
                    this.b = target.b;
                    this.updateColor();
                });
            });
        });
    }

    spinChannelToTarget(channel, target, duration, onDone) {
        const elMap   = { r: this.rValue, g: this.gValue, b: this.bValue };
        const itemMap = { r: this.rItem,  g: this.gItem,  b: this.bItem  };
        const el   = elMap[channel];
        const item = itemMap[channel];

        item.classList.add('spinning');
        
        let current = this[channel];
        let distance = target - current;
        while (distance < 0) distance += 256;
        // Add 3~5 extra rotations so it spins satisfyingly
        distance += 256 * (3 + Math.floor(Math.random() * 3)); 
        
        let position = current;
        const friction = 0.95; // 0.95 gives a nice ~1.5 sec deceleration
        let speed = distance * (1 - friction);
        let lastTickVal = current;

        const tick = () => {
            position += speed;
            speed *= friction;
            
            let val = Math.floor(position) % 256;
            if (val < 0) val += 256;
            
            if (val !== lastTickVal) {
                lastTickVal = val;
                // Play tick sound every ~10 units to avoid sound flood
                if (val % 7 === 0) {
                    try { this.playTickSound(); } catch(e) {}
                }
                
                el.textContent   = val;
                this[channel]    = val;
                this.colorDisplay.style.backgroundColor = `rgb(${this.r}, ${this.g}, ${this.b})`;
                this.hexValue.textContent = this.rgbToHex(this.r, this.g, this.b);
            }

            if (speed > 0.5) {
                requestAnimationFrame(tick);
            } else {
                this[channel] = target;
                el.textContent = target;
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
    //  Color Update
    // ═══════════════════════════════════════════════════════════

    updateColor() {
        const hex = this.rgbToHex(this.r, this.g, this.b);
        this.colorDisplay.style.backgroundColor = `rgb(${this.r}, ${this.g}, ${this.b})`;
        this.hexValue.textContent = hex;
        this.rValue.textContent   = this.r;
        this.gValue.textContent   = this.g;
        this.bValue.textContent   = this.b;

        if (!this.isRouletting) {
            const name = this.findColorName(this.r, this.g, this.b);
            this.setColorNameText(name || '');
        }
        this.displaySimilarColors();

        // Premium hooks
        try {
            this.addToHistory(hex);
            this.updateFavBtnState(hex);
        } catch(e) {}
    }

    setColorNameText(text) {
        this.colorNameDisp.textContent = text;
        this.colorNameDisp.classList.toggle('visible', !!text);
    }

    // ═══════════════════════════════════════════════════════════
    //  Color Name Lookup
    // ═══════════════════════════════════════════════════════════

    findColorName(r, g, b) {
        let closest = null;
        let minDist = Infinity;
        for (const [name, color] of Object.entries(colorNameReferences)) {
            const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color.hex);
            if (!rgb) continue;
            const dist = Math.sqrt(
                (parseInt(rgb[1], 16) - r) ** 2 +
                (parseInt(rgb[2], 16) - g) ** 2 +
                (parseInt(rgb[3], 16) - b) ** 2
            );
            if (dist < minDist) { minDist = dist; closest = name; }
        }
        return closest;
    }

    // ═══════════════════════════════════════════════════════════
    //  Design Inspiration Reel
    // ═══════════════════════════════════════════════════════════

    buildInspirationReel() {
        if (!this.inspirationReel) return;
        const items = [...designInspiration, ...designInspiration];
        this.inspirationReel.innerHTML = items
            .map(d => `<div class="reel-item">${d.name}</div>`)
            .join('');
    }

    startInspirationReel() {
        if (this.reelRunning || this.reelDecelerating) return;
        this.reelRunning = true;
        this.reelDecelerating = false;
        this.inspirationStopped = false;
        this.reelCurrentSpeed = 120;
        this.inspirationPalette.innerHTML = '';
        if (this.spaceHint) this.spaceHint.textContent = '▶ SPACE / 탭으로 멈추기';

        const maxOffset = this.reelItemHeight * this.totalDesigns;
        const spin = () => {
            if (!this.reelRunning) return;
            this.reelOffset += this.reelCurrentSpeed;
            if (this.reelOffset >= maxOffset) this.reelOffset -= maxOffset;
            this.inspirationReel.style.transform = `translateY(-${this.reelOffset}px)`;
            this.reelRAF = requestAnimationFrame(spin);
        };
        this.reelRAF = requestAnimationFrame(spin);
    }

    stopInspirationReel() {
        if (!this.reelRunning) return;
        this.reelRunning = false;
        this.reelDecelerating = true;
        cancelAnimationFrame(this.reelRAF);
        if (this.spaceHint) this.spaceHint.textContent = '◼ 멈추는 중...';

        const maxOffset = this.reelItemHeight * this.totalDesigns;
        let speed = this.reelCurrentSpeed;

        const decelerate = () => {
            if (!this.reelDecelerating) return;
            speed *= 0.88;
            this.reelOffset += speed;
            if (this.reelOffset >= maxOffset) this.reelOffset -= maxOffset;
            this.inspirationReel.style.transform = `translateY(-${this.reelOffset}px)`;

            if (speed < 0.8) {
                this.reelDecelerating = false;
                const rawIndex = Math.round(this.reelOffset / this.reelItemHeight);
                this.currentDesignIdx = rawIndex % this.totalDesigns;
                const snapOffset = (rawIndex * this.reelItemHeight) % maxOffset;
                this.reelOffset = snapOffset;

                this.inspirationReel.style.transition = 'transform 0.3s cubic-bezier(0.4,0,0.2,1)';
                this.inspirationReel.style.transform  = `translateY(-${snapOffset}px)`;

                setTimeout(() => {
                    this.inspirationReel.style.transition = '';
                    this.inspirationStopped = true;
                    this.showInspirationPalette(this.currentDesignIdx);
                    if (this.spaceHint) this.spaceHint.textContent = '▶ SPACE / 탭으로 다시 돌리기';
                }, 330);
            } else {
                this.reelRAF = requestAnimationFrame(decelerate);
            }
        };
        this.reelRAF = requestAnimationFrame(decelerate);
    }

    showInspirationPalette(index) {
        const design = designInspiration[index];
        if (!design) return;

        this.inspirationPalette.innerHTML = `
            <p class="palette-name-label">${design.name}</p>
            <div class="palette-colors-row">
                ${design.colors.map(c => {
                    const rgb  = this.hexToRgb(c);
                    const name = rgb ? this.findColorName(rgb.r, rgb.g, rgb.b) : c;
                    const tags = (name && colorNameReferences[name]?.tags) || [];
                    const desc = tags.slice(0, 3).join(' · ') || '색상 팔레트';
                    return `
                        <div class="palette-color"
                             style="background-color:${c}"
                             onclick="app.selectInspirationColor('${c}')">
                            <div class="palette-color-tooltip">
                                <span class="pal-name">${name || c}</span>
                                <span class="pal-hex">${c}</span>
                                <span class="pal-desc">${desc}</span>
                            </div>
                            <span class="palette-mobile-label">${name || c}</span>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    selectInspirationColor(hex) {
        this.setColorFromHex(hex);
        this.switchTab('picker');
    }

    // ═══════════════════════════════════════════════════════════
    //  Today's Design Pick Card
    // ═══════════════════════════════════════════════════════════

    showInspoCard(index) {
        if (typeof designCards === 'undefined') return;
        const d = designCards[index];
        if (!d) return;

        // Text
        const numEl  = document.getElementById('inspoNumber');
        const catEl  = document.getElementById('inspoCategory');
        const titEl  = document.getElementById('inspoTitle');
        const desEl  = document.getElementById('inspoDesc');
        if (numEl) numEl.textContent = d.id;
        if (catEl) catEl.textContent = d.category;
        if (titEl) titEl.textContent = d.name;
        if (desEl) desEl.textContent = d.description;

        // Swatches
        const c0 = d.colors[0] || {};
        const c1 = d.colors[1] || {};
        const back  = document.getElementById('swatchBack');
        const front = document.getElementById('swatchFront');
        const nbk = document.getElementById('swNameBack');
        const hbk = document.getElementById('swHexBack');
        const nfr = document.getElementById('swNameFront');
        const hfr = document.getElementById('swHexFront');

        if (back)  { back.style.backgroundColor  = c0.hex || '#fff'; }
        if (front) { front.style.backgroundColor = c1.hex || '#000'; }
        if (nbk) nbk.textContent = c0.name || '';
        if (hbk) hbk.textContent = c0.hex  || '';
        if (nfr) nfr.textContent = c1.name || '';
        if (hfr) hfr.textContent = c1.hex  || '';

        // Text color based on brightness
        [{ el: back,  hex: c0.hex }, { el: front, hex: c1.hex }].forEach(({ el, hex }) => {
            if (!el || !hex) return;
            const rgb = this.hexToRgb(hex);
            if (!rgb) return;
            const lum = (0.299*rgb.r + 0.587*rgb.g + 0.114*rgb.b) / 255;
            el.style.color = lum > 0.55 ? '#111' : '#fff';
        });

        // Animate
        const card = document.getElementById('inspoCard');
        if (card) {
            card.classList.remove('inspo-anim');
            void card.offsetWidth;
            card.classList.add('inspo-anim');
        }
    }

    inspoNext() {
        if (typeof designCards === 'undefined') return;
        this.todayIndex = (this.todayIndex + 1) % designCards.length;
        this.showInspoCard(this.todayIndex);
    }

    inspoPrev() {
        if (typeof designCards === 'undefined') return;
        this.todayIndex = (this.todayIndex - 1 + designCards.length) % designCards.length;
        this.showInspoCard(this.todayIndex);
    }

    inspoPickColor(colorIdx) {
        if (typeof designCards === 'undefined') return;
        const d = designCards[this.todayIndex];
        if (!d || !d.colors[colorIdx]) return;
        this.setColorFromHex(d.colors[colorIdx].hex);
        this.switchTab('picker');
    }

    // ═══════════════════════════════════════════════════════════
    //  Tab Switching
    // ═══════════════════════════════════════════════════════════

    switchTab(tabName) {
        document.querySelectorAll('.tab-content').forEach(t   => t.classList.remove('active'));
        document.querySelectorAll('.nav-tab').forEach(btn => btn.classList.remove('active'));

        const tab = document.getElementById(tabName);
        if (tab) tab.classList.add('active');

        const btn = document.querySelector(`[data-tab="${tabName}"]`);
        if (btn) btn.classList.add('active');

        if (tabName === 'inspiration') {
            if (!this.inspirationStopped) this.startInspirationReel();
        } else if (tabName === 'today') {
            this.showInspoCard(this.todayIndex);
            this.reelRunning = false;
            this.reelDecelerating = false;
            cancelAnimationFrame(this.reelRAF);
        } else {
            this.reelRunning = false;
            this.reelDecelerating = false;
            cancelAnimationFrame(this.reelRAF);
        }
    }

    // ═══════════════════════════════════════════════════════════
    //  Color Library
    // ═══════════════════════════════════════════════════════════

    buildColorLibrary(filterCat = 'all') {
        if (!this.colorLibrary) return;

        const categoryMeta = {
            ui_web:       { label: 'UI / 웹 기본',  icon: '🖥' },
            brand_global: { label: '글로벌 브랜드', icon: '🌐' },
            nature:       { label: '자연 색상',      icon: '🌿' },
            pastel:       { label: '파스텔',         icon: '🌸' },
            neon_modern:  { label: '네온 / 모던',    icon: '⚡' },
            earth:        { label: '어스 톤',        icon: '🍂' },
            monochrome:   { label: '모노크롬',       icon: '⬜' },
        };

        // Render chips
        const chipsContainer = document.getElementById('libFilterChips');
        if (chipsContainer) {
            chipsContainer.innerHTML = `
                <button class="lib-filter-chip ${filterCat === 'all' ? 'active' : ''}" onclick="app.buildColorLibrary('all')">전체보기</button>
                <button class="lib-filter-chip ${filterCat === 'ui_web' ? 'active' : ''}" onclick="app.buildColorLibrary('ui_web')">UI/웹</button>
                <button class="lib-filter-chip ${filterCat === 'brand_global' ? 'active' : ''}" onclick="app.buildColorLibrary('brand_global')">브랜드</button>
                <button class="lib-filter-chip ${filterCat === 'nature' ? 'active' : ''}" onclick="app.buildColorLibrary('nature')">자연/어스</button>
                <button class="lib-filter-chip ${filterCat === 'pastel' ? 'active' : ''}" onclick="app.buildColorLibrary('pastel')">감성/파스텔</button>
                <button class="lib-filter-chip ${filterCat === 'neon_modern' ? 'active' : ''}" onclick="app.buildColorLibrary('neon_modern')">네온/모던</button>
            `;
        }

        let html = '';
        for (const [key, colors] of Object.entries(designerColors)) {
            // 필터 로직
            if (filterCat !== 'all') {
                if (filterCat === 'nature' && !(key === 'nature' || key === 'earth')) continue;
                if (filterCat === 'pastel' && key !== 'pastel') continue;
                if (filterCat === 'ui_web' && key !== 'ui_web') continue;
                if (filterCat === 'brand_global' && key !== 'brand_global') continue;
                if (filterCat === 'neon_modern' && !(key === 'neon_modern' || key === 'monochrome')) continue;
            }

            const meta = categoryMeta[key] || { label: key, icon: '🎨' };
            html += `
                <div class="color-category-section">
                    <h3 class="color-category-title">
                        <span class="cat-icon">${meta.icon}</span>
                        ${meta.label}
                    </h3>
                    <div class="color-category-grid">
                        ${colors.map(c => `
                            <div class="color-library-item" onclick="app.setColorFromHex('${c.hex}')">
                                <div class="color-library-box" style="background-color:${c.hex}">
                                    <div class="color-library-info-popup">
                                        <div class="color-library-hex">${c.hex}</div>
                                    </div>
                                </div>
                                <div class="color-library-name">${this.sanitizeInput(c.name)}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        this.colorLibrary.innerHTML = html || '<div style="padding:40px;text-align:center;color:#999;">결과가 없습니다.</div>';
    }

    // ═══════════════════════════════════════════════════════════
    //  Guide Tab Build
    // ═══════════════════════════════════════════════════════════
    buildGuide() {
        const grid = document.getElementById('guideGrid');
        if (!grid || typeof designGuides === 'undefined') return;

        grid.innerHTML = designGuides.map(g => `
            <div class="guide-card">
                <div class="guide-card-title">${g.title}</div>
                <div class="guide-card-desc">${g.desc}</div>
                <div class="guide-card-visual">
                    ${g.colors.map(c => `<div class="gc-box" style="background-color:${c}"></div>`).join('')}
                </div>
            </div>
        `).join('');
    }

    // ═══════════════════════════════════════════════════════════
    //  Similar Colors
    // ═══════════════════════════════════════════════════════════

    displaySimilarColors() {
        if (!this.similarColors) return;
        const similar = findSimilarColors(this.r, this.g, this.b, 8);
        this.similarColors.innerHTML = similar.map(({ name, hex }) => `
            <div class="similar-color-group">
                <div class="similar-color-item"
                     style="background-color:${hex}"
                     onclick="app.selectSimilarColor('${hex}','${name}')">
                    <div class="similar-color-tooltip">
                        <span class="tooltip-name">${name}</span>
                        <span class="tooltip-hex">${hex}</span>
                    </div>
                </div>
                <span class="similar-color-label">${name}</span>
            </div>
        `).join('');
    }

    selectSimilarColor(hex, name) {
        this.setColorFromHex(hex);
        this.showToast(name);
    }

    // ═══════════════════════════════════════════════════════════
    //  Utility
    // ═══════════════════════════════════════════════════════════

    rgbToHex(r, g, b) {
        return '#' + [r, g, b].map(x => {
            const h = x.toString(16);
            return h.length === 1 ? '0' + h : h;
        }).join('').toUpperCase();
    }

    hexToRgb(hex) {
        const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return r ? {
            r: parseInt(r[1], 16),
            g: parseInt(r[2], 16),
            b: parseInt(r[3], 16),
        } : null;
    }

    setColorFromHex(hex) {
        if (!hex) return;
        try { this.playClickSound(); } catch(e) {}
        const rgb = this.hexToRgb(hex);
        if (rgb) {
            this.r = rgb.r;
            this.g = rgb.g;
            this.b = rgb.b;
            if (this.selectedChannel) this.selectedChannel = null;
            this.isRouletting = false;
            this.updateColor();
        }
    }

    reset() {
        this.r = this.g = this.b = 0;
        this.updateColor();
        this.showToast('리셋되었습니다');
        setTimeout(() => this.startRoulette(), 300);
    }

    copyToClipboard(type) {
        const text = type === 'hex'
            ? this.hexValue.textContent
            : `rgb(${this.r}, ${this.g}, ${this.b})`;
        this.fallbackCopy(text, type === 'hex' ? 'HEX 복사됨' : 'RGB 복사됨');
    }

    fallbackCopy(text, msg) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                this.showToast(msg);
                try { this.playSuccessSound(); } catch(e) {}
            }).catch(() => {
                this.forceExecCopy(text, msg);
            });
        } else {
            this.forceExecCopy(text, msg);
        }
    }
    
    forceExecCopy(text, msg) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            this.showToast(msg);
            try { this.playSuccessSound(); } catch(e) {}
        } catch (e) {
            this.showToast('복사 실패');
        }
        document.body.removeChild(textarea);
    }

    searchColor() {
        const q = this.sanitizeInput(this.colorInput.value).toLowerCase();
        if (!q) { this.searchResults.innerHTML = ''; return; }

        const results = [];
        for (const [name, color] of Object.entries(colorNameReferences)) {
            const tags = color.tags || [];
            if (name.toLowerCase().includes(q) || tags.some(t => t.includes(q))) {
                results.push({ name, color });
            }
        }

        this.searchResults.innerHTML = results.slice(0, 8).map(({ name, color }) => `
            <div class="search-result-item" onclick="app.setColorFromHex('${color.hex}')">
                <div class="search-result-color" style="background-color:${color.hex}"></div>
                <div class="search-result-info">
                    <div class="search-result-name">${name}</div>
                    <div class="search-result-hex">${color.hex}</div>
                </div>
            </div>
        `).join('');
    }

    sanitizeInput(input) {
        const d = document.createElement('div');
        d.textContent = input;
        return d.innerHTML.substring(0, 60);
    }

    handleKeyPress(e) {
        const activeId = document.querySelector('.tab-content.active')?.id;
        if (e.code === 'Space') {
            e.preventDefault();
            if (activeId === 'inspiration') {
                if (this.reelRunning) {
                    this.stopInspirationReel();
                } else if (!this.reelDecelerating) {
                    this.inspirationStopped = false;
                    this.startInspirationReel();
                }
            } else if (activeId === 'picker') {
                if (!this.isRouletting) this.startRoulette();
            }
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            if (activeId === 'today') this.inspoPrev();
            else if (activeId === 'picker' && !this.isRouletting) this.adjustColor(-1);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            if (activeId === 'today') this.inspoNext();
            else if (activeId === 'picker' && !this.isRouletting) this.adjustColor(1);
        }
    }

    adjustColor(step) {
        const clamp = v => Math.max(0, Math.min(255, v));
        if (this.selectedChannel) {
            this[this.selectedChannel] = clamp(this[this.selectedChannel] + step);
        } else {
            if      (this.r + step >= 0 && this.r + step <= 255) this.r = clamp(this.r + step);
            else if (this.g + step >= 0 && this.g + step <= 255) this.g = clamp(this.g + step);
            else if (this.b + step >= 0 && this.b + step <= 255) this.b = clamp(this.b + step);
        }
        this.updateColor();
    }

    mobileAdjust(step) {
        if (!this.selectedChannel || this.isRouletting) return;
        const clamp = v => Math.max(0, Math.min(255, v));
        this[this.selectedChannel] = clamp(this[this.selectedChannel] + step);
        this.updateColor();
    }

    setSelectedChannel(channel) {
        this.selectedChannel = this.selectedChannel === channel ? null : channel;
        [['r', this.rItem], ['g', this.gItem], ['b', this.bItem]].forEach(([ch, el]) => {
            if (el) el.classList.toggle('channel-selected', this.selectedChannel === ch);
        });
        const labels = { r: 'R 채널', g: 'G 채널', b: 'B 채널' };
        if (this.mobileAdjLabel) {
            this.mobileAdjLabel.textContent = this.selectedChannel ? labels[this.selectedChannel] : '채널 선택';
        }
    }

    showToast(message) {
        this.toast.textContent = message;
        this.toast.classList.add('show');
        clearTimeout(this._toastTimer);
        this._toastTimer = setTimeout(() => this.toast.classList.remove('show'), 2200);
    }

    // ═══════════════════════════════════════════════════════════
    //  Premium Features Additions
    // ═══════════════════════════════════════════════════════════

    // 1. Sound Framework (Volume Control)
    initAudio() {
        if (!this.audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) this.audioCtx = new AudioContext();
        }
    }
    updateVolumeIcon() {
        const on = document.getElementById('soundIconOn');
        const off = document.getElementById('soundIconOff');
        if (on && off) {
            on.style.display = this.volume > 0 ? 'block' : 'none';
            off.style.display = this.volume > 0 ? 'none' : 'block';
        }
    }
    playSound(type) {
        if (this.volume <= 0) return;
        this.initAudio();
        if (!this.audioCtx || this.audioCtx.state === 'suspended') return;
        
        try {
            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();
            osc.connect(gain);
            gain.connect(this.audioCtx.destination);
            
            const now = this.audioCtx.currentTime;
            
            if (type === 'tick') {
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(800, now);
                osc.frequency.exponentialRampToValueAtTime(100, now + 0.05);
                gain.gain.setValueAtTime(0.3 * this.volume, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
                osc.start(now);
                osc.stop(now + 0.05);
            } else if (type === 'click') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(1200, now);
                gain.gain.setValueAtTime(0.2 * this.volume, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
                osc.start(now);
                osc.stop(now + 0.1);
            } else if (type === 'success') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(500, now);
                osc.frequency.setValueAtTime(800, now + 0.1);
                gain.gain.setValueAtTime(0.2 * this.volume, now);
                gain.gain.linearRampToValueAtTime(0, now + 0.3);
                osc.start(now);
                osc.stop(now + 0.3);
            }
        } catch(e) {}
    }
    playTickSound() { this.playSound('tick'); }
    playClickSound() { this.playSound('click'); }
    playSuccessSound() { this.playSound('success'); }

    async loadStorage() {
        this.history = [];
        this.favorites = [];
        try {
            const h = localStorage.getItem('designpick_history');
            if (h) this.history = JSON.parse(h);
            const f = localStorage.getItem('designpick_favs');
            if (f) this.favorites = JSON.parse(f);
        } catch(e) {}
        this.renderHistory();
        this.renderFavorites();

        // Initial session check is handled by onAuthStateChange in initAuthUI
    }
    
    saveLocalHistory() {
        try { localStorage.setItem('designpick_history', JSON.stringify(this.history)); } catch(e) {}
    }
    saveLocalFavorites() {
        try { localStorage.setItem('designpick_favs', JSON.stringify(this.favorites)); } catch(e) {}
    }

    addToHistory(hex) {
        if (this.isRouletting || this.reelRunning) return; 
        if (this.history[0] === hex) return;
        this.history.unshift(hex);
        if (this.history.length > 20) this.history.pop();
        this.saveLocalHistory();
        this.renderHistory();
    }
    renderHistory() {
        const tr = document.getElementById('historyTray');
        if (!tr) return;
        if (this.history.length === 0) {
            tr.innerHTML = '<span style="font-size:11px; color:#999; padding:0 8px;">최근 방문한 색상이 없습니다.</span>';
            return;
        }
        tr.innerHTML = this.history.map(hex => `
            <div class="history-item" style="background:${hex}" 
                 onclick="app.setColorFromHex('${hex}')" title="${hex}"></div>
        `).join('');
    }

    async toggleFavorite() {
        const hex = this.rgbToHex(this.r, this.g, this.b);
        const nameEl = document.getElementById('colorNameDisplay');
        const name = nameEl && nameEl.textContent ? nameEl.textContent : 'Custom Color';

        const idx = this.favorites.findIndex(f => f.hex === hex);
        if (idx !== -1) {
            // Remove from local and DB
            this.favorites.splice(idx, 1);
            if (this.isLoggedIn && this.currentUser) {
                await this.supabase
                    .from('favorites')
                    .delete()
                    .eq('user_id', this.currentUser.id)
                    .eq('hex', hex);
            }
            this.showToast('보관함에서 삭제되었습니다.');
        } else {
            // Add to local and DB
            const newFav = { hex, name };
            this.favorites.unshift(newFav);
            if (this.isLoggedIn && this.currentUser) {
                await this.supabase
                    .from('favorites')
                    .insert([{ user_id: this.currentUser.id, hex, name }]);
            }
            this.showToast('보관함에 저장되었습니다. (♥)');
            this.playSuccessSound();
        }
        this.saveLocalFavorites();
        this.updateFavBtnState(hex);
        this.renderFavorites();
    }

    async fetchServerPalettes() {
        if (!this.isLoggedIn || !this.currentUser) return;
        try {
            const { data, error } = await this.supabase
                .from('favorites')
                .select('hex, name')
                .eq('user_id', this.currentUser.id)
                .order('created_at', { ascending: false });
            
            if (!error && data) {
                // Merge DB palettes with local ones (unique by hex)
                const merged = [...data];
                this.favorites.forEach(local => {
                    if (!merged.some(m => m.hex === local.hex)) {
                        merged.push(local);
                    }
                });
                this.favorites = merged;
                this.renderFavorites();
                this.updateFavBtnState(this.rgbToHex(this.r, this.g, this.b));
            }
        } catch(e) {}
    }
    updateFavBtnState(hex) {
        const btn = document.getElementById('favBtn');
        if (!btn) return;
        if (this.favorites.some(f => f.hex === hex)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    }
    renderFavorites() {
        const list = document.getElementById('myPalettesList');
        if (!list) return;

        if (this.favorites.length === 0) {
            list.innerHTML = `<div class="my-pal-empty">스크랩한 색상이 없습니다.<br>Color Picker에서 마음에 드는 색상을 ♥ 눌러 찜해보세요!</div>`;
            return;
        }
        list.innerHTML = this.favorites.map(f => `
            <div class="my-pal-card" onclick="app.switchTab('picker'); app.setColorFromHex('${f.hex}')">
                <div class="my-pal-color" style="background:${f.hex}"></div>
                <div class="my-pal-name">${f.name}</div>
                <div class="my-pal-hex">${f.hex}</div>
            </div>
        `).join('');
    }

    // 3. Code Export
    openExportModal() {
        const hex = this.rgbToHex(this.r, this.g, this.b);
        const nameEl = document.getElementById('colorNameDisplay');
        let rawName = nameEl && nameEl.textContent ? nameEl.textContent : 'primary';
        let kebab = rawName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        if (!kebab) kebab = 'primary';
        
        const cssOut = document.getElementById('exportCssCode');
        const hexOut = document.getElementById('exportHexCode');
        
        if (cssOut) {
            cssOut.textContent = `:root {\n  --color-${kebab}: ${hex};\n  --color-${kebab}-rgb: ${this.r}, ${this.g}, ${this.b};\n}`;
        }
        if (hexOut) {
            // 현재 내 보관함의 색상을 콤마로 연결
            const fHexList = this.favorites.map(f => f.hex).join(', ');
            hexOut.textContent = fHexList || hex;
        }
        const mod = document.getElementById('exportModal');
        if (mod) mod.classList.add('show');
    }
    
    copyExport(type) {
        if (type === 'figma') {
            const size = 100;
            let rects = '';
            if (this.favorites.length > 0) {
                rects = this.favorites.map((f, i) => `<rect x="${i*(size+20)}" y="0" width="${size}" height="${size}" fill="${f.hex}" rx="12"/>`).join('');
                this.fallbackCopy(`<svg width="${this.favorites.length*(size+20)}" height="${size}" xmlns="http://www.w3.org/2000/svg">${rects}</svg>`, 'Figma 도형(SVG)이 복사되었습니다.');
            } else {
                const hex = this.rgbToHex(this.r, this.g, this.b);
                rects = `<rect x="0" y="0" width="${size}" height="${size}" fill="${hex}" rx="12"/>`;
                this.fallbackCopy(`<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">${rects}</svg>`, 'Figma 도형(SVG)이 복사되었습니다.');
            }
            return;
        }

        const el = document.getElementById(type === 'css' ? 'exportCssCode' : type === 'tw' ? 'exportTwCode' : 'exportHexCode');
        if (!el) return;
        this.fallbackCopy(el.textContent, '코드가 복사되었습니다!');
    }

    initAuthUI() {
        const modal = document.getElementById('authModal');
        const setModal = document.getElementById('settingsModal');
        const drp = document.getElementById('profileDropdown');
        const trigger = document.getElementById('profileTrigger');

        const closeAuth = document.getElementById('closeAuthBtn');
        const closeSettings = document.getElementById('closeSettingsBtn');

        const menuLogin = document.getElementById('menuLogin');
        const menuSettings = document.getElementById('menuSettings');
        const menuLogout = document.getElementById('menuLogout');

        const tabLogin = document.getElementById('tabLoginBtn');
        const tabRegister = document.getElementById('tabRegisterBtn');
        const authForm = document.getElementById('authForm');

        this.authMode = 'login';

        // ─── Supabase Auth State Change Listener
        this.supabase.auth.onAuthStateChange(async (event, session) => {
            if (session) {
                this.isLoggedIn = true;
                // Fetch public profile from 'profiles' table
                const { data: profile } = await this.supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', session.user.id)
                    .single();
                
                const user = {
                    id: session.user.id,
                    email: session.user.email,
                    name: (profile && profile.name) || session.user.user_metadata.full_name || session.user.email.split('@')[0],
                    picture: (profile && profile.picture) || session.user.user_metadata.avatar_url || null,
                    isLocal: session.user.app_metadata.provider === 'email'
                };
                this.currentUser = user;
                this.updateAuthUI(user);
                await this.fetchServerPalettes();
            } else {
                this.isLoggedIn = false;
                this.currentUser = null;
                this.updateAuthUI(null);
            }
        });

        // ─── Dropdown Interaction
        if (trigger) {
            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                if (!this.isLoggedIn) {
                    modal.classList.add('show');
                } else {
                    drp.classList.toggle('show');
                }
            });
        }
        document.addEventListener('click', () => { if(drp) drp.classList.remove('show'); });

        if (menuLogin) menuLogin.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('show');
        });

        if (menuSettings) menuSettings.addEventListener('click', (e) => {
            e.preventDefault();
            drp.classList.remove('show');
            this.openSettingsModal();
        });

        if (menuLogout) menuLogout.addEventListener('click', async (e) => {
            e.preventDefault();
            drp.classList.remove('show');
            if (confirm('로그아웃 하시겠습니까?')) {
                await this.supabase.auth.signOut();
                this.showToast('로그아웃 되었습니다.');
            }
        });

        // ─── Form & Tab Events
        if (closeAuth) closeAuth.addEventListener('click', () => modal.classList.remove('show'));
        if (closeSettings) closeSettings.addEventListener('click', () => setModal.classList.remove('show'));

        if (tabLogin) tabLogin.addEventListener('click', () => this.switchAuthTab('login'));
        if (tabRegister) tabRegister.addEventListener('click', () => this.switchAuthTab('register'));
        if (authForm) authForm.addEventListener('submit', (e) => this.handleAuthSubmit(e));

        // ─── OAuth Buttons
        const googleBtn = document.getElementById('googleLoginBtn');
        const githubBtn = document.getElementById('githubLoginBtn');
        if (googleBtn) googleBtn.addEventListener('click', () => {
            this.supabase.auth.signInWithOAuth({ 
                provider: 'google', 
                options: { 
                    redirectTo: window.location.origin + window.location.pathname,
                    flowType: 'implicit'
                } 
            });
        });
        if (githubBtn) githubBtn.addEventListener('click', () => {
            this.supabase.auth.signInWithOAuth({ 
                provider: 'github', 
                options: { 
                    redirectTo: window.location.origin + window.location.pathname,
                    flowType: 'implicit'
                } 
            });
        });

        // ─── Settings Actions
        const btnUpdProf = document.getElementById('btnUpdateProfile');
        if (btnUpdProf) btnUpdProf.addEventListener('click', () => this.updateProfile());
        
        const imgInput = document.getElementById('profileImgInput');
        if (imgInput) imgInput.addEventListener('change', (e) => this.uploadProfileImage(e));
    }

    updateAuthUI(user) {
        const avatarImg = document.getElementById('userAvatar');
        const avatarDefault = document.getElementById('userAvatarDefault');
        const menuLogin = document.getElementById('menuLogin');
        const menuSettings = document.getElementById('menuSettings');
        const menuLogout = document.getElementById('menuLogout');
        const drpName = document.getElementById('dropdownUserName');
        const drpEmail = document.getElementById('dropdownUserEmail');

        if (user) {
            if (user.picture) {
                avatarImg.src = user.picture;
                avatarImg.style.display = 'block';
                avatarDefault.style.display = 'none';
            } else {
                avatarImg.style.display = 'none';
                avatarDefault.style.display = 'block';
            }
            drpName.textContent = user.name;
            drpEmail.textContent = user.email;
            if (menuLogin) menuLogin.style.display = 'none';
            if (menuSettings) menuSettings.style.display = 'flex';
            if (menuLogout) menuLogout.style.display = 'flex';
        } else {
            avatarImg.style.display = 'none';
            avatarDefault.style.display = 'block';
            drpName.textContent = '방문자';
            drpEmail.textContent = '로그인이 필요합니다';
            if (menuLogin) menuLogin.style.display = 'flex';
            if (menuSettings) menuSettings.style.display = 'none';
            if (menuLogout) menuLogout.style.display = 'none';
        }
    }

    openSettingsModal() {
        if (!this.currentUser) return;
        document.getElementById('settingsName').value = this.currentUser.name || '';
        document.getElementById('settingsAvatarPreview').src = this.currentUser.picture || '';
        document.getElementById('settingsModal').classList.add('show');
    }

    async updateProfile() {
        if (!this.currentUser) return;
        const name = document.getElementById('settingsName').value.trim();
        if (!name) return alert('이름을 입력하세요.');
        
        const { error } = await this.supabase.from('profiles').upsert({ id: this.currentUser.id, name });
        if (error) return alert('프로필 수정 실패: ' + error.message);
        
        this.currentUser.name = name;
        this.updateAuthUI(this.currentUser);
        this.showToast('프로필이 수정되었습니다.');
    }

    async uploadProfileImage(e) {
        if (!this.currentUser) return;
        const file = e.target.files[0];
        if (!file) return;

        const path = `avatars/${this.currentUser.id}-${Date.now()}.${file.name.split('.').pop()}`;
        const { error: uploadError } = await this.supabase.storage.from('avatars').upload(path, file);
        if (uploadError) return alert('업로드 실패: ' + uploadError.message);

        const { data } = this.supabase.storage.from('avatars').getPublicUrl(path);
        const { error: dbError } = await this.supabase.from('profiles').upsert({ id: this.currentUser.id, picture: data.publicUrl });
        if (dbError) return alert('DB 업데이트 실패: ' + dbError.message);

        this.currentUser.picture = data.publicUrl;
        this.updateAuthUI(this.currentUser);
        document.getElementById('settingsAvatarPreview').src = data.publicUrl;
        this.showToast('프로필 이미지가 변경되었습니다.');
    }

    switchAuthTab(mode) {
        this.authMode = mode;
        const loginBtn = document.getElementById('tabLoginBtn');
        const regBtn = document.getElementById('tabRegisterBtn');
        const nameArea = document.getElementById('authNameArea');
        const submitBtn = document.getElementById('authSubmitBtn');

        if (mode === 'login') {
            loginBtn.classList.add('active');
            regBtn.classList.remove('active');
            nameArea.style.display = 'none';
            submitBtn.textContent = '로그인';
        } else {
            loginBtn.classList.remove('active');
            regBtn.classList.add('active');
            nameArea.style.display = 'block';
            submitBtn.textContent = '회원가입';
        }
    }

    async handleAuthSubmit(e) {
        e.preventDefault();
        const email = document.getElementById('authEmail').value;
        const password = document.getElementById('authPassword').value;
        const name = document.getElementById('authName').value;

        if (this.authMode === 'login') {
            const { error } = await this.supabase.auth.signInWithPassword({ email, password });
            if (error) return alert('로그인 실패: ' + error.message);
            document.getElementById('authModal').classList.remove('show');
            this.showToast('반갑습니다!');
        } else {
            const { data, error } = await this.supabase.auth.signUp({ email, password, options: { data: { full_name: name } } });
            if (error) return alert('회원가입 실패: ' + error.message);
            if (data.user) {
                await this.supabase.from('profiles').upsert({ id: data.user.id, name });
            }
            alert('회원가입 성공! 메일함을 확인하거나 바로 로그인하세요.');
            this.switchAuthTab('login');
        }
    }
}

// ─── Initialization
const app = new ColorPalette();

document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.addEventListener('click', function () {
        app.switchTab(this.getAttribute('data-tab'));
    });
});

