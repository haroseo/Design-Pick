// ─── Designer Colors (용도별 분류) ──────────────────────────────────────────
const designerColors = {
    ui_web: [
        { name: '버셀 블루', name_en: 'Vercel Blue', hex: '#0070F3' },
        { name: '성공 그린', name_en: 'Success Green', hex: '#00C853' },
        { name: '경고 앰버', name_en: 'Warning Amber', hex: '#FF6F00' },
        { name: '오류 레드', name_en: 'Error Red', hex: '#FF1744' },
        { name: '정보 틸', name_en: 'Info Teal', hex: '#00BCD4' },
        { name: '링크 블루', name_en: 'Link Blue', hex: '#1976D2' },
        { name: '비활성 그레이', name_en: 'Inactive Gray', hex: '#9E9E9E' },
        { name: '다크 배경', name_en: 'Dark Background', hex: '#121212' },
        { name: '카드 화이트', name_en: 'Card White', hex: '#FAFAFA' },
        { name: '보더 그레이', name_en: 'Border Gray', hex: '#E0E0E0' },
        { name: '포커스 블루', name_en: 'Focus Blue', hex: '#2563EB' },
        { name: '섀도우 블랙', name_en: 'Shadow Black', hex: '#0F172A' },
    ],
    brand_global: [
        { name: '애플 스페이스그레이', name_en: 'Apple SpaceGray', hex: '#1D1D1F' },
        { name: '구글 레드', name_en: 'Google Red', hex: '#EA4335' },
        { name: '스포티파이 그린', name_en: 'Spotify Green', hex: '#1DB954' },
        { name: '넷플릭스 레드', name_en: 'Netflix Red', hex: '#E50914' },
        { name: '슬랙 퍼플', name_en: 'Slack Purple', hex: '#4A154B' },
        { name: '디스코드 블러플', name_en: 'Discord Blurple', hex: '#5865F2' },
        { name: '유튜브 레드', name_en: 'Youtube Red', hex: '#FF0000' },
        { name: '인스타그램 퍼플', name_en: 'Instagram Purple', hex: '#C13584' },
        { name: '메타 블루', name_en: 'Meta Blue', hex: '#0866FF' },
        { name: '트위터 블루', name_en: 'Twitter Blue', hex: '#1DA1F2' },
        { name: '아마존 오렌지', name_en: 'Amazon Orange', hex: '#FF9900' },
        { name: '마이크로소프트 블루', name_en: 'MS Blue', hex: '#0078D4' },
        { name: '텐센트 블루', name_en: 'Tencent Blue', hex: '#1878F3' },
        { name: '틱톡 블랙', name_en: 'Tiktok Black', hex: '#010101' },
        { name: '링크드인 블루', name_en: 'LinkedIn Blue', hex: '#0A66C2' },
        { name: '에어비앤비 레드', name_en: 'Airbnb Red', hex: '#FF5A5F' },
    ],
    nature: [
        { name: '포레스트 그린', name_en: 'Forest Green', hex: '#228B22' },
        { name: '스카이 블루', name_en: 'Sky Blue', hex: '#87CEEB' },
        { name: '딥 오션', name_en: 'Deep Ocean', hex: '#006994' },
        { name: '선셋 오렌지', name_en: 'Sunset Orange', hex: '#FF4500' },
        { name: '체리 블라썸', name_en: 'Cherry Blossom', hex: '#FFB7C5' },
        { name: '골든 샌드', name_en: 'Golden Sand', hex: '#C2B280' },
        { name: '모스 그린', name_en: 'Moss Green', hex: '#8A9A5B' },
        { name: '라벤더 필드', name_en: 'Lavender Field', hex: '#967BB6' },
        { name: '오로라 그린', name_en: 'Aurora Green', hex: '#00FFCC' },
        { name: '산호초', name_en: 'Coral Reef', hex: '#FF6B6B' },
        { name: '크리스탈 레이크', name_en: 'Crystal Lake', hex: '#5DADE2' },
        { name: '가을 단풍', name_en: 'Autumn Leaf', hex: '#D35400' },
    ],
    pastel: [
        { name: '베이비 핑크', name_en: 'Baby Pink', hex: '#FFD1DC' },
        { name: '라벤더 미스트', name_en: 'Lavender Mist', hex: '#E6E6FA' },
        { name: '민트 크림', name_en: 'Mint Cream', hex: '#B5EAD7' },
        { name: '피치 블러쉬', name_en: 'Peach Blush', hex: '#FFCBA4' },
        { name: '베이비 블루', name_en: 'Baby Blue', hex: '#AED6F1' },
        { name: '버터 옐로우', name_en: 'Butter Yellow', hex: '#FFF0AA' },
        { name: '라일락', name_en: 'Lilac', hex: '#D7B2FF' },
    ],
    neon_modern: [
        { name: '네온 핑크', name_en: 'Neon Pink', hex: '#FF10F0' },
        { name: '일렉트릭 블루', name_en: 'Electric Blue', hex: '#00B4FF' },
        { name: '네온 그린', name_en: 'Neon Green', hex: '#39FF14' },
        { name: '사이버 옐로우', name_en: 'Cyber Yellow', hex: '#FFE600' },
        { name: '핫 오렌지', name_en: 'Hot Orange', hex: '#FF6A00' },
        { name: '매트릭스 그린', name_en: 'Matrix Green', hex: '#00FF41' },
        { name: 'UV 퍼플', name_en: 'UV Purple', hex: '#7B00FF' },
        { name: '레이저 레드', name_en: 'Laser Red', hex: '#FF003F' },
    ],
    earth: [
        { name: '테라코타', name_en: 'Terracotta', hex: '#C27A54' },
        { name: '탄 베이지', name_en: 'Tan Beige', hex: '#D2B48C' },
        { name: '시에나', name_en: 'Sienna', hex: '#A0522D' },
        { name: '카키', name_en: 'Khaki', hex: '#C3AA7E' },
        { name: '샌드스톤', name_en: 'Sandstone', hex: '#DEB887' },
        { name: '다크 초콜렛', name_en: 'Dark Chocolate', hex: '#4E2623' },
        { name: '올리브 드랩', name_en: 'Olive Drab', hex: '#6B7C3A' },
    ],
    monochrome: [
        { name: '퓨어 블랙', name_en: 'Pure Black', hex: '#000000' },
        { name: '다크 차콜', name_en: 'Dark Charcoal', hex: '#212121' },
        { name: '차콜 그레이', name_en: 'Charcoal Gray', hex: '#424242' },
        { name: '미디엄 그레이', name_en: 'Medium Gray', hex: '#616161' },
        { name: '실버', name_en: 'Silver', hex: '#9E9E9E' },
        { name: '라이트 그레이', name_en: 'Light Gray', hex: '#E0E0E0' },
        { name: '퓨어 화이트', name_en: 'Pure White', hex: '#FFFFFF' },
    ]
};

const colorNameReferences = {
    '가을 단풍': { hex: '#D35400', name_en: 'Autumn Leaf', tags: ['autumn', '오렌지', '붉은'] },
    '감청색': { hex: '#1428A0', name_en: 'Royal Blue', tags: ['business', '전문', '파랑'] },
    '검정': { hex: '#000000', name_en: 'Black', tags: ['contrast', '우아', '어둠'] },
    '골드': { hex: '#FFD700', name_en: 'Gold', tags: ['premium', '화려', '럭셔리'] },
    '녹색': { hex: '#00B050', name_en: 'Green', tags: ['natural', '성장', '자연'] },
    '네이비': { hex: '#001F5B', name_en: 'Navy', tags: ['formal', '클래식', '신뢰'] },
    '네온 그린': { hex: '#39FF14', name_en: 'Neon Green', tags: ['neon', '형광', '밝은'] },
    '라벤더': { hex: '#967BB6', name_en: 'Lavender', tags: ['soft', '우아', '보라'] },
    '민트': { hex: '#00B8A9', name_en: 'Mint', tags: ['fresh', '차분', '자연'] },
    '베이지': { hex: '#C8A882', name_en: 'Beige', tags: ['elegant', '전통', '따뜻함'] },
    '보라': { hex: '#7851A9', name_en: 'Purple', tags: ['luxury', '창의', '우아'] },
    '분홍': { hex: '#FF69B4', name_en: 'Pink', tags: ['pink', '귀여움', '부드러움'] },
    '빨강': { hex: '#FF0000', name_en: 'Red', tags: ['primary', '강렬', '위험'] },
    '살몬': { hex: '#FA8072', name_en: 'Salmon', tags: ['warm', '소프트', '핑크'] },
    '스카이블루': { hex: '#87CEEB', name_en: 'Sky Blue', tags: ['sky', '하늘', '맑음'] },
    '시안': { hex: '#00BCD4', name_en: 'Cyan', tags: ['tech', '혁신', '청량'] },
    '아이보리': { hex: '#FFFFF0', name_en: 'Ivory', tags: ['warm', '부드러운', '화이트'] },
    '오렌지': { hex: '#FF6B00', name_en: 'Orange', tags: ['energy', '활동', '따뜻함'] },
    '청록': { hex: '#20B2AA', name_en: 'Teal', tags: ['cool', '편안', '바다'] },
    '회색': { hex: '#808080', name_en: 'Gray', tags: ['neutral', '중립', '차분'] },
    '흰색': { hex: '#FFFFFF', name_en: 'White', tags: ['clean', '공간', '순수'] },
};

const designInspiration = [
    { name: '미니멀 모던', name_en: 'Minimal Modern', colors: ['#000000', '#FFFFFF', '#8B8B8B', '#E8E8E8'] },
    { name: '네온 나이트', name_en: 'Neon Night', colors: ['#FF10F0', '#FFE600', '#00B4FF', '#7B00FF'] },
    { name: '해양 휴가', name_en: 'Ocean Vacation', colors: ['#005377', '#00A8E8', '#00D9FF', '#B5EAD7'] },
    { name: '서로운 일몰', name_en: 'Deep Sunset', colors: ['#FF6B35', '#FFB627', '#C27A54', '#4E2623'] },
    { name: '숲의 꿈', name_en: 'Forest Dream', colors: ['#228B22', '#8A9A5B', '#DEB887', '#006994'] },
    { name: '리퀴드 글래스', name_en: 'Liquid Glass', colors: ['#E0F7FF', '#AED6F1', '#5DADE2', '#1A5276'] },
    { name: '다크 엘리건스', name_en: 'Dark Elegance', colors: ['#000000', '#212121', '#424242', '#9E9E9E'] },
    { name: '코랄 선셋', name_en: 'Coral Sunset', colors: ['#FF7F50', '#FF6B9D', '#FFD1DC', '#FFCBA4'] },
    { name: '어반 테크', name_en: 'Urban Tech', colors: ['#0070F3', '#212121', '#E0E0E0', '#FAFAFA'] },
    { name: '파스텔 드림', name_en: 'Pastel Dream', colors: ['#FFD1DC', '#B5EAD7', '#AED6F1', '#FFF0AA'] },
    { name: '브랜드 파워', name_en: 'Brand Power', colors: ['#E50914', '#1DB954', '#5865F2', '#FF9900'] },
    { name: '어스 톤', name_en: 'Earth Tone', colors: ['#C27A54', '#A0522D', '#DEB887', '#6B7C3A'] },
];

const designCards = [
    {
        id: '01',
        name: 'Night × Kiwi',
        category: '스포츠웨어 / 테크 / 스트릿 브랜딩',
        category_en: 'Sportswear / Tech / Street Branding',
        description: '어둠을 뚫고 나오는 형광의 대비\n강한 긴장감과 젊은 에너지를 동시에 만듭니다.',
        description_en: 'Fluorescent contrast emerging from darkness\nCreates strong tension and youthful energy simultaneously.',
        colors: [{ name: 'Night', hex: '#222222' }, { name: 'Kiwi', hex: '#89E900' }],
    },
    {
        id: '02',
        name: 'Cloud × Blue',
        category: 'IT / 핀테크 / 모던 브랜딩',
        category_en: 'IT / Fintech / Modern Branding',
        description: '깨끗한 여백 위에 적힌 투명한 신뢰\n차갑지 않으면서 전문성을 전달합니다.',
        description_en: 'Vivid trust written on clean space\nConveys professionalism without being cold.',
        colors: [{ name: 'Canvas Cloud', hex: '#EDF1F5' }, { name: 'Electric Blue', hex: '#0145F2' }],
    },
    {
        id: '03',
        name: 'Night × Imperial',
        category: '럭셔리 브랜딩 / 프리미엄 패키지 / 시네마틱',
        category_en: 'Luxury Branding / Premium Package / Cinematic',
        description: '어둠 속에서 피어오르는 붉은 기품\n시선을 단번에 사로잡으면서도 무게감을 잃지 않습니다.',
        description_en: 'Red elegance rising in the darkness\nCaptures attention while maintaining weight.',
        colors: [{ name: 'Night', hex: '#000F08' }, { name: 'Imperial', hex: '#FB3640' }],
    },
    {
        id: '04',
        name: 'ICE × MINT',
        category: '카페 / 뷰티 / 웰니스 브랜딩',
        category_en: 'Cafe / Beauty / Wellness Branding',
        description: '순수한 우유빛 위에 얹힌 상큼한 민트\n부드러우면서도 선명한 인상을 남깁니다.',
        description_en: 'Fresh mint on top of pure milky white\nLeaves a soft yet distinct impression.',
        colors: [{ name: 'Ice Latte', hex: '#E4DDD3' }, { name: 'The Mint', hex: '#00A19B' }],
    },
    {
        id: '05',
        name: 'Wattle × Bottle Green',
        category: '유기농 푸드 / 친환경 브랜딩 / 아웃도어',
        category_en: 'Organic Food / Eco-friendly / Outdoor',
        description: '숲의 깊이와 햇살의 생기가 만나는 자리\n자연주의 속에서도 눈에 띄는 생동감을 만듭니다.',
        description_en: 'Where forest depth meets sunlight vitality\nCreates striking vividness within naturalism.',
        colors: [{ name: 'Wattle', hex: '#CCDA47' }, { name: 'Bottle Green', hex: '#0A3625' }],
    },
    {
        id: '06',
        name: 'Sand × Rust',
        category: '인테리어 / 홈리빙 / 빈티지 브랜딩',
        category_en: 'Interior / Home Living / Vintage Branding',
        description: '사막의 따뜻한 모래 위에 얹힌 녹슨 붉음\n오래된 것들이 가지는 고요한 아름다움.',
        description_en: 'Rusted red on top of warm desert sand\nThe quiet beauty of old things.',
        colors: [{ name: 'Sand', hex: '#E8D5B7' }, { name: 'Rust', hex: '#B7410E' }],
    },
    {
        id: '07',
        name: 'Ink × Gold',
        category: '출판 / 리테일 / 하이엔드 브랜딩',
        category_en: 'Publishing / Retail / High-end Branding',
        description: '깊은 먹빛 위에 빛나는 황금의 대비\n고전적이면서도 현대적인 품격을 담았습니다.',
        description_en: 'Brilliant gold contrast on deep ink\nEmbodies both classical and modern elegance.',
        colors: [{ name: 'Ink', hex: '#1A1A2E' }, { name: 'Gold', hex: '#D4AF37' }],
    },
    {
        id: '08',
        name: 'Blush × Slate',
        category: '패션 / 웨딩 / 라이프스타일 브랜딩',
        category_en: 'Fashion / Wedding / Lifestyle Branding',
        description: '부드러운 살구빛과 차가운 슬레이트의 균형\n감성적이면서도 트렌디한 인상을 전달합니다.',
        description_en: 'Balance of soft blush and cold slate\nConveys an emotional yet sophisticated impression.',
        colors: [{ name: 'Blush', hex: '#F4A7B9' }, { name: 'Slate', hex: '#475569' }],
    },
    {
        id: '09',
        name: 'Void × Neon',
        category: '게임 / 음악 / 스트릿웨어 브랜딩',
        category_en: 'Game / Music / Streetwear Branding',
        description: '완전한 어둠 속에서 터져 나오는 형광\n강렬하고 미래적인 에너지를 표현합니다.',
        description_en: 'Neon bursting out of complete darkness\nExpresses intense and futuristic energy.',
        colors: [{ name: 'Void', hex: '#0D0D0D' }, { name: 'Neon', hex: '#FF10F0' }],
    },
    {
        id: '10',
        name: 'Coral × Midnight',
        category: '엔터테인먼트 / K-POP / 영상 브랜딩',
        category_en: 'Entertainment / K-POP / Video Branding',
        description: '생동감 넘치는 코랄과 깊은 미드나잇의 대비\n힙하면서도 무게감 있는 브랜드를 만듭니다.',
        description_en: 'Vibrant coral contrast with deep midnight\nCreates a hip yet weighty brand identity.',
        colors: [{ name: 'Coral', hex: '#FF6B6B' }, { name: 'Midnight', hex: '#191970' }],
    },
    {
        id: '11',
        name: 'Cream × Forest',
        category: '유기농 브랜드 / 카페 / 농산물',
        category_en: 'Organic Brand / Cafe / Produce',
        description: '크리미한 배경과 숲의 깊이가 더해진 조화\n자연스럽고 건강한 이미지를 만듭니다.',
        description_en: 'Harmony of creamy background and forest depth\nCreates a natural and healthy image.',
        colors: [{ name: 'Cream', hex: '#FFF8DC' }, { name: 'Forest', hex: '#2D5A27' }],
    },
    {
        id: '12',
        name: 'Denim × Wheat',
        category: '캐주얼 패션 / 아웃도어 라이프',
        category_en: 'Casual Fashion / Outdoor Life',
        description: '워크웨어의 견고함과 밀밭의 따뜻함\n일상 속 진정성 있는 스타일을 표현합니다.',
        description_en: 'Ruggedness of workwear and warmth of wheat fields\nExpresses authentic everyday style.',
        colors: [{ name: 'Denim', hex: '#1560BD' }, { name: 'Wheat', hex: '#F5DEB3' }],
    },
    {
        id: '13',
        name: 'Samsung One UI Vivid',
        category: '모바일 인터페이스 / 역동적 사용자 경험',
        category_en: 'Mobile Interface / Dynamic UX',
        description: '삼성 One UI 특유의 생동감 넘치는 블루와 화이트\n깨끗하고 반응성 좋은 모바일 디자인을 완성합니다.',
        description_en: 'Samsung One UI\'s signature vivid blue and white. Completes a clean and responsive mobile design.',
        colors: [{ name: 'Samsung Blue', hex: '#034EA2' }, { name: 'One UI White', hex: '#FFFFFF' }],
    },
    {
        id: '14',
        name: 'Apple Glassmorphism',
        category: 'OS 인터페이스 / 미니멀 프리미엄',
        category_en: 'OS Interface / Minimal Premium',
        description: '애플의 투명한 유리 질감과 고대비 텍스트\n공간감이 느껴지는 세련된 UI를 제안합니다.',
        description_en: 'Apple\'s transparent glass texture and high-contrast text. Proposes a sophisticated UI with a sense of space.',
        colors: [{ name: 'Glass Frost', hex: '#F5F5F7' }, { name: 'Deep Space', hex: '#1D1D1F' }],
    },
];

const designGuides = [
    { 
        title: '60-30-10 법칙', 
        title_en: '60-30-10 Rule',
        desc: '주조색 60%, 보조색 30%, 포인트색 10%의 황금 비율로 균형 잡힌 디자인을 완성하세요.', 
        desc_en: 'Create a balanced design with the golden ratio: 60% primary, 30% secondary, and 10% accent color.',
        colors: ['#F5F5F7', '#D1D1D6', '#FF9500'] 
    },
    { 
        title: '보색 대비 활용', 
        title_en: 'Complementary Contrast',
        desc: '색상환에서 서로 마주 보는 두 색상을 조합하는 방식입니다. 강렬한 시각적 효과를 줍니다.', 
        desc_en: 'A method of combining two colors facing each other on the color wheel for a striking visual effect.',
        colors: ['#FF3B30', '#34C759'] 
    },
    { 
        title: '유사색 (Analogous)', 
        title_en: 'Analogous Colors',
        desc: '색상환에서 서로 인접한 3색을 사용합니다. 눈이 편안하고 조화로운 분위기를 연출합니다.', 
        desc_en: 'Uses three adjacent colors on the color wheel. Creates a comfortable and harmonious atmosphere.',
        colors: ['#007AFF', '#5856D6', '#AF52DE'] 
    },
    { 
        title: '톤온톤 (Tone-on-Tone)', 
        title_en: 'Tone-on-Tone',
        desc: '동일한 색상에서 채도와 명도만 다르게 조합합니다. 매우 안정적이고 깔끔한 이미지를 줍니다.', 
        desc_en: 'Combines the same hue with different saturation and brightness. Gives a stable and clean image.',
        colors: ['#0A84FF', '#64D2FF', '#B0E2FF'] 
    },
    { 
        title: '모노크롬 (Monochrome)', 
        title_en: 'Monochrome',
        desc: '하나의 색상을 베이스로 화이트, 블랙을 섞어 명도를 조절합니다. 극강의 심플함을 보여줍니다.', 
        desc_en: 'Uses a single base color and adjusts brightness with white and black. Shows extreme simplicity.',
        colors: ['#111111', '#888888', '#EEEEEE'] 
    },
    { 
        title: 'Apple: 글래스모피즘', 
        title_en: 'Apple: Glassmorphism',
        desc: '배경을 흐리게 처리(Blur)하고 반투명한 레이어를 쌓아 공간감을 만듭니다. 프리미엄한 느낌을 줍니다.', 
        desc_en: 'Creates a sense of space by blurring the background and stacking semi-transparent layers. Gives a premium feel.',
        colors: ['#FFFFFF', 'rgba(255,255,255,0.1)', '#000000'] 
    },
    { 
        title: 'Google: 머티리얼 쉐도우', 
        title_en: 'Google: Material Shadows',
        desc: '빛의 방향에 따른 그림자 깊이로 요소의 위계를 정합니다. 직관적인 클릭 범위를 알려줍니다.', 
        desc_en: 'Determines the hierarchy of elements through shadow depth according to the light direction. Indicates intuitive click areas.',
        colors: ['#4285F4', '#EA4335', '#FBBC05'] 
    }
];

const designFonts = [
    {
        id: 'f01',
        name: 'Inter',
        family: "'Inter', sans-serif",
        url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap',
        category: 'Modern / UI',
        category_kr: '모던 / 인터페이스',
        pair: 'Roboto',
        note: '현대 웹 디자인의 표준과도 같은 폰트입니다. 압도적인 가독성을 자랑합니다.',
        note_en: 'The gold standard for modern web UI. Boasts incredible legibility.',
        sample: 'Design is not just what it looks like and feels like.'
    },
    {
        id: 'f02',
        name: 'Playfair Display',
        family: "'Playfair Display', serif",
        url: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap',
        category: 'Luxury / Editorial',
        category_kr: '럭셔리 / 에디토리얼',
        pair: 'Montserrat',
        note: '고전적인 품격과 현대적인 세련미가 공존합니다. 제목용으로 탁월합니다.',
        note_en: 'Classical elegance meets modern sophistication. Perfect for headlines.',
        sample: 'The detail is not the detail. It is the design.'
    },
    {
        id: 'f03',
        name: 'Montserrat',
        family: "'Montserrat', sans-serif",
        url: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap',
        category: 'Geometric / Tech',
        category_kr: '지오메트릭 / 테크',
        pair: 'Open Sans',
        note: '기하학적인 균형미가 돋보입니다. 브랜딩과 대담한 타이포그래피에 추천합니다.',
        note_en: 'Beautiful geometric balance. Recommended for branding and bold typography.',
        sample: 'Everything is designed. Few things are designed well.'
    },
    {
        id: 'f04',
        name: 'Lora',
        family: "'Lora', serif",
        url: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&display=swap',
        category: 'Soft / Literary',
        category_kr: '감성 / 문학적',
        pair: 'Merriweather',
        note: '부드러운 곡선이 인상적인 세리프입니다. 장문의 본문이나 감성적인 글에 적합합니다.',
        note_en: 'A serif with soft curves. Ideal for long-form body text or emotional content.',
        sample: 'Good design is honest.'
    },
    {
        id: 'f05',
        name: 'Space Mono',
        family: "'Space Mono', monospace",
        url: 'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap',
        category: 'Tech / Retro',
        category_kr: '테크 / 레트로',
        pair: 'Helvetica',
        note: '기하학적이고 그로테스크한 느낌의 모노스페이스입니다. 힙한 테크 디자인에 제격입니다.',
        note_en: 'A geometric, grotesque-style monospace. Perfect for hip tech designs.',
        sample: '0101 Code meets Art.'
    },
    {
        id: 'f06',
        name: 'Syne',
        family: "'Syne', sans-serif",
        url: 'https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&display=swap',
        category: 'Art / Avant-garde',
        category_kr: '예술 / 아방가르드',
        pair: 'Inter',
        note: '아방가르드하고 독창적인 형태를 가졌습니다. 예술적인 포스터나 강렬한 제목에 추천합니다.',
        note_en: 'Avant-garde and unique letterforms. Great for artistic posters or bold headlines.',
        sample: 'Typography is the voice of design.'
    },
    {
        id: 'f07',
        name: 'Nanum Myeongjo',
        family: "'Nanum Myeongjo', serif",
        url: 'https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap',
        category: 'Korean Classic',
        category_kr: '한국적 클래식',
        pair: 'Pretendard',
        note: '한국적인 정서와 정갈한 아름다움이 담긴 서체입니다. 신뢰감 있는 인상을 줍니다.',
        note_en: 'A typeface with Korean sentiment and clean beauty. Gives a trustworthy impression.',
        sample: '디자인은 보이지 않는 곳까지 완벽해야 합니다.'
    }
];

const uiTranslations = {
    kr: {
        nav_picker: '컬러 피커',
        nav_library: '라이브러리',
        nav_today: '오늘의 영감',
        nav_inspiration: '인스피레이션',
        nav_guide: '가이드',
        nav_my: '내 보관함',
        nav_fonts: 'Fonts',
        font_playground_placeholder: '여기에 문구를 입력하여 폰트를 테스트해보세요...',
        font_designer_note: '디자이너의 노트',
        font_pairing: '추천 페어링',
        font_copy_stack: 'CSS 스택 복사',
        detail_mood: '색상 성격',
        detail_advice: '디자인 조언',
        detail_usage: '활용 분야',
        detail_similar: '유사한 색상 추천',
        detail_contrast: '텍스트 가독성 테스트',
        btn_copy_hex: 'HEX 복사',
        btn_copy_rgb: 'RGB 복사',
        btn_reset: '리셋',
        btn_save: '보관함에 저장',
        btn_share: '공유하기',
        btn_close: '닫기',
        search_placeholder: '색상 이름이나 태그 검색...',
        empty_fav: '보관함이 비어 있습니다.',
        select_family: '색 계열 선택',
        keyboard_guide_title: '조작 방법',
        keyboard_guide_1: 'R / G / B 클릭: 채널 선택',
        keyboard_guide_2: '← →: 선택 채널 미세 조정',
        keyboard_guide_3: '스페이스바: 룰렛 재시작',
        inspiration_subtitle: '멈추면 팔레트가 나타납니다 • 색을 클릭하면 Color Picker로 이동',
        guide_subtitle: '색을 다루는 기본적인 실용적인 지식들',
        library_subtitle: '용도별로 분류된 컬러 라이브러리',
        fonts_subtitle: '디자인의 완성도를 높여주는 마스터피스 폰트 추천',
        cat_all: '전체보기',
        cat_ui_web: 'UI/웹',
        cat_brand_global: '브랜딩',
        cat_nature: '자연/에코',
        cat_pastel: '감성/파스텔',
        cat_neon_modern: '네온/모던',
        cat_earth: '어스 톤',
        cat_monochrome: '모노크롬',
        btn_export_css: 'CSS / Tailwind 내보내기',
        my_palettes_title: '내 보관함',
        search_result_empty: '검색 결과가 없습니다.',
        footer_copy: '© 2024 RGBdom. 디자인을 위한 모든 색상.'
    },
    en: {
        nav_picker: 'Picker',
        nav_library: 'Library',
        nav_today: 'Inspo',
        nav_inspiration: 'Motion',
        nav_guide: 'Guide',
        nav_my: 'My Library',
        nav_fonts: 'Fonts',
        font_playground_placeholder: 'Type here to test fonts...',
        font_designer_note: "Designer's Note",
        font_pairing: 'Pairing',
        font_copy_stack: 'Copy CSS Stack',
        detail_mood: 'Mood',
        detail_advice: 'Design Advice',
        detail_usage: 'Usage',
        detail_similar: 'Similar Colors',
        detail_contrast: 'Contrast Test',
        btn_copy_hex: 'Copy HEX',
        btn_copy_rgb: 'Copy RGB',
        btn_reset: 'Reset',
        btn_save: 'Save to My',
        btn_share: 'Share Link',
        btn_close: 'Close',
        search_placeholder: 'Search names or tags...',
        empty_fav: 'Your library is empty.',
        select_family: 'Select Family',
        keyboard_guide_title: 'Controls',
        keyboard_guide_1: 'Click R/G/B: Select Channel',
        keyboard_guide_2: '← →: Fine Adjust Channel',
        keyboard_guide_3: 'Space: Restart Roulette',
        inspiration_subtitle: 'Stop to see palette • Click color to jump to Picker',
        guide_subtitle: 'Basic and practical knowledge of color',
        library_subtitle: 'Color library categorized by usage',
        fonts_subtitle: 'Masterpiece font recommendations to elevate your design',
        cat_all: 'All',
        cat_ui_web: 'UI/Web',
        cat_brand_global: 'Branding',
        cat_nature: 'Nature',
        cat_pastel: 'Pastel',
        cat_neon_modern: 'Neon/Modern',
        cat_earth: 'Earth Tone',
        cat_monochrome: 'Monochrome',
        btn_export_css: 'Export CSS / Tailwind',
        my_palettes_title: 'My Palettes',
        search_result_empty: 'No results found.',
        footer_copy: '© 2024 RGBdom. All colors for design.'
    }
};

// ─── Design Stories (오늘의 디자인 지식) ──────────────────────────────────────────
const designStories = [
    {
        id: "story-apple",
        brand: "Apple",
        title: "콘텐츠를 돋보이게 하는 '궁극의 무채색'",
        title_en: "The Ultimate Neutral Color that Highlights Content",
        description: "애플은 UI에서 색상을 극도로 제한하여 사용합니다. 스페이스 그레이와 화이트, 블랙을 베이스로 깔아두고, 오직 사용자가 집중해야 할 핵심 버튼이나 알림에만 색을 씁니다. 이는 운영체제 자체가 돋보이는 것이 아니라, 사용자가 즐기는 '콘텐츠(사진, 영상, 앱)'가 주인공이 되도록 만드는 애플의 철학입니다.",
        description_en: "Apple uses colors extremely sparingly in its UI. By laying down Space Gray, White, and Black as a base, colors are reserved exclusively for key buttons or notifications. This philosophy ensures that the 'content' is the protagonist, not the OS itself.",
        hexColors: ["#000000", "#1D1D1F", "#F5F5F7", "#007AFF"],
        font: "San Francisco",
        fontDesc: "작은 애플워치 화면부터 거대한 모니터까지 완벽한 가독성을 유지하기 위해 자체 개발한 폰트입니다."
    },
    {
        id: "story-spotify",
        brand: "Spotify",
        title: "어둠 속에서 빛나는 음악의 에너지",
        title_en: "The Energy of Music Shining in the Dark",
        description: "스포티파이의 앱은 완전히 새까만 다크 테마를 기본으로 합니다. 이는 시각적 피로를 줄여줄 뿐만 아니라, 아티스트들의 다채로운 '앨범 아트워크'를 마치 갤러리처럼 돋보이게 합니다. 여기에 스포티파이 특유의 '네온 그린'이 포인트 컬러로 들어가 음악의 생동감과 에너지를 강렬하게 전달합니다.",
        description_en: "Spotify's app uses a deep dark theme by default. This not only reduces eye strain but also makes artists' colorful 'album artworks' pop out like a gallery. The signature 'Neon Green' acts as a vibrant accent.",
        hexColors: ["#121212", "#282828", "#1DB954", "#FFFFFF"],
        font: "Circular",
        fontDesc: "기하학적이고 동글동글한 산세리프 폰트로, 음악이 주는 친근하고 감성적인 느낌을 시각화했습니다."
    },
    {
        id: "story-toss",
        brand: "Toss",
        title: "금융의 무거움을 덜어낸 '친근한 블루'",
        title_en: "A Friendly Blue that Lightens the Weight of Finance",
        description: "전통적인 은행 앱들이 딱딱하고 어두운 파란색으로 '보수적인 신뢰'를 강조했다면, 토스는 채도가 높고 경쾌한 '토스 블루'를 선택했습니다. 여기에 불필요한 선(Line)을 모두 없애고 넓은 여백을 활용하여, 금융 앱 특유의 심리적 장벽을 대폭 낮추고 '누구나 쉽게 쓰는 금융'이라는 메시지를 UI에 담아냈습니다.",
        description_en: "While traditional banks used dark blue for 'conservative trust', Toss chose a vibrant, cheerful 'Toss Blue'. Removing unnecessary lines and using wide margins lowered the psychological barrier of finance.",
        hexColors: ["#FFFFFF", "#F2F4F6", "#3182F6", "#191F28"],
        font: "Tossface (Emoji) / SUIT",
        fontDesc: "딱딱한 금융 용어 대신, 직관적인 자체 이모지(Tossface)를 개발하여 사용자 경험을 친근하게 바꿨습니다."
    },
    {
        id: "story-netflix",
        brand: "Netflix",
        title: "영화관의 붉은 커튼을 스마트폰으로",
        title_en: "Bringing the Red Curtain of the Cinema to the Smartphone",
        description: "넷플릭스의 강렬한 '넷플릭스 레드(Netflix Red)'는 과거 클래식 영화관의 붉은 커튼과 푹신한 벨벳 의자를 연상시킵니다. 어두운 방에서 넷플릭스를 켤 때, 이 붉은색 로고는 사용자에게 '이제부터 영화가 시작된다'는 짜릿한 기대감을 심어주는 강력한 브랜딩 도구로 작용합니다.",
        description_en: "Netflix's intense 'Netflix Red' evokes the red curtains and velvet seats of classic cinemas. Turning on Netflix in a dark room builds the thrilling anticipation that 'the movie is about to start'.",
        hexColors: ["#000000", "#141414", "#E50914", "#FFFFFF"],
        font: "Netflix Sans",
        fontDesc: "영화 포스터처럼 화면을 꽉 채우는 강렬한 헤드라인을 위해, 자간을 좁혀도 가독성이 높은 폰트를 만들었습니다."
    }
];

// ─── 30+ New Fonts ─────────────────────────────────────────────────────────────
const additionalFonts = [
    { id: 'f08', name: 'Montserrat', family: "'Montserrat', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap', category: 'Modern Geometric', category_kr: '모던 지오메트릭', pair: 'Open Sans', note: '깔끔하고 현대적인 기하학적 형태. 제목용으로 강력 추천합니다.', note_en: 'Clean, modern geometric shape. Highly recommended for headings.', sample: '디자인은 단순함에서 완성된다.' },
    { id: 'f09', name: 'Roboto', family: "'Roboto', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap', category: 'UI/UX Base', category_kr: 'UI 기본 폰트', pair: 'Roboto Slab', note: '구글의 머티리얼 디자인 표준. 안드로이드와 웹 어디서든 완벽한 가독성.', note_en: 'Google Material Design standard. Perfect legibility everywhere.', sample: '가장 익숙하면서 완벽한 형태.' },
    { id: 'f10', name: 'Playfair Display', family: "'Playfair Display', serif", url: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap', category: 'Elegant Serif', category_kr: '우아한 세리프', pair: 'Source Sans Pro', note: '패션, 뷰티, 럭셔리 브랜드에 어울리는 우아하고 클래식한 폰트.', note_en: 'Elegant classic font perfect for fashion and luxury brands.', sample: '시대를 초월한 아름다움.' },
    { id: 'f11', name: 'Lato', family: "'Lato', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap', category: 'Friendly Modern', category_kr: '친근한 모던', pair: 'Merriweather', note: '둥글고 부드러운 느낌과 단단한 구조가 만나 따뜻한 분위기를 줍니다.', note_en: 'Rounded and warm yet solid structure.', sample: '친근하게 다가가는 디자인.' },
    { id: 'f12', name: 'Poppins', family: "'Poppins', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap', category: 'Playful Geometric', category_kr: '부드러운 지오메트릭', pair: 'Lora', note: '둥글둥글한 기하학적 서체로, 트렌디한 스타트업 UI에 가장 많이 쓰입니다.', note_en: 'Trendy geometric font, highly used in modern startup UIs.', sample: '트렌드를 앞서가는 둥근 곡선.' },
    { id: 'f13', name: 'Noto Sans KR', family: "'Noto Sans KR', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap', category: 'Korean Base', category_kr: '한글 기본', pair: 'Roboto', note: '구글과 어도비가 만든 가장 대중적인 한글 웹 폰트.', note_en: 'The most popular Korean web font by Google & Adobe.', sample: '세상의 모든 언어를 담다.' },
    { id: 'f14', name: 'Merriweather', family: "'Merriweather', serif", url: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&display=swap', category: 'Readable Serif', category_kr: '가독성 높은 세리프', pair: 'Open Sans', note: '디지털 화면에서 긴 글을 읽기에 아주 편안하게 디자인되었습니다.', note_en: 'Designed to be highly readable on screens for long texts.', sample: '화면 속에서도 종이처럼 편안하게.' },
    { id: 'f15', name: 'Raleway', family: "'Raleway', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;800&display=swap', category: 'Elegant Sans', category_kr: '우아한 산스', pair: 'Roboto', note: 'W가 겹치는 독특한 형태가 매력적인 얇고 우아한 폰트.', note_en: 'Thin and elegant with a unique crossing W.', sample: '여백이 만들어내는 세련됨.' },
    { id: 'f16', name: 'Ubuntu', family: "'Ubuntu', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap', category: 'Tech Grotesque', category_kr: '테크 감성', pair: 'Open Sans', note: '우분투 OS의 시그니처 폰트. 둥글면서도 미래지향적인 느낌.', note_en: 'Signature font of Ubuntu OS. Rounded and futuristic.', sample: '기술과 사람을 연결하는 선.' },
    { id: 'f17', name: 'Oswald', family: "'Oswald', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&display=swap', category: 'Impact Display', category_kr: '강렬한 제목용', pair: 'Roboto', note: '폭이 좁고 키가 커서 한눈에 들어오는 강렬한 타이틀에 적합합니다.', note_en: 'Tall and narrow, perfect for impactful headlines.', sample: '강렬하게 시선을 사로잡다.' },
    { id: 'f18', name: 'Nunito', family: "'Nunito', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;800&display=swap', category: 'Rounded Sans', category_kr: '둥근 산스', pair: 'Lora', note: '모든 끝이 둥글게 처리되어 매우 귀엽고 다정한 느낌을 줍니다.', note_en: 'Rounded terminals give a very cute and friendly vibe.', sample: '동글동글 친근한 목소리.' },
    { id: 'f19', name: 'Rubik', family: "'Rubik', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap', category: 'Chunky Modern', category_kr: '묵직한 모던', pair: 'Karla', note: '단단하고 묵직한 두께감 덕분에 게임이나 테크 UI에 잘 어울립니다.', note_en: 'Solid and chunky, fits well with game or tech UI.', sample: '단단하게 기초를 다지다.' },
    { id: 'f20', name: 'Work Sans', family: "'Work Sans', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;800&display=swap', category: 'Grotesque Base', category_kr: '그로테스크 기본', pair: 'Space Mono', note: '초기 그로테스크 폰트를 현대적으로 재해석하여 깔끔한 화면을 구성합니다.', note_en: 'Modern interpretation of early grotesque fonts.', sample: '일과 예술의 경계.' },
    { id: 'f21', name: 'Fira Sans', family: "'Fira Sans', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;700&display=swap', category: 'Legibility Tech', category_kr: '테크 가독성', pair: 'Fira Code', note: '모질라 파이어폭스를 위해 만들어진 가독성 최강의 폰트.', note_en: 'Created for Mozilla Firefox, boasts superb legibility.', sample: '작은 화면에서도 뚜렷하게.' },
    { id: 'f22', name: 'Quicksand', family: "'Quicksand', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap', category: 'Rounded Display', category_kr: '얇고 둥근 산스', pair: 'Open Sans', note: '얇고 매우 둥근 형태로, 감성적이거나 미니멀한 디자인에 제격입니다.', note_en: 'Thin and very rounded, perfect for emotional/minimal design.', sample: '가벼운 깃털 같은 부드러움.' },
    { id: 'f23', name: 'Barlow', family: "'Barlow', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700&display=swap', category: 'Industrial Tech', category_kr: '산업 테크', pair: 'PT Serif', note: '미국의 고속도로 표지판과 자동차 번호판에서 영감을 받은 형태.', note_en: 'Inspired by US highway signs and license plates.', sample: '명확하고 직선적인 길잡이.' },
    { id: 'f24', name: 'Josefin Sans', family: "'Josefin Sans', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&display=swap', category: 'Vintage Geometric', category_kr: '빈티지 지오메트릭', pair: 'Lato', note: '1920년대 스칸디나비아 스타일이 가미된 우아한 기하학적 폰트.', note_en: 'Elegant geometric font with a 1920s Scandinavian touch.', sample: '우아한 빈티지의 재해석.' },
    { id: 'f25', name: 'Lora', family: "'Lora', serif", url: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&display=swap', category: 'Contemporary Serif', category_kr: '현대적인 세리프', pair: 'Open Sans', note: '디지털 화면에서의 텍스트 예술성을 극대화한 부드러운 세리프.', note_en: 'Soft serif maximizing text artistry on digital screens.', sample: '화면에 그려진 붓터치.' },
    { id: 'f26', name: 'PT Sans', family: "'PT Sans', sans-serif", url: 'https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400&display=swap', category: 'Humanist Sans', category_kr: '휴머니스트 산스', pair: 'PT Serif', note: '러시아 문자 프로젝트의 일환으로 제작된, 공간감이 탁월한 폰트.', note_en: 'Created for Public Type of Russia, excellent spatial feel.', sample: '여유로운 공간과 명확한 소통.' },
    { id: 'f27', name: 'Inconsolata', family: "'Inconsolata', monospace", url: 'https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap', category: 'Coding Monospace', category_kr: '개발자 코딩용', pair: 'Roboto', note: '개발자들에게 사랑받는 아름답고 뚜렷한 모노스페이스 폰트.', note_en: 'Beautiful and clear monospace font loved by developers.', sample: 'print("완벽한 코드의 형태");' },
    { id: 'f28', name: 'Source Code Pro', family: "'Source Code Pro', monospace", url: 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600&display=swap', category: 'Coding Monospace', category_kr: '어도비 코딩용', pair: 'Source Sans Pro', note: '어도비에서 특별히 코딩 환경을 위해 설계한 눈이 편안한 폰트.', note_en: 'Designed by Adobe specifically for coding environments.', sample: '에러 없는 깔끔한 디자인.' },
    { id: 'f29', name: 'Dosis', family: "'Dosis', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Dosis:wght@400;600;800&display=swap', category: 'Rounded Display', category_kr: '둥근 디스플레이', pair: 'Roboto', note: '둥글고 약간 넓은 비율로 독특한 개성을 지닌 귀여운 타이틀용 폰트.', note_en: 'Rounded and slightly wide, unique and cute for titles.', sample: '나만의 통통 튀는 개성.' },
    { id: 'f30', name: 'Anton', family: "'Anton', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Anton&display=swap', category: 'Heavy Display', category_kr: '헤비 디스플레이', pair: 'Open Sans', note: '인터넷 브라우저용으로 다시 그려진 굵고 파워풀한 산세리프.', note_en: 'Bold and powerful sans-serif redrawn for web browsers.', sample: '시선을 강탈하는 두꺼운 선.' },
    { id: 'f31', name: 'Cabin', family: "'Cabin', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,700;1,400&display=swap', category: 'Humanist Sans', category_kr: '휴머니스트 산스', pair: 'Raleway', note: '현대적인 비율에 약간의 곡선을 가미하여 부드럽고 다가가기 쉬운 폰트.', note_en: 'Modern proportions with slight curves, soft and accessible.', sample: '편안한 대화의 시작.' },
    { id: 'f32', name: 'Pacifico', family: "'Pacifico', cursive", url: 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap', category: 'Brush Cursive', category_kr: '브러쉬 필기체', pair: 'Roboto', note: '1950년대 미국의 서핑 문화에서 영감을 받은 유쾌한 필기체.', note_en: 'Fun cursive inspired by 1950s American surf culture.', sample: '자유로운 파도를 타는 느낌.' }
];

designFonts.push(...additionalFonts);

// ─── Logo Design Guide ────────────────────────────────────────────────────────
const logoDesignGuide = [
    {
        title: '로고 디자인의 5대 원칙',
        content: `1. <b>단순함(Simplicity)</b>: 단순한 로고는 기억하기 쉽고 다양한 매체에 적용하기 좋습니다. 애플, 나이키의 로고를 떠올려보세요.<br><br>
        2. <b>기억 용이성(Memorability)</b>: 단순함을 넘어서, 뇌리에 박히는 핵심 형태(Point) 하나가 있어야 합니다.<br><br>
        3. <b>영속성(Timelessness)</b>: 트렌드는 변하지만 로고는 변하지 않습니다. 10년, 50년 뒤에도 촌스럽지 않아야 합니다.<br><br>
        4. <b>다용도성(Versatility)</b>: 명함부터 대형 빌보드, 모바일 앱 아이콘까지 크기에 상관없이 잘 보여야 하며, 흑백 반전 상태에서도 형태가 명확해야 합니다.<br><br>
        5. <b>적절성(Appropriateness)</b>: 타겟 오디언스에 맞는 분위기를 내야 합니다. 유치원 로고가 딱딱한 고딕체면 안 되는 것과 같습니다.`
    },
    {
        title: '로고의 종류 (Types of Logos)',
        content: `1. <b>워드마크(Wordmark)</b>: 구글, 코카콜라처럼 텍스트 자체가 로고인 형태. 폰트 변형이 핵심입니다.<br>
        2. <b>레터마크/모노그램(Lettermark)</b>: IBM, HBO, CNN처럼 이름이 긴 기업이 이니셜만 따서 만든 형태.<br>
        3. <b>심볼/픽토리얼 마크(Pictorial mark)</b>: 애플, 트위터처럼 그림 하나로 브랜드를 표현하는 형태. 브랜드 인지도가 높아야 효과적입니다.<br>
        4. <b>추상적 마크(Abstract mark)</b>: 펩시, 아디다스처럼 특정 사물이 아닌 기하학적 형태로 가치를 전달하는 심볼.<br>
        5. <b>마스코트(Mascot)</b>: KFC 샌더스 대령, 미쉐린 맨처럼 캐릭터를 앞세운 형태. 친근감을 줍니다.<br>
        6. <b>엠블럼(Emblem)</b>: 할리데이비슨, 스타벅스처럼 텍스트와 심볼이 하나의 뱃지 형태로 결합된 클래식한 로고.`
    },
    {
        title: '그리드 시스템 & 황금비율',
        content: `프로 디자이너들은 로고를 그릴 때 눈대중으로 그리지 않습니다.<br><br>
        - <b>그리드(Grid)</b>: 원, 정사각형, 직선 등 기하학적 도형들의 교차점을 이용해 벡터 라인을 다듬는 방법. 트위터 새 로고가 13개의 원으로 만들어진 것이 유명합니다.<br>
        - <b>황금비율(Golden Ratio, 1:1.618)</b>: 피보나치 수열을 기반으로 한 자연의 비율. 로고의 심볼 크기나 타이포그래피의 자간/비율을 설정할 때 황금비율을 사용하면 인간의 눈에 가장 안정적으로 보입니다.`
    },
    {
        title: '색상 심리학 가이드',
        content: `로고의 색상은 브랜드의 감정을 결정합니다.<br>
        - <span style="color:#FF3B30">🔴 Red</span>: 열정, 에너지, 식욕 자극, 흥분 (예: 넷플릭스, 코카콜라)<br>
        - <span style="color:#007AFF">🔵 Blue</span>: 신뢰, 전문성, IT, 보안 (예: 삼성, 메타, 포드)<br>
        - <span style="color:#FFCC00">🟡 Yellow</span>: 긍정, 경고, 가성비, 창의력 (예: 맥도날드, 카카오)<br>
        - <span style="color:#34C759">🟢 Green</span>: 자연, 평화, 성장, 건강 (예: 스타벅스, 네이버)<br>
        - <span>⚫ Black & White</span>: 럭셔리, 미니멀, 권위 (예: 애플, 샤넬, 나이키)`
    }
];

// ─── Design Fields Guide ──────────────────────────────────────────────────────
const designFieldsGuide = [
    {
        title: '시각 디자인 (Visual/Graphic Design)',
        content: `가장 포괄적이고 기본적인 디자인 분야입니다.<br>포스터, 로고, 타이포그래피, 패키지, 편집 디자인 등을 포함하며 <b>메시지를 시각적으로 아름답고 명확하게 전달</b>하는 것이 핵심입니다.<br><br><b>필수 툴</b>: Adobe Illustrator, Photoshop, InDesign`
    },
    {
        title: 'UI / UX 디자인 (User Interface/Experience)',
        content: `우리가 매일 쓰는 웹사이트와 모바일 앱을 설계합니다.<br>
        - <b>UI (인터페이스)</b>: 버튼의 색상, 폰트 크기, 레이아웃 등 눈에 보이는 화면을 디자인합니다.<br>
        - <b>UX (경험)</b>: 사용자가 버튼을 눌렀을 때 어떤 화면으로 가야 편할지 등 '사용자의 흐름과 심리'를 연구합니다.<br><br><b>필수 툴</b>: Figma, Framer, Protopie`
    },
    {
        title: '3D 그래픽 & 모션 디자인',
        content: `평면을 넘어 입체와 움직임을 만듭니다.<br>제품 렌더링, 게임 배경, 영상 오프닝 타이틀, 메타버스 등에서 맹활약하는 미래지향적 분야입니다.<br><br><b>필수 툴</b>: Blender, Cinema 4D, After Effects, Maya`
    },
    {
        title: '제품 & 산업 디자인 (Product/Industrial Design)',
        content: `스마트폰, 자동차, 의자 등 우리가 만지고 사용하는 '물리적인 제품'을 설계합니다.<br>단순한 아름다움을 넘어 인체공학, 재료공학, 생산 단가까지 고려해야 하는 공학적 예술입니다.<br><br><b>필수 툴</b>: Rhino, Fusion 360, SolidWorks, KeyShot`
    },
    {
        title: '진로 탐색 팁 (어떤 디자인이 맞을까?)',
        content: `✔️ 그림 그리는 것 자체를 좋아하고 굿즈, 캐릭터가 좋다면 👉 <b>일러스트레이터 / 시각 디자인</b><br>
        ✔️ 논리적으로 구조를 짜고, 앱이나 웹을 기획하는 게 재밌다면 👉 <b>UX/UI 디자인</b><br>
        ✔️ 공간감이 뛰어나고 움직이는 효과나 메타버스에 관심이 있다면 👉 <b>3D / 모션 그래픽</b><br>
        ✔️ 손으로 물건을 만지작거리고 구조를 분해해보는 걸 좋아한다면 👉 <b>산업 디자인</b>`
    }
];

// ─── Mockup Guide ─────────────────────────────────────────────────────────────
const mockupGuide = [
    {
        title: '목업(Mockup)이란?',
        content: `목업은 디자인 결과물을 <b>실제 사용될 환경(스마트폰 화면, 명함, 간판, 티셔츠 등)에 합성해 보여주는 프레젠테이션 기법</b>입니다.<br>
        클라이언트나 포트폴리오 심사관은 평면적인 로고 파일보다, 실제 명함에 박판 인쇄된 듯한 목업을 보았을 때 10배 이상의 가치를 느낍니다.`
    },
    {
        title: '좋은 목업을 고르는 법',
        content: `1. <b>조명과 그림자</b>: 가짜 티가 나지 않으려면 조명과 그림자가 매우 자연스러운 고해상도(최소 3000px 이상) PSD 파일을 골라야 합니다.<br>
        2. <b>맥락(Context) 일치</b>: 타겟이 20대 여성인 뷰티 앱 디자인을, 칙칙하고 남성적인 책상 위에 놓인 스마트폰 목업에 씌우면 안 됩니다. 타겟에 맞는 분위기의 소품이 있는 목업을 고르세요.<br>
        3. <b>여백</b>: 목업 이미지만 꽉 차게 보여주기보다, 텍스트(설명)가 들어갈 여백이 있는 사진이 포트폴리오 구성에 유리합니다.`
    },
    {
        title: '무료 & 유료 목업 다운로드 사이트 TOP 5',
        content: `1. <b>Artboard Studio</b> (웹 기반): 포토샵 없이 브라우저에서 바로 목업을 만들 수 있는 혁신적인 툴.<br>
        2. <b>Freepik / Envato Elements</b> (가성비): 방대한 양의 무료/유료 PSD 소스.<br>
        3. <b>Mockup World</b> (무료): 전 세계의 무료 목업 PSD 파일들만 큐레이션 해놓은 보물창고.<br>
        4. <b>Mr.Mockup</b>: 퀄리티가 매우 뛰어난 목업 쇼케이스 사이트.<br>
        5. <b>Ls.Graphics</b>: 프리미엄 3D 렌더링 기반의 깔끔한 목업(특히 IT/앱 UI용)이 많은 곳.`
    },
    {
        title: '포토샵 스마트 오브젝트(Smart Object) 활용법',
        content: `대부분의 PSD 목업 파일에는 <b>[Your Design Here]</b>라고 적힌 레이어가 있습니다.<br>
        이 레이어의 썸네일을 <b>더블클릭</b>하면 새로운 창이 열립니다. 그곳에 여러분의 디자인을 넣고 <b>저장(Ctrl+S)</b>한 뒤 원래 창으로 돌아오면, 자연스러운 곡면과 조명이 모두 적용된 채로 디자인이 입혀져 있습니다!`
    }
];


// ─── Update: Color Stories (10+) ──────────────────────────────────────────
designStories.push(
    { id: "story-hermes", brand: "Hermès", title: "우연이 만든 럭셔리 오렌지", title_en: "Luxury Orange Created by Chance", description: "에르메스의 상징적인 주황색 박스는 사실 제2차 세계대전 중 원래 쓰던 염료가 부족해져 어쩔 수 없이 남은 주황색을 쓴 것에서 시작되었습니다. 지금은 전 세계에서 가장 설레는 오렌지색이 되었습니다.", description_en: "Hermès' iconic orange box started during WWII due to a dye shortage. Now it is the most exciting orange in the world.", hexColors: ["#F37021", "#4A2B23", "#FFFFFF", "#000000"], font: "Baskerville", fontDesc: "클래식한 세리프체로 럭셔리 브랜드의 무게감을 전달합니다." },
    { id: "story-ikea", brand: "IKEA", title: "스웨덴의 국기, 세계의 가구가 되다", title_en: "Sweden's Flag Becomes World's Furniture", description: "이케아의 블루와 옐로우는 스웨덴 국기에서 그대로 가져온 색상입니다. 파란색은 신뢰를, 노란색은 행복과 긍정을 의미하며 매장에서 눈에 가장 잘 띄는 보색 대비를 이룹니다.", description_en: "IKEA's Blue and Yellow come directly from the Swedish flag, representing trust and happiness with high visibility.", hexColors: ["#0051BA", "#FFDA1A", "#FFFFFF", "#111111"], font: "Noto Sans", fontDesc: "실용적이고 대중적인 가구처럼, 가장 읽기 편하고 장식 없는 산세리프체를 씁니다." },
    { id: "story-discord", brand: "Discord", title: "게이머의 밤을 지키는 블러플", title_en: "Blurple Guarding Gamers' Nights", description: "디스코드의 메인 색상인 '블러플(Blurple)'은 파란색(Blue)과 보라색(Purple)이 섞인 독특한 색입니다. 어두운 방에서 게임을 할 때 눈부심을 줄여주면서도 매우 트렌디한 느낌을 줍니다.", description_en: "Discord's Blurple is a mix of Blue and Purple. It reduces glare in dark gaming rooms while looking trendy.", hexColors: ["#5865F2", "#36393F", "#2F3136", "#FFFFFF"], font: "Ginto", fontDesc: "디스코드만의 장난스러우면서도 볼드한 성격을 나타내는 독점 폰트." },
    { id: "story-tiffany", brand: "Tiffany & Co.", title: "법으로 보호받는 단 하나의 민트", title_en: "The Only Mint Protected by Law", description: "티파니 블루(Tiffany Blue)는 팬톤 컬러 1837번으로 등록되어 있으며, 브랜드가 아예 색상 자체의 상표권을 가지고 있습니다. 이 색상의 박스를 보는 것만으로도 사람들은 심장 박동이 빨라집니다.", description_en: "Tiffany Blue is trademarked. Just seeing a box of this color makes hearts beat faster.", hexColors: ["#81D8D0", "#FFFFFF", "#111111", "#F5F5F5"], font: "Sterling", fontDesc: "보석처럼 정교하게 세공된 얇은 세리프 라인." },
    { id: "story-kakao", brand: "Kakao", title: "시선을 사로잡는 경고의 색, 일상이 되다", title_en: "Color of Warning Becomes Daily Life", description: "자연계에서 노란색과 검은색의 조합(벌, 표지판)은 '주목'을 의미합니다. 카카오는 이 강력한 대비를 모바일 메신저에 적용해, 수많은 앱 사이에서 가장 빨리 눈에 띄게 만들었습니다.", description_en: "Yellow and Black means 'Attention' in nature. Kakao used this strong contrast to stand out among apps.", hexColors: ["#FAE100", "#381E1F", "#FFFFFF", "#F5F5F5"], font: "Kakao Regular", fontDesc: "친근하고 가독성 높은 전용 폰트." },
    { id: "story-starbucks", brand: "Starbucks", title: "도심 속 작은 숲", title_en: "A Small Forest in the City", description: "스타벅스 사이렌 로고의 딥 그린은 각박한 회색빛 빌딩 숲 속에서 '오아시스'와 '휴식'을 상징합니다. 카페가 단순한 음료 판매점이 아닌 휴식처(제3의 공간)임을 색상으로 각인시킵니다.", description_en: "Starbucks' Deep Green symbolizes an oasis in the gray city.", hexColors: ["#00704A", "#27251F", "#FFFFFF", "#D4E9E2"], font: "Sodo Sans", fontDesc: "스타벅스 특유의 둥글면서도 모던한 감성을 담은 폰트." },
    { id: "story-national-geo", brand: "National Geographic", title: "노란 사각형이 담아낸 세상", title_en: "The World Inside a Yellow Square", description: "잡지의 노란색 테두리는 '태양'과 '지식의 빛', 그리고 창문을 상징합니다. 네모난 노란 창을 통해 전 세계의 경이로운 자연을 바라본다는 깊은 철학이 담겨있습니다.", description_en: "The yellow border symbolizes the sun, light of knowledge, and a window to the world's wonders.", hexColors: ["#FFCC00", "#000000", "#FFFFFF", "#333333"], font: "Stone Sans", fontDesc: "진중하고 다큐멘터리적인 신뢰를 주는 서체." },
    { id: "story-coca-cola", brand: "Coca-Cola", title: "산타클로스 옷을 빨갛게 물들인 기업", title_en: "The Company That Dyed Santa's Clothes Red", description: "과거 산타클로스는 초록색, 파란색 등 다양한 옷을 입었습니다. 하지만 코카콜라가 자사의 브랜드 컬러인 '코카콜라 레드'를 입힌 산타 캠페인을 성공시키며, 전 세계 산타의 색이 빨간색으로 통일되었습니다.", description_en: "Coca-Cola's campaign successfully unified Santa's clothing color to their brand Red worldwide.", hexColors: ["#F40009", "#000000", "#FFFFFF", "#1E1E1E"], font: "Spencerian Script", fontDesc: "100년이 넘게 유지된 클래식하고 역동적인 필기체." },
    { id: "story-mcdonalds", brand: "McDonald's", title: "케첩과 머스타드의 마법", title_en: "Magic of Ketchup and Mustard", description: "맥도날드의 빨강과 노랑 조합은 식욕을 극대화(빨강)하고 행복감과 빠른 회전율(노랑)을 유도하는 완벽한 패스트푸드 심리학의 산물입니다.", description_en: "The red and yellow combination maximizes appetite and induces happiness and fast turnover.", hexColors: ["#FFC72C", "#DA291C", "#27251F", "#FFFFFF"], font: "Lovin' Sans", fontDesc: "유쾌하고 둥글둥글한 느낌으로 남녀노소 누구나 친근하게 느끼는 폰트." },
    { id: "story-samsung", brand: "Samsung", title: "신뢰와 기술의 진한 푸른색", title_en: "Deep Blue of Trust and Technology", description: "삼성을 상징하는 파란색은 IT 기업이 가져야 할 혁신성, 안정성, 신뢰감을 전 세계 소비자들에게 직관적으로 전달하는 컬러입니다.", description_en: "Samsung's blue intuitively conveys innovation, stability, and trust.", hexColors: ["#1428A0", "#000000", "#FFFFFF", "#F4F4F4"], font: "SamsungOne", fontDesc: "가전제품부터 스마트폰 화면까지 완벽한 가독성을 제공하는 만능 폰트." },
    { id: "story-instagram", brand: "Instagram", title: "석양에서 영감을 받은 그라데이션", title_en: "Gradient Inspired by the Sunset", description: "인스타그램의 로고는 따뜻한 일몰(오렌지, 핑크)에서 밤하늘(보라)로 이어지는 극적인 그라데이션을 사용해 전 세계인들의 다양한 일상과 감정을 표현합니다.", description_en: "Instagram's gradient from warm sunset to night sky represents diverse daily lives and emotions.", hexColors: ["#833AB4", "#FD1D1D", "#FCB045", "#FFFFFF"], font: "Instagram Sans", fontDesc: "완벽한 원과 부드러운 곡선이 섞여 톡톡 튀는 젊은 감각을 자랑합니다." },
    { id: "story-google", brand: "Google", title: "규칙을 깨는 초록색 'L'", title_en: "The Green 'L' That Breaks Rules", description: "구글 로고는 빛의 3원색인 파랑, 빨강, 노랑을 쓰다가 마지막 'L' 알파벳에만 뜬금없이 초록색을 넣었습니다. 이는 '구글은 뻔한 규칙에 얽매이지 않는다'는 파격적인 철학을 담은 것입니다.", description_en: "Google used primary colors but broke the rule with a green 'L', meaning they don't follow conventional rules.", hexColors: ["#4285F4", "#EA4335", "#FBBC05", "#34A853"], font: "Product Sans", fontDesc: "매우 기하학적이고 장난스러운 구글만의 오리지널 폰트." },
    { id: "story-ups", brand: "UPS", title: "진흙이 묻어도 티 나지 않는 갈색", title_en: "Brown That Hides the Mud", description: "UPS가 투박한 갈색(Pullman Brown)을 브랜드 컬러로 선택한 이유는 단순했습니다. 마차로 배달하던 시절, 흙먼지가 묻어도 티가 가장 안 나는 실용적인 색이었기 때문입니다. 지금은 이 투박함이 오히려 강인한 신뢰가 되었습니다.", description_en: "UPS chose brown because it hid mud back in the carriage delivery days. Now it represents rugged reliability.", hexColors: ["#351C15", "#FFC400", "#FFFFFF", "#111111"], font: "UPS Sans", fontDesc: "단단하고 안정적인 물류기업의 이미지를 줍니다." }
);

// ─── Update: Design Cards (Today Inspiration) (10+) ──────────────────────
designCards.push(
    { id: '06', name: 'Coral × Sand', category: '라이프스타일 / 화장품 / 휴양지', category_en: 'Lifestyle / Cosmetics / Resort', description: '부드러운 산호색과 모래색의 만남. 따뜻하고 편안한 인상을 남깁니다.', description_en: 'Warm coral meets sand color.', colors: [{ name: 'Coral Pink', hex: '#FF7F50' }, { name: 'Warm Sand', hex: '#EEDC82' }] },
    { id: '07', name: 'Cyber × Neon', category: '웹3.0 / 게이밍 / 사이버펑크', category_en: 'Web3 / Gaming / Cyberpunk', description: '어두운 배경 위로 뿜어져 나오는 사이버펑크 네온의 강렬함.', description_en: 'Intense cyberpunk neon on dark background.', colors: [{ name: 'Dark Void', hex: '#0B0C10' }, { name: 'Neon Cyan', hex: '#66FCF1' }] },
    { id: '08', name: 'Matcha × Cream', category: '비건 / 카페 / 오가닉 브랜딩', category_en: 'Vegan / Cafe / Organic Branding', description: '쌉싸름한 말차와 부드러운 크림의 조화. 건강하고 자연 친화적인 느낌.', description_en: 'Matcha and cream. Healthy and nature-friendly.', colors: [{ name: 'Matcha Green', hex: '#4C6A2E' }, { name: 'Vanilla Cream', hex: '#F3E5AB' }] },
    { id: '09', name: 'Lava × Ash', category: '스포츠 / 피트니스 / 스트릿', category_en: 'Sports / Fitness / Street', description: '화산재 속에서 타오르는 용암처럼, 멈추지 않는 에너지를 표현합니다.', description_en: 'Like lava burning in ash, expressing unstoppable energy.', colors: [{ name: 'Volcano Ash', hex: '#3B3B3B' }, { name: 'Magma Red', hex: '#FF4500' }] },
    { id: '10', name: 'Lavender × Slate', category: '에듀테크 / SaaS / B2B 서비스', category_en: 'Edutech / SaaS / B2B Service', description: '전문적이고 차분한 슬레이트 그레이에 보라색으로 창의적인 포인트를 줍니다.', description_en: 'Professional slate with a creative lavender point.', colors: [{ name: 'Slate Gray', hex: '#708090' }, { name: 'Soft Lavender', hex: '#B57EDC' }] },
    { id: '11', name: 'Gold × Midnight', category: '파인다이닝 / VIP 멤버십 / 프리미엄', category_en: 'Fine Dining / VIP / Premium', description: '깊은 밤하늘과 금빛의 만남. 시대를 초월하는 우아함과 고급스러움.', description_en: 'Midnight blue and gold. Timeless elegance.', colors: [{ name: 'Midnight Blue', hex: '#003366' }, { name: 'Rich Gold', hex: '#D4AF37' }] },
    { id: '12', name: 'Peach × Sage', category: '인테리어 / 아동복 / 플랜테리어', category_en: 'Interior / Kids / Planterior', description: '복숭아의 달콤함과 세이지 그린의 싱그러움이 만나 아늑함을 제공합니다.', description_en: 'Sweet peach and fresh sage create a cozy feel.', colors: [{ name: 'Soft Peach', hex: '#FFDAB9' }, { name: 'Sage Green', hex: '#9DC183' }] },
    { id: '13', name: 'Tomato × Navy', category: '외식업 / 다이너 / 레트로', category_en: 'Restaurant / Diner / Retro', description: '식욕을 돋우는 토마토 레드와 묵직한 네이비의 아메리칸 레트로 무드.', description_en: 'Appetizing tomato red with heavy navy in a retro mood.', colors: [{ name: 'Diner Navy', hex: '#000080' }, { name: 'Tomato Red', hex: '#FF6347' }] }
);

// ─── Update: Add more designer colors ─────────────────────────────────────
designerColors['retro_vintage'] = [
    { name: '머스타드', name_en: 'Mustard', hex: '#FFDB58' },
    { name: '올드 버건디', name_en: 'Old Burgundy', hex: '#43302E' },
    { name: '더스티 로즈', name_en: 'Dusty Rose', hex: '#DCAE96' },
    { name: '빈티지 틸', name_en: 'Vintage Teal', hex: '#008080' },
    { name: '레트로 오렌지', name_en: 'Retro Orange', hex: '#F08A5D' },
    { name: '아미 그린', name_en: 'Army Green', hex: '#4B5320' },
    { name: '세피아', name_en: 'Sepia', hex: '#704214' }
];

uiTranslations.kr.cat_retro_vintage = '레트로/빈티지';
uiTranslations.en.cat_retro_vintage = 'Retro/Vintage';

// ─── Update: Branding Masterclass Guide ──────────────────────────────────
const brandingGuide = [
    {
        title: '1. 브랜드란 무엇일까요? (로고가 전부가 아니에요!)',
        content: `친구의 이름을 들으면 그 친구의 성격, 목소리, 자주 입는 옷차림이 머릿속에 떠오르죠? 브랜드도 똑같아요!<br><br>
        '나이키'라고 하면 역동적이고 힙한 느낌이 들고, '애플'이라고 하면 깔끔하고 세련된 느낌이 드는 것처럼요. 전문가들은 브랜드를 <b>"사람들이 그 회사를 떠올렸을 때 느끼는 '느낌'이나 '기분'"</b>이라고 말해요.<br>
        단순히 예쁜 로고를 그리는 것을 넘어서, 사람들에게 어떤 매력적인 친구로 기억될지 머리부터 발끝까지 설계하는 것이 바로 '브랜딩'이랍니다.`
    },
    {
        title: '2. 회사의 얼굴(CI)과 상품의 얼굴(BI)',
        content: `<b>CI (회사의 얼굴)</b><br>
        예를 들어 '현대자동차 그룹'이라는 큰 회사의 간판이에요. 어른들에게 "우리는 믿음직스럽고 튼튼한 회사입니다"라고 말하는 단정한 정장 같은 느낌이죠.<br><br>
        <b>BI (상품의 얼굴)</b><br>
        현대자동차가 만든 고급차 '제네시스'나 힙한 디자인의 '현대카드'를 말해요. 우리들이 직접 물건을 사고 쓸 때 "와, 이거 진짜 멋지다!"라고 느끼게 해주는 트렌디하고 세련된 옷차림과 같아요.`
    },
    {
        title: '3. 디자인하기 전 꼭 정해야 할 3가지 (미션, 비전, 가치)',
        content: `그림부터 무작정 그리기 전에 이 브랜드가 어떤 생각을 가진 친구인지부터 정해야 해요!<br><br>
        - <b>미션(Mission)</b>: 이 회사는 왜 태어났을까? (예: 나이키 - "누구나 운동선수처럼 뛰게 만들자!")<br>
        - <b>비전(Vision)</b>: 앞으로 어떤 모습이 되고 싶을까? (예: 디즈니 - "전 세계 사람들을 가장 행복하게 만들 거야.")<br>
        - <b>핵심 가치(Core Values)</b>: 일할 때 절대 어기지 않을 규칙은? (예: "우리는 무조건 환경을 보호하면서 만든다!")`
    },
    {
        title: '4. 첫인상을 결정하는 이름 짓기 (네이밍)',
        content: `좋은 이름은 부르기 쉽고 기억에 딱 남아야 해요!<br>
        1. <b>뜻이 담겨있나요?</b> (예: 아마존 - 세상에서 가장 큰 강 이름처럼, 세상의 모든 물건을 다 팔겠다는 뜻)<br>
        2. <b>남들과 확 다르나요?</b> (예: 수많은 컴퓨터 회사들 사이에서 뜬금없이 과일 이름인 '애플' 등장!)<br>
        3. <b>부르기 쉽나요?</b> 키보드로 치기 편하고 초등학생도 한 번에 쉽게 읽을 수 있어야 최고의 이름이에요.`
    },
    {
        title: '5. 눈에 보이는 모든 것을 맞추기 (디자인 시스템)',
        content: `로고 하나만 예쁘다고 끝나는 게 아니에요. 모든 디자인이 한 가족처럼 잘 어울려야 해요!<br><br>
        - <b>로고</b>: 브랜드의 간판. 핸드폰 화면처럼 아주 작게 줄여도 뚜렷하게 알아볼 수 있어야 해요.<br>
        - <b>컬러 (색상)</b>: 스타벅스 하면 초록색! 카카오톡 하면 노란색! 우리 브랜드를 상징할 딱 1~2가지 핵심 색깔을 정해요.<br>
        - <b>글씨체 (폰트)</b>: 진지한 붓글씨를 쓸까? 동글동글 귀여운 글씨를 쓸까? 글씨체 하나로 분위기가 확 달라져요.<br>
        - <b>패턴</b>: 루이비통 가방의 무늬처럼, 굳이 로고를 안 봐도 "아! 거기꺼네!" 하고 바로 알게 만드는 무늬들이에요.`
    },
    {
        title: '6. 브랜드의 말투와 성격 정하기 (페르소나)',
        content: `우리가 만든 브랜드를 실제 '사람'이라고 상상해 보세요. 손님들에게 어떻게 말을 걸어올까요?<br><br>
        - <b>친절하고 든든한 은행원</b>: "고객님의 소중한 돈, 안전하게 지켜드리겠습니다."<br>
        - <b>유쾌한 동네 친구 (배달의민족)</b>: "오늘 점심 뭐 먹지? 내가 딱 찾아줄게!"<br>
        - <b>시크한 천재 (애플)</b>: "구구절절한 설명이 필요한가요? 그냥 한 번 써보세요."<br><br>
        이 성격에 맞춰서 포스터의 글귀, 색깔의 밝기, 사진의 느낌까지 전부 맞춰야 진짜 살아 숨 쉬는 브랜드가 완성돼요.`
    },
    {
        title: '7. 고객과 만나는 모든 순간 디자인하기 (경험 디자인)',
        content: `우리가 좋아하는 카페에 놀러 갔을 때를 생각해 봐요.<br><br>
        1. <b>발견</b>: 인스타그램에서 예쁜 카페 사진을 보고 반합니다.<br>
        2. <b>입장</b>: 문을 열고 들어가니 기분 좋은 향기가 나고 잔잔한 음악이 흐릅니다.<br>
        3. <b>주문</b>: 진동벨도 예쁘게 생겼고, 음료가 나온 컵홀더 디자인도 감성적입니다.<br>
        4. <b>기억</b>: 집에 돌아와서 "거기 진짜 좋았어! 다음에 또 가야지!"라고 생각합니다.<br><br>
        이렇게 처음 만나는 순간부터 집에 돌아갈 때까지의 모든 과정을 하나의 느낌으로 이어지도록 디자인하는 것을 <b>'브랜드 경험(BX) 디자인'</b>이라고 한답니다.`
    },
    {
        title: '8. 전 세계 최고의 브랜드들은 어떻게 할까?',
        content: `🏆 <b>애플 (Apple)</b><br>
        이것저것 복잡하게 설명하지 않고 화면에 여백을 아주 넓게 써요. 깔끔하고 똑똑한 이미지를 줘서 누구나 "나도 저거 하나 갖고 싶다"라고 생각하게 만들죠.<br><br>
        🏆 <b>파타고니아 (Patagonia)</b><br>
        "우리는 지구를 지키기 위해 옷을 만듭니다"라고 당당하게 말해요. 심지어 우리 옷을 너무 많이 사지 말라고 광고까지 해요! 이런 진심이 사람들을 감동하게 만들어요.<br><br>
        🏆 <b>나이키 (Nike)</b><br>
        신발이 얼마나 튼튼한지 설명하는 대신, 땀 흘리며 달리는 멋진 사진을 보여줘요. "너도 할 수 있어 (Just Do It)!"라는 한 마디로 우리의 가슴을 뛰게 만듭니다.`
    },
    {
        title: '9. 브랜드도 옷을 갈아입는다 (리브랜딩)',
        content: `회사가 너무 오래된 느낌이 들 때, 사람들에게 새롭고 신선한 느낌을 주려고 이름이나 로고를 바꾸는 걸 '리브랜딩'이라고 해요.<br><br>
        <b>언제 할까요?</b><br>
        "던킨 도너츠"가 커피와 다른 빵도 많이 판다는 걸 알리고 싶어서, 이름에서 아예 '도너츠'를 빼버리고 "던킨"으로 짧게 바꾼 것처럼요!<br><br>
        <b>요즘 유행은?</b><br>
        요즘은 핸드폰 화면처럼 작은 곳에서도 로고가 잘 보이게 하려고, 로고에 있던 복잡한 그림자나 입체감을 다 빼버리고 아주 단순한 스티커처럼(플랫 디자인) 납작하게 바꾸는 게 대유행이랍니다.`
    },
    {
        title: '10. 모두가 지켜야 할 디자인 설명서 (브랜드 북)',
        content: `멋진 디자인을 완성했다면, 나 혼자 끝내는 게 아니라 나중에 다른 친구가 와서 작업해도 똑같은 결과물이 나올 수 있게 '규칙서'를 만들어줘야 해요.<br><br>
        - <b>로고 규칙</b>: "로고를 맘대로 뚱뚱하게 늘리거나 찌그러뜨리지 마세요! 배경에 아무 색이나 넣지 마세요!"<br>
        - <b>색상표</b>: "우리 브랜드의 빨간색은 눈대중으로 고르지 말고, 정확히 이 컴퓨터 코드(#FF0000)를 써야 합니다."<br><br>
        이런 중요한 규칙들을 예쁘게 책이나 파일처럼 묶어둔 것을 <b>'브랜드 가이드라인(Brand Book)'</b>이라고 부른답니다.`
    }
];

// 타이포그래피 가이드
const typographyGuide = [
    {
        title: '1. 타이포그래피란 무엇일까?',
        content: `타이포그래피는 단순히 '글씨를 치는 것'이 아니라, 글자를 예쁘고 읽기 편하게 배치해서 그림처럼 아름답게 보이도록 만드는 기술입니다.<br><br>
        💡 <b>쉽게 이해하기</b>: 목소리 톤에 따라 사람의 기분이 달라지듯, 글씨체에 따라 전해지는 감정이 완전히 달라진답니다. 똑같은 "사랑해"라는 단어도, 무서운 피투성이 글씨체로 쓰면 공포 영화가 되고, 둥글둥글하고 귀여운 글씨체로 쓰면 로맨스 영화가 되는 것과 같아요.`
    },
    {
        title: '2. 명조체와 고딕체 (세리프 vs 산세리프)',
        content: `글씨체의 가장 큰 두 가지 종류를 알아볼까요?<br><br>
        - <b>명조체(Serif)</b>: 글자 끝에 삐침이나 장식이 있는 글꼴입니다. 신문이나 소설책에서 많이 쓰이며, 우아하고 전통적인 느낌을 줍니다.<br>
        - <b>고딕체(Sans-Serif)</b>: '산(Sans)'은 프랑스어로 '없다'는 뜻이에요. 즉 삐침이 없는 깔끔한 글꼴입니다. 인터넷, 핸드폰 화면, 경고 표지판 등에서 깔끔하게 정보를 전달할 때 최고예요!`
    },
    {
        title: '3. 자간과 행간의 비밀',
        content: `글자들 사이에도 '숨 쉴 틈'이 필요해요.<br><br>
        - <b>자간 (글자 사이 간격)</b>: 글자와 글자 사이가 너무 좁으면 숨이 막혀 보이고, 너무 넓으면 단어가 흩어져 보여요. 특히 한국어는 자간을 아주 살짝 줄여주면(-2% 정도) 훨씬 단단하고 예뻐 보입니다.<br>
        - <b>행간 (줄 사이 간격)</b>: 윗줄과 아랫줄 사이의 거리예요. 글자 크기의 1.5배에서 1.6배 정도를 떨어뜨려야 눈이 피로하지 않고 다음 줄로 자연스럽게 넘어갈 수 있답니다.`
    },
    {
        title: '4. 가독성과 판독성',
        content: `디자인에서 가장 중요한 건 결국 '잘 읽히는가'입니다.<br><br>
        - <b>판독성</b>: 멀리서 봤을 때 이 글자가 '가'인지 '나'인지 헷갈리지 않고 정확히 알아볼 수 있는가?<br>
        - <b>가독성</b>: 긴 글을 읽을 때 눈이 아프지 않고 내용이 머리에 쏙쏙 들어오는가?<br><br>
        아무리 예쁜 꼬부랑 글씨체라도, 사람들이 읽을 수 없다면 그건 실패한 타이포그래피 디자인이에요.`
    },
    {
        title: '5. 하이어라키 (중요한 것부터 순서대로 보여주기)',
        content: `디자이너는 사람들이 화면을 볼 때 <b>어느 글자를 가장 먼저 읽게 할지</b> 조종할 수 있어야 해요.<br><br>
        1순위 (가장 크게, 두껍게): <b>"전 품목 50% 폭탄 세일!"</b><br>
        2순위 (중간 크기로): "오늘 밤 12시까지만 진행되는 특별한 혜택"<br>
        3순위 (가장 작고 얇게): "※ 일부 품목은 할인에서 제외될 수 있습니다."<br><br>
        이렇게 크기, 두께, 색깔을 조절해서 시선의 길을 만들어주는 것을 '시각적 위계(Hierarchy)'라고 합니다.`
    }
];

// UI/UX 실무 가이드
const uiuxGuide = [
    {
        title: '1. UI와 UX, 도대체 뭐가 다른가요?',
        content: `비슷해 보이지만 역할이 완전히 다릅니다.<br><br>
        - <b>UI (User Interface)</b>: 눈에 보이는 껍데기입니다. 버튼의 색깔, 글씨의 위치, 테두리의 둥근 정도 같은 '시각적'인 부분이에요.<br>
        - <b>UX (User Experience)</b>: 눈에 보이지 않는 경험입니다. 회원가입이 너무 복잡해서 짜증이 나진 않는지, 결제 버튼이 눈에 확 띄어서 편안한지 등 사용자가 느끼는 '감정'과 '편리함'을 설계하는 일이에요.<br><br>
        💡 <b>쉽게 이해하기</b>: 예쁜 그릇과 숟가락의 디자인은 <b>UI</b>이고, 그 그릇에 담긴 음식을 먹고 "아~ 맛있다! 먹기 편하다!"라고 느끼는 건 <b>UX</b>입니다.`
    },
    {
        title: '2. 마법의 숫자, 8px 그리드 시스템',
        content: `화면에 요소들을 배치할 때 눈대중으로 대충 놓는 것이 아니라, <b>'8'의 배수</b>를 기준으로 간격을 띄우는 규칙이에요.<br><br>
        여백을 8px, 16px, 24px, 32px, 64px... 이렇게 8의 배수로만 맞추면, 신기하게도 모든 요소가 딱딱 맞아떨어지면서 화면이 엄청나게 안정적이고 깔끔해 보인답니다. 프로 디자이너들은 모두 이 비밀 공식을 쓰고 있어요!`
    },
    {
        title: '3. 버튼 디자인의 과학 (Call to Action)',
        content: `사용자가 꼭 눌러줬으면 하는 가장 중요한 버튼을 CTA(Call to Action) 버튼이라고 해요.<br><br>
        - <b>색상</b>: 바탕색과 완전히 반대되거나 가장 눈에 띄는 포인트 컬러를 써야 합니다.<br>
        - <b>모양</b>: 살짝 그림자를 주거나 둥글게 깎아서, 누가 봐도 "이건 누르는 버튼이구나!"하고 직관적으로 알 수 있게 디자인해야 해요.<br>
        - <b>글귀</b>: '확인' 보다는 '무료로 시작하기', '내 쿠폰 받기'처럼 누르고 싶게 만드는 말을 써보세요.`
    },
    {
        title: '4. 여백의 미학 (White Space)',
        content: `디자인을 처음 하면 빈 공간이 불안해서 이것저것 꽉꽉 채워 넣으려고 하는 실수를 많이 합니다.<br><br>
        하지만 <b>아무것도 없는 빈 공간(여백)</b>이야말로 진짜 럭셔리하고 고급스러운 느낌을 주는 핵심이에요. 글자와 그림 주변에 넓은 여백을 주면, 사용자의 눈이 쉴 수 있고 내가 진짜 보여주고 싶은 중요한 내용에만 시선이 꽂히게 됩니다. 여백도 디자인의 일부라는 걸 명심하세요!`
    },
    {
        title: '5. 기다림을 달래주는 디자인 (스켈레톤 UI)',
        content: `인터넷이 느려서 화면이 늦게 뜰 때, 하얀 화면에 뱅글뱅글 돌아가는 로딩 마크만 보이면 사람들은 답답해서 나가버려요.<br><br>
        그래서 요즘엔 <b>스켈레톤(뼈대) UI</b>를 많이 씁니다. 사진이나 글자가 들어갈 자리에 미리 회색 네모 박스를 깜빡거리게 띄워두는 거예요. "곧 사진이랑 글씨가 나타날 거니까 1초만 기다려줘!"라는 신호를 줘서, 사용자가 지루하지 않게 기다리도록 만드는 마법 같은 UX 기술이랍니다.`
    }
];

// 포트폴리오 가이드
const portfolioGuide = [
    {
        title: '1. 포트폴리오는 나의 무기 창고',
        content: `포트폴리오는 디자이너가 그동안 만든 작품들을 묶어놓은 '결과물 모음집'이에요.<br><br>
        하지만 단순히 그림을 많이 모아둔다고 좋은 게 아니에요. 내가 어떤 스타일의 무기(디자인)를 잘 다루는지, 어떤 문제를 잘 해결하는 사람인지 보여주는 <b>나만의 멋진 무기 창고</b>가 되어야 합니다. 아무리 그림이 많아도 무기들이 정리가 안 되어 있으면 매력이 없겠죠?`
    },
    {
        title: '2. 첫인상이 80%를 결정한다 (표지와 썸네일)',
        content: `면접관들은 하루에도 수백 명의 포트폴리오를 봅니다. 하나의 포트폴리오를 보는 시간은 평균 30초도 안 된다고 해요!<br><br>
        그래서 가장 중요한 건 <b>표지(Cover)와 썸네일</b>입니다. 첫 장을 보자마자 "오, 이 사람 뭔가 센스 있는데? 다음 장도 보고 싶다!"라는 호기심이 들게 만들어야 해요. 복잡한 설명보다는 깔끔하고 강렬한 이미지 한 장이 훨씬 중요합니다.`
    },
    {
        title: '3. 결과물보다 중요한 건 과정 (케이스 스터디)',
        content: `완성된 예쁜 디자인만 떡하니 올려두는 건 하수입니다.<br><br>
        - 왜 이런 색깔을 썼는지?<br>
        - 처음에 어떤 문제가 있었고, 디자인으로 그걸 어떻게 해결했는지?<br>
        - 중간에 스케치나 실패한 시안들은 어땠는지?<br><br>
        이런 <b>디자인의 과정과 고민(Case Study)</b>을 글로 재미있게 풀어내는 사람이 진짜 프로 디자이너로 인정받습니다.`
    },
    {
        title: '4. 양보다 질! (선택과 집중)',
        content: `내가 만든 작품을 하나도 빠짐없이 20개, 30개씩 다 넣으면 절대 안 됩니다.<br><br>
        면접관은 가장 못 만든 최악의 디자인 1개만 보고 여러분의 실력을 평가할 수도 있어요. 차라리 조금 아쉬운 작품은 과감하게 빼버리고, <b>가장 자신 있고 완벽한 작품 3~5개</b>만 보여주는 것이 훨씬 높은 점수를 받습니다.`
    },
    {
        title: '5. 디자인에도 내 성격을 담으세요',
        content: `인터넷에 굴러다니는 똑같은 이력서 템플릿에 글자만 바꿔서 내는 건 절대 금물이에요!<br><br>
        나는 차분하고 꼼꼼한 사람인지, 아니면 톡톡 튀고 재미있는 아이디어가 많은 사람인지 포트폴리오 전체의 테마 컬러와 글씨체로 뿜어내야 해요. 나라는 사람 자체가 하나의 브랜드라고 생각하고 <b>'나만의 분위기'</b>를 디자인해 보세요.`
    }
];
