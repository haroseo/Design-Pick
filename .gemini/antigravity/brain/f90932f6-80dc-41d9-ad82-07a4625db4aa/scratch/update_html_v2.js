const fs = require('fs');

const htmlPath = 'C:\\Users\\oxoxo\\Documents\\RGBdom\\index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

// 1. 상세 페이지 메인 스와치 아래 피킹 버튼 마크업 추가
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
console.log('Successfully added Detail Picking button to index.html');
