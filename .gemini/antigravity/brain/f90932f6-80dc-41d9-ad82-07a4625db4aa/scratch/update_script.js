const fs = require('fs');

const scriptPath = 'C:\\Users\\oxoxo\\Documents\\RGBdom\\script.js';
let script = fs.readFileSync(scriptPath, 'utf8');

// 1. Qwerty -> 한글 2벌식 변환 오토마타 함수 코드 정의
const automataFunction = `
function convertQwertyToKorean(englishText) {
    if (!englishText) return '';
    const englishToKoreanMap = {
        'a': 'ㅁ', 'b': 'ㅠ', 'c': 'ㅊ', 'd': 'ㅇ', 'e': 'ㄷ', 'f': 'ㄹ', 'g': 'ㅎ', 'h': 'ㅗ',
        'i': 'ㅑ', 'j': 'ㅓ', 'k': 'ㅏ', 'l': 'ㅣ', 'm': 'ㅡ', 'n': 'ㅜ', 'o': 'ㅐ', 'p': 'ㅔ',
        'q': 'ㅂ', 'r': 'ㄱ', 's': 'ㄴ', 't': 'ㅅ', 'u': 'ㅕ', 'v': 'ㅍ', 'w': 'ㅈ', 'x': 'ㅌ',
        'y': '요', 'z': 'ㅋ',
        'A': 'ㅁ', 'B': 'ㅠ', 'C': 'ㅊ', 'D': 'ㅇ', 'E': 'ㄸ', 'F': 'ㄹ', 'G': 'ㅎ', 'H': 'ㅗ',
        'I': 'ㅑ', 'J': 'ㅓ', 'K': 'ㅏ', 'L': 'ㅣ', 'M': 'ㅡ', 'N': 'ㅜ', 'O': 'ㅐ', 'P': 'ㅔ',
        'Q': 'ㅂ', 'R': 'ㄱ', 'S': 'ㄴ', 'T': 'ㅅ', 'U': 'ㅕ', 'V': 'ㅍ', 'W': 'ㅈ', 'X': 'ㅌ',
        'Y': 'ㅛ', 'Z': 'ㅋ'
    };

    let letters = '';
    for (let i = 0; i < englishText.length; i++) {
        const char = englishText[i];
        letters += englishToKoreanMap[char] || char;
    }

    const choList = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
    const jungList = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
    const jongList = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
    
    const doubleJongMap = {
        'ㄱㅅ': 'ㄳ', 'ㄴㅈ': 'ㄵ', 'ㄴㅎ': 'ㄶ',
        'ㄹㄱ': 'ㄺ', 'ㄹㅁ': 'ㄻ', 'ㄹㅂ': 'ㄼ', 'ㄹㅅ': 'ㄽ', 'ㄹㅌ': 'ㄾ', 'ㄹㅍ': 'ㄿ', 'ㄹㅎ': 'ㅀ',
        'ㅂㅅ': 'ㅄ'
    };
    const doubleJungMap = {
        'ㅗㅏ': 'ㅘ', 'ㅗㅐ': 'ㅙ', 'ㅗㅣ': 'ㅚ',
        'ㅜㅓ': 'ㅝ', 'ㅜㅔ': 'ㅞ', 'ㅜㅣ': 'ㅟ',
        'ㅡㅣ': 'ㅢ'
    };

    const array = letters.split('');
    let result = '';
    let i = 0;

    while (i < array.length) {
        let cho = array[i];
        let choIdx = choList.indexOf(cho);

        if (choIdx === -1) {
            result += cho;
            i++;
            continue;
        }

        if (i + 1 >= array.length) {
            result += cho;
            break;
        }

        let jung = array[i + 1];
        let jungIdx = jungList.indexOf(jung);

        if (jungIdx === -1) {
            result += cho;
            i++;
            continue;
        }

        if (i + 2 < array.length) {
            const nextJung = array[i + 2];
            const combinedJung = doubleJungMap[jung + nextJung];
            if (combinedJung) {
                jung = combinedJung;
                jungIdx = jungList.indexOf(combinedJung);
                array.splice(i + 2, 1);
            }
        }

        let jong = '';
        let jongIdx = 0;

        if (i + 2 < array.length) {
            let possibleJong = array[i + 2];
            let possibleJongIdx = jongList.indexOf(possibleJong);

            let isNextVowel = false;
            if (i + 3 < array.length) {
                if (jungList.indexOf(array[i + 3]) !== -1) {
                    isNextVowel = true;
                }
            }

            if (possibleJongIdx !== -1 && !isNextVowel) {
                if (i + 3 < array.length) {
                    const nextNextJong = array[i + 3];
                    const combinedJong = doubleJongMap[possibleJong + nextNextJong];
                    let isNextNextVowel = false;
                    if (i + 4 < array.length) {
                        if (jungList.indexOf(array[i + 4]) !== -1) {
                            isNextNextVowel = true;
                        }
                    }

                    if (combinedJong && !isNextNextVowel) {
                        jong = combinedJong;
                        jongIdx = jongList.indexOf(combinedJong);
                        i += 2;
                    } else {
                        jong = possibleJong;
                        jongIdx = possibleJongIdx;
                        i += 1;
                    }
                } else {
                    jong = possibleJong;
                    jongIdx = possibleJongIdx;
                    i += 1;
                }
            }
        }

        const code = (choIdx * 21 + jungIdx) * 28 + jongIdx + 0xAC00;
        result += String.fromCharCode(code);
        i += 2;
    }
    return result;
}

function findSimilarColors(r, g, b, count = 8) {
    if (typeof designerColors === 'undefined') return [];
    const distances = [];
    
    // designerColors의 모든 색상(210개)에서 유사성 대조군 수집
    for (const colors of Object.values(designerColors)) {
        for (const c of colors) {
            const hex = c.hex.replace('#', '');
            const cr = parseInt(hex.substring(0, 2), 16);
            const cg = parseInt(hex.substring(2, 4), 16);
            const cb = parseInt(hex.substring(4, 6), 16);
            
            const distance = Math.sqrt((cr - r) ** 2 + (cg - g) ** 2 + (cb - b) ** 2);
            
            if (!distances.some(x => x.hex.toLowerCase() === c.hex.toLowerCase())) {
                distances.push({ name: c.name, name_en: c.name_en, hex: c.hex, distance });
            }
        }
    }
    
    return distances.sort((a, b) => a.distance - b.distance).slice(0, count);
}
`;

// 2. script.js 맨 끝에 오토마타와 유사색 검출 함수 삽입
script = script + "\n\n" + automataFunction;

// 3. script.js 내의 이벤트 초기화 리스너 추가 (colorSearchSort 변경 감지)
const searchInputListener = "this.colorInput?.addEventListener('input', () => this.searchColor());";
const searchInputListenerReplacement = "this.colorInput?.addEventListener('input', () => this.searchColor());\n        document.getElementById('colorSearchSort')?.addEventListener('change', () => this.searchColor());";
script = script.replace(searchInputListener, searchInputListenerReplacement);

// 4. searchColor() 함수 고도화 및 정렬 조건에 맞춤 구현
const searchColorOldRegex = /searchColor\(\) \{ const q = this\.sanitizeInput\(this\.colorInput\.value\)\.toLowerCase\(\);[^]*?\}\s*?\}/;

// 백틱 중첩 파싱 에러 방지를 위해 일반 문자열 접합 형태로 구성
const searchColorReplacement = `searchColor() {
        const queryVal = this.sanitizeInput(this.colorInput.value).trim();
        if (!queryVal) {
            this.searchResults.innerHTML = '';
            return;
        }

        const q = queryVal.toLowerCase();
        // 영타 오타 한글 보정 변환값 구하기 (예: rkdmf -> 가을)
        const korQ = convertQwertyToKorean(queryVal).toLowerCase();
        const sortSelect = document.getElementById('colorSearchSort');
        const sortMode = sortSelect ? sortSelect.value : 'relevance';

        // 1. 전체 색상 데이터 수집 (designerColors + colorNameReferences 합치기 및 중복 제거)
        const allColorsMap = new Map();

        // designerColors에서 수집
        if (typeof designerColors !== 'undefined') {
            for (const colors of Object.values(designerColors)) {
                for (const c of colors) {
                    allColorsMap.set(c.hex.toLowerCase(), {
                        name: c.name,
                        name_en: c.name_en || '',
                        hex: c.hex,
                        tags: []
                    });
                }
            }
        }

        // colorNameReferences에서 수집 (태그 보강)
        if (typeof colorNameReferences !== 'undefined') {
            for (const [name, color] of Object.entries(colorNameReferences)) {
                const hexKey = color.hex.toLowerCase();
                const existing = allColorsMap.get(hexKey) || { name: name, name_en: color.name_en || '', hex: color.hex, tags: [] };
                existing.tags = Array.from(new Set([...(existing.tags || []), ...(color.tags || [])]));
                allColorsMap.set(hexKey, existing);
            }
        }

        const list = Array.from(allColorsMap.values());
        const results = [];

        // 2. 가중치 계산 루프
        for (const item of list) {
            let score = 0;
            const nameKo = item.name.toLowerCase();
            const nameEn = item.name_en.toLowerCase();
            const hex = item.hex.toLowerCase();
            const tags = item.tags.map(t => t.toLowerCase());

            // 원래 검색어(q) 기준 가중치
            if (nameKo === q || nameEn === q) score += 100;
            else if (nameKo.startsWith(q) || nameEn.startsWith(q)) score += 80;
            else if (nameKo.includes(q) || nameEn.includes(q)) score += 50;

            if (hex.includes(q)) score += 20;
            if (tags.some(t => t === q)) score += 40;
            else if (tags.some(t => t.includes(q))) score += 20;

            // 한글 변환 검색어(korQ) 기준 가중치 (영타로 쳤을 경우 가산점)
            if (korQ && korQ !== q) {
                if (nameKo === korQ) score += 90;
                else if (nameKo.startsWith(korQ)) score += 70;
                else if (nameKo.includes(korQ)) score += 40;
                if (tags.some(t => t === korQ)) score += 30;
                else if (tags.some(t => t.includes(korQ))) score += 15;
            }

            if (score > 0) {
                results.push({ item, score });
            }
        }

        // 3. 정렬 모드 적용
        if (sortMode === 'relevance') {
            results.sort((a, b) => b.score - a.score || a.item.name.localeCompare(b.item.name));
        } else if (sortMode === 'name_asc') {
            results.sort((a, b) => a.item.name.localeCompare(b.item.name));
        } else if (sortMode === 'name_desc') {
            results.sort((a, b) => b.item.name.localeCompare(a.item.name));
        } else if (sortMode === 'hex_asc') {
            results.sort((a, b) => a.item.hex.localeCompare(b.item.hex));
        }

        // 4. 최대 16개 노출 및 렌더링
        const displayLimit = 16;
        const sliced = results.slice(0, displayLimit);

        if (sliced.length === 0) {
            const emptyText = this.lang === 'kr' ? '검색 결과가 없습니다.' : 'No results found.';
            this.searchResults.innerHTML = '<div style="grid-column:1/-1; padding:20px; text-align:center; color:var(--secondary-text); font-weight:700;">' + emptyText + '</div>';
            return;
        }

        let innerHTML = '';
        for (let idx = 0; idx < sliced.length; idx++) {
            const item = sliced[idx].item;
            const displayName = (this.lang === 'en' && item.name_en) ? item.name_en : item.name;
            innerHTML += '<div class="search-result-item" onclick="app.setColorFromHex(\\'' + item.hex + '\\'); app.showToast(\\'' + displayName + '\\')" ' +
                         'style="display:flex; align-items:center; gap:12px; padding:12px; border-radius:14px; border:1px solid var(--border-color); background:var(--card-bg); cursor:pointer; transition:all 0.2s; box-shadow:0 2px 8px rgba(0,0,0,0.02);" ' +
                         'onmouseover="this.style.transform=\\'translateY(-2px)\\'; this.style.borderColor=\\'var(--accent-color)\\';" ' +
                         'onmouseout="this.style.transform=\\'none\\'; this.style.borderColor=\\'var(--border-color)\\';">' +
                         '<div class="search-result-color" style="width:36px; height:36px; border-radius:10px; background-color:' + item.hex + '; border:1px solid rgba(0,0,0,0.05); flex-shrink:0;"></div>' +
                         '<div class="search-result-info" style="display:flex; flex-direction:column; gap:2px; overflow:hidden;">' +
                         '<div class="search-result-name" style="font-weight:800; font-size:14px; color:var(--text-color); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">' + displayName + '</div>' +
                         '<div class="search-result-hex" style="font-family:\\'Monaco\\', monospace; font-size:11px; color:var(--secondary-text);">' + item.hex + '</div>' +
                         '</div>' +
                         '</div>';
        }
        this.searchResults.innerHTML = innerHTML;
    }`;

script = script.replace(searchColorOldRegex, searchColorReplacement);

fs.writeFileSync(scriptPath, script, 'utf8');
console.log('Successfully updated script.js with advanced search engine, auto keyboard converter and fix for similarColors!');
