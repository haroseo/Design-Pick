class ColorPalette {
    constructor() {
        // Elements
        this.colorDisplay = document.getElementById('colorDisplay');
        this.rValue = document.getElementById('rValue');
        this.gValue = document.getElementById('gValue');
        this.bValue = document.getElementById('bValue');
        this.hexValue = document.getElementById('hexValue');
        this.resetBtn = document.getElementById('resetBtn');
        this.hexCopyBtn = document.getElementById('hexCopyBtn');
        this.rgbCopyBtn = document.getElementById('rgbCopyBtn');
        this.colorInput = document.getElementById('colorInput');
        this.searchResults = document.getElementById('searchResults');
        this.similarColors = document.getElementById('similarColors');
        this.inspirationCarousel = document.getElementById('inspirationCarousel');
        this.designName = document.getElementById('designName');
        this.inspirationPalette = document.getElementById('inspirationPalette');
        this.colorLibrary = document.getElementById('colorLibrary');
        this.loadMoreBtn = document.getElementById('loadMoreBtn');
        this.toast = document.getElementById('toast');

        // State
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.designIndex = 0;
        this.designStep = 0;
        this.isDesignRunning = false;
        this.colorLibraryPage = 0;

        this.init();
    }

    init() {
        this.updateColor();
        this.startStep();
        
        // Event listeners
        this.resetBtn.addEventListener('click', () => this.reset());
        this.hexCopyBtn.addEventListener('click', () => this.copyToClipboard('hex'));
        this.rgbCopyBtn.addEventListener('click', () => this.copyToClipboard('rgb'));
        this.colorInput.addEventListener('input', () => this.searchColor());
        this.loadMoreBtn.addEventListener('click', () => this.loadMoreColors());
        
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));

        // Display similar colors initially
        this.displaySimilarColors();

        // Load initial colors
        this.loadMoreColors();
    }

    updateColor() {
        const hex = this.rgbToHex(this.r, this.g, this.b);
        // rgb()로 직접 설정 — 가장 확실한 방법
        this.colorDisplay.style.backgroundColor = `rgb(${this.r}, ${this.g}, ${this.b})`;
        this.hexValue.textContent = hex;
        this.rValue.textContent = this.r;
        this.gValue.textContent = this.g;
        this.bValue.textContent = this.b;
        this.displaySimilarColors();
    }

    startStep() {
        this.isDesignRunning = true;
        this.designStep = 0;
        this.showDesignPalette();
    }

    stopStep() {
        this.isDesignRunning = false;
    }

    showDesignPalette() {
        if (!this.isDesignRunning) return;

        const designs = designInspiration;
        const design = designs[this.designIndex];

        this.designName.innerHTML = `<p>${design.name}</p>`;
        this.inspirationPalette.innerHTML = design.colors
            .map((color) => `<div class="palette-color" style="background-color: ${color}" onclick="app.setColorFromHex('${color}')"></div>`)
            .join('');

        this.designStep++;

        if (this.designStep < 2) {
            setTimeout(() => this.showDesignPalette(), 3000);
        }
    }

    switchTab(tabName) {
        // Hide all tabs
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });

        // Remove active class from all buttons
        document.querySelectorAll('.nav-tab').forEach(btn => {
            btn.classList.remove('active');
        });

        // Show selected tab
        const selectedTab = document.getElementById(tabName);
        if (selectedTab) {
            selectedTab.classList.add('active');
        }

        // Add active class to clicked button
        event.target.classList.add('active');

        // Stop design running when switching away from inspiration tab
        if (tabName !== 'inspiration') {
            this.stopStep();
        } else {
            this.startStep();
        }

        // Setup color library scrolling
        if (tabName === 'colors') {
            this.setupColorLibraryScrolling();
        }
    }

    loadMoreColors() {
        const ITEMS_PER_PAGE = 20;
        const startIdx = this.colorLibraryPage * ITEMS_PER_PAGE;
        const allColors = [];

        // Collect all colors from designerColors object
        for (const [categoryName, colors] of Object.entries(designerColors)) {
            colors.forEach(color => {
                allColors.push({ ...color, category: categoryName });
            });
        }

        const endIdx = startIdx + ITEMS_PER_PAGE;
        const colorsToLoad = allColors.slice(startIdx, endIdx);

        if (colorsToLoad.length === 0) return;

        // Generate HTML
        const colorHTML = colorsToLoad.map(color => `
            <div class="color-library-item" onclick="app.setColorFromHex('${color.hex}')">
                <div class="color-library-box" style="background-color: ${color.hex}">
                    <div class="color-library-info-popup">
                        <div class="color-library-hex">${color.hex}</div>
                        <div class="color-library-category">${this.getCategoryLabel(color.category)}</div>
                    </div>
                </div>
                <div class="color-library-name">${this.sanitizeInput(color.name)}</div>
            </div>
        `).join('');

        this.colorLibrary.innerHTML += colorHTML;
        this.colorLibraryPage++;

        // Update button
        const totalColors = allColors.length;
        const loadedColors = Math.min(this.colorLibraryPage * ITEMS_PER_PAGE, totalColors);

        if (loadedColors >= totalColors) {
            this.loadMoreBtn.style.display = 'none';
        } else {
            this.loadMoreBtn.textContent = `더 로드 (${loadedColors}/${totalColors})`;
        }
    }

    setupColorLibraryScrolling() {
        const container = document.querySelector('.color-library-container');
        if (!container) return;

        container.addEventListener('scroll', () => {
            this.checkInfiniteScroll();
        });
    }

    checkInfiniteScroll() {
        const container = document.querySelector('.color-library-container');
        if (!container) return;

        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight;
        const clientHeight = container.clientHeight;

        // Trigger when 80% scrolled
        if (scrollTop + clientHeight >= scrollHeight * 0.8) {
            if (this.loadMoreBtn.style.display !== 'none') {
                this.loadMoreColors();
            }
        }
    }

    getCategoryLabel(category) {
        const labels = {
            'neutral': '중립',
            'brand': '브랜드',
            'modern': '현대',
            'popular': '인기'
        };
        return labels[category] || category;
    }

    rgbToHex(r, g, b) {
        return '#' + [r, g, b].map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('').toUpperCase();
    }

    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
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
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.updateColor();
        this.showToast('리셋되었습니다');
    }

    copyToClipboard(type) {
        let text;
        if (type === 'hex') {
            text = this.hexValue.textContent;
        } else if (type === 'rgb') {
            text = `rgb(${this.r}, ${this.g}, ${this.b})`;
        }

        navigator.clipboard.writeText(text).then(() => {
            if (type === 'hex') {
                this.showToast('HEX 복사됨');
            } else {
                this.showToast('RGB 복사됨');
            }
        });
    }

    displaySimilarColors() {
        const similar = findSimilarColors(this.r, this.g, this.b);
        this.similarColors.innerHTML = similar
            .map(color => `
                <div 
                    class="similar-color-item" 
                    style="background-color: ${color.hex}" 
                    onclick="app.setColorFromHex('${color.hex}')"
                    title="${color.name}"
                ></div>
            `)
            .join('');
    }

    searchColor() {
        const query = this.sanitizeInput(this.colorInput.value).toLowerCase();
        if (!query) {
            this.searchResults.innerHTML = '';
            return;
        }

        const results = [];
        for (const [name, color] of Object.entries(colorNameReferences)) {
            if (name.toLowerCase().includes(query) || color.tags.some(tag => tag.includes(query))) {
                results.push({ name, color });
            }
        }

        this.searchResults.innerHTML = results.slice(0, 10)
            .map(({ name, color }) => `
                <div 
                    class="search-result-item" 
                    onclick="app.setColorFromHex('${color.hex}')"
                >
                    <div class="search-result-color" style="background-color: ${color.hex}"></div>
                    <div class="search-result-info">
                        <div class="search-result-name">${name}</div>
                        <div class="search-result-hex">${color.hex}</div>
                    </div>
                </div>
            `)
            .join('');
    }

    sanitizeInput(input) {
        const div = document.createElement('div');
        div.textContent = input;
        return div.innerHTML.substring(0, 50);
    }

    handleKeyPress(e) {
        if (e.code === 'Space') {
            e.preventDefault();
            if (this.isDesignRunning) {
                const currentDesign = designInspiration[this.designIndex];
                const randomColor = currentDesign.colors[Math.floor(Math.random() * currentDesign.colors.length)];
                this.setColorFromHex(randomColor);
                this.stopStep();
            } else {
                this.designIndex = (this.designIndex + 1) % designInspiration.length;
                this.startStep();
            }
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            e.preventDefault();
            const step = e.key === 'ArrowLeft' ? -1 : 1;
            const [selector] = document.querySelectorAll('.nav-tab');
            
            if (selector && selector.classList.contains('active')) {
                this.adjustColor(step);
            }
        }
    }

    adjustColor(step) {
        if (this.r + step >= 0 && this.r + step <= 255) this.r += step;
        else if (this.g + step >= 0 && this.g + step <= 255) this.g += step;
        else if (this.b + step >= 0 && this.b + step <= 255) this.b += step;
        
        this.updateColor();
    }

    showToast(message) {
        this.toast.textContent = message;
        this.toast.classList.add('show');
        setTimeout(() => {
            this.toast.classList.remove('show');
        }, 2000);
    }
}

const app = new ColorPalette();

// Setup tab switching
document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.addEventListener('click', function() {
        app.switchTab(this.getAttribute('data-tab'));
    });
});
