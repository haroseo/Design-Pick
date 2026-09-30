# RGBdom (v2.5)

<p align="center">
  <img src="logo.svg" alt="RGBdom Logo" width="128" height="128">
</p>

<p align="center">
  <strong>디자이너와 개발자를 위한 인터랙티브 컬러 시스템 & 디자인 도구</strong><br>
  Interactive Color System & Design Intelligence Platform
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Version-v2.5-4F46E5?style=flat-square" alt="Version">
  <img src="https://img.shields.io/badge/License-MIT-06B6D4?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/Font-Pretendard-black?style=flat-square" alt="Font">
</p>

---

## 🎨 About RGBdom

**RGBdom**은 직관적인 색상 탐색, 실시간 RGB/HEX 채널 제어, 디자인 시스템 가이드 및 영감 팔레트를 하나의 인터페이스에서 제공하는 현대적 웹 플랫폼입니다.

---

## 💎 Brand Identity & Logo Philosophy

### 1. Logo Principle: "Hollow Center, Edges Only"
- **중앙 비움 원칙 (Hollow Center)**: 로고의 중심부는 항상 비워져(투명) 있어, 어떤 배경이나 환경에서도 배경 톤과 조화롭게 어우러집니다.
- **변 색상 적용 (Border/Edges Only)**: 색상은 외곽 테두리(Edges)에만 정밀하게 적용됩니다.
- **실시간 반응형 연동**: 웹 애플리케이션 내 상단 및 푸터 로고는 사용자가 선택한 컬러 피커 값(`--primary-color`)과 0ms 지연 없이 실시간으로 동기화됩니다.

### 2. Official Brand Colors
| Role | Color Name | HEX | RGB | Preview |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Brand** | Electric Indigo | `#4F46E5` | `rgb(79, 70, 229)` | `#4F46E5` |
| **Accent Flow** | Cyan Flow | `#06B6D4` | `rgb(6, 182, 212)` | `#06B6D4` |
| **Deep Neutral** | Slate Deep | `#0F172A` | `rgb(15, 23, 42)` | `#0F172A` |
| **Surface Mist** | Mist Light | `#F8FAFC` | `rgb(248, 250, 252)` | `#F8FAFC` |

---

## ✨ Key Features

1. **실시간 RGB 슬롯 룰렛 & 피커**
   - 0~255 RGB 값을 룰렛 형태로 회전시키며 색상을 탐색.
   - 룰렛이 회전하는 동안 상단 로고의 변 색상도 1ms 단위로 실시간 동기화.
2. **Design Inspiration (Inspo)**
   - 스페이스바(`Space`), 탭(`Tab`) 또는 마우스 클릭으로 릴을 자유롭게 정지/회전.
   - 멈춘 디자인 컨셉에서 추출된 고유 컬러 칩을 원클릭으로 피커에 전송.
3. **Cokform 스타일 프리미엄 푸터 & 브랜드 리소스 센터**
   - 공식 로고 벡터(SVG) 및 래스터(PNG) 즉시 다운로드 지원.
   - 브랜드 공식 컬러 코드 원클릭 클립보드 복사.
   - MIT 오픈소스 라이선스 뷰어 제공.
4. **다국어 실시간 동기화 (KR / EN)**
   - 새로고침 없는 즉각적인 전역 텍스트 실시간 전환.
5. **Pretendard 전역 타이포그래피**
   - 오픈소스 고품질 Pretendard 글꼴 기반의 균형 잡힌 아이콘 및 버튼 레이아웃.

---

## 🚀 Getting Started

별도의 복잡한 빌드 과정 없이 정적 웹 서버 환경에서 즉시 실행할 수 있습니다.

```bash
# 브라우저에서 index.html을 직접 열거나 로컬 웹 서버 실행
npx serve .
# 또는 Python 내장 웹 서버
python -m http.server 8000
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
Copyright (c) 2026 RGBdom Contributors.
