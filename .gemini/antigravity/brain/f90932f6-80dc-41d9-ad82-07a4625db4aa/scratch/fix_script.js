const fs = require('fs');

const scriptPath = 'C:\\Users\\oxoxo\\Documents\\RGBdom\\script.js';
let script = fs.readFileSync(scriptPath, 'utf8');

// 1. pickDetailColor() 메서드 정의 추가
const pickDetailColorMethod = `
    pickDetailColor() {
        const hex = document.getElementById('detailHexLabel')?.textContent;
        if (hex) {
            this.setColorFromHex(hex);
            this.switchTab('picker');
            this.showToast(this.lang === 'kr' ? '색상이 피커에 세팅되었습니다!' : 'Color loaded in Picker!');
        }
    }
`;

// script.js에 pickDetailColorMethod가 아직 없는지 확인 후, closeColorDetail() 메서드 위에 붙여넣기
if (script.indexOf('pickDetailColor()') === -1) {
    const targetCloseMethod = 'closeColorDetail() {';
    script = script.replace(targetCloseMethod, pickDetailColorMethod + '\n    ' + targetCloseMethod);
}

// 2. 하모니 배색 추천 그리드의 칩 클릭 시 피커 전환 연동 피킹
// 기존: onclick="app.openColorDetail('Harmony Color', '${toHex(hue)}')"
// 변경: onclick="app.setColorFromHex('${toHex(hue)}'); app.switchTab('picker'); app.showToast(app.lang === 'kr' ? '배색 피킹 완료!' : 'Color Picked!')"
const harmonyOldStr = `title="\${toHex(hue)}" onclick="app.openColorDetail('Harmony Color', '\${toHex(hue)}')"`
const harmonyNewStr = `title="\${toHex(hue)} (클릭 시 피킹)" onclick="app.setColorFromHex('\${toHex(hue)}'); app.switchTab('picker'); app.showToast(app.lang === 'kr' ? '배색 피킹 완료!' : 'Color Picked!')"`;

script = script.replace(harmonyOldStr, harmonyNewStr);

// 3. 유사색 추천 리스트의 미니 스와치 클릭 시 피커 전환 연동 피킹
// 기존: onclick="app.openColorDetail('${c.name}', '${c.hex}')"
// 변경: onclick="app.setColorFromHex('${c.hex}'); app.switchTab('picker'); app.showToast('${c.name} 피킹 완료!')"
const similarOldStr = `onclick="app.openColorDetail('\${c.name}', '\${c.hex}')"`;
const similarNewStr = `onclick="app.setColorFromHex('\${c.hex}'); app.switchTab('picker'); app.showToast('\${c.name} 피킹 완료!')"`;

script = script.replace(similarOldStr, similarNewStr);

fs.writeFileSync(scriptPath, script, 'utf8');
console.log('Successfully injected Picking actions into script.js harmonies and similar swatches!');
