// ─── Designer Colors (용도별 분류 - 대폭 확장) ───────────────────────────────────
const designerColors = {
    "ui_web": [
        {
            "name": "버셀 블루",
            "name_en": "Vercel Blue",
            "hex": "#0070F3"
        },
        {
            "name": "성공 그린",
            "name_en": "Success Green",
            "hex": "#00C853"
        },
        {
            "name": "경고 앰버",
            "name_en": "Warning Amber",
            "hex": "#FF6F00"
        },
        {
            "name": "오류 레드",
            "name_en": "Error Red",
            "hex": "#FF1744"
        },
        {
            "name": "정보 틸",
            "name_en": "Info Teal",
            "hex": "#00BCD4"
        },
        {
            "name": "링크 블루",
            "name_en": "Link Blue",
            "hex": "#1976D2"
        },
        {
            "name": "비활성 그레이",
            "name_en": "Inactive Gray",
            "hex": "#9E9E9E"
        },
        {
            "name": "다크 배경",
            "name_en": "Dark Background",
            "hex": "#121212"
        },
        {
            "name": "카드 화이트",
            "name_en": "Card White",
            "hex": "#FAFAFA"
        },
        {
            "name": "보더 그레이",
            "name_en": "Border Gray",
            "hex": "#E0E0E0"
        },
        {
            "name": "포커스 블루",
            "name_en": "Focus Blue",
            "hex": "#2563EB"
        },
        {
            "name": "토스 파랑",
            "name_en": "Toss Blue",
            "hex": "#3182F6"
        },
        {
            "name": "카카오 노랑",
            "name_en": "Kakao Yellow",
            "hex": "#FEE500"
        },
        {
            "name": "네이버 초록",
            "name_en": "Naver Green",
            "hex": "#03C75A"
        },
        {
            "name": "피그마 보라",
            "name_en": "Figma Purple",
            "hex": "#A259FF"
        },
        {
            "name": "테일윈드 틸",
            "name_en": "Tailwind Teal",
            "hex": "#0D9488"
        },
        {
            "name": "스포카 그레이",
            "name_en": "Spoqa Gray",
            "hex": "#657786"
        },
        {
            "name": "벨로그 초록",
            "name_en": "Velog Green",
            "hex": "#20C997"
        },
        {
            "name": "쿠팡 로켓레드",
            "name_en": "Coupang Red",
            "hex": "#E1251B"
        },
        {
            "name": "당근 오렌지",
            "name_en": "Karrot Orange",
            "hex": "#FF7E36"
        },
        {
            "name": "무신사 블랙",
            "name_en": "Musinsa Black",
            "hex": "#111111"
        },
        {
            "name": "라인 그린",
            "name_en": "Line Green",
            "hex": "#06C755"
        },
        {
            "name": "노션 먹색",
            "name_en": "Notion Ink",
            "hex": "#37352F"
        },
        {
            "name": "깃허브 다크",
            "name_en": "GitHub Dark",
            "hex": "#24292E"
        },
        {
            "name": "어도비 레드",
            "name_en": "Adobe Red",
            "hex": "#FF0000"
        },
        {
            "name": "슬랙 아보진",
            "name_en": "Slack Aubergine",
            "hex": "#4A154B"
        },
        {
            "name": "애플 실버",
            "name_en": "Apple Silver",
            "hex": "#E5E5EA"
        },
        {
            "name": "페이스북 블루",
            "name_en": "Facebook Blue",
            "hex": "#1877F2"
        },
        {
            "name": "인스타 그라디언트",
            "name_en": "Instagram Pink",
            "hex": "#E1306C"
        },
        {
            "name": "리액트 블루",
            "name_en": "React Blue",
            "hex": "#61DAFB"
        }
    ],
    "brand_global": [
        {
            "name": "애플 스페이스그레이",
            "name_en": "Apple SpaceGray",
            "hex": "#1D1D1F"
        },
        {
            "name": "구글 레드",
            "name_en": "Google Red",
            "hex": "#EA4335"
        },
        {
            "name": "구글 블루",
            "name_en": "Google Blue",
            "hex": "#4285F4"
        },
        {
            "name": "구글 옐로우",
            "name_en": "Google Yellow",
            "hex": "#FBBC05"
        },
        {
            "name": "구글 그린",
            "name_en": "Google Green",
            "hex": "#34A853"
        },
        {
            "name": "스포티파이 그린",
            "name_en": "Spotify Green",
            "hex": "#1DB954"
        },
        {
            "name": "넷플릭스 레드",
            "name_en": "Netflix Red",
            "hex": "#E50914"
        },
        {
            "name": "디스코드 블러플",
            "name_en": "Discord Blurple",
            "hex": "#5865F2"
        },
        {
            "name": "유튜브 레드",
            "name_en": "Youtube Red",
            "hex": "#FF0000"
        },
        {
            "name": "아마존 오렌지",
            "name_en": "Amazon Orange",
            "hex": "#FF9900"
        },
        {
            "name": "마이크로소프트 블루",
            "name_en": "MS Blue",
            "hex": "#0078D4"
        },
        {
            "name": "링크드인 블루",
            "name_en": "LinkedIn Blue",
            "hex": "#0A66C2"
        },
        {
            "name": "에어비앤비 코랄",
            "name_en": "Airbnb Coral",
            "hex": "#FF5A5F"
        },
        {
            "name": "스타벅스 그린",
            "name_en": "Starbucks Green",
            "hex": "#00704A"
        },
        {
            "name": "코카콜라 레드",
            "name_en": "Coca-Cola Red",
            "hex": "#F40009"
        },
        {
            "name": "이케아 옐로우",
            "name_en": "IKEA Yellow",
            "hex": "#FFCC00"
        },
        {
            "name": "이케아 블루",
            "name_en": "IKEA Blue",
            "hex": "#003399"
        },
        {
            "name": "나이키 오렌지",
            "name_en": "Nike Orange",
            "hex": "#FF6600"
        },
        {
            "name": "아디다스 블랙",
            "name_en": "Adidas Black",
            "hex": "#000000"
        },
        {
            "name": "펩시 블루",
            "name_en": "Pepsi Blue",
            "hex": "#004B87"
        },
        {
            "name": "티파니 블루",
            "name_en": "Tiffany Blue",
            "hex": "#81D8D0"
        },
        {
            "name": "헤르메스 오렌지",
            "name_en": "Hermes Orange",
            "hex": "#F37021"
        },
        {
            "name": "샤넬 블랙",
            "name_en": "Chanel Black",
            "hex": "#000000"
        },
        {
            "name": "페라리 레드",
            "name_en": "Ferrari Red",
            "hex": "#FF2800"
        },
        {
            "name": "포르쉐 레더브라운",
            "name_en": "Porsche Brown",
            "hex": "#8C6239"
        },
        {
            "name": "스타일리시 핀터레스트",
            "name_en": "Pinterest Red",
            "hex": "#BD081C"
        },
        {
            "name": "스트라이프 퍼플",
            "name_en": "Stripe Purple",
            "hex": "#635BFF"
        },
        {
            "name": "트위치 보라",
            "name_en": "Twitch Purple",
            "hex": "#9146FF"
        },
        {
            "name": "줌 하늘",
            "name_en": "Zoom Blue",
            "hex": "#2D8CFF"
        },
        {
            "name": "테슬라 레드",
            "name_en": "Tesla Red",
            "hex": "#CC0000"
        }
    ],
    "nature": [
        {
            "name": "포레스트 그린",
            "name_en": "Forest Green",
            "hex": "#228B22"
        },
        {
            "name": "스카이 블루",
            "name_en": "Sky Blue",
            "hex": "#87CEEB"
        },
        {
            "name": "딥 오션",
            "name_en": "Deep Ocean",
            "hex": "#006994"
        },
        {
            "name": "선셋 오렌지",
            "name_en": "Sunset Orange",
            "hex": "#FF4500"
        },
        {
            "name": "체리 블라썸",
            "name_en": "Cherry Blossom",
            "hex": "#FFB7C5"
        },
        {
            "name": "골든 샌드",
            "name_en": "Golden Sand",
            "hex": "#C2B280"
        },
        {
            "name": "모스 그린",
            "name_en": "Moss Green",
            "hex": "#8A9A5B"
        },
        {
            "name": "라벤더 필드",
            "name_en": "Lavender Field",
            "hex": "#967BB6"
        },
        {
            "name": "오로라 그린",
            "name_en": "Aurora Green",
            "hex": "#00FFCC"
        },
        {
            "name": "산호초",
            "name_en": "Coral Reef",
            "hex": "#FF6B6B"
        },
        {
            "name": "크리스탈 레이크",
            "name_en": "Crystal Lake",
            "hex": "#5DADE2"
        },
        {
            "name": "가을 단풍",
            "name_en": "Autumn Leaf",
            "hex": "#D35400"
        },
        {
            "name": "유칼립투스",
            "name_en": "Eucalyptus",
            "hex": "#5F8575"
        },
        {
            "name": "라임 스파클",
            "name_en": "Lime Sparkle",
            "hex": "#A4F135"
        },
        {
            "name": "피오니 핑크",
            "name_en": "Peony Pink",
            "hex": "#FF7F9F"
        },
        {
            "name": "사막 모래",
            "name_en": "Desert Sand",
            "hex": "#EDC9AF"
        },
        {
            "name": "올리브 리프",
            "name_en": "Olive Leaf",
            "hex": "#708238"
        },
        {
            "name": "미드나잇 스카이",
            "name_en": "Midnight Sky",
            "hex": "#191970"
        },
        {
            "name": "새벽 안개",
            "name_en": "Morning Mist",
            "hex": "#E1E6E2"
        },
        {
            "name": "화산암 차콜",
            "name_en": "Volcanic Ash",
            "hex": "#4A4A4A"
        },
        {
            "name": "민들레 노랑",
            "name_en": "Dandelion",
            "hex": "#F4D03F"
        },
        {
            "name": "바다 거품",
            "name_en": "Seafoam",
            "hex": "#9FE2BF"
        },
        {
            "name": "적토 파우더",
            "name_en": "Clay Powder",
            "hex": "#C27D68"
        },
        {
            "name": "대나무 줄기",
            "name_en": "Bamboo Stem",
            "hex": "#4F7942"
        },
        {
            "name": "플럼 바이올렛",
            "name_en": "Plum Violet",
            "hex": "#5B2C6F"
        },
        {
            "name": "메리골드 주황",
            "name_en": "Marigold",
            "hex": "#F39C12"
        },
        {
            "name": "빙하 블루",
            "name_en": "Glacier Blue",
            "hex": "#A9CCE3"
        },
        {
            "name": "젖은 잔디",
            "name_en": "Wet Grass",
            "hex": "#27AE60"
        },
        {
            "name": "라즈베리",
            "name_en": "Raspberry",
            "hex": "#D81B60"
        },
        {
            "name": "단풍잎 골드",
            "name_en": "Autumn Gold",
            "hex": "#D4AC0D"
        }
    ],
    "pastel": [
        {
            "name": "베이비 핑크",
            "name_en": "Baby Pink",
            "hex": "#FFD1DC"
        },
        {
            "name": "라벤더 미스트",
            "name_en": "Lavender Mist",
            "hex": "#E6E6FA"
        },
        {
            "name": "민트 크림",
            "name_en": "Mint Cream",
            "hex": "#B5EAD7"
        },
        {
            "name": "피치 블러쉬",
            "name_en": "Peach Blush",
            "hex": "#FFCBA4"
        },
        {
            "name": "베이비 블루",
            "name_en": "Baby Blue",
            "hex": "#AED6F1"
        },
        {
            "name": "버터 옐로우",
            "name_en": "Butter Yellow",
            "hex": "#FFF0AA"
        },
        {
            "name": "라일락",
            "name_en": "Lilac",
            "hex": "#D7B2FF"
        },
        {
            "name": "페일 로즈",
            "name_en": "Pale Rose",
            "hex": "#FADBD8"
        },
        {
            "name": "살구 샤베트",
            "name_en": "Apricot Sorbet",
            "hex": "#FDEBD0"
        },
        {
            "name": "그린티 라떼",
            "name_en": "Greentea Latte",
            "hex": "#D5F5E3"
        },
        {
            "name": "파우더 시안",
            "name_en": "Powder Cyan",
            "hex": "#D1F2EB"
        },
        {
            "name": "포그 그레이",
            "name_en": "Fog Gray",
            "hex": "#EAEDED"
        },
        {
            "name": "소다 시럽",
            "name_en": "Soda Syrup",
            "hex": "#D6EAF8"
        },
        {
            "name": "밀크티 브라운",
            "name_en": "Milktea Brown",
            "hex": "#E5D3B3"
        },
        {
            "name": "블러쉬 베이지",
            "name_en": "Blush Beige",
            "hex": "#F5EBE0"
        },
        {
            "name": "라벤더 로즈",
            "name_en": "Lavender Rose",
            "hex": "#F3CFC6"
        },
        {
            "name": "페일 세이지",
            "name_en": "Pale Sage",
            "hex": "#C2D5C6"
        },
        {
            "name": "더스티 블루",
            "name_en": "Dusty Blue",
            "hex": "#A3B8CC"
        },
        {
            "name": "크림 화이트",
            "name_en": "Cream White",
            "hex": "#FFFDD0"
        },
        {
            "name": "허니 파우더",
            "name_en": "Honey Powder",
            "hex": "#F9E79F"
        },
        {
            "name": "바닐라 빈",
            "name_en": "Vanilla Bean",
            "hex": "#F5F5DC"
        },
        {
            "name": "딸기 우유",
            "name_en": "Strawberry Milk",
            "hex": "#FFC0CB"
        },
        {
            "name": "피스타치오 그린",
            "name_en": "Pistachio Green",
            "hex": "#93C572"
        },
        {
            "name": "소프트 코랄",
            "name_en": "Soft Coral",
            "hex": "#F8AD9D"
        },
        {
            "name": "헤이즐넛",
            "name_en": "Hazelnut",
            "hex": "#CFB997"
        },
        {
            "name": "코지 그레이",
            "name_en": "Cozy Gray",
            "hex": "#EAEAEA"
        },
        {
            "name": "페일 골드",
            "name_en": "Pale Gold",
            "hex": "#E8D3A7"
        },
        {
            "name": "아쿠아 마린 마일드",
            "name_en": "Mild Aquamarine",
            "hex": "#A3E4D7"
        },
        {
            "name": "오키드 틴트",
            "name_en": "Orchid Tint",
            "hex": "#EBDEF0"
        },
        {
            "name": "코튼 바이올렛",
            "name_en": "Cotton Violet",
            "hex": "#D2B4DE"
        }
    ],
    "neon_modern": [
        {
            "name": "네온 핑크",
            "name_en": "Neon Pink",
            "hex": "#FF10F0"
        },
        {
            "name": "일렉트릭 블루",
            "name_en": "Electric Blue",
            "hex": "#00B4FF"
        },
        {
            "name": "네온 그린",
            "name_en": "Neon Green",
            "hex": "#39FF14"
        },
        {
            "name": "사이버 옐로우",
            "name_en": "Cyber Yellow",
            "hex": "#FFE600"
        },
        {
            "name": "핫 오렌지",
            "name_en": "Hot Orange",
            "hex": "#FF6A00"
        },
        {
            "name": "매트릭스 그린",
            "name_en": "Matrix Green",
            "hex": "#00FF41"
        },
        {
            "name": "UV 퍼플",
            "name_en": "UV Purple",
            "hex": "#7B00FF"
        },
        {
            "name": "레이저 레드",
            "name_en": "Laser Red",
            "hex": "#FF003F"
        },
        {
            "name": "일렉트릭 바이올렛",
            "name_en": "Electric Violet",
            "hex": "#8F00FF"
        },
        {
            "name": "플로레센트 라임",
            "name_en": "Fluorescent Lime",
            "hex": "#CCFF00"
        },
        {
            "name": "사이버 시안",
            "name_en": "Cyber Cyan",
            "hex": "#00FFFF"
        },
        {
            "name": "프로톤 골드",
            "name_en": "Proton Gold",
            "hex": "#FFCC33"
        },
        {
            "name": "네온 마젠타",
            "name_en": "Neon Magenta",
            "hex": "#FF007F"
        },
        {
            "name": "플라즈마 오렌지",
            "name_en": "Plasma Orange",
            "hex": "#FF4E00"
        },
        {
            "name": "제논 스카이",
            "name_en": "Xenon Sky",
            "hex": "#0099FF"
        },
        {
            "name": "디지털 그린",
            "name_en": "Digital Green",
            "hex": "#00FA9A"
        },
        {
            "name": "볼트 주황",
            "name_en": "Volt Tangerine",
            "hex": "#FF5E00"
        },
        {
            "name": "라듐 옐로우",
            "name_en": "Radium Yellow",
            "hex": "#DAF7A6"
        },
        {
            "name": "일렉트릭 틸",
            "name_en": "Electric Teal",
            "hex": "#00E5FF"
        },
        {
            "name": "네온 에메랄드",
            "name_en": "Neon Emerald",
            "hex": "#50C878"
        },
        {
            "name": "볼티지 바이올렛",
            "name_en": "Voltage Violet",
            "hex": "#9400D3"
        },
        {
            "name": "크립톤 시안",
            "name_en": "Krypton Cyan",
            "hex": "#33FFCC"
        },
        {
            "name": "글로우 라즈베리",
            "name_en": "Glow Raspberry",
            "hex": "#E91E63"
        },
        {
            "name": "애시드 옐로우",
            "name_en": "Acid Yellow",
            "hex": "#DFFF00"
        },
        {
            "name": "프로톤 핑크",
            "name_en": "Proton Pink",
            "hex": "#FF69B4"
        },
        {
            "name": "사이버 테크 레드",
            "name_en": "Cyber Red",
            "hex": "#FF0055"
        },
        {
            "name": "글로잉 바이올렛",
            "name_en": "Glowing Violet",
            "hex": "#A020F0"
        },
        {
            "name": "애시드 오렌지",
            "name_en": "Acid Orange",
            "hex": "#FF8C00"
        },
        {
            "name": "일렉트릭 인디고",
            "name_en": "Electric Indigo",
            "hex": "#4B0082"
        },
        {
            "name": "플로레센트 그린",
            "name_en": "Fluo Green",
            "hex": "#ADFF2F"
        }
    ],
    "earth": [
        {
            "name": "테라코타",
            "name_en": "Terracotta",
            "hex": "#C27A54"
        },
        {
            "name": "탄 베이지",
            "name_en": "Tan Beige",
            "hex": "#D2B48C"
        },
        {
            "name": "시에나",
            "name_en": "Sienna",
            "hex": "#A0522D"
        },
        {
            "name": "카키",
            "name_en": "Khaki",
            "hex": "#C3AA7E"
        },
        {
            "name": "샌드스톤",
            "name_en": "Sandstone",
            "hex": "#DEB887"
        },
        {
            "name": "다크 초콜렛",
            "name_en": "Dark Chocolate",
            "hex": "#4E2623"
        },
        {
            "name": "올리브 드랩",
            "name_en": "Olive Drab",
            "hex": "#6B7C3A"
        },
        {
            "name": "황토색",
            "name_en": "Ochre",
            "hex": "#CC7722"
        },
        {
            "name": "로 브라운",
            "name_en": "Raw Brown",
            "hex": "#5C4033"
        },
        {
            "name": "시나몬",
            "name_en": "Cinnamon",
            "hex": "#D2691E"
        },
        {
            "name": "토프 그레이",
            "name_en": "Taupe Gray",
            "hex": "#483C32"
        },
        {
            "name": "번트 테라코타",
            "name_en": "Burnt Terracotta",
            "hex": "#8A3324"
        },
        {
            "name": "사막 머드",
            "name_en": "Desert Mud",
            "hex": "#704D3C"
        },
        {
            "name": "세이지 섀도우",
            "name_en": "Sage Shadow",
            "hex": "#929B8C"
        },
        {
            "name": "드라이 리프",
            "name_en": "Dry Leaf",
            "hex": "#A0785C"
        },
        {
            "name": "카퍼 골드",
            "name_en": "Copper Gold",
            "hex": "#B87333"
        },
        {
            "name": "진흙 진갈색",
            "name_en": "Clay Brown",
            "hex": "#6E473B"
        },
        {
            "name": "피트 모스",
            "name_en": "Peat Moss",
            "hex": "#3E3D32"
        },
        {
            "name": "앰버 허니",
            "name_en": "Amber Honey",
            "hex": "#C68E17"
        },
        {
            "name": "드라이 우드",
            "name_en": "Dry Wood",
            "hex": "#855E42"
        },
        {
            "name": "파인 콘",
            "name_en": "Pine Cone",
            "hex": "#6A5D4D"
        },
        {
            "name": "포레스트 바크",
            "name_en": "Forest Bark",
            "hex": "#2B1B10"
        },
        {
            "name": "어텀 올리브",
            "name_en": "Autumn Olive",
            "hex": "#556B2F"
        },
        {
            "name": "어스 클레이",
            "name_en": "Earth Clay",
            "hex": "#D9A066"
        },
        {
            "name": "마호가니",
            "name_en": "Mahogany",
            "hex": "#C04000"
        },
        {
            "name": "진저 스파이스",
            "name_en": "Ginger Spice",
            "hex": "#B06500"
        },
        {
            "name": "스톤 카키",
            "name_en": "Stone Khaki",
            "hex": "#8FBC8F"
        },
        {
            "name": "번트 번버",
            "name_en": "Burnt Umber",
            "hex": "#8A3324"
        },
        {
            "name": "코코아 빈",
            "name_en": "Cocoa Bean",
            "hex": "#3D2314"
        },
        {
            "name": "토스카나 황토",
            "name_en": "Tuscan Sun",
            "hex": "#E29B27"
        }
    ],
    "monochrome": [
        {
            "name": "퓨어 블랙",
            "name_en": "Pure Black",
            "hex": "#000000"
        },
        {
            "name": "다크 차콜",
            "name_en": "Dark Charcoal",
            "hex": "#212121"
        },
        {
            "name": "차콜 그레이",
            "name_en": "Charcoal Gray",
            "hex": "#424242"
        },
        {
            "name": "미디엄 그레이",
            "name_en": "Medium Gray",
            "hex": "#616161"
        },
        {
            "name": "실버",
            "name_en": "Silver",
            "hex": "#9E9E9E"
        },
        {
            "name": "라이트 그레이",
            "name_en": "Light Gray",
            "hex": "#E0E0E0"
        },
        {
            "name": "퓨어 화이트",
            "name_en": "Pure White",
            "hex": "#FFFFFF"
        },
        {
            "name": "젯 블랙",
            "name_en": "Jet Black",
            "hex": "#0A0A0A"
        },
        {
            "name": "옵시디언",
            "name_en": "Obsidian",
            "hex": "#0B0C10"
        },
        {
            "name": "아이언 그레이",
            "name_en": "Iron Gray",
            "hex": "#525252"
        },
        {
            "name": "아스팔트 차콜",
            "name_en": "Asphalt Charcoal",
            "hex": "#1C1C1C"
        },
        {
            "name": "건메탈",
            "name_en": "Gunmetal",
            "hex": "#2A3439"
        },
        {
            "name": "스노우 화이트",
            "name_en": "Snow White",
            "hex": "#FAFAFA"
        },
        {
            "name": "쿨 실버",
            "name_en": "Cool Silver",
            "hex": "#F0F2F5"
        },
        {
            "name": "티타늄 그레이",
            "name_en": "Titanium Gray",
            "hex": "#8A8D91"
        },
        {
            "name": "백금 플래티넘",
            "name_en": "Platinum",
            "hex": "#E5E4E2"
        },
        {
            "name": "진주빛 펄",
            "name_en": "Pearl White",
            "hex": "#F0EAD6"
        },
        {
            "name": "연기색",
            "name_en": "Smoke Gray",
            "hex": "#708090"
        },
        {
            "name": "비둘기 그레이",
            "name_en": "Dove Gray",
            "hex": "#D4D4D2"
        },
        {
            "name": "아이스 클라우드",
            "name_en": "Ice Cloud",
            "hex": "#F4F6F7"
        },
        {
            "name": "옵시디언 라이트",
            "name_en": "Obsidian Light",
            "hex": "#1F2833"
        },
        {
            "name": "쉐도우 그레이",
            "name_en": "Shadow Gray",
            "hex": "#7A7A7A"
        },
        {
            "name": "소프트 코크스",
            "name_en": "Coke Gray",
            "hex": "#303030"
        },
        {
            "name": "슬레이트 그레이",
            "name_en": "Slate Gray",
            "hex": "#708090"
        },
        {
            "name": "스톤 실버",
            "name_en": "Stone Silver",
            "hex": "#B2BABB"
        },
        {
            "name": "미러 크롬",
            "name_en": "Mirror Chrome",
            "hex": "#D5D8DC"
        },
        {
            "name": "그라파이트",
            "name_en": "Graphite",
            "hex": "#272727"
        },
        {
            "name": "오프화이트",
            "name_en": "Off-White",
            "hex": "#FAF9F6"
        },
        {
            "name": "본 마일드 화이트",
            "name_en": "Bone White",
            "hex": "#F9F6EE"
        },
        {
            "name": "다크 이클립스",
            "name_en": "Dark Eclipse",
            "hex": "#181C20"
        }
    ]
};

// ─── 대표 컬러 명칭 데이터베이스 (검색 기능 강화) ──────────────────────────────────
const colorNameReferences = {
    "가을 단풍": {
        "hex": "#D35400",
        "name_en": "Autumn Leaf",
        "tags": [
            "autumn",
            "오렌지",
            "붉은",
            "가을"
        ]
    },
    "감청색": {
        "hex": "#1428A0",
        "name_en": "Royal Blue",
        "tags": [
            "business",
            "전문",
            "파랑",
            "신뢰"
        ]
    },
    "검정": {
        "hex": "#000000",
        "name_en": "Black",
        "tags": [
            "contrast",
            "우아",
            "어둠",
            "블랙"
        ]
    },
    "골드": {
        "hex": "#FFD700",
        "name_en": "Gold",
        "tags": [
            "premium",
            "화려",
            "럭셔리",
            "황금"
        ]
    },
    "녹색": {
        "hex": "#00B050",
        "name_en": "Green",
        "tags": [
            "natural",
            "성장",
            "자연",
            "그린"
        ]
    },
    "네이비": {
        "hex": "#001F5B",
        "name_en": "Navy",
        "tags": [
            "formal",
            "클래식",
            "신뢰",
            "남색"
        ]
    },
    "네온 그린": {
        "hex": "#39FF14",
        "name_en": "Neon Green",
        "tags": [
            "neon",
            "형광",
            "밝은",
            "초록"
        ]
    },
    "라벤더": {
        "hex": "#967BB6",
        "name_en": "Lavender",
        "tags": [
            "soft",
            "우아",
            "보라",
            "퍼플"
        ]
    },
    "민트": {
        "hex": "#00B8A9",
        "name_en": "Mint",
        "tags": [
            "fresh",
            "차분",
            "자연",
            "민트초코"
        ]
    },
    "베이지": {
        "hex": "#C8A882",
        "name_en": "Beige",
        "tags": [
            "elegant",
            "전통",
            "따뜻함",
            "샌드"
        ]
    },
    "보라": {
        "hex": "#7851A9",
        "name_en": "Purple",
        "tags": [
            "luxury",
            "창의",
            "우아",
            "퍼플"
        ]
    },
    "분홍": {
        "hex": "#FF69B4",
        "name_en": "Pink",
        "tags": [
            "pink",
            "귀여움",
            "부드러움",
            "핑크"
        ]
    },
    "빨강": {
        "hex": "#FF0000",
        "name_en": "Red",
        "tags": [
            "primary",
            "강렬",
            "위험",
            "레드"
        ]
    },
    "살몬": {
        "hex": "#FA8072",
        "name_en": "Salmon",
        "tags": [
            "warm",
            "소프트",
            "핑크",
            "연어"
        ]
    },
    "스카이블루": {
        "hex": "#87CEEB",
        "name_en": "Sky Blue",
        "tags": [
            "sky",
            "하늘",
            "맑음",
            "파랑"
        ]
    },
    "시안": {
        "hex": "#00BCD4",
        "name_en": "Cyan",
        "tags": [
            "tech",
            "혁신",
            "청량",
            "하늘"
        ]
    },
    "아이보리": {
        "hex": "#FFFFF0",
        "name_en": "Ivory",
        "tags": [
            "warm",
            "부드러운",
            "화이트",
            "크림"
        ]
    },
    "오렌지": {
        "hex": "#FF6B00",
        "name_en": "Orange",
        "tags": [
            "energy",
            "활동",
            "따뜻함",
            "주황"
        ]
    },
    "청록": {
        "hex": "#20B2AA",
        "name_en": "Teal",
        "tags": [
            "cool",
            "편안",
            "바다",
            "틸"
        ]
    },
    "회색": {
        "hex": "#808080",
        "name_en": "Gray",
        "tags": [
            "neutral",
            "중립",
            "차분",
            "그레이"
        ]
    },
    "흰색": {
        "hex": "#FFFFFF",
        "name_en": "White",
        "tags": [
            "clean",
            "공간",
            "순수",
            "화이트"
        ]
    },
    "토스 블루": {
        "hex": "#3182F6",
        "name_en": "Toss Blue",
        "tags": [
            "finance",
            "startup",
            "blue",
            "신뢰",
            "금융"
        ]
    },
    "네이버 그린": {
        "hex": "#03C75A",
        "name_en": "Naver Green",
        "tags": [
            "portal",
            "korea",
            "green",
            "네이버",
            "초록"
        ]
    },
    "카카오 옐로우": {
        "hex": "#FEE500",
        "name_en": "Kakao Yellow",
        "tags": [
            "messenger",
            "yellow",
            "카카오",
            "노랑"
        ]
    },
    "스포티파이 그린": {
        "hex": "#1DB954",
        "name_en": "Spotify Green",
        "tags": [
            "music",
            "spotify",
            "green",
            "스포티파이"
        ]
    },
    "넷플릭스 레드": {
        "hex": "#E50914",
        "name_en": "Netflix Red",
        "tags": [
            "movie",
            "red",
            "넷플릭스",
            "빨강"
        ]
    },
    "피그마 퍼플": {
        "hex": "#A259FF",
        "name_en": "Figma Purple",
        "tags": [
            "design",
            "purple",
            "피그마",
            "보라"
        ]
    },
    "티파니 블루": {
        "hex": "#81D8D0",
        "name_en": "Tiffany Blue",
        "tags": [
            "luxury",
            "mint",
            "티파니",
            "하늘"
        ]
    },
    "황토색": {
        "hex": "#CC7722",
        "name_en": "Ochre",
        "tags": [
            "earth",
            "brown",
            "황토",
            "흙"
        ]
    },
    "라임": {
        "hex": "#A4F135",
        "name_en": "Lime",
        "tags": [
            "fresh",
            "green",
            "라임",
            "연두"
        ]
    },
    "피치": {
        "hex": "#FFCBA4",
        "name_en": "Peach",
        "tags": [
            "pastel",
            "orange",
            "복숭아",
            "피치"
        ]
    },
    "라일락": {
        "hex": "#D7B2FF",
        "name_en": "Lilac",
        "tags": [
            "pastel",
            "purple",
            "라일락",
            "보라"
        ]
    },
    "올리브": {
        "hex": "#708238",
        "name_en": "Olive",
        "tags": [
            "nature",
            "green",
            "올리브",
            "녹색"
        ]
    },
    "산호": {
        "hex": "#FF6B6B",
        "name_en": "Coral",
        "tags": [
            "ocean",
            "pink",
            "산호",
            "코랄"
        ]
    },
    "코퍼": {
        "hex": "#B87333",
        "name_en": "Copper",
        "tags": [
            "metal",
            "brown",
            "구리",
            "동"
        ]
    },
    "플럼": {
        "hex": "#5B2C6F",
        "name_en": "Plum",
        "tags": [
            "wine",
            "purple",
            "자두",
            "보라"
        ]
    },
    "초콜릿": {
        "hex": "#4E2623",
        "name_en": "Chocolate",
        "tags": [
            "brown",
            "sweet",
            "초코",
            "갈색"
        ]
    },
    "실버": {
        "hex": "#9E9E9E",
        "name_en": "Silver",
        "tags": [
            "metal",
            "gray",
            "실버",
            "은색"
        ]
    },
    "건메탈": {
        "hex": "#2A3439",
        "name_en": "Gunmetal",
        "tags": [
            "dark",
            "gray",
            "철색",
            "어두운"
        ]
    },
    "체리 블러썸": {
        "hex": "#FFB7C5",
        "name_en": "Cherry Blossom",
        "tags": [
            "spring",
            "pink",
            "벚꽃",
            "분홍"
        ]
    },
    "머스타드": {
        "hex": "#D4AC0D",
        "name_en": "Mustard",
        "tags": [
            "yellow",
            "sauce",
            "겨자",
            "노랑"
        ]
    }
};

// ─── 인스피레이션 & 래퍼런스 카드 ──────────────────────────────────────────
const designInspiration = [
    {
        "name": "미니멀 모던",
        "name_en": "Minimal Modern",
        "colors": [
            "#000000",
            "#FFFFFF",
            "#8B8B8B",
            "#E8E8E8"
        ]
    },
    {
        "name": "네온 나이트",
        "name_en": "Neon Night",
        "colors": [
            "#FF10F0",
            "#FFE600",
            "#00B4FF",
            "#7B00FF"
        ]
    },
    {
        "name": "해양 휴가",
        "name_en": "Ocean Vacation",
        "colors": [
            "#005377",
            "#00A8E8",
            "#00D9FF",
            "#B5EAD7"
        ]
    },
    {
        "name": "서로운 일몰",
        "name_en": "Deep Sunset",
        "colors": [
            "#FF6B35",
            "#FFB627",
            "#C27A54",
            "#4E2623"
        ]
    },
    {
        "name": "숲의 꿈",
        "name_en": "Forest Dream",
        "colors": [
            "#228B22",
            "#8A9A5B",
            "#DEB887",
            "#006994"
        ]
    },
    {
        "name": "리퀴드 글래스",
        "name_en": "Liquid Glass",
        "colors": [
            "#E0F7FF",
            "#AED6F1",
            "#5DADE2",
            "#1A5276"
        ]
    },
    {
        "name": "다크 엘리건스",
        "name_en": "Dark Elegance",
        "colors": [
            "#000000",
            "#212121",
            "#424242",
            "#9E9E9E"
        ]
    },
    {
        "name": "코랄 선셋",
        "name_en": "Coral Sunset",
        "colors": [
            "#FF7F50",
            "#FF6B9D",
            "#FFD1DC",
            "#FFCBA4"
        ]
    },
    {
        "name": "어반 테크",
        "name_en": "Urban Tech",
        "colors": [
            "#0070F3",
            "#212121",
            "#E0E0E0",
            "#FAFAFA"
        ]
    },
    {
        "name": "파스텔 드림",
        "name_en": "Pastel Dream",
        "colors": [
            "#FFD1DC",
            "#B5EAD7",
            "#AED6F1",
            "#FFF0AA"
        ]
    },
    {
        "name": "브랜드 파워",
        "name_en": "Brand Power",
        "colors": [
            "#E50914",
            "#1DB954",
            "#5865F2",
            "#FF9900"
        ]
    },
    {
        "name": "어스 톤",
        "name_en": "Earth Tone",
        "colors": [
            "#C27A54",
            "#A0522D",
            "#DEB887",
            "#6B7C3A"
        ]
    },
    {
        "name": "사이버 펑크",
        "name_en": "Cyberpunk Glow",
        "colors": [
            "#FF0055",
            "#00FFCC",
            "#7B00FF",
            "#0F0F1A"
        ]
    },
    {
        "name": "토스 미니멀",
        "name_en": "Toss Minimal",
        "colors": [
            "#3182F6",
            "#FFFFFF",
            "#F2F4F6",
            "#191F28"
        ]
    },
    {
        "name": "스타벅스 오가닉",
        "name_en": "Starbucks Green",
        "colors": [
            "#00704A",
            "#272727",
            "#EAE6DF",
            "#FFFDD0"
        ]
    },
    {
        "name": "스포티파이 테크",
        "name_en": "Spotify Dark",
        "colors": [
            "#1DB954",
            "#121212",
            "#191414",
            "#FFFFFF"
        ]
    }
];
const designCards = [
    {
        "id": "01",
        "name": "Night × Kiwi",
        "category": "스포츠웨어 / 테크 / 스트릿 브랜딩",
        "category_en": "Sportswear / Tech / Street Branding",
        "description": "어둠을 뚫고 나오는 형광의 대비\n강한 긴장감과 젊은 에너지를 동시에 만듭니다.",
        "description_en": "Fluorescent contrast emerging from darkness\nCreates strong tension and youthful energy simultaneously.",
        "colors": [
            {
                "name": "Night",
                "hex": "#222222"
            },
            {
                "name": "Kiwi",
                "hex": "#89E900"
            }
        ]
    },
    {
        "id": "02",
        "name": "Cloud × Blue",
        "category": "IT / 핀테크 / 모던 브랜딩",
        "category_en": "IT / Fintech / Modern Branding",
        "description": "깨끗한 여백 위에 적힌 투명한 신뢰\n차갑지 않으면서 전문성을 전달합니다.",
        "description_en": "Vivid trust written on clean space\nConveys professionalism without being cold.",
        "colors": [
            {
                "name": "Canvas Cloud",
                "hex": "#EDF1F5"
            },
            {
                "name": "Electric Blue",
                "hex": "#0145F2"
            }
        ]
    },
    {
        "id": "03",
        "name": "Night × Imperial",
        "category": "럭셔리 브랜딩 / 프리미엄 패키지 / 시네마틱",
        "category_en": "Luxury Branding / Premium Package / Cinematic",
        "description": "어둠 속에서 피어오르는 붉은 기품\n시선을 단번에 사로잡으면서도 무게감을 잃지 않습니다.",
        "description_en": "Red elegance rising in the darkness\nCaptures attention while maintaining weight.",
        "colors": [
            {
                "name": "Night",
                "hex": "#000F08"
            },
            {
                "name": "Imperial",
                "hex": "#FB3640"
            }
        ]
    },
    {
        "id": "04",
        "name": "ICE × MINT",
        "category": "카페 / 뷰티 / 웰니스 브랜딩",
        "category_en": "Cafe / Beauty / Wellness Branding",
        "description": "순수한 우유빛 위에 얹힌 상큼한 민트\n부드러우면서도 선명한 인상을 남깁니다.",
        "description_en": "Fresh mint on top of pure milky white\nLeaves a soft yet distinct impression.",
        "colors": [
            {
                "name": "Ice Latte",
                "hex": "#E4DDD3"
            },
            {
                "name": "The Mint",
                "hex": "#00A19B"
            }
        ]
    },
    {
        "id": "05",
        "name": "Wattle × Bottle Green",
        "category": "유기농 푸드 / 친환경 브랜딩 / 아웃도어",
        "category_en": "Organic Food / Eco-friendly / Outdoor",
        "description": "숲의 깊이와 햇살의 생기가 만나는 자리\n자연주의 속에서도 눈에 띄는 생동감을 만듭니다.",
        "description_en": "Where forest depth meets sunlight vitality\nCreates striking vividness within naturalism.",
        "colors": [
            {
                "name": "Wattle",
                "hex": "#CCDA47"
            },
            {
                "name": "Bottle Green",
                "hex": "#0A3625"
            }
        ]
    },
    {
        "id": "06",
        "name": "Sand × Rust",
        "category": "인테리어 / 홈리빙 / 빈티지 브랜딩",
        "category_en": "Interior / Home Living / Vintage Branding",
        "description": "사막의 따뜻한 모래 위에 얹힌 녹슨 붉음\n오래된 것들이 가지는 고요한 아름다움.",
        "description_en": "Rusted red on top of warm desert sand\nThe quiet beauty of old things.",
        "colors": [
            {
                "name": "Sand",
                "hex": "#E8D5B7"
            },
            {
                "name": "Rust",
                "hex": "#B7410E"
            }
        ]
    },
    {
        "id": "07",
        "name": "Ink × Gold",
        "category": "출판 / 리테일 / 하이엔드 브랜딩",
        "category_en": "Publishing / Retail / High-end Branding",
        "description": "깊은 먹빛 위에 빛나는 황금의 대비\n고전적이면서도 현대적인 품격을 담았습니다.",
        "description_en": "Brilliant gold contrast on deep ink\nEmbodies both classical and modern elegance.",
        "colors": [
            {
                "name": "Ink",
                "hex": "#1A1A2E"
            },
            {
                "name": "Gold",
                "hex": "#D4AF37"
            }
        ]
    },
    {
        "id": "08",
        "name": "Blush × Slate",
        "category": "패션 / 웨딩 / 라이프스타일 브랜딩",
        "category_en": "Fashion / Wedding / Lifestyle Branding",
        "description": "부드러운 살구빛과 차가운 슬레이트의 균형\n감성적이면서도 트렌디한 인상을 전달합니다.",
        "description_en": "Balance of soft blush and cold slate\nConveys an emotional yet sophisticated impression.",
        "colors": [
            {
                "name": "Blush",
                "hex": "#F4A7B9"
            },
            {
                "name": "Slate",
                "hex": "#475569"
            }
        ]
    },
    {
        "id": "09",
        "name": "Toss Blue × Pure White",
        "category": "핀테크 / 모바일 앱 / 테크 기업",
        "category_en": "Fintech / Mobile App / Tech",
        "description": "극강의 여백과 청량한 블루\n금융의 무거움을 털어내고 신뢰와 미래를 선사합니다.",
        "description_en": "Ultra white space with crisp Toss Blue\nRemoves financial weight to provide trust and future.",
        "colors": [
            {
                "name": "Toss Blue",
                "hex": "#3182F6"
            },
            {
                "name": "Pure White",
                "hex": "#FFFFFF"
            }
        ]
    },
    {
        "id": "10",
        "name": "Starbucks Green × Cream",
        "category": "F&B / 오가닉 / 커피 프랜차이즈",
        "category_en": "F&B / Organic / Coffee Franchise",
        "description": "도심 속 자연을 형상화하는 오가닉 그린\n차분하면서도 정돈된 편안함을 고객에게 제공합니다.",
        "description_en": "Organic green embodying urban nature\nProvides calm, organized comfort to customers.",
        "colors": [
            {
                "name": "Starbucks Green",
                "hex": "#00704A"
            },
            {
                "name": "Cream Latte",
                "hex": "#FFFDD0"
            }
        ]
    }
];

// ─── 명품 가독성 폰트 (Mono 폰트 제외) ────────────────────────────────────────────
const designFonts = [
    {
        "id": "f01",
        "name": "Pretendard",
        "family": "'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
        "url": "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css",
        "category": "Readable Text",
        "category_kr": "가독성 본문용 (고딕)",
        "pair": "Inter",
        "note": "현대 한국 웹/앱 인터페이스의 독보적인 표준입니다. 글자 정렬과 가독성 설계가 완벽합니다.",
        "note_en": "The absolute standard for Korean web/app UI. Perfect legibility and alignment.",
        "sample": "디자인은 단순한 모양이 아닌, 문제가 해결되는 방식입니다."
    },
    {
        "id": "f02",
        "name": "Inter",
        "family": "'Inter', sans-serif",
        "url": "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&display=swap",
        "category": "UI/UX Sans",
        "category_kr": "가독성 본문용 (영문)",
        "pair": "Pretendard",
        "note": "글로벌 IT 기업들이 표준으로 채택하는 UI 최적화 영문 폰트입니다.",
        "note_en": "The gold standard for modern web UI. Chosen by major tech corporations.",
        "sample": "Design is not just what it looks like and feels like."
    },
    {
        "id": "f03",
        "name": "SUIT",
        "family": "'SUIT', sans-serif",
        "url": "https://cdn.jsdelivr.net/gh/sun-typeface/SUIT/fonts/static/woff2/SUIT.css",
        "category": "Geometric UI",
        "category_kr": "기하학적 본문용 (한글)",
        "pair": "Poppins",
        "note": "곡선과 직선의 비례가 기하학적으로 무척 세련된 현대적인 본문 서체입니다.",
        "note_en": "Modern Korean UI typeface with sophisticated geometric curves and proportions.",
        "sample": "가장 직관적이면서 사용하기 쉬운 레이아웃을 완성합니다."
    },
    {
        "id": "f04",
        "name": "Poppins",
        "family": "'Poppins', sans-serif",
        "url": "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap",
        "category": "Geometric Sans",
        "category_kr": "트렌디한 라운드 (영문)",
        "pair": "Lora",
        "note": "기하학적으로 둥글고 밝은 인상을 지녀, 스타트업과 테크 기업 브랜딩에 적합합니다.",
        "note_en": "Geometric and friendly rounded font. Highly popular in startup branding.",
        "sample": "Everything is designed. Few things are designed well."
    },
    {
        "id": "f05",
        "name": "Montserrat",
        "family": "'Montserrat', sans-serif",
        "url": "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap",
        "category": "Geometric Sans",
        "category_kr": "주목성 높은 제목용 (영문)",
        "pair": "Open Sans",
        "note": "기하학적이고 단단한 구조의 폰트로, 크고 두꺼운 타이틀이나 헤드라인에 아주 강렬합니다.",
        "note_en": "Strong geometric sans-serif. Ideal for big, bold typography and headlines.",
        "sample": "The detail is not the detail. It is the design."
    },
    {
        "id": "f06",
        "name": "Gmarket Sans",
        "family": "'GmarketSans', sans-serif",
        "url": "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GmarketSansMTBold.woff",
        "category": "Impact Display",
        "category_kr": "주목성 높은 제목용 (한글)",
        "pair": "Pretendard",
        "note": "정사각형 틀에 꽉 찬 기하학적 형태. 포스터, 광고 배너 등의 타이틀로 독보적입니다.",
        "note_en": "Filled geometric shape in a square box. Highly popular for banner headlines.",
        "sample": "시선을 단번에 사로잡는 강력한 브랜딩 서체."
    },
    {
        "id": "f07",
        "name": "Nanum Square Neo",
        "family": "'NanumSquareNeo', sans-serif",
        "url": "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2",
        "category": "Modern Sans",
        "category_kr": "세련된 각진 고딕 (한글)",
        "pair": "Roboto",
        "note": "나눔스퀘어의 후속작으로, 한층 더 정돈된 기하학적 획 대비와 깔끔한 끝처리를 제공합니다.",
        "note_en": "Newer geometric Sans for Korean, showcasing sharp terminals and clean balance.",
        "sample": "조금 더 똑바르고 빈틈없는 디자인의 시작."
    },
    {
        "id": "f08",
        "name": "Nanum Myeongjo",
        "family": "'Nanum Myeongjo', serif",
        "url": "https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap",
        "category": "Korean Serif",
        "category_kr": "품격 있는 세리프 (한글)",
        "pair": "Pretendard",
        "note": "정갈한 삐침과 한국적인 품격이 담긴 전통 명조 서체입니다. 신뢰감과 감성을 함께 전합니다.",
        "note_en": "Classic Korean serif typeface. Conveys a warm, trustworthy, and emotional tone.",
        "sample": "글자 하나에 진심과 정성을 정갈하게 눌러 담았습니다."
    },
    {
        "id": "f09",
        "name": "Playfair Display",
        "family": "'Playfair Display', serif",
        "url": "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;1,600&display=swap",
        "category": "Luxury Serif",
        "category_kr": "우아한 세리프 (영문)",
        "pair": "Montserrat",
        "note": "패션, 뷰티, 하이엔드 럭셔리 브랜드에서 널리 쓰이는 매우 우아하고 획 대비가 뚜렷한 세리프입니다.",
        "note_en": "High-contrast elegant serif. Widely used for luxury editorial and headlines.",
        "sample": "Simplicity is the ultimate sophistication."
    },
    {
        "id": "f10",
        "name": "Lora",
        "family": "'Lora', serif",
        "url": "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&display=swap",
        "category": "Readable Serif",
        "category_kr": "감성적인 본문용 (영문)",
        "pair": "Inter",
        "note": "부드럽고 둥글둥글한 곡선미를 지닌 세리프로, 에세이나 긴 설명문 등의 가독성에 특화되었습니다.",
        "note_en": "Soft, contemporary serif. Designed to be highly readable for body texts.",
        "sample": "Good design makes a product useful."
    },
    {
        "id": "f11",
        "name": "Roboto",
        "family": "'Roboto', sans-serif",
        "url": "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
        "category": "UI/UX Sans",
        "category_kr": "구글 표준 본문 (영문)",
        "pair": "Roboto Slab",
        "note": "안드로이드 OS 표준 서체. 둥근 획과 기하학적 균형이 만나 중립적이면서 완벽한 가독성을 가집니다.",
        "note_en": "The standard font for Google Android. Neutral, reliable, and legible.",
        "sample": "Experience is the product, and details make it."
    },
    {
        "id": "f12",
        "name": "Spoqa Han Sans Neo",
        "family": "'Spoqa Han Sans Neo', sans-serif",
        "url": "https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css",
        "category": "Commerce Sans",
        "category_kr": "커머스 최적화 고딕 (한글)",
        "pair": "Roboto",
        "note": "숫자와 기호가 무척 예쁘며, 오픈마켓이나 쇼핑몰 서비스의 촘촘한 UI 가독성에 최적화되었습니다.",
        "note_en": "Perfect font for e-commerce UIs, with highly optimized numbers and symbols.",
        "sample": "총 결제 금액: 38,500원 (무료 배송 및 할인율 20% 적용)"
    },
    {
        "id": "f13",
        "name": "Noto Sans KR",
        "family": "'Noto Sans KR', sans-serif",
        "url": "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap",
        "category": "Standard Sans",
        "category_kr": "범용 표준 고딕 (한글)",
        "pair": "Roboto",
        "note": "구글과 어도비의 다국어 문자 프로젝트. 웹 폰트 로딩과 크로스 브라우징이 가장 안정적입니다.",
        "note_en": "The most widely used Korean Google font. Highly stable and versatile.",
        "sample": "모든 장치와 화면에서 어긋남 없이 깨끗하게 표시됩니다."
    },
    {
        "id": "f14",
        "name": "Merriweather",
        "family": "'Merriweather', serif",
        "url": "https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap",
        "category": "Readable Serif",
        "category_kr": "화면용 두꺼운 세리프 (영문)",
        "pair": "Open Sans",
        "note": "컴퓨터 화면에서 읽을 때 눈의 피로를 최소화하도록 획의 굵기가 약간 묵직하게 조절되었습니다.",
        "note_en": "A heavy serif designed specifically for screen legibility and ease of reading.",
        "sample": "Books are a uniquely portable magic."
    },
    {
        "id": "f15",
        "name": "Raleway",
        "family": "'Raleway', sans-serif",
        "url": "https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;800&display=swap",
        "category": "Elegant Sans",
        "category_kr": "세련된 산세리프 (영문)",
        "pair": "Roboto",
        "note": "획 끝의 크로싱 디테일이 매우 세련되어, 럭셔리 포스터나 미니멀 잡지 레이아웃에 어울립니다.",
        "note_en": "Elegant, stylish sans-serif with subtle characterful crossings in letters.",
        "sample": "Less is more. Minimalism at its best."
    },
    {
        "id": "f16",
        "name": "Ubuntu",
        "family": "'Ubuntu', sans-serif",
        "url": "https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap",
        "category": "Tech Sans",
        "category_kr": "미래지향적 테크 (영문)",
        "pair": "Open Sans",
        "note": "우분투 리눅스의 시그니처 폰트. 특유의 타원형 곡선 구조가 테크니컬한 감성을 만듭니다.",
        "note_en": "Signature font of Ubuntu. Unique oval curve design gives a high-tech vibe.",
        "sample": "Connecting technology and human interface."
    },
    {
        "id": "f17",
        "name": "Nunito",
        "family": "'Nunito', sans-serif",
        "url": "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;800&display=swap",
        "category": "Rounded Sans",
        "category_kr": "친근한 라운드 (영문)",
        "pair": "Lora",
        "note": "글자 마감이 둥글게 깎여 있어 무척 따뜻하고 귀여운 분위기나 앱의 안내 문구에 잘 맞습니다.",
        "note_en": "Fully rounded terminals. Warm, friendly, and soft tone of voice.",
        "sample": "Welcome to our platform! Enjoy your creative journey."
    },
    {
        "id": "f18",
        "name": "Rubik",
        "family": "'Rubik', sans-serif",
        "url": "https://fonts.googleapis.com/css2?family=Rubik:wght@400;600;800&display=swap",
        "category": "Chunky Sans",
        "category_kr": "묵직하고 꽉 찬 느낌 (영문)",
        "pair": "Pretendard",
        "note": "굵고 단단하며 꽉 찬 느낌의 폰트입니다. 게임 UI나 개성 넘치는 테크 뱃지용으로 많이 씁니다.",
        "note_en": "Heavy, chunky geometric font. Fits well with gaming and modern dashboards.",
        "sample": "CRITICAL VALUE DETECTED."
    },
    {
        "id": "f19",
        "name": "Work Sans",
        "family": "'Work Sans', sans-serif",
        "url": "https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;800&display=swap",
        "category": "Grotesque Sans",
        "category_kr": "정교한 화면용 (영문)",
        "pair": "Inter",
        "note": "초기 영문 서체의 불규칙성을 현대적으로 리파인하여 본문 속에서 정교한 가독성을 뿜어냅니다.",
        "note_en": "Refined Grotesque sans-serif built specifically for screen-first environments.",
        "sample": "Making ideas visual and visible."
    },
    {
        "id": "f20",
        "name": "Fira Sans",
        "family": "'Fira Sans', sans-serif",
        "url": "https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;700&display=swap",
        "category": "UI/UX Sans",
        "category_kr": "파이어폭스 표준 (영문)",
        "pair": "Inter",
        "note": "모질라 재단에서 특수 설계한 폰트로, 작은 픽셀 환경에서도 글자가 뭉개지지 않고 선명합니다.",
        "note_en": "Designed by Mozilla for crisp rendering on low-res screens.",
        "sample": "Clear, crisp, and robust in every resolution."
    },
    {
        "id": "f21",
        "name": "Quicksand",
        "family": "'Quicksand', sans-serif",
        "url": "https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap",
        "category": "Rounded Display",
        "category_kr": "미니멀 둥근 (영문)",
        "pair": "Open Sans",
        "note": "얇은 두께와 동그란 기하학적 형태가 어우러져, 카페, 뷰티, 감성 디자인에 잘 매칭됩니다.",
        "note_en": "Thin and clean rounded font. Matches perfectly with aesthetic designs.",
        "sample": "Slow coffee, warm tea, and fresh inspiration."
    },
    {
        "id": "f22",
        "name": "Barlow",
        "family": "'Barlow', sans-serif",
        "url": "https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;800&display=swap",
        "category": "Condense Sans",
        "category_kr": "좁고 곧은 형태 (영문)",
        "pair": "PT Serif",
        "note": "도로 표지판에서 영감을 받아 좁고 키가 큰 형태입니다. 좁은 폭에 핵심 단어를 넣을 때 씁니다.",
        "note_en": "Slightly condensed sans-serif inspired by US road signage.",
        "sample": "SPEED LIMIT: MAXIMIZE EFFICIENCY."
    },
    {
        "id": "f23",
        "name": "Josefin Sans",
        "family": "'Josefin Sans', sans-serif",
        "url": "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&display=swap",
        "category": "Vintage Geometric",
        "category_kr": "기하학적 빈티지 (영문)",
        "pair": "Lato",
        "note": "1920년대 유럽 스타일의 세련되고 개성 있는 기하학적 영문 폰트로, 브랜딩 타이틀에 유니크합니다.",
        "note_en": "Elegant geometric font with a 1920s vintage feel. Ideal for branding.",
        "sample": "Create with passion, design with purpose."
    },
    {
        "id": "f24",
        "name": "Cabin",
        "family": "'Cabin', sans-serif",
        "url": "https://fonts.googleapis.com/css2?family=Cabin:wght@400;600;700&display=swap",
        "category": "Humanist Sans",
        "category_kr": "편안한 휴머니스트 (영문)",
        "pair": "Raleway",
        "note": "기계적이지 않고 인간의 필기 획을 닮은 비율 덕분에 친밀하고 정다운 분위기를 풍깁니다.",
        "note_en": "Humanist sans-serif with natural handwriting proportions. Easy to read.",
        "sample": "We design experiences that feel natural."
    },
    {
        "id": "f25",
        "name": "PT Sans",
        "family": "'PT Sans', sans-serif",
        "url": "https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap",
        "category": "Humanist Sans",
        "category_kr": "열린 공간감 (영문)",
        "pair": "PT Serif",
        "note": "자간과 내부 공간이 넉넉하게 설계되어 다소 작은 본문에서도 단어 인지가 잘 됩니다.",
        "note_en": "Spacious humanist sans-serif. Performs well in smaller body texts.",
        "sample": "Readability is the core value of information design."
    },
    {
        "id": "f26",
        "name": "Dosis",
        "family": "'Dosis', sans-serif",
        "url": "https://fonts.googleapis.com/css2?family=Dosis:wght@400;600;800&display=swap",
        "category": "Rounded Display",
        "category_kr": "둥근 제목용 (영문)",
        "pair": "Roboto",
        "note": "좁고 둥근 형태로 제작되어 모바일 인터페이스 타이틀이나 귀여운 테크 패키지에 잘 녹아듭니다.",
        "note_en": "Condensed rounded design. Perfect for tech and playful labels.",
        "sample": "Let us build something wonderful today."
    },
    {
        "id": "f27",
        "name": "Anton",
        "family": "'Anton', sans-serif",
        "url": "https://fonts.googleapis.com/css2?family=Anton&display=swap",
        "category": "Heavy Display",
        "category_kr": "두껍고 파워풀한 제목 (영문)",
        "pair": "Open Sans",
        "note": "두껍고 꽉 막힌 듯한 강렬한 산세리프. 유튜브 썸네일이나 스포츠 헤드라인에 강력합니다.",
        "note_en": "Extremely bold display sans-serif. Ideal for heavy titles and thumbnails.",
        "sample": "CHAMPIONS NEVER STOP."
    },
    {
        "id": "f28",
        "name": "Pacifico",
        "family": "'Pacifico', cursive",
        "url": "https://fonts.googleapis.com/css2?family=Pacifico&display=swap",
        "category": "Brush Cursive",
        "category_kr": "아날로그 필기체 (영문)",
        "pair": "Roboto",
        "note": "1950년대 미국 서핑 포스터 감성의 자유롭고 감성적인 아날로그 브러쉬 폰트입니다.",
        "note_en": "Retro brush cursive, bringing 1950s surf culture vibes.",
        "sample": "Aloha! Sweet vacation and design vibes."
    },
    {
        "id": "f29",
        "name": "Nanum Baru Gothic",
        "family": "'NanumBarunGothic', sans-serif",
        "url": "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumBarunGothic.woff",
        "category": "Clean Sans",
        "category_kr": "왜곡 없는 고딕 (한글)",
        "pair": "Roboto",
        "note": "가장 군더더기 없는 기본 뼈대를 가진 폰트입니다. 보고서나 매뉴얼 등 정보 문서에 최고입니다.",
        "note_en": "Clean, basic structure Korean font. Ideal for information manuals.",
        "sample": "가장 객관적이고 정확하게 정보를 관람자에게 전달합니다."
    },
    {
        "id": "f30",
        "name": "KoPub World Dotum",
        "family": "'KoPubWorldDotum', sans-serif",
        "url": "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/KoPubWorldDotum.woff",
        "category": "E-Book Sans",
        "category_kr": "전자책용 가독성 (한글)",
        "pair": "Inter",
        "note": "한국출판인회의 공식 폰트. 전자책이나 장문의 웹소설, 긴 칼럼 글에서도 눈이 전혀 아프지 않습니다.",
        "note_en": "Official publisher font. Perfect for e-books, columns, and long blogs.",
        "sample": "한 호흡에 끝까지 읽히는 완벽한 줄 정렬과 비례."
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

// 이전에 분할했던 가이드 및 아카데미 데이터 복원하여 병합
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
    { id: '15', name: 'Coral × Sand', category: '라이프스타일 / 화장품 / 휴양지', category_en: 'Lifestyle / Cosmetics / Resort', description: '부드러운 산호색과 모래색의 만남. 따뜻하고 편안한 인상을 남깁니다.', description_en: 'Warm coral meets sand color.', colors: [{ name: 'Coral Pink', hex: '#FF7F50' }, { name: 'Warm Sand', hex: '#EEDC82' }] },
    { id: '16', name: 'Cyber × Neon', category: '웹3.0 / 게이밍 / 사이버펑크', category_en: 'Web3 / Gaming / Cyberpunk', description: '어두운 배경 위로 뿜어져 나오는 사이버펑크 네온의 강렬함.', description_en: 'Intense cyberpunk neon on dark background.', colors: [{ name: 'Dark Void', hex: '#0B0C10' }, { name: 'Neon Cyan', hex: '#66FCF1' }] },
    { id: '17', name: 'Matcha × Cream', category: '비건 / 카페 / 오가닉 브랜딩', category_en: 'Vegan / Cafe / Organic Branding', description: '쌉싸름한 말차와 부드러운 크림의 조화. 건강하고 자연 친화적인 느낌.', description_en: 'Matcha and cream. Healthy and nature-friendly.', colors: [{ name: 'Matcha Green', hex: '#4C6A2E' }, { name: 'Vanilla Cream', hex: '#F3E5AB' }] },
    { id: '18', name: 'Lava × Ash', category: '스포츠 / 피트니스 / 스트릿', category_en: 'Sports / Fitness / Street', description: '화산재 속에서 타오르는 용암처럼, 멈추지 않는 에너지를 표현합니다.', description_en: 'Like lava burning in ash, expressing unstoppable energy.', colors: [{ name: 'Volcano Ash', hex: '#3B3B3B' }, { name: 'Magma Red', hex: '#FF4500' }] },
    { id: '19', name: 'Lavender × Slate', category: '에듀테크 / SaaS / B2B 서비스', category_en: 'Edutech / SaaS / B2B Service', description: '전문적이고 차분한 슬레이트 그레이에 보라색으로 창의적인 포인트를 줍니다.', description_en: 'Professional slate with a creative lavender point.', colors: [{ name: 'Slate Gray', hex: '#708090' }, { name: 'Soft Lavender', hex: '#B57EDC' }] },
    { id: '20', name: 'Gold × Midnight', category: '파인다이닝 / VIP 멤버십 / 프리미엄', category_en: 'Fine Dining / VIP / Premium', description: '깊은 밤하늘과 금빛의 만남. 시대를 초월하는 우아함과 고급스러움.', description_en: 'Midnight blue and gold. Timeless elegance.', colors: [{ name: 'Midnight Blue', hex: '#003366' }, { name: 'Rich Gold', hex: '#D4AF37' }] },
    { id: '21', name: 'Peach × Sage', category: '인테리어 / 아동복 / 플랜테리어', category_en: 'Interior / Kids / Planterior', description: '복숭아의 달콤함과 세이지 그린의 싱그러움이 만나 아늑함을 제공합니다.', description_en: 'Sweet peach and fresh sage create a cozy feel.', colors: [{ name: 'Soft Peach', hex: '#FFDAB9' }, { name: 'Sage Green', hex: '#9DC183' }] },
    { id: '22', name: 'Tomato × Navy', category: '외식업 / 다이너 / 레트로', category_en: 'Restaurant / Diner / Retro', description: '식욕을 돋우는 토마토 레드와 묵직한 네이비의 아메리칸 레트로 무드.', description_en: 'Appetizing tomato red with heavy navy in a retro mood.', colors: [{ name: 'Diner Navy', hex: '#000080' }, { name: 'Tomato Red', hex: '#FF6347' }] }
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

