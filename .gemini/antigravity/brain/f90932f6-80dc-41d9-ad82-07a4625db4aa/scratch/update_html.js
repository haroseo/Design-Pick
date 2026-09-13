const fs = require('fs');

const htmlPath = 'C:\\Users\\oxoxo\\Documents\\RGBdom\\index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

// 1. Gallery 네비게이션 탭 버튼 제거
const galleryTabButtonRegex = /<button class="nav-tab" data-tab="gallery">[^]*?<\/button>/;
html = html.replace(galleryTabButtonRegex, '');

// 2. Gallery 탭 콘텐츠 제거
const galleryTabContentRegex = /<!-- Gallery Tab -->[^]*?<div id="gallery" class="tab-content">[^]*?<\/div>\s*?<\/div>\s*?<\/div>/;
const galleryTabContentAlternativeRegex = /<div id="gallery" class="tab-content">[^]*?<\/div>\s*?<\/div>\s*?<\/div>/;

if (galleryTabContentRegex.test(html)) {
    html = html.replace(galleryTabContentRegex, '');
} else {
    html = html.replace(galleryTabContentAlternativeRegex, '');
}

// 3. 색상 검색 영역을 더 크게 확장하고 정렬 옵션 추가
const searchOldRegex = /<!-- 색상 검색 -->[^]*?<div class="color-search">[^]*?<input[^]*?id="colorInput"[^]*?>[^]*?<div class="search-results" id="searchResults"><\/div>[^]*?<\/div>/;
const searchReplacement = `<!-- 색상 검색 (확장 및 정렬 옵션 탑재) -->
            <div class="color-search-container" style="margin-top: 40px; padding: 24px; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.03);">
                <p style="font-weight: 800; font-size: 15px; margin-bottom: 12px; color: var(--text-color); display: flex; align-items: center; gap: 6px;">
                    🔍 <span data-i18n="search_title">색상 라이브러리 실시간 검색</span>
                </p>
                <div class="search-input-wrapper" style="display: flex; gap: 12px; align-items: center;">
                    <input
                        type="text"
                        id="colorInput"
                        class="color-input"
                        placeholder="색상 이름 또는 영타 검색 (예: 빨강, 민트, rkdmf)"
                        data-i18n-placeholder="search_placeholder"
                        style="flex: 1; padding: 14px 20px; border-radius: 14px; border: 1px solid var(--border-color); background: var(--input-bg); color: var(--text-color); font-size: 15px; font-weight: 600; outline: none; transition: border-color 0.2s;"
                    >
                    <select id="colorSearchSort" style="padding: 14px 18px; border-radius: 14px; border: 1px solid var(--border-color); background: var(--card-bg); color: var(--text-color); font-size: 14px; font-weight: 700; cursor: pointer; outline: none; transition: border-color 0.2s;">
                        <option value="relevance" selected>🎯 관련도순</option>
                        <option value="name_asc">🔤 이름 오름차순</option>
                        <option value="name_desc">🔤 이름 내림차순</option>
                        <option value="hex_asc">🎨 HEX 순</option>
                    </select>
                </div>
                <div class="search-results" id="searchResults" style="margin-top: 16px;"></div>
            </div>`;

html = html.replace(searchOldRegex, searchReplacement);

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Successfully updated index.html - removed Gallery, expanded search with sort select');
