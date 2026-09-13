const fs = require('fs');

const dataFilePath = 'C:\\Users\\oxoxo\\Documents\\RGBdom\\data.js';

// 기존 데이터파일 읽기
const dataJSContent = fs.readFileSync(dataFilePath, 'utf8');

// 35종 이상의 디자이너 추천 폰트 리스트 (모노스페이스, 손글씨, 산세리프, 세리프 등 완벽 분류)
const designFonts = [
    {
        id: 'f01',
        name: 'Pretendard',
        family: "'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
        url: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css',
        category: 'Sans-Serif',
        category_kr: '가독성 본문용 (고딕)',
        pair: 'Inter',
        note: '현대 한국 웹/앱 인터페이스의 독보적인 표준입니다. 글자 정렬과 가독성 설계가 완벽합니다.',
        note_en: 'The absolute standard for Korean web/app UI. Perfect legibility and alignment.',
        sample: '디자인은 단순한 모양이 아닌, 문제가 해결되는 방식입니다.'
    },
    {
        id: 'f02',
        name: 'Inter',
        family: "'Inter', sans-serif",
        url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&display=swap',
        category: 'Sans-Serif',
        category_kr: '가독성 본문용 (영문)',
        pair: 'Pretendard',
        note: '글로벌 IT 기업들이 표준으로 채택하는 UI 최적화 영문 폰트입니다.',
        note_en: 'The gold standard for modern web UI. Chosen by major tech corporations.',
        sample: 'Design is not just what it looks like and feels like.'
    },
    {
        id: 'f03',
        name: 'SUIT',
        family: "'SUIT', sans-serif",
        url: 'https://cdn.jsdelivr.net/gh/sun-typeface/SUIT/fonts/static/woff2/SUIT.css',
        category: 'Sans-Serif',
        category_kr: '기하학적 본문용 (한글)',
        pair: 'Poppins',
        note: '곡선과 직선의 비례가 기하학적으로 무척 세련된 현대적인 본문 서체입니다.',
        note_en: 'Modern Korean UI typeface with sophisticated geometric curves and proportions.',
        sample: '가장 직관적이면서 사용하기 쉬운 레이아웃을 완성합니다.'
    },
    {
        id: 'f04',
        name: 'Poppins',
        family: "'Poppins', sans-serif",
        url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap',
        category: 'Sans-Serif',
        category_kr: '트렌디한 라운드 (영문)',
        pair: 'Lora',
        note: '기하학적으로 둥글고 밝은 인상을 지녀, 스타트업과 테크 기업 브랜딩에 적합합니다.',
        note_en: 'Geometric and friendly rounded font. Highly popular in startup branding.',
        sample: 'Everything is designed. Few things are designed well.'
    },
    {
        id: 'f05',
        name: 'Montserrat',
        family: "'Montserrat', sans-serif",
        url: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap',
        category: 'Display',
        category_kr: '주목성 높은 제목용 (영문)',
        pair: 'Open Sans',
        note: '기하학적이고 단단한 구조의 폰트로, 크고 두꺼운 타이틀이나 헤드라인에 아주 강렬합니다.',
        note_en: 'Strong geometric sans-serif. Ideal for big, bold typography and headlines.',
        sample: 'The detail is not the detail. It is the design.'
    },
    {
        id: 'f06',
        name: 'Gmarket Sans',
        family: "'GmarketSans', sans-serif",
        url: 'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GmarketSansMTBold.woff',
        category: 'Display',
        category_kr: '주목성 높은 제목용 (한글)',
        pair: 'Pretendard',
        note: '정사각형 틀에 꽉 찬 기하학적 형태. 포스터, 광고 배너 등의 타이틀로 독보적입니다.',
        note_en: 'Filled geometric shape in a square box. Highly popular for banner headlines.',
        sample: '시선을 단번에 사로잡는 강력한 브랜딩 서체.'
    },
    {
        id: 'f07',
        name: 'Nanum Myeongjo',
        family: "'Nanum Myeongjo', serif",
        url: 'https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap',
        category: 'Serif',
        category_kr: '품격 있는 세리프 (한글)',
        pair: 'Pretendard',
        note: '정갈한 삐침과 한국적인 품격이 담긴 전통 명조 서체입니다. 신뢰감과 감성을 함께 전합니다.',
        note_en: 'Classic Korean serif typeface. Conveys a warm, trustworthy, and emotional tone.',
        sample: '글자 하나에 진심과 정성을 정갈하게 눌러 담았습니다.'
    },
    {
        id: 'f08',
        name: 'Playfair Display',
        family: "'Playfair Display', serif",
        url: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;1,600&display=swap',
        category: 'Serif',
        category_kr: '우아한 세리프 (영문)',
        pair: 'Montserrat',
        note: '패션, 뷰티, 하이엔드 럭셔리 브랜드에서 널리 쓰이는 매우 우아하고 획 대비가 뚜렷한 세리프입니다.',
        note_en: 'High-contrast elegant serif. Widely used for luxury editorial and headlines.',
        sample: 'Simplicity is the ultimate sophistication.'
    },
    {
        id: 'f09',
        name: 'Lora',
        family: "'Lora', serif",
        url: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&display=swap',
        category: 'Serif',
        category_kr: '감성적인 본문용 (영문)',
        pair: 'Inter',
        note: '부드럽고 둥글둥글한 곡선미를 지닌 세리프로, 에세이나 긴 설명문 등의 가독성에 특화되었습니다.',
        note_en: 'Soft, contemporary serif. Designed to be highly readable for body texts.',
        sample: 'Good design makes a product useful.'
    },
    
    // ─── 모노스페이스 / 코딩용 폰트 (요청에 따라 대거 복원 및 확장) ────────────────
    {
        id: 'f10',
        name: 'Space Mono',
        family: "'Space Mono', monospace",
        url: 'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap',
        category: 'Monospace',
        category_kr: '코딩 및 레트로 모노스페이스',
        pair: 'Pretendard',
        note: '기하학적이고 다소 기괴한 형태의 고대비 모노스페이스로, 힙한 개발자 감성 디자인에 적합합니다.',
        note_en: 'Geometric and grotesque monospace. Perfect for coding block styling.',
        sample: 'const designPick = () => { return "Awesome"; }'
    },
    {
        id: 'f11',
        name: 'Inconsolata',
        family: "'Inconsolata', monospace",
        url: 'https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap',
        category: 'Monospace',
        category_kr: '가독성 극대화 코딩 폰트',
        pair: 'Roboto',
        note: '화면 가독성이 무척 뛰어난 영문 코딩용 폰트로, 개발자들 사이에서 인기가 아주 높습니다.',
        note_en: 'A highly readable monospace loved by programmers worldwide.',
        sample: 'for (let i = 0; i < colors.length; i++) { ... }'
    },
    {
        id: 'f12',
        name: 'Source Code Pro',
        family: "'Source Code Pro', monospace",
        url: 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600;700&display=swap',
        category: 'Monospace',
        category_kr: '어도비 개발용 폰트',
        pair: 'Inter',
        note: '어도비가 가독성과 눈의 피로도를 세밀하게 계산해 설계한 코딩용 모노 폰트입니다.',
        note_en: 'Monospace designed by Adobe specifically for coding environments.',
        sample: 'npm install design-pick-palette --save-dev'
    },
    {
        id: 'f13',
        name: 'Share Tech Mono',
        family: "'Share Tech Mono', monospace",
        url: 'https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap',
        category: 'Monospace',
        category_kr: '테크니컬 SF 감성',
        pair: 'Montserrat',
        note: '완전한 디지털 컴퓨터 칩 감성이나 SF, 터미널 디자인을 연출하기 위한 레트로 미래 지향적 폰트입니다.',
        note_en: 'Retro-futuristic technical monospace, ideal for terminal styling.',
        sample: 'SYSTEM ERROR: COLOR OVERFLOW AT MEMORY 0x7F'
    },
    {
        id: 'f14',
        name: 'Courier Prime',
        family: "'Courier Prime', monospace",
        url: 'https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap',
        category: 'Monospace',
        category_kr: '고전 타자기 감성',
        pair: 'Nanum Myeongjo',
        note: '정통 시나리오나 서류 작성을 위한 고전 타자기 비율의 감성적인 모노스페이스입니다.',
        note_en: 'Classic typewriter serif monospace, tailored for screenplays.',
        sample: 'Once upon a time, there was a beautiful palette.'
    },

    // ─── 감성 손글씨 및 다양한 디자인 필기체 ─────────────────────────────────────
    {
        id: 'f15',
        name: 'Nanum Pen Script',
        family: "'Nanum Pen Script', cursive",
        url: 'https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap',
        category: 'Handwriting',
        category_kr: '내추럴 손글씨 (한글)',
        pair: 'Noto Sans KR',
        note: '자연스러운 펜 글씨 질감을 살려 감성 일러스트나 따뜻한 카드 뉴스 등에 탁월합니다.',
        note_en: 'Warm and casual Korean pen script font for friendly look.',
        sample: '네 마음속에 예쁜 색깔들을 가득 담아줄게.'
    },
    {
        id: 'f16',
        name: 'Nanum Brush Script',
        family: "'Nanum Brush Script', cursive",
        url: 'https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&display=swap',
        category: 'Handwriting',
        category_kr: '대담한 붓글씨 (한글)',
        pair: 'Pretendard',
        note: '붓으로 갈겨 쓴 시원시원한 질감이 살아 있어 헤드라인이나 표지 디자인에 효과적입니다.',
        note_en: 'Bold brush script Korean font with energetic vibes.',
        sample: '새로운 생각으로 오늘의 디자인을 칠하다!'
    },
    {
        id: 'f17',
        name: 'Pacifico',
        family: "'Pacifico', cursive",
        url: 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap',
        category: 'Handwriting',
        category_kr: '유쾌한 브러쉬 필기체 (영문)',
        pair: 'Roboto',
        note: '1950년대 미국 서핑 포스터 감성의 자유롭고 리드미컬한 브러쉬 필기체입니다.',
        note_en: 'Retro brush cursive, bringing 1950s surf culture vibes.',
        sample: 'Aloha! Sweet vacation and design vibes.'
    },
    
    // ─── 가독성 보조 폰트들 ──────────────────────────────────────────────────
    {
        id: 'f18',
        name: 'Roboto',
        family: "'Roboto', sans-serif",
        url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
        category: 'Sans-Serif',
        category_kr: '구글 표준 본문 (영문)',
        pair: 'Roboto Slab',
        note: '안드로이드 OS 표준 서체. 중립적이면서 완벽한 가독성을 가집니다.',
        note_en: 'The standard font for Google Android. Neutral and highly legible.',
        sample: 'Experience is the product, and details make it.'
    },
    {
        id: 'f19',
        name: 'Spoqa Han Sans Neo',
        family: "'Spoqa Han Sans Neo', sans-serif",
        url: 'https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css',
        category: 'Sans-Serif',
        category_kr: '커머스 최적화 고딕 (한글)',
        pair: 'Roboto',
        note: '숫자와 기호가 예쁘며 쇼핑몰/결제 화면 가독성에 최적화되었습니다.',
        note_en: 'Perfect font for e-commerce UIs, with optimized numbers.',
        sample: '총 결제 금액: 38,500원 (할인율 20% 적용)'
    },
    {
        id: 'f20',
        name: 'Noto Sans KR',
        family: "'Noto Sans KR', sans-serif",
        url: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap',
        category: 'Sans-Serif',
        category_kr: '범용 표준 고딕 (한글)',
        pair: 'Roboto',
        note: '구글과 어도비 합작. 웹 폰트 로딩과 호환성이 가장 검증된 폰트입니다.',
        note_en: 'The most widely used Korean Google font. Highly stable.',
        sample: '모든 장치와 화면에서 어긋남 없이 깨끗하게 표시됩니다.'
    },
    {
        id: 'f21',
        name: 'Merriweather',
        family: "'Merriweather', serif",
        url: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap',
        category: 'Serif',
        category_kr: '화면용 두꺼운 세리프 (영문)',
        pair: 'Open Sans',
        note: '컴퓨터 화면에서 읽을 때 피로를 최소화하도록 획의 굵기가 조절된 서체입니다.',
        note_en: 'A heavy serif designed specifically for screen legibility.',
        sample: 'Books are a uniquely portable magic.'
    },
    {
        id: 'f22',
        name: 'Raleway',
        family: "'Raleway', sans-serif",
        url: 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;800&display=swap',
        category: 'Sans-Serif',
        category_kr: '세련된 산세리프 (영문)',
        pair: 'Roboto',
        note: '독특한 디테일이 살아있어 매거진이나 에디토리얼 레이아웃에 우아함을 선사합니다.',
        note_en: 'Elegant, stylish sans-serif with subtle crossings.',
        sample: 'Less is more. Minimalism at its best.'
    },
    {
        id: 'f23',
        name: 'Ubuntu',
        family: "'Ubuntu', sans-serif",
        url: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap',
        category: 'Sans-Serif',
        category_kr: '미래지향적 테크 (영문)',
        pair: 'Open Sans',
        note: '타원형 곡선 구조가 테크니컬한 감성을 만들어내는 리눅스 시그니처 폰트입니다.',
        note_en: 'Signature font of Ubuntu. Gives a high-tech vibe.',
        sample: 'Connecting technology and human interface.'
    },
    {
        id: 'f24',
        name: 'Nunito',
        family: "'Nunito', sans-serif",
        url: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;800&display=swap',
        category: 'Sans-Serif',
        category_kr: '친근한 라운드 (영문)',
        pair: 'Lora',
        note: '마감이 둥글게 처리되어 다정한 목소리나 캐주얼한 서비스 가이드에 제격입니다.',
        note_en: 'Rounded terminals. Warm, friendly, and soft tone.',
        sample: 'Welcome to our platform! Enjoy your creative journey.'
    },
    {
        id: 'f25',
        name: 'Rubik',
        family: "'Rubik', sans-serif",
        url: 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;600;800&display=swap',
        category: 'Sans-Serif',
        category_kr: '묵직하고 꽉 찬 느낌 (영문)',
        pair: 'Pretendard',
        note: '단단하고 두꺼워 게임 대시보드나 강조 라벨용으로 안성맞춤입니다.',
        note_en: 'Heavy geometric font. Fits well with gaming layouts.',
        sample: 'CRITICAL VALUE DETECTED.'
    },
    {
        id: 'f26',
        name: 'Work Sans',
        family: "'Work Sans', sans-serif",
        url: 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;800&display=swap',
        category: 'Sans-Serif',
        category_kr: '정교한 화면용 (영문)',
        pair: 'Inter',
        note: '초기 영문 서체의 불규칙성을 세련되게 정돈하여 모던한 화면을 구성합니다.',
        note_en: 'Refined Grotesque sans-serif built for screens.',
        sample: 'Making ideas visual and visible.'
    },
    {
        id: 'f27',
        name: 'Quicksand',
        family: "'Quicksand', sans-serif",
        url: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap',
        category: 'Sans-Serif',
        category_kr: '미니멀 둥근 (영문)',
        pair: 'Open Sans',
        note: '매우 둥근 기하학적 구조가 웰니스, 요가, 라이프스타일 뷰티 브랜드에 잘 녹아듭니다.',
        note_en: 'Thin and clean rounded font. Matches aesthetic designs.',
        sample: 'Slow coffee, warm tea, and fresh inspiration.'
    },
    {
        id: 'f28',
        name: 'Barlow',
        family: "'Barlow', sans-serif",
        url: 'https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;800&display=swap',
        category: 'Sans-Serif',
        category_kr: '좁고 곧은 형태 (영문)',
        pair: 'PT Serif',
        note: '미국 도로 표지판 비율로, 좁은 공간 내 글자를 밀도 높게 채워 넣을 때 유용합니다.',
        note_en: 'Condensed sans-serif inspired by US road signage.',
        sample: 'SPEED LIMIT: MAXIMIZE EFFICIENCY.'
    },
    {
        id: 'f29',
        name: 'Josefin Sans',
        family: "'Josefin Sans', sans-serif",
        url: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&display=swap',
        category: 'Display',
        category_kr: '기하학적 빈티지 (영문)',
        pair: 'Lato',
        note: '1920년대 아르데코 비율을 담은 기하학적인 제목 서체입니다.',
        note_en: 'Elegant geometric font with a 1920s vintage feel.',
        sample: 'Create with passion, design with purpose.'
    },
    {
        id: 'f30',
        name: 'Cabin',
        family: "'Cabin', sans-serif",
        url: 'https://fonts.googleapis.com/css2?family=Cabin:wght@400;600;700&display=swap',
        category: 'Sans-Serif',
        category_kr: '편안한 휴머니스트 (영문)',
        pair: 'Raleway',
        note: '필기의 흐름이 획에 녹아있어 읽는 사람에게 한결 따뜻하고 편안한 인상을 남깁니다.',
        note_en: 'Humanist sans-serif with natural proportions.',
        sample: 'We design experiences that feel natural.'
    },
    {
        id: 'f31',
        name: 'Dosis',
        family: "'Dosis', sans-serif",
        url: 'https://fonts.googleapis.com/css2?family=Dosis:wght@400;600;800&display=swap',
        category: 'Display',
        category_kr: '둥근 제목용 (영문)',
        pair: 'Roboto',
        note: '동그랗고 폭이 약간 좁은 형태로, 타이틀에 배치 시 개성을 강조할 수 있습니다.',
        note_en: 'Condensed rounded design. Perfect for titles.',
        sample: 'Let us build something wonderful today.'
    },
    {
        id: 'f32',
        name: 'Anton',
        family: "'Anton', sans-serif",
        url: 'https://fonts.googleapis.com/css2?family=Anton&display=swap',
        category: 'Display',
        category_kr: '두껍고 강력한 대형 제목',
        pair: 'Open Sans',
        note: '시선을 확 잡아끄는 무거운 획 굵기를 지녀 유튜브 썸네일이나 스포츠 타이틀로 추천합니다.',
        note_en: 'Extremely bold display sans-serif. Ideal for heavy titles.',
        sample: 'CHAMPIONS NEVER STOP.'
    },
    {
        id: 'f33',
        name: 'Nanum Baru Gothic',
        family: "'NanumBarunGothic', sans-serif",
        url: 'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumBarunGothic.woff',
        category: 'Sans-Serif',
        category_kr: '왜곡 없는 고딕 (한글)',
        pair: 'Roboto',
        note: '가장 군더더기 없는 기본 뼈대를 가진 고딕으로, 정보 가독성이 우수합니다.',
        note_en: 'Clean, basic structure Korean font. Ideal for information manuals.',
        sample: '가장 객관적이고 정확하게 정보를 전달합니다.'
    },
    {
        id: 'f34',
        name: 'KoPub World Dotum',
        family: "'KoPubWorldDotum', sans-serif",
        url: 'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/KoPubWorldDotum.woff',
        category: 'Sans-Serif',
        category_kr: '전자책용 가독성 (한글)',
        pair: 'Inter',
        note: '한국출판인회의 공식 폰트. 장문의 글이나 컬럼을 읽을 때 피로하지 않습니다.',
        note_en: 'Official publisher font. Perfect for long-form blogs.',
        sample: '한 호흡에 끝까지 읽히는 완벽한 줄 정렬과 비례.'
    },
    {
        id: 'f35',
        name: 'Nanum Square Neo',
        family: "'NanumSquareNeo', sans-serif",
        url: 'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2',
        category: 'Sans-Serif',
        category_kr: '세련된 각진 고딕 (한글)',
        pair: 'Roboto',
        note: '나눔스퀘어의 개량형으로, 기하학적 비례와 뚜렷한 대비가 시원한 인상을 만듭니다.',
        note_en: 'Newer geometric Sans for Korean, showcasing sharp terminals.',
        sample: '조금 더 똑바르고 빈틈없는 디자인의 시작.'
    }
];

// 기존 data.js에서 designFonts 선언 이전과 이후의 경계를 나누어 새로운 폰트 데이터로 치환하여 저장
const startMarker = 'const designFonts = [';
const endMarker = 'const uiTranslations = {';

const startIdx = dataJSContent.indexOf(startMarker);
const endIdx = dataJSContent.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
    const prePart = dataJSContent.substring(0, startIdx);
    const postPart = dataJSContent.substring(endIdx);
    
    const newFontsPart = `const designFonts = ${JSON.stringify(designFonts, null, 4)};\n\n`;
    
    // 파일 쓰기
    fs.writeFileSync(dataFilePath, prePart + newFontsPart + postPart, 'utf8');
    console.log('Successfully updated data.js with 35 readable, monospace, and handwriting fonts!');
} else {
    console.log('Error: Markers not found in data.js');
}
