import styled, { keyframes } from 'styled-components';

const floatUp = keyframes`
  0% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(0.5);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -150%) scale(1.2);
  }
`;

type ParticleAttrs = { $x: number; $y: number; $delay: number };

export const Particle = styled.span.attrs<ParticleAttrs>(({ $x, $y, $delay }) => ({
  style: {
    left: `${$x}px`,
    top: `${$y}px`,
    animationDelay: `${$delay}ms`,
  },
}))<ParticleAttrs>`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  animation: ${floatUp} 1.2s ease-out forwards;
  color: var(--color-lavender-200);
  font-size: 0.875rem;
  filter: drop-shadow(0 0 4px var(--particle-glow));

  [data-theme="dark"] & {
    color: var(--color-lavender-300);
    filter: drop-shadow(0 0 6px var(--particle-glow));
  }
`;
