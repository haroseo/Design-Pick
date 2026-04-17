// Designer Colors organized by category
const designerColors = {
    neutral: [
        { name: '순백 블랙', hex: '#000000' },
        { name: '다크 차콜', hex: '#2B2B2B' },
        { name: '차콜 그레이', hex: '#36454F' },
        { name: '스토니 그레이', hex: '#708090' },
        { name: '실버', hex: '#C0C0C0' },
        { name: '화이트', hex: '#FFFFFF' }
    ],
    brand: [
        { name: '애플 블랙', hex: '#1D1D1F' },
        { name: '삼성 블루', hex: '#1428A0' },
        { name: '구글 블루', hex: '#4285F4' },
        { name: '페이스북 블루', hex: '#1877F2' },
        { name: '트위터 블루', hex: '#1DA1F2' },
        { name: '우버 블랙', hex: '#000000' }
    ],
    modern: [
        { name: '네온 핑크', hex: '#FF006E' },
        { name: '사이버 옐로우', hex: '#FFD60A' },
        { name: '퓨처 라임', hex: '#8338EC' },
        { name: '테크 시안', hex: '#3A86FF' },
        { name: '글리치 빨강', hex: '#FB5607' },
        { name: '홀로그래피 보라', hex: '#8338EC' }
    ],
    popular: [
        { name: '유니버설 레드', hex: '#FF0000' },
        { name: '프라임 그린', hex: '#00B050' },
        { name: '하늘 블루', hex: '#0099FF' },
        { name: '썬셋 오렌지', hex: '#FF6B00' },
        { name: '로얄 퍼플', hex: '#7851A9' },
        { name: '심해 민트', hex: '#00B8A9' }
    ]
};

// Color name references with Korean usage tags
const colorNameReferences = {
    '빨강': { hex: '#FF0000', tags: ['primary', '강렬'] },
    '파랑': { hex: '#0099FF', tags: ['cool', '신뢰'] },
    '녹색': { hex: '#00B050', tags: ['natural', '성장'] },
    '노랑': { hex: '#FFD60A', tags: ['bright', '에너지'] },
    '보라': { hex: '#7851A9', tags: ['luxury', '창의'] },
    '검정': { hex: '#000000', tags: ['contrast', '우아'] },
    '흰색': { hex: '#FFFFFF', tags: ['clean', '공간'] },
    '회색': { hex: '#808080', tags: ['neutral', '중립'] },
    '핑크': { hex: '#FF006E', tags: ['modern', '여성'] },
    '시안': { hex: '#3A86FF', tags: ['tech', '혁신'] },
    '라임': { hex: '#8338EC', tags: ['vibrant', '활동'] },
    '감청색': { hex: '#1428A0', tags: ['business', '전문'] },
    '민트': { hex: '#00B8A9', tags: ['fresh', '차분'] },
    '크림': { hex: '#FFFDD0', tags: ['warm', '부드러움'] },
    '베이지': { hex: '#C8A882', tags: ['elegant', '전통'] },
    '버건디': { hex: '#800020', tags: ['luxury', '급장'] },
    '해군색': { hex: '#000080', tags: ['formal', '신성'] },
    '올리브': { hex: '#808000', tags: ['earthy', '자연'] },
    '테라코타': { hex: '#CD5C5C', tags: ['warm', '흙색'] },
    '금색': { hex: '#FFD700', tags: ['premium', '화려'] },
    '은색': { hex: '#C0C0C0', tags: ['modern', '세련'] },
    '청록': { hex: '#20B2AA', tags: ['cool', '편안'] },
    '살몬': { hex: '#FA8072', tags: ['warm', '소프트'] },
    '코랄': { hex: '#FF7F50', tags: ['vibrant', '활기'] },
    '라벤더': { hex: '#E6E6FA', tags: ['soft', '우아'] }
};

// Design Inspiration Palettes
const designInspiration = [
    { name: '미니멀 모던', colors: ['#000000', '#FFFFFF', '#8B8B8B', '#E8E8E8'] },
    { name: '네온 나이트', colors: ['#FF006E', '#FFD60A', '#3A86FF', '#8338EC'] },
    { name: '해양 휴가', colors: ['#005377', '#00A8E8', '#00D9FF', '#00F5FF'] },
    { name: '서로운 일몰', colors: ['#FF6B35', '#FFB627', '#FFA500', '#FF5733'] },
    { name: '숲의 꿈', colors: ['#264653', '#2A9D8F', '#E9C46A', '#F4A460'] },
    { name: '리퀴드 글래스', colors: ['#E0F7FF', '#BDF5FF', '#95E1D3', '#C1F5FF'] },
    { name: '다크 엘리건스', colors: ['#1a1a1a', '#3d3d3d', '#5c5c5c', '#8b7aa0'] },
    { name: '버브스 버스트', colors: ['#FF006E', '#FB5607', '#FFBE0B', '#8338EC'] }
];

// Color distance calculation
function findSimilarColors(r, g, b, count = 6) {
    const distances = [];
    for (const [name, color] of Object.entries(colorNameReferences)) {
        const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color.hex);
        if (rgb) {
            const cr = parseInt(rgb[1], 16);
            const cg = parseInt(rgb[2], 16);
            const cb = parseInt(rgb[3], 16);
            const distance = Math.sqrt(Math.pow(cr - r, 2) + Math.pow(cg - g, 2) + Math.pow(cb - b, 2));
            distances.push({ name, hex: color.hex, distance });
        }
    }
    return distances.sort((a, b) => a.distance - b.distance).slice(0, count);
}
