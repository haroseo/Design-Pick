// ─── Designer Colors (용도별 분류) ──────────────────────────────────────────
const designerColors = {

    ui_web: [
        { name: '버셀 블루',        hex: '#0070F3' },
        { name: '성공 그린',        hex: '#00C853' },
        { name: '경고 앰버',        hex: '#FF6F00' },
        { name: '오류 레드',        hex: '#FF1744' },
        { name: '정보 틸',          hex: '#00BCD4' },
        { name: '링크 블루',        hex: '#1976D2' },
        { name: '비활성 그레이',    hex: '#9E9E9E' },
        { name: '다크 배경',        hex: '#121212' },
        { name: '카드 화이트',      hex: '#FAFAFA' },
        { name: '보더 그레이',      hex: '#E0E0E0' },
        { name: '포커스 블루',      hex: '#2563EB' },
        { name: '섀도우 블랙',      hex: '#0F172A' },
    ],

    brand_global: [
        { name: '애플 스페이스그레이', hex: '#1D1D1F' },
        { name: '구글 레드',           hex: '#EA4335' },
        { name: '스포티파이 그린',     hex: '#1DB954' },
        { name: '넷플릭스 레드',       hex: '#E50914' },
        { name: '슬랙 퍼플',           hex: '#4A154B' },
        { name: '디스코드 블러플',     hex: '#5865F2' },
        { name: '유튜브 레드',         hex: '#FF0000' },
        { name: '인스타그램 퍼플',     hex: '#C13584' },
        { name: '메타 블루',           hex: '#0866FF' },
        { name: '트위터 블루',         hex: '#1DA1F2' },
        { name: '아마존 오렌지',       hex: '#FF9900' },
        { name: '마이크로소프트 블루', hex: '#0078D4' },
        { name: '텐센트 블루',         hex: '#1878F3' },
        { name: '틱톡 블랙',           hex: '#010101' },
        { name: '링크드인 블루',       hex: '#0A66C2' },
        { name: '에어비앤비 레드',     hex: '#FF5A5F' },
    ],

    nature: [
        { name: '포레스트 그린',  hex: '#228B22' },
        { name: '스카이 블루',    hex: '#87CEEB' },
        { name: '딥 오션',        hex: '#006994' },
        { name: '선셋 오렌지',    hex: '#FF4500' },
        { name: '체리 블라썸',    hex: '#FFB7C5' },
        { name: '골든 샌드',      hex: '#C2B280' },
        { name: '모스 그린',      hex: '#8A9A5B' },
        { name: '라벤더 필드',    hex: '#967BB6' },
        { name: '오로라 그린',    hex: '#00FFCC' },
        { name: '산호초',         hex: '#FF6B6B' },
        { name: '크리스탈 레이크',hex: '#5DADE2' },
        { name: '가을 단풍',      hex: '#D35400' },
        { name: '새벽 이슬',      hex: '#E8F5E9' },
        { name: '해바라기',       hex: '#FFC300' },
        { name: '이끼 그린',      hex: '#3D9970' },
    ],

    pastel: [
        { name: '베이비 핑크',   hex: '#FFD1DC' },
        { name: '라벤더 미스트', hex: '#E6E6FA' },
        { name: '민트 크림',     hex: '#B5EAD7' },
        { name: '피치 블러쉬',   hex: '#FFCBA4' },
        { name: '베이비 블루',   hex: '#AED6F1' },
        { name: '버터 옐로우',   hex: '#FFF0AA' },
        { name: '라일락',        hex: '#D7B2FF' },
        { name: '로즈 쿼츠',     hex: '#F7CAC9' },
        { name: '초크 화이트',   hex: '#F5F5F0' },
        { name: '스카이 바이올렛', hex: '#C9B1FF' },
        { name: '파우더 블루',   hex: '#B0E0E6' },
        { name: '허니듀',        hex: '#F0FFF0' },
    ],

    neon_modern: [
        { name: '네온 핑크',      hex: '#FF10F0' },
        { name: '일렉트릭 블루',  hex: '#00B4FF' },
        { name: '네온 그린',      hex: '#39FF14' },
        { name: '사이버 옐로우',  hex: '#FFE600' },
        { name: '핫 오렌지',      hex: '#FF6A00' },
        { name: '매트릭스 그린',  hex: '#00FF41' },
        { name: 'UV 퍼플',        hex: '#7B00FF' },
        { name: '레이저 레드',    hex: '#FF003F' },
        { name: '홀로그램 시안',  hex: '#00FCCE' },
        { name: '글리치 마젠타',  hex: '#FF00FF' },
        { name: '플라즈마 블루',  hex: '#0D00FF' },
        { name: '레이브 옐로우',  hex: '#FFFC00' },
    ],

    earth: [
        { name: '테라코타',     hex: '#C27A54' },
        { name: '탄 베이지',    hex: '#D2B48C' },
        { name: '시에나',       hex: '#A0522D' },
        { name: '카키',         hex: '#C3AA7E' },
        { name: '어도비 레드',  hex: '#BD5B00' },
        { name: '세피아',       hex: '#704214' },
        { name: '클레이',       hex: '#B5651D' },
        { name: '샌드스톤',     hex: '#DEB887' },
        { name: '다크 초콜렛',  hex: '#4E2623' },
        { name: '올리브 드랩',  hex: '#6B7C3A' },
        { name: '로스트 엄버',  hex: '#8B4513' },
        { name: '골든 옐로우',  hex: '#DAA520' },
    ],

    monochrome: [
        { name: '퓨어 블랙',   hex: '#000000' },
        { name: '리치 블랙',   hex: '#0A0A0A' },
        { name: '다크 차콜',   hex: '#212121' },
        { name: '차콜 그레이', hex: '#424242' },
        { name: '미디엄 그레이',hex: '#616161' },
        { name: '실버',        hex: '#9E9E9E' },
        { name: '라이트 그레이',hex: '#E0E0E0' },
        { name: '오프 화이트', hex: '#F5F5F5' },
        { name: '퓨어 화이트', hex: '#FFFFFF' },
        { name: '스모크',      hex: '#738290' },
        { name: '프로스트',    hex: '#D6E4E9' },
        { name: '애시',        hex: '#B2BEC3' },
    ],

};

// ─── Color Name References (가나다 순 + 영문) ────────────────────────────────
const colorNameReferences = {
    '가을 단풍':    { hex: '#D35400', tags: ['autumn', '오렌지', '붉은'] },
    '감청색':       { hex: '#1428A0', tags: ['business', '전문', '파랑'] },
    '검정':         { hex: '#000000', tags: ['contrast', '우아', '어둠'] },
    '골드':         { hex: '#FFD700', tags: ['premium', '화려', '럭셔리'] },
    '금색':         { hex: '#FFD700', tags: ['금', '고급', '황금'] },
    '녹색':         { hex: '#00B050', tags: ['natural', '성장', '자연'] },
    '네이비':       { hex: '#001F5B', tags: ['formal', '클래식', '신뢰'] },
    '네온 그린':    { hex: '#39FF14', tags: ['neon', '형광', '밝은'] },
    '네온 핑크':    { hex: '#FF10F0', tags: ['neon', '형광', '핑크'] },
    '노랑':         { hex: '#FFD700', tags: ['bright', '에너지', '경고'] },
    '다크그린':     { hex: '#006400', tags: ['dark', '어두운', '초록'] },
    '라벤더':       { hex: '#967BB6', tags: ['soft', '우아', '보라'] },
    '라임':         { hex: '#32CD32', tags: ['fresh', '생기', '밝은'] },
    '루비':         { hex: '#9B111E', tags: ['jewel', '보석', '빨강'] },
    '마룬':         { hex: '#800000', tags: ['dark', '강함', '클래식'] },
    '마젠타':       { hex: '#FF00FF', tags: ['vibrant', '네온', '강렬'] },
    '민트':         { hex: '#00B8A9', tags: ['fresh', '차분', '자연'] },
    '버건디':       { hex: '#800020', tags: ['luxury', '와인', '빨강'] },
    '베이지':       { hex: '#C8A882', tags: ['elegant', '전통', '따뜻함'] },
    '보라':         { hex: '#7851A9', tags: ['luxury', '창의', '우아'] },
    '분홍':         { hex: '#FF69B4', tags: ['pink', '귀여움', '부드러움'] },
    '빨강':         { hex: '#FF0000', tags: ['primary', '강렬', '위험'] },
    '살몬':         { hex: '#FA8072', tags: ['warm', '소프트', '핑크'] },
    '스카이블루':   { hex: '#87CEEB', tags: ['sky', '하늘', '맑음'] },
    '시안':         { hex: '#00BCD4', tags: ['tech', '혁신', '청량'] },
    '아이보리':     { hex: '#FFFFF0', tags: ['warm', '부드러운', '화이트'] },
    '에메랄드':     { hex: '#50C878', tags: ['jewel', '보석', '초록'] },
    '오렌지':       { hex: '#FF6B00', tags: ['energy', '활동', '따뜻함'] },
    '올리브':       { hex: '#808000', tags: ['earthy', '자연', '군대'] },
    '인디고':       { hex: '#4B0082', tags: ['deep', '신비', '어두운'] },
    '청록':         { hex: '#20B2AA', tags: ['cool', '편안', '바다'] },
    '코랄':         { hex: '#FF7F50', tags: ['vibrant', '활기', '여름'] },
    '코발트':       { hex: '#0047AB', tags: ['deep', '진한파랑', '강렬'] },
    '크림슨':       { hex: '#DC143C', tags: ['intense', '진한빨강', '열정'] },
    '터콰이즈':     { hex: '#40E0D0', tags: ['tropical', '이국적', '시원'] },
    '테라코타':     { hex: '#C27A54', tags: ['warm', '흙색', '빈티지'] },
    '파랑':         { hex: '#0099FF', tags: ['cool', '신뢰', '하늘'] },
    '퍼플':         { hex: '#6A0DAD', tags: ['purple', '보라', '창의'] },
    '페리윙클':     { hex: '#CCCCFF', tags: ['soft', '파스텔', '연한'] },
    '포레스트그린': { hex: '#228B22', tags: ['forest', '숲', '자연'] },
    '핑크':         { hex: '#FF6B9D', tags: ['modern', '여성', '부드러움'] },
    '하늘색':       { hex: '#87CEEB', tags: ['sky', '하늘', '맑음'] },
    '해군색':       { hex: '#000080', tags: ['formal', '클래식', '신뢰'] },
    '핫핑크':       { hex: '#FF69B4', tags: ['hot', '강렬', '핑크'] },
    '회색':         { hex: '#808080', tags: ['neutral', '중립', '차분'] },
    '흰색':         { hex: '#FFFFFF', tags: ['clean', '공간', '순수'] },
    '챠콜':         { hex: '#36454F', tags: ['dark', '어두운', '중성'] },
    '슬레이트':     { hex: '#708090', tags: ['neutral', '회색', '차분'] },
    '은색':         { hex: '#C0C0C0', tags: ['modern', '세련', '금속'] },
    '크라프트':     { hex: '#B5651D', tags: ['craft', '나무', '천연'] },
    '사파이어':     { hex: '#0F52BA', tags: ['jewel', '보석', '파랑'] },
    '허니':         { hex: '#FFC300', tags: ['warm', '꿀', '노랑'] },
    '머스타드':     { hex: '#FFDB58', tags: ['warm', '빈티지', '노랑'] },
    '피치':         { hex: '#FFCBA4', tags: ['soft', '복숭아', '파스텔'] },
    '릴락':         { hex: '#D7B2FF', tags: ['soft', '연보라', '파스텔'] },
};

// ─── Design Inspiration Palettes ────────────────────────────────────────────
const designInspiration = [
    { name: '미니멀 모던',    colors: ['#000000', '#FFFFFF', '#8B8B8B', '#E8E8E8'] },
    { name: '네온 나이트',    colors: ['#FF10F0', '#FFE600', '#00B4FF', '#7B00FF'] },
    { name: '해양 휴가',      colors: ['#005377', '#00A8E8', '#00D9FF', '#B5EAD7'] },
    { name: '서로운 일몰',    colors: ['#FF6B35', '#FFB627', '#C27A54', '#4E2623'] },
    { name: '숲의 꿈',        colors: ['#228B22', '#8A9A5B', '#DEB887', '#006994'] },
    { name: '리퀴드 글래스',  colors: ['#E0F7FF', '#AED6F1', '#5DADE2', '#1A5276'] },
    { name: '다크 엘리건스',  colors: ['#000000', '#212121', '#424242', '#9E9E9E'] },
    { name: '코랄 선셋',      colors: ['#FF7F50', '#FF6B9D', '#FFD1DC', '#FFCBA4'] },
    { name: '어반 테크',      colors: ['#0070F3', '#212121', '#E0E0E0', '#FAFAFA'] },
    { name: '파스텔 드림',    colors: ['#FFD1DC', '#B5EAD7', '#AED6F1', '#FFF0AA'] },
    { name: '브랜드 파워',    colors: ['#E50914', '#1DB954', '#5865F2', '#FF9900'] },
    { name: '어스 톤',        colors: ['#C27A54', '#A0522D', '#DEB887', '#6B7C3A'] },
];

// ─── Color Distance (similar color search) ──────────────────────────────────
function findSimilarColors(r, g, b, count = 8) {
    const distances = [];
    for (const [name, color] of Object.entries(colorNameReferences)) {
        const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color.hex);
        if (rgb) {
            const cr = parseInt(rgb[1], 16);
            const cg = parseInt(rgb[2], 16);
            const cb = parseInt(rgb[3], 16);
            const distance = Math.sqrt((cr - r) ** 2 + (cg - g) ** 2 + (cb - b) ** 2);
            distances.push({ name, hex: color.hex, distance });
        }
    }
    return distances.sort((a, b) => a.distance - b.distance).slice(0, count);
}
