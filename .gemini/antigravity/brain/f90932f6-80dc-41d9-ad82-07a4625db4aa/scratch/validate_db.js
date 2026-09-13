const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\oxoxo\\Documents\\RGBdom\\data.js', 'utf8');

// data.js 파일 내용 평가
eval(content + `
(() => {
    console.log("=== DATA.JS INTEGRITY CHECK ===");
    
    // designerColors 검증
    if (typeof designerColors === 'undefined') {
        console.error("Error: designerColors is undefined!");
        return;
    }
    
    let colorCount = 0;
    let missingHexCount = 0;
    
    for (const [cat, colors] of Object.entries(designerColors)) {
        if (!Array.isArray(colors)) {
            console.error("Error: designerColors[" + cat + "] is not an array!");
            continue;
        }
        colors.forEach((c, idx) => {
            if (!c || typeof c !== 'object') {
                console.error("Error: Invalid color object at", cat, idx);
                missingHexCount++;
            } else if (!c.hex) {
                console.error("Error: Missing hex property in color object at", cat, idx, c);
                missingHexCount++;
            } else {
                colorCount++;
            }
        });
    }
    
    console.log("Validated total colors:", colorCount);
    console.log("Missing hex count:", missingHexCount);
    
    // designFonts 검증
    if (typeof designFonts === 'undefined') {
        console.error("Error: designFonts is undefined!");
    } else {
        console.log("Validated total fonts:", designFonts.length);
        designFonts.forEach((f, idx) => {
            if (!f.family) console.error("Error: Missing family in font at", idx, f);
            if (!f.name) console.error("Error: Missing name in font at", idx, f);
        });
    }
})();
`);
