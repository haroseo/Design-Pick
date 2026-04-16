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
    '라벤더': { hex: '#E6E6FA', tags: ['soft', '우아'] },
    '턱시도': { hex: '#242124', tags: ['dark', '세련'] },
    '미드나잇': { hex: '#2C3E50', tags: ['deep', '침착'] },
    '포레스트': { hex: '#228B22', tags: ['natural', '안정'] },
    '스카이': { hex: '#87CEEB', tags: ['light', '희망'] },
    '자야': { hex: '#5F9EA0', tags: ['cool', '평온'] },
    '치브': { hex: '#006B54', tags: ['natural', '전통'] },
    '데니임': { hex: '#1F4788', tags: ['classic', '신뢰'] },
    '와인': { hex: '#722F37', tags: ['deep', '성숙'] },
    '마젠타': { hex: '#FF00FF', tags: ['vibrant', '에너지'] },
    '청록색': { hex: '#00FFFF', tags: ['bright', '혁신'] },
    '차들시': { hex: '#DF73FF', tags: ['modern', '창의'] },
    '페리위클': { hex: '#CCCCFF', tags: ['light', '부드러움'] },
    '에스프레소': { hex: '#6F4E37', tags: ['warm', '편안'] },
    '카키': { hex: '#9AC844', tags: ['earthy', '자연'] },
    '전나': { hex: '#D2B48C', tags: ['warm', '고전'] },
    '페블': { hex: '#A9B5B5', tags: ['neutral', '미니멀'] },
    '태피': { hex: '#B38B6D', tags: ['warm', '전통'] },
    '리드': { hex: '#B97B6B', tags: ['warm', '편안'] },
    '랙': { hex: '#7D604B', tags: ['earthy', '자연'] },
    '노벨': { hex: '#9BC67E', tags: ['soft', '신선'] },
    '뮤키': { hex: '#7B4B3A', tags: ['dark', '우아'] },
    '라스트': { hex: '#AA4465', tags: ['deep', '매력'] },
    '프로스": { hex: '#E8F0F7', tags: ['light', '깨끗'] },
    '라즈': { hex: '#E5BC4F', tags: ['warm', '화려'] },
    '오파': { hex: '#F0E6D2', tags: ['soft', '우아'] },
    '탈': { hex: '#FAFAF0', tags: ['neutral', '미니멀'] },
    '세일라': { hex: '#C8E6C9', tags: ['soft', '신선'] },
    '말로우': { hex: '#E5989B', tags: ['soft', '로맨틱'] },
    '펄': { hex: '#FDEEF4', tags: ['light', '우아'] },
    '서피': { hex: '#F0F8FF', tags: ['very light', '차분'] }
};

// Design Inspiration Palettes
const designInspiration = [
    {
        name: '미니멀 모던',
        colors: ['#000000', '#FFFFFF', '#8B8B8B', '#E8E8E8']
    },
    {
        name: '네온 나이트',
        colors: ['#FF006E', '#FFD60A', '#3A86FF', '#8338EC']
    },
    {
        name: '해양 휴가',
        colors: ['#005377', '#00A8E8', '#00D9FF', '#00F5FF']
    },
    {
        name: '서로운 일몰',
        colors: ['#FF6B35', '#FFB627', '#FFA500', '#FF5733']
    },
    {
        name: '숲의 꿈',
        colors: ['#264653', '#2A9D8F', '#E9C46A', '#F4A460']
    },
    {
        name: '리퀴드 글래스',
        colors: ['#E0F7FF', '#BDF5FF', '#95E1D3', '#C1F5FF']
    },
    {
        name: '다크 엘리건스',
        colors: ['#1a1a1a', '#3d3d3d', '#5c5c5c', '#8b7aa0']
    },
    {
        name: '버브스 버스트',
        colors: ['#FF006E', '#FB5607', '#FFBE0B', '#8338EC']
    }
];

// Color distance calculation
function findSimilarColors(r, g, b, count = 6) {
    const currentColor = { r, g, b };
    const distances = [];

    for (const [name, color] of Object.entries(colorNameReferences)) {
        const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color.hex);
        if (rgb) {
            const cr = parseInt(rgb[1], 16);
            const cg = parseInt(rgb[2], 16);
            const cb = parseInt(rgb[3], 16);
            
            const distance = Math.sqrt(
                Math.pow(cr - r, 2) + 
                Math.pow(cg - g, 2) + 
                Math.pow(cb - b, 2)
            );
            
            distances.push({
                name,
                hex: color.hex,
                distance
            });
        }
    }

    return distances.sort((a, b) => a.distance - b.distance).slice(0, count);
}
// 디자이너가 많이 쓰는 색상 팔레트
const designerColors = {
    'neutral': [
        { name: '화이트', hex: '#FFFFFF' },
        { name: '오프 화이트', hex: '#F5F5F5' },
        { name: '라이트 그레이', hex: '#EEEEEE' },
        { name: '그레이', hex: '#999999' },
        { name: '다크 그레이', hex: '#333333' },
        { name: '블랙', hex: '#000000' },
    ],
    'brand': [
        { name: '#1E90FF', hex: '#1E90FF' },
        { name: '#FF6B6B', hex: '#FF6B6B' },
        { name: '#4ECDC4', hex: '#4ECDC4' },
        { name: '#FFE66D', hex: '#FFE66D' },
        { name: '#95E1D3', hex: '#95E1D3' },
        { name: '#F38181', hex: '#F38181' },
    ],
    'modern': [
        { name: '네이비', hex: '#1A1A2E' },
        { name: '딥 퍼플', hex: '#16213E' },
        { name: '사프란', hex: '#FFA502' },
        { name: '코랄', hex: '#FF6B6B' },
        { name: '민트', hex: '#00D9FF' },
        { name: '라벤더', hex: '#C8B6FF' },
    ],
    'popular': [
        { name: '스카이 블루', hex: '#87CEEB' },
        { name: '로즈 골드', hex: '#B76E79' },
        { name: '세이지 그린', hex: '#9CAF88' },
        { name: '부스트 블랙', hex: '#2C3E50' },
        { name: '페치 크림', hex: '#FFEFD5' },
        { name: '테라코타', hex: '#CC7755' },
    ]
};

// 색상 이름 레퍼런스 (확대된 버전)
const colorNameReferences = {
    // 파란색 톤
    '스카이블루': { hex: '#87CEEB', usage: ['웹 개발', '하늘 테마', '차분함'] },
    '스카이': { hex: '#87CEEB', usage: ['웹 화면', '신뢰감'] },
    '네이비': { hex: '#000080', usage: ['기업 사이트', '신뢰감', '정장'] },
    '네이비블루': { hex: '#1A1A2E', usage: ['다크 모드', '프리미엄'] },
    '터쿠아즈': { hex: '#40E0D0', usage: ['기술 회사', '현대적'] },
    '터콰이즈': { hex: '#40E0D0', usage: ['스타트업', '활발함'] },
    '코발트': { hex: '#0047AB', usage: ['기업', '신뢰성'] },
    '샥셀블루': { hex: '#003DA5', usage: ['스포츠', '역동성'] },
    '라이트블루': { hex: '#ADD8E6', usage: ['부드러움', '아기용품'] },
    '퍼더블루': { hex: '#800080', usage: ['럭셔리', '신비로움'] },
    
    // 핑크/빨강 톤
    '로즈골드': { hex: '#B76E79', usage: ['럭셔리 브랜드', '뷰티 앱'] },
    '로즈': { hex: '#FF007F', usage: ['여성 제품', '러맨틱'] },
    '핑크': { hex: '#FFC0CB', usage: ['아이 제품', '부드러움'] },
    '라이트핑크': { hex: '#FFB6C1', usage: ['뷰티', '로맨틱'] },
    '딥핑크': { hex: '#FF1493', usage: ['에너지', '신나는'] },
    '코랄': { hex: '#FF7F50', usage: ['활동적', 'SNS', '푸드'] },
    '살몬': { hex: '#FA8072', usage: ['부드러움', '따뜻함'] },
    '크림슨': { hex: '#DC143C', usage: ['긴급', '중요성'] },
    '스칼렛': { hex: '#FF2400', usage: ['강렬', '주목'] },
    '토마토': { hex: '#FF6347', usage: ['활력', '신선함'] },
    
    // 그린 톤
    '민트': { hex: '#98FF98', usage: ['헬스 앱', '신선함'] },
    '민트그린': { hex: '#98FF98', usage: ['웹 개발', '현대식'] },
    '세이지': { hex: '#9DC183', usage: ['자연 테마', '치유'] },
    '세이지그린': { hex: '#9DC183', usage: ['에코', '차분함'] },
    '올리브': { hex: '#808000', usage: ['자연', '무중한'] },
    '포레스트그린': { hex: '#228B22', usage: ['자연', '신뢰'] },
    '라이트그린': { hex: '#90EE90', usage: ['신선함', '생기'] },
    '라임': { hex: '#00FF00', usage: ['에너지', '강렬'] },
    '탈라사': { hex: '#367588', usage: ['바다', '편안함'] },
    
    // 노랑/오렌지 톤
    '골드': { hex: '#FFD700', usage: ['프리미엄', '럭셔리', '엘리건스'] },
    '골드색': { hex: '#FFD700', usage: ['고급스러움', '제목'] },
    '호황색': { hex: '#FFD700', usage: ['밝음', '빛'] },
    '오렌지': { hex: '#FFA500', usage: ['에너지', '활발', '재미'] },
    '라이트오렌지': { hex: '#FFCC99', usage: ['따뜻함', '부드러움'] },
    '버너': { hex: '#CD853F', usage: ['자연', '차분함'] },
    '초콜렛': { hex: '#D2691E', usage: ['따뜻함', '고급'] },
    '카멜': { hex: '#C4A74D', usage: ['호사', '클래식'] },
    '베이지': { hex: '#F5E6D3', usage: ['중립', '우아함'] },
    '크림': { hex: '#FFFDD0', usage: ['따뜻함', '부드러움'] },
    
    // 회색/중립 톤
    '화이트': { hex: '#FFFFFF', usage: ['배경', '기본'] },
    '검정': { hex: '#000000', usage: ['텍스트', '강조'] },
    '검은색': { hex: '#000000', usage: ['대비', '무게'] },
    '블랙': { hex: '#000000', usage: ['정보', '시작'] },
    '그레이': { hex: '#999999', usage: ['보조', '중립'] },
    '라이트그레이': { hex: '#D3D3D3', usage: ['배경', '경계'] },
    '다크그레이': { hex: '#333333', usage: ['텍스트', '강조'] },
    '차콜': { hex: '#36454F', usage: ['다크 모드', '고급스러움'] },
    '실버': { hex: '#C0C0C0', usage: ['현대적', '세련됨'] },
    
    // 보라/라벤더 톤
    '라벤더': { hex: '#E6E6FA', usage: ['휴식', '뷰티', '로맨틱'] },
    '퍼플': { hex: '#800080', usage: ['창의성', '럭셔리'] },
    '라이트퍼플': { hex: '#DDA0DD', usage: ['부드러움', '꿈'] },
    '딥퍼플': { hex: '#16213E', usage: ['신비로움', '프리미엄'] },
    '바이올렛': { hex: '#8B00FF', usage: ['신비', '마법'] },
    '인디고': { hex: '#4B0082', usage: ['깊음', '신뢰'] },
    
    // 특수 색
    '투명': { hex: '#00000000', usage: ['배경', '효과'] },
    '흰색': { hex: '#FFFFFF', usage: ['텍스트', '배경'] },
    '흐림': { hex: '#CCCCCC', usage: ['비활성', '보조'] },
};

// 디자인 영감 컨셉
const designInspiration = [
    {
        name: '리퀴드 글래스 (Glassmorphism)',
        description: '투명하고 흐린 유리 같은 효과로 현대적이고 우아한 분위기',
        colors: ['#FFFFFF', '#F0F0F0', '#E8E8F0', '#D0D8F0'],
    },
    {
        name: '모던 미니멀',
        description: '간결한 라인과 넓은 여백으로 세련된 느낌',
        colors: ['#FFFFFF', '#000000', '#999999', '#F5F5F5'],
    },
    {
        name: '다크 모드',
        description: '눈을 편하게 하는 어두운 배경 + 밝은 액센트',
        colors: ['#1A1A2E', '#16213E', '#0F3460', '#E94560'],
    },
    {
        name: '그래디언트 에너지',
        description: '생동감 넘치는 그래디언트로 활력적인 분위기',
        colors: ['#667EEA', '#764BA2', '#F093FB', '#4FD1C5'],
    },
    {
        name: '뉴트럴 톤 럭셔리',
        description: '베이지, 버터, 크림 톤으로 따뜻하고 고급스러움',
        colors: ['#F5E6D3', '#D4A574', '#8B7355', '#E8DCC4'],
    },
    {
        name: '비브란트 팝',
        description: '밝고 선명한 컬러로 즐겁고 친근한 분위기',
        colors: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3'],
    },
    {
        name: '시원한 블루',
        description: '파란색 톤으로 신뢰감과 안정감',
        colors: ['#0096FF', '#0077BE', '#00B4D8', '#90E0EF'],
    },
    {
        name: '플로럴 핑크',
        description: '부드러운 핑크와 페일 톤으로 로맨틱한 분위기',
        colors: ['#FFB3D9', '#FF80AB', '#FABB89', '#FCF5F0'],
    },
];

// 색상 간 거리 계산 함수
function colorDistance(hex1, hex2) {
    const rgb1 = hexToRgb(hex1);
    const rgb2 = hexToRgb(hex2);
    
    return Math.sqrt(
        Math.pow(rgb1.r - rgb2.r, 2) +
        Math.pow(rgb1.g - rgb2.g, 2) +
        Math.pow(rgb1.b - rgb2.b, 2)
    );
}

// HEX를 RGB로 변환
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
}

// 비슷한 색 찾기
function findSimilarColors(hex, count = 6) {
    const allColors = Object.values(designerColors).flat();
    const similar = allColors
        .filter(c => c.hex !== hex)
        .map(c => ({ ...c, distance: colorDistance(hex, c.hex) }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, count);
    return similar;
}
