const fs = require('fs');

const scriptPath = 'C:\\Users\\oxoxo\\Documents\\RGBdom\\script.js';
let script = fs.readFileSync(scriptPath, 'utf8');

// 1. DOMContentLoaded 시작부분 찾기
const startStr = "window.addEventListener('DOMContentLoaded', () => {";
const startIdx = script.indexOf(startStr);

// 2. convertQwertyToKorean 시작부분 찾기 (이게 파일 맨 뒤에 들어가 있으므로 그 직전의 }); 를 찾으면 됨)
const functionStartStr = "function convertQwertyToKorean";
const functionStartIdx = script.indexOf(functionStartStr);

if (startIdx !== -1 && functionStartIdx !== -1) {
    // startIdx부터 functionStartIdx 사이에서 마지막 }); 의 위치 구하기
    const searchArea = script.substring(startIdx, functionStartIdx);
    const lastClosingBraceIdx = searchArea.lastIndexOf('});');
    
    if (lastClosingBraceIdx !== -1) {
        // 절대 인덱스로 변환
        const absoluteCloseIdx = startIdx + lastClosingBraceIdx;
        
        // 1. 시작 부분 try { 추가
        const preStart = script.substring(0, startIdx + startStr.length);
        const postStart = script.substring(startIdx + startStr.length);
        
        // 2. 닫는 부분 catch 추가
        const absoluteCloseIdxInPost = lastClosingBraceIdx - startStr.length; // postStart 기준 인덱스
        
        const preClose = postStart.substring(0, absoluteCloseIdxInPost);
        const postClose = postStart.substring(absoluteCloseIdxInPost + 3); // '});' 길이인 3 제외
        
        const catchBlock = `
    } catch(err) {
        const errDiv = document.createElement('div');
        errDiv.style.cssText = 'position:fixed;top:0;left:0;width:100%;background:red;color:white;padding:20px;z-index:99999;font-weight:bold;font-size:16px;word-break:break-all;text-align:center;box-shadow:0 10px 30px rgba(0,0,0,0.5);';
        errDiv.innerHTML = '🚨 브라우저 초기화 런타임 에러: ' + err.message + '<br>Stack: ' + err.stack;
        document.body.appendChild(errDiv);
        console.error(err);
    }
});`;
        
        const resultScript = preStart + '\n    try {\n' + preClose + catchBlock + postClose;
        fs.writeFileSync(scriptPath, resultScript, 'utf8');
        console.log('Successfully injected try-catch debugging popups into script.js DOMContentLoaded handler!');
    } else {
        console.error('Error: Could not locate closing brace }); in DOMContentLoaded handler');
    }
} else {
    console.error('Error: Could not match DOMContentLoaded or convertQwertyToKorean in script.js');
}
