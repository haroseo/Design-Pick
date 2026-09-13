const fs = require('fs');

const htmlPath = 'C:\\Users\\oxoxo\\Documents\\RGBdom\\index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

// 1. Gallery 네비게이션 탭 버튼 제거 (data-tab="gallery" 단추)
const galleryTabButtonRegex = /<button class="nav-tab" data-tab="gallery">[^]*?<\/button>\s*/;
html = html.replace(galleryTabButtonRegex, '');

// 2. Gallery 탭 영역 통째로 도려내기
// '<!-- Gallery Tab -->' 주석부터 '<!-- Export Modal -->' 주석 직전까지 모두 제거
const galleryStartIdx = html.indexOf('<!-- Gallery Tab -->');
const exportModalStartIdx = html.indexOf('<!-- Export Modal -->');

if (galleryStartIdx !== -1 && exportModalStartIdx !== -1 && galleryStartIdx < exportModalStartIdx) {
    const prePart = html.substring(0, galleryStartIdx);
    const postPart = html.substring(exportModalStartIdx);
    html = prePart + '\n    ' + postPart;
    console.log('Successfully cut out the entire Gallery Tab block safely!');
} else {
    console.error('Error: Could not locate Gallery Tab or Export Modal markers!');
}

// 3. 색상 검색창 UI 확장 및 정렬 드롭다운 추가
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

// 4. 상세 뷰 메인 스와치 아래 피킹 버튼 마크업 추가
const swatchTarget = `<div id="detailSwatch" class="main-swatch-v2">
                            <div class="swatch-inner-info">
                                <span id="detailHexLabel">#000000</span>
                                <span id="detailRgbLabel">rgb(0, 0, 0)</span>
                            </div>
                        </div>`;

const swatchReplacement = `<div id="detailSwatch" class="main-swatch-v2">
                            <div class="swatch-inner-info">
                                <span id="detailHexLabel">#000000</span>
                                <span id="detailRgbLabel">rgb(0, 0, 0)</span>
                            </div>
                        </div>
                        <button class="btn-copy-full" id="detailPickBtn" onclick="app.pickDetailColor()" style="margin-top: 16px; background: var(--text-color); color: var(--bg-color); font-weight: 800; padding: 14px 20px; border-radius: 16px; border: none; cursor: pointer; transition: all 0.2s; font-size: 14px; width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;">
                            🎯 이 색상 피킹하여 편집하기 (Edit in Picker)
                        </button>`;

html = html.replace(swatchTarget, swatchReplacement);

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Successfully applied all changes to index.html safely!');
