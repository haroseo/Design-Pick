const fs = require('fs');

const cssPath = 'C:\\Users\\oxoxo\\Documents\\RGBdom\\improved.css';
let css = fs.readFileSync(cssPath, 'utf8');

// 추가적으로 다크모드 덮어쓰기 블록 내부에 넣을 스타일들 정의
const extraDarkRules = `
    .color-search-container {
        background: var(--card-bg) !important;
        border-color: var(--border-color) !important;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2) !important;
    }
    .color-search-container p {
        color: var(--text-color) !important;
    }
    .color-input {
        background: var(--input-bg) !important;
        border-color: var(--border-color) !important;
        color: var(--text-color) !important;
    }
    .color-input:focus {
        border-color: var(--accent-color) !important;
    }
    #colorSearchSort {
        background: var(--card-bg) !important;
        border-color: var(--border-color) !important;
        color: var(--text-color) !important;
    }
    .search-result-item {
        background: var(--card-bg) !important;
        border-color: var(--border-color) !important;
    }
    .search-result-item:hover {
        border-color: var(--accent-color) !important;
        background: var(--tab-hover-bg) !important;
    }
    .search-result-name {
        color: var(--text-color) !important;
    }
    .search-result-hex {
        color: var(--secondary-text) !important;
    }
    
    /* 폰트 추천 목록의 폰트 카테고리 필터링 UX 개선 */
    .font-cat-badge {
        color: var(--accent-color) !important;
        background: rgba(37, 99, 235, 0.15) !important;
    }
`;

// 기존 [data-theme="dark"] 블록의 마지막 닫는 괄호 '}' 바로 앞에 추가 스타일들을 밀어넣기
const lastBraceIdx = css.lastIndexOf('}');
if (lastBraceIdx !== -1) {
    css = css.substring(0, lastBraceIdx) + extraDarkRules + '\n}';
    fs.writeFileSync(cssPath, css, 'utf8');
    console.log('Successfully added extra dark mode styling for search and fonts into improved.css');
} else {
    console.log('Error: Could not locate the closing brace of data-theme in improved.css');
}
