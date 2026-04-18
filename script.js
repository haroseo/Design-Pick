class ColorPalette {
    constructor() {
        // ─── Elements
        this.colorDisplay   = document.getElementById('colorDisplay');
        this.rValue         = document.getElementById('rValue');
        this.gValue         = document.getElementById('gValue');
        this.bValue         = document.getElementById('bValue');
        this.rItem          = document.getElementById('rItem');
        this.gItem          = document.getElementById('gItem');
        this.bItem          = document.getElementById('bItem');
        this.hexValue       = document.getElementById('hexValue');
        this.colorNameDisp  = document.getElementById('colorNameDisplay');
        this.resetBtn       = document.getElementById('resetBtn');
        this.hexCopyBtn     = document.getElementById('hexCopyBtn');
        this.rgbCopyBtn     = document.getElementById('rgbCopyBtn');
        this.colorInput     = document.getElementById('colorInput');
        this.searchResults  = document.getElementById('searchResults');
        this.similarColors  = document.getElementById('similarColors');
        this.inspirationReel    = document.getElementById('inspirationReel');
        this.inspirationPalette = document.getElementById('inspirationPalette');
        this.spaceHint      = document.getElementById('spaceHint');
        this.colorLibrary   = document.getElementById('colorLibrary');
        this.toast          = document.getElementById('toast');

        // ─── Color state
        this.r = 0;
        this.g = 0;
        this.b = 0;

        // ─── Roulette state
        this.isRouletting = false;

        // ─── Channel selection (미세조정)
        this.selectedChannel = null;

        // ─── Inspiration reel state
        this.reelRunning      = false;
        this.reelDecelerating = false;
        this.reelOffset       = 0;
        this.reelRAF          = null;
        this.reelCurrentSpeed = 0;
        this.reelItemHeight   = 100; // px — matches CSS
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

        // Events
        this.resetBtn.addEventListener('click',    () => this.reset());
        this.hexCopyBtn.addEventListener('click',  () => this.copyToClipboard('hex'));
        this.rgbCopyBtn.addEventListener('click',  () => this.copyToClipboard('rgb'));
        this.colorInput.addEventListener('input',  () => this.searchColor());
        document.addEventListener('keydown', (e)  => this.handleKeyPress(e));

        // R/G/B 채널 클릭 → 미세조정 채널 선택
        [['r', this.rItem], ['g', this.gItem], ['b', this.bItem]].forEach(([ch, el]) => {
            if (el) el.addEventListener('click', () => {
                if (!this.isRouletting) this.setSelectedChannel(ch);
            });
        });

        // Auto-start RGB roulette on load
        setTimeout(() => this.startRoulette(), 400);
    }

    // ═══════════════════════════════════════════════════════════
    //  RGB Roulette
    // ═══════════════════════════════════════════════════════════

    startRoulette() {
        if (this.isRouletting) return;
        this.isRouletting = true;
        this.setColorNameText('');

        // 순서대로: R → G → B
        this.spinChannel('r', 1800, () => {
            this.spinChannel('g', 1800, () => {
                this.spinChannel('b', 1800, () => {
                    this.isRouletting = false;
                    this.updateColor(); // 최종 컬러 확정 & 이름 표시
                });
            });
        });
    }

    spinChannel(channel, duration, onDone) {
        const elMap   = { r: this.rValue, g: this.gValue, b: this.bValue };
        const itemMap = { r: this.rItem,  g: this.gItem,  b: this.bItem  };
        const el   = elMap[channel];
        const item = itemMap[channel];

        item.classList.add('spinning');

        const startTime = Date.now();
        const interval = setInterval(() => {
            const val = Math.floor(Math.random() * 256);
            el.textContent = val;
            this[channel]  = val;

            // 실시간 색상 박스 업데이트
            this.colorDisplay.style.backgroundColor =
                `rgb(${this.r}, ${this.g}, ${this.b})`;
            this.hexValue.textContent = this.rgbToHex(this.r, this.g, this.b);

            if (Date.now() - startTime >= duration) {
                clearInterval(interval);
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
        // 2 copies for seamless looping
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
        this.reelCurrentSpeed = 120; // 빠른 속도
        this.inspirationPalette.innerHTML = '';
        if (this.spaceHint) this.spaceHint.textContent = '▶ SPACE 로 멈추기';

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
            speed *= 0.88; // 마찰계수 — 작을수록 빠르게 멈춤
            this.reelOffset += speed;
            if (this.reelOffset >= maxOffset) this.reelOffset -= maxOffset;
            this.inspirationReel.style.transform = `translateY(-${this.reelOffset}px)`;

            if (speed < 0.8) {
                // 완전 정지 → 가장 가까운 항목으로 snap
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
                    if (this.spaceHint) this.spaceHint.textContent = '▶ SPACE 로 다시 돌리기';
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
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    selectInspirationColor(hex) {
        this.setColorFromHex(hex);
        // Color Picker 탭으로 이동
        this.switchTab('picker');
    }

    // ═══════════════════════════════════════════════════════════
    //  Tab Switching
    // ═══════════════════════════════════════════════════════════

    switchTab(tabName) {
        document.querySelectorAll('.tab-content').forEach(t  => t.classList.remove('active'));
        document.querySelectorAll('.nav-tab').forEach(btn => btn.classList.remove('active'));

        const tab = document.getElementById(tabName);
        if (tab) tab.classList.add('active');

        const btn = document.querySelector(`[data-tab="${tabName}"]`);
        if (btn) btn.classList.add('active');

        if (tabName === 'inspiration') {
            if (!this.inspirationStopped) this.startInspirationReel();
        } else {
            // 다른 탭으로 가면 릴 즉시 정지
            this.reelRunning = false;
            this.reelDecelerating = false;
            cancelAnimationFrame(this.reelRAF);
        }
    }

    // ═══════════════════════════════════════════════════════════
    //  Color Library (더 많은 색)
    // ═══════════════════════════════════════════════════════════

    buildColorLibrary() {
        if (!this.colorLibrary) return;

        const categoryMeta = {
            ui_web:       { label: 'UI / 웹 기본',   icon: '🖥' },
            brand_global: { label: '글로벌 브랜드',  icon: '🌐' },
            nature:       { label: '자연 색상',       icon: '🌿' },
            pastel:       { label: '파스텔',          icon: '🌸' },
            neon_modern:  { label: '네온 / 모던',     icon: '⚡' },
            earth:        { label: '어스 톤',         icon: '🍂' },
            monochrome:   { label: '모노크롬',        icon: '⬜' },
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

        // 로드 더 버튼 숨김 (전체 표시)
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
            <div class="similar-color-item"
                 style="background-color:${hex}"
                 onclick="app.selectSimilarColor('${hex}','${name}')">
                <div class="similar-color-tooltip">
                    <span class="tooltip-name">${name}</span>
                    <span class="tooltip-hex">${hex}</span>
                </div>
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
            // 선택된 채널만 조정
            this[this.selectedChannel] = clamp(this[this.selectedChannel] + step);
        } else {
            // 기본: R → G → B 순
            if      (this.r + step >= 0 && this.r + step <= 255) this.r = clamp(this.r + step);
            else if (this.g + step >= 0 && this.g + step <= 255) this.g = clamp(this.g + step);
            else if (this.b + step >= 0 && this.b + step <= 255) this.b = clamp(this.b + step);
        }
        this.updateColor();
    }

    setSelectedChannel(channel) {
        // 같은 채널 다시 클릭하면 해제
        this.selectedChannel = this.selectedChannel === channel ? null : channel;
        [['r', this.rItem], ['g', this.gItem], ['b', this.bItem]].forEach(([ch, el]) => {
            if (el) el.classList.toggle('channel-selected', this.selectedChannel === ch);
        });
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

// Tab buttons
document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.addEventListener('click', function () {
        app.switchTab(this.getAttribute('data-tab'));
    });
});
