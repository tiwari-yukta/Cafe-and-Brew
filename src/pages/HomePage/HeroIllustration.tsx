import { IllustrationWrapper } from './styled';

export const HeroIllustration = () => (
  <IllustrationWrapper aria-hidden>
    <svg
      viewBox="0 0 280 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Coffee cup - soft pastel mug */}
      <path
        d="M80 90 C70 90 60 105 60 125 L60 155 C60 170 75 180 95 180 L135 180 C155 180 170 170 170 155 L170 125 C170 105 160 90 150 90 L80 90 Z"
        fill="url(#mugFill)"
        stroke="var(--color-blush-200)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M170 110 C185 110 195 125 195 140 C195 155 185 170 170 170"
        fill="none"
        stroke="var(--color-blush-200)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse cx="120" cy="132" rx="42" ry="10" fill="url(#coffeeFill)" />
      {/* Steam wisps */}
      <path
        d="M95 75 Q98 65 102 75 Q106 85 110 80"
        stroke="var(--color-lavender-100)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M115 72 Q118 62 122 72 Q126 80 130 76"
        stroke="var(--color-blush-200)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M135 75 Q138 65 142 75 Q146 82 150 78"
        stroke="var(--color-lavender-100)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      {/* Small croissant doodle */}
      <path
        d="M200 130 Q215 115 230 125 Q225 145 205 150 Q190 148 195 135 Z"
        fill="var(--color-cream-200)"
        stroke="var(--color-rose-200)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity="0.9"
      />
      {/* Tiny plant/sprig */}
      <path
        d="M55 140 L50 120 M55 140 L60 115 M55 140 L58 125"
        stroke="var(--color-lavender-200)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <defs>
        <linearGradient id="mugFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-blush-100)" />
          <stop offset="50%" stopColor="var(--color-rose-100)" />
          <stop offset="100%" stopColor="var(--color-blush-200)" />
        </linearGradient>
        <linearGradient id="coffeeFill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--color-coffee-light)" />
          <stop offset="100%" stopColor="var(--color-coffee-dark)" />
        </linearGradient>
      </defs>
    </svg>
  </IllustrationWrapper>
);
