const fs = require('fs');
const path = require('path');

const targetPath = 'C:\\Users\\oxoxo\\Documents\\RGBdom\\improved.css';
const css = fs.readFileSync(targetPath, 'utf8');

const darkRule = `

/* ─── 다크모드 전용 스타일 덮어쓰기 ─── */
[data-theme="dark"] {
    h2, h3, h4, h5, h6 {
        color: var(--text-color) !important;
    }
    .navbar {
        background: var(--navbar-bg) !important;
        border-bottom: 1px solid var(--border-color) !important;
    }
    .nav-brand {
        color: var(--text-color) !important;
    }
    .nav-brand span {
        color: var(--text-color) !important;
    }
    .nav-tabs {
        background: var(--input-bg) !important;
        border: 1px solid var(--border-color) !important;
    }
    .my-search-box input {
        background: var(--input-bg) !important;
        border-color: var(--border-color) !important;
        color: var(--text-color) !important;
    }
    .my-search-box input:focus {
        border-color: var(--accent-color) !important;
    }
    .filter-chip {
        background: var(--card-bg) !important;
        border-color: var(--border-color) !important;
        color: var(--secondary-text) !important;
    }
    .filter-chip:hover {
        background: var(--tab-hover-bg) !important;
        color: var(--text-color) !important;
    }
    .filter-chip.active {
        background: var(--text-color) !important;
        border-color: var(--text-color) !important;
        color: var(--bg-color) !important;
    }
    .filter-divider {
        background: var(--border-color) !important;
    }
    .my-pal-card {
        background: var(--card-bg) !important;
        border-color: var(--border-color) !important;
        color: var(--text-color) !important;
    }
    .my-pal-card.is-starred {
        background: linear-gradient(145deg, var(--card-bg), rgba(255, 204, 0, 0.05)) !important;
        border-color: #FFCC00 !important;
    }
    .my-pal-name {
        color: var(--text-color) !important;
    }
    .my-pal-hex {
        color: var(--secondary-text) !important;
    }
    .action-btn {
        background: rgba(255, 255, 255, 0.1) !important;
        color: var(--secondary-text) !important;
    }
    .action-btn:hover {
        background: rgba(255, 255, 255, 0.2) !important;
    }
    .delete-btn:hover {
        color: #FF3B30 !important;
    }
    .star-btn.active {
        color: #FFCC00 !important;
    }
    .volume-slider {
        background: var(--border-color) !important;
    }
    .volume-slider::-webkit-slider-thumb {
        background: var(--text-color) !important;
        border-color: var(--card-bg) !important;
    }
    .color-name-display {
        background: var(--input-bg) !important;
        color: var(--text-color) !important;
    }
    .fav-btn {
        background: var(--card-bg) !important;
        border-color: var(--border-color) !important;
        color: var(--secondary-text) !important;
    }
    .fav-btn:hover {
        color: var(--text-color) !important;
        background: var(--tab-hover-bg) !important;
    }
    .fav-btn.active {
        color: #FF3B30 !important;
        border-color: #FF3B30 !important;
    }
    .font-card-v2 {
        background: var(--card-bg) !important;
        border-color: var(--border-color) !important;
        color: var(--text-color) !important;
    }
    .font-card-v2:hover {
        border-color: var(--accent-color) !important;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3) !important;
    }
    .btn-font-copy {
        background: var(--input-bg) !important;
        color: var(--text-color) !important;
        border: 1px solid var(--border-color) !important;
    }
    .btn-font-copy:hover {
        background: var(--text-color) !important;
        color: var(--bg-color) !important;
    }
    .designer-note-box {
        background: var(--input-bg) !important;
    }
    .note-content {
        color: var(--secondary-text) !important;
    }
    .learn-card {
        background: var(--card-bg) !important;
        border-color: var(--border-color) !important;
    }
    .branding-hero-card {
        border: 1px solid var(--border-color) !important;
    }
    .modal-content {
        background: var(--card-bg) !important;
        color: var(--text-color) !important;
        border: 1px solid var(--border-color) !important;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5) !important;
    }
    .modal-title {
        color: var(--text-color) !important;
    }
    .modal-desc {
        color: var(--secondary-text) !important;
    }
    .feedback-form textarea {
        background: var(--input-bg) !important;
        border-color: var(--border-color) !important;
        color: var(--text-color) !important;
    }
    .feedback-form textarea:focus {
        background: var(--card-bg) !important;
        border-color: var(--accent-color) !important;
    }
    .btn-reset-v2 {
        background: var(--card-bg) !important;
        border-color: var(--border-color) !important;
        color: var(--secondary-text) !important;
    }
    .btn-reset-v2:hover {
        background: var(--tab-hover-bg) !important;
        color: var(--text-color) !important;
    }
    .btn-submit-v2 {
        background: var(--text-color) !important;
        color: var(--bg-color) !important;
    }
    .btn-submit-v2:hover {
        background: var(--secondary-text) !important;
    }
    .admin-fb-item {
        background: var(--input-bg) !important;
        border-color: var(--border-color) !important;
    }
    .admin-fb-text {
        color: var(--text-color) !important;
    }
    .btn-back-v2 {
        background: var(--card-bg) !important;
        border-color: var(--border-color) !important;
        color: var(--text-color) !important;
    }
    .btn-back-v2:hover {
        background: var(--text-color) !important;
        color: var(--bg-color) !important;
    }
    .detail-text-v2 {
        color: var(--text-color) !important;
    }
    .copy-card {
        background: var(--input-bg) !important;
        border-color: var(--border-color) !important;
    }
    .copy-card:hover {
        background: var(--card-bg) !important;
        border-color: var(--accent-color) !important;
    }
    .copy-card strong {
        color: var(--text-color) !important;
    }
    #galleryOfficialGrid > div,
    #galleryCommunityGrid > div {
        background: var(--card-bg) !important;
        border-color: var(--border-color) !important;
    }
    #galleryOfficialGrid > div p,
    #galleryCommunityGrid > div p {
        color: var(--secondary-text) !important;
    }
    #galleryOfficialGrid > div h3,
    #galleryCommunityGrid > div h3 {
        color: var(--text-color) !important;
    }
    #galleryOfficialGrid > div div:first-child,
    #galleryCommunityGrid > div div:first-child {
        background: var(--input-bg) !important;
        color: var(--secondary-text) !important;
    }
    #gallerySort {
        background: var(--card-bg) !important;
        border-color: var(--border-color) !important;
        color: var(--text-color) !important;
    }
    .fonts-subtitle,
    .inspiration-subtitle,
    .colors-subtitle,
    .guide-subtitle {
        color: var(--secondary-text) !important;
    }
}
`;

fs.writeFileSync(targetPath, css + darkRule, 'utf8');
console.log('Successfully appended dark mode rules to improved.css');
