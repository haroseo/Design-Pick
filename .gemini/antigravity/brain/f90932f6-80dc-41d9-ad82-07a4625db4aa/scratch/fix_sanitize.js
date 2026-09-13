const fs = require('fs');

const scriptPath = 'C:\\Users\\oxoxo\\Documents\\RGBdom\\script.js';
let script = fs.readFileSync(scriptPath, 'utf8');

// 1. sanitizeInput(str) { ... } 메서드 정의
const sanitizeMethod = `
    sanitizeInput(str) {
        if (!str) return '';
        return String(str).replace(/[&<>"']/g, (m) => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;'
        })[m]);
    }
`;

// hexToRgb(hex) { 위에 주입하기
const targetMethod = "hexToRgb(hex) {";
if (script.indexOf("sanitizeInput(str) {") === -1) {
    script = script.replace(targetMethod, sanitizeMethod + '\n    ' + targetMethod);
    console.log('Successfully injected sanitizeInput method!');
}

// 2. 디버그용 try-catch 팝업 도려내고 원복하기 (배포용 클린 소스화)
// 시작부 원복: 'try {' 삭제
const debugStartStr = `window.addEventListener('DOMContentLoaded', () => {
    try {
        app = new ColorPalette();`;
const cleanStartStr = `window.addEventListener('DOMContentLoaded', () => {
    app = new ColorPalette();`;

script = script.replace(debugStartStr, cleanStartStr);

// 끝부분 원복: 'catch(err) { ... } });' 부분을 원래 'renderAcademyGuides(); });' 로 치환
const debugEndPattern = /renderAcademyGuides\(\);\r?\n?\s*\} catch\(err\) \{[\s\S]*?\}\r?\n?\}\);\s*$/;
const cleanEndStr = `renderAcademyGuides();\n});`;

script = script.replace(debugEndPattern, cleanEndStr);

fs.writeFileSync(scriptPath, script, 'utf8');
console.log('Cleaned up debug popups and finalized production code!');
