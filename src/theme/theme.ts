export const theme = {
  colors: {
    blush: 'var(--color-blush-100)',
    blushDark: 'var(--color-blush-200)',
    lavender: 'var(--color-lavender-100)',
    lavenderDark: 'var(--color-lavender-200)',
    cream: 'var(--color-cream-100)',
    creamDark: 'var(--color-cream-200)',
    rose: 'var(--color-rose-100)',
    roseDark: 'var(--color-rose-200)',
    mint: 'var(--color-mint-100)',
    text: {
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
      muted: 'var(--color-text-muted)',
    },
    white: 'var(--color-white)',
  },
  fonts: {
    heading: "'Caveat', cursive",
    body: "'DM Sans', sans-serif",
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    xxl: '1.5rem',
    hero: '2.5rem',
    display: '3.5rem',
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  radii: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },
  shadows: {
    soft: 'var(--shadow-soft)',
    medium: 'var(--shadow-medium)',
    glow: 'var(--shadow-glow)',
  },
  transitions: {
    fast: '150ms ease',
    normal: '250ms ease',
    slow: '400ms ease',
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
} as const;

export type Theme = typeof theme;
