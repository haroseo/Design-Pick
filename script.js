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

        this.init();
    }

    init() {
        this.buildInspirationReel();
        this.buildColorLibrary();
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

        // Auto-start roulette
        setTimeout(() => this.startRoulette(), 400);
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
        const startTime = Date.now();

        const interval = setInterval(() => {
            const elapsed  = Date.now() - startTime;
            const progress = elapsed / duration;

            // 80% 이후에는 목표값으로 수렴
            const val = progress > 0.80 ? target : Math.floor(Math.random() * 256);
            el.textContent   = val;
            this[channel]    = val;
            this.colorDisplay.style.backgroundColor =
                `rgb(${this.r}, ${this.g}, ${this.b})`;
            this.hexValue.textContent = this.rgbToHex(this.r, this.g, this.b);

            if (elapsed >= duration) {
                clearInterval(interval);
                this[channel] = target;
                el.textContent = target;
                item.classList.remove('spinning');
                item.classList.add('landed');
                setTimeout(() => item.classList.remove('landed'), 700);
                onDone();
            }
        }, 40);
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
        } else {
            this.reelRunning = false;
            this.reelDecelerating = false;
            cancelAnimationFrame(this.reelRAF);
        }
    }

    // ═══════════════════════════════════════════════════════════
    //  Color Library
    // ═══════════════════════════════════════════════════════════

    buildColorLibrary() {
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

        let html = '';
        for (const [key, colors] of Object.entries(designerColors)) {
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
        this.colorLibrary.innerHTML = html;

        const btn = document.getElementById('loadMoreBtn');
        if (btn) btn.style.display = 'none';
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
        const rgb = this.hexToRgb(hex);
        if (rgb) {
            this.r = rgb.r;
            this.g = rgb.g;
            this.b = rgb.b;
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
        navigator.clipboard.writeText(text).then(() =>
            this.showToast(type === 'hex' ? 'HEX 복사됨' : 'RGB 복사됨'));
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
        if (e.code === 'Space') {
            e.preventDefault();
            const activeId = document.querySelector('.tab-content.active')?.id;
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
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            e.preventDefault();
            const isPickerActive = document.querySelector('[data-tab="picker"]')?.classList.contains('active');
            if (isPickerActive && !this.isRouletting) {
                this.adjustColor(e.key === 'ArrowLeft' ? -1 : 1);
            }
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
}

// ─── Init
const app = new ColorPalette();

document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.addEventListener('click', function () {
        app.switchTab(this.getAttribute('data-tab'));
    });
});
