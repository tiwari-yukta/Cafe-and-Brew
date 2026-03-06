type EmptyStateDoodleProps = {
  variant: 'cart' | 'wishlist';
};

export const EmptyStateDoodle = ({ variant }: EmptyStateDoodleProps) => {
  if (variant === 'cart') {
    return (
      <svg
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        {/* Sad empty cart */}
        <path
          d="M30 45 L30 70 L85 70 L85 45 L75 25 L45 25 Z"
          fill="var(--color-blush-100)"
          stroke="var(--color-blush-200)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M35 25 L45 25 L55 45 L35 45 Z"
          fill="var(--color-lavender-100)"
          stroke="var(--color-lavender-200)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="50" cy="72" r="5" fill="var(--color-text-muted)" />
        <circle cx="75" cy="72" r="5" fill="var(--color-text-muted)" />
        {/* Sad face */}
        <circle cx="55" cy="52" r="3" fill="var(--color-text-primary)" />
        <circle cx="70" cy="52" r="3" fill="var(--color-text-primary)" />
        <path
          d="M48 62 Q55 58 62 62"
          stroke="var(--color-text-secondary)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Tear drop */}
        <path
          d="M65 58 Q65 64 62 67 Q59 64 65 58"
          fill="var(--color-lavender-200)"
          opacity="0.8"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Sad empty heart */}
      <path
        d="M50 88 C20 58 10 40 22 28 C34 16 50 28 50 28 C50 28 66 16 78 28 C90 40 80 58 50 88 Z"
        fill="var(--color-rose-100)"
        stroke="var(--color-rose-200)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Sad eyes */}
      <circle cx="38" cy="45" r="5" fill="var(--color-text-primary)" />
      <circle cx="62" cy="45" r="5" fill="var(--color-text-primary)" />
      {/* Frown */}
      <path
        d="M35 62 Q50 72 65 62"
        stroke="var(--color-text-secondary)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Teardrop */}
      <ellipse cx="65" cy="70" rx="4" ry="6" fill="var(--color-lavender-200)" opacity="0.7" />
    </svg>
  );
};
