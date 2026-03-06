import { createGlobalStyle } from 'styled-components';

export const Colors = createGlobalStyle`
  :root, [data-theme="light"] {
    /* General Colors */
    --color-white: #ffffff;
    --color-black: #000000;
    --color-transparent: transparent;

    /* Blush Colors */
    --color-blush-50: #FFF8F8;
    --color-blush-100: #F8D7DA;
    --color-blush-200: #F5C6CB;
    --color-blush-300: #F0B8BD;

    /* Lavender Colors */
    --color-lavender-50: #F8F5FC;
    --color-lavender-100: #E6D5F5;
    --color-lavender-200: #D4C4E8;
    --color-lavender-300: #C4B0E0;

    /* Cream Colors */
    --color-cream-50: #FFFCF9;
    --color-cream-100: #FFF8F0;
    --color-cream-200: #F5EBE0;
    --color-cream-300: #EDE4D8;

    /* Rose Colors */
    --color-rose-50: #FFF5F6;
    --color-rose-100: #FADADD;
    --color-rose-200: #F0C4C9;
    --color-rose-300: #E8B3B9;

    /* Mint Colors */
    --color-mint-50: #F0FDF4;
    --color-mint-100: #D4EDDA;

    /* Coffee (illustrations) */
    --color-coffee-light: #C4A77D;
    --color-coffee-dark: #8B7355;

    /* Text Colors */
    --color-text-primary: #5D4E60;
    --color-text-secondary: #8B7B8E;
    --color-text-muted: #B8A9BC;
    --color-error: #C62828;

    --color-bg: var(--color-cream-100);
    --color-surface: var(--color-white);

    /* Shadows & Effects */
    --color-shadow: rgba(93, 78, 96, 0.12);
    --shadow-soft: 0 4px 20px rgba(93, 78, 96, 0.08);
    --shadow-medium: 0 8px 30px rgba(93, 78, 96, 0.12);
    --shadow-glow: 0 0 30px rgba(248, 215, 218, 0.5);
    --shadow-muted: rgba(93, 78, 96, 0.15);
    --shadow-soft-color: rgba(93, 78, 96, 0.08);

    /* Hero & Gradients */
    --hero-blush-alpha-40: rgba(248, 215, 218, 0.4);
    --hero-blush-alpha-20: rgba(248, 215, 218, 0.2);
    --hero-lavender-alpha-30: rgba(230, 213, 245, 0.3);
    --hero-lavender-alpha-15: rgba(230, 213, 245, 0.15);
    --hero-rose-alpha-30: rgba(250, 218, 221, 0.3);
    --dot-pattern: rgba(93, 78, 96, 0.06);
    --quote-bg: rgba(248, 215, 218, 0.4);
    --quote-bg-end: rgba(230, 213, 245, 0.3);
    --quick-link-gradient-start: rgba(248, 215, 218, 0.15);
    --quick-link-gradient-end: rgba(230, 213, 245, 0.1);

    /* Overlays & UI */
    --overlay: rgba(93, 78, 96, 0.3);
    --card-overlay: rgba(255, 255, 255, 0.9);
    --particle-glow: rgba(230, 213, 245, 0.4);
  }

  [data-theme="dark"] {
    --color-white: #3D3545;
    --color-black: #E8E2F0;

    /* Blush Colors (dark) */
    --color-blush-50: #3D3545;
    --color-blush-100: #5C4E65;
    --color-blush-200: #7A6B82;
    --color-blush-300: #98899F;

    /* Lavender Colors (dark) */
    --color-lavender-50: #3B3550;
    --color-lavender-100: #5A4F75;
    --color-lavender-200: #786B94;
    --color-lavender-300: #9587AD;

    /* Cream Colors (dark) */
    --color-cream-50: #352F3D;
    --color-cream-100: #4A4354;
    --color-cream-200: #5F5668;
    --color-cream-300: #746A7D;

    /* Rose Colors (dark) */
    --color-rose-50: #3D3642;
    --color-rose-100: #5C5362;
    --color-rose-200: #7B7082;
    --color-rose-300: #9A8DA2;

    /* Mint Colors (dark) */
    --color-mint-50: #36454A;
    --color-mint-100: #4D6569;

    /* Coffee (dark theme) */
    --color-coffee-light: #9A8570;
    --color-coffee-dark: #7A6B5A;

    /* Text Colors (dark) */
    --color-text-primary: #E8E2F0;
    --color-text-secondary: #C9C1D4;
    --color-text-muted: #A89BB8;
    --color-error: #EF9A9A;

    --color-bg: #2D2835;
    --color-surface: #3D3545;

    /* Shadows & Effects (dark) */
    --color-shadow: rgba(45, 40, 53, 0.4);
    --shadow-soft: 0 4px 20px rgba(0, 0, 0, 0.15);
    --shadow-medium: 0 8px 30px rgba(0, 0, 0, 0.2);
    --shadow-glow: 0 0 40px rgba(184, 160, 220, 0.15);
    --shadow-muted: rgba(93, 78, 96, 0.15);
    --shadow-soft-color: rgba(0, 0, 0, 0.15);

    /* Hero & Gradients (dark) */
    --hero-blush-alpha-40: rgba(90, 79, 117, 0.25);
    --hero-blush-alpha-20: rgba(90, 79, 117, 0.15);
    --hero-lavender-alpha-30: rgba(122, 107, 148, 0.2);
    --hero-lavender-alpha-15: rgba(74, 67, 84, 0.3);
    --hero-rose-alpha-30: rgba(92, 83, 98, 0.2);
    --dot-pattern: rgba(232, 226, 240, 0.04);
    --quote-bg: rgba(90, 79, 117, 0.25);
    --quote-bg-end: rgba(122, 107, 148, 0.2);
    --quick-link-gradient-start: rgba(248, 215, 218, 0.15);
    --quick-link-gradient-end: rgba(230, 213, 245, 0.1);

    /* Overlays & UI (dark) */
    --overlay: rgba(93, 78, 96, 0.3);
    --card-overlay: rgba(61, 53, 69, 0.9);
    --particle-glow: rgba(180, 160, 220, 0.4);
  }
`;
