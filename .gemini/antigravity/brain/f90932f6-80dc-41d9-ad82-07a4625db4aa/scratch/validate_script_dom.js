const fs = require('fs');

const html = fs.readFileSync('C:\\Users\\oxoxo\\Documents\\RGBdom\\index.html', 'utf8');
const script = fs.readFileSync('C:\\Users\\oxoxo\\Documents\\RGBdom\\script.js', 'utf8');

console.log("=== CHECKING DOM ID MATCHES IN SCRIPT.JS ===");

// 1. script.js에서 document.getElementById(...) 패턴 추출
const idRegex = /document\.getElementById\(['"]([^'"]+)['"]\)/g;
const idsInScript = [];
let match;

while ((match = idRegex.exec(script)) !== null) {
    idsInScript.push(match[1]);
}

const uniqueIds = Array.from(new Set(idsInScript));
console.log("Found", uniqueIds.length, "unique IDs in script.js");

let missingCount = 0;
uniqueIds.forEach(id => {
    // index.html 내에 해당 id가 존재하는지 검색 (id="아이디" 또는 id='아이디')
    const hasId = html.includes(`id="${id}"`) || html.includes(`id='${id}'`) || html.includes(`id=${id}`);
    
    // 예외 처리 (동적으로 렌더링되거나 script.js에서 옵셔널 체이닝 `?.`을 쓰는 경우)
    // 단, ?. 없이 addEventListener를 걸면 null 에러가 남!
    if (!hasId) {
        // script.js 내에서 해당 ID 뒤에 ?. 이 붙지 않고 바로 사용되는 지 확인
        const usageRegex = new RegExp(`document\\.getElementById\\(['"]${id}['"]\\)(?!\\?\\.)`, 'g');
        const isDangerous = usageRegex.test(script);
        
        console.warn(`Warning: ID "${id}" not found in index.html.` + (isDangerous ? " 🔴 DANGEROUS (No optional chaining!)" : " 🟢 Safe (Optional chaining used or not chained)"));
        if (isDangerous) missingCount++;
    }
});

console.log("Dangerous missing IDs count:", missingCount);
