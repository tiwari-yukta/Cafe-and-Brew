import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
  25% { transform: translateY(-8px) rotate(3deg) scale(1.05); }
  50% { transform: translateY(-12px) rotate(-2deg) scale(1); }
  75% { transform: translateY(-6px) rotate(2deg) scale(1.03); }
`;

const sparkle = keyframes`
  0%, 100% { opacity: 0.5; transform: scale(0.9); }
  50% { opacity: 1; transform: scale(1.3); }
`;

const gentlePulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

export const HeroSection = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 1.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(ellipse 80% 50% at 50% 0%, var(--hero-blush-alpha-40) 0%, transparent 50%),
      radial-gradient(ellipse 60% 40% at 80% 80%, var(--hero-lavender-alpha-30) 0%, transparent 50%),
      radial-gradient(ellipse 50% 30% at 20% 70%, var(--hero-rose-alpha-30) 0%, transparent 50%),
      linear-gradient(180deg, var(--color-cream-100) 0%, var(--hero-blush-alpha-20) 50%, var(--hero-lavender-alpha-15) 100%);
    z-index: 0;
  }

  [data-theme="dark"] &::before {
    background: 
      radial-gradient(ellipse 80% 50% at 50% 0%, var(--hero-blush-alpha-40) 0%, transparent 50%),
      radial-gradient(ellipse 60% 40% at 80% 80%, var(--hero-lavender-alpha-30) 0%, transparent 50%),
      radial-gradient(ellipse 50% 30% at 20% 70%, var(--hero-rose-alpha-30) 0%, transparent 50%),
      linear-gradient(180deg, var(--color-bg) 0%, var(--hero-lavender-alpha-15) 50%, var(--hero-blush-alpha-20) 100%);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle at 1px 1px, var(--dot-pattern) 1px, transparent 0);
    background-size: 24px 24px;
    z-index: 0;
    opacity: 0.8;
  }

  [data-theme="dark"] &::after {
    background-image: radial-gradient(circle at 1px 1px, var(--dot-pattern) 1px, transparent 0);
  }
`;

export const HeroLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3rem;
    max-width: 1000px;
  }
`;

const illustrationFadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

export const IllustrationWrapper = styled.div`
  flex-shrink: 0;
  width: min(200px, 45vw);
  max-width: 240px;
  animation: ${illustrationFadeIn} 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;

  svg {
    width: 100%;
    height: auto;
    filter: drop-shadow(0 8px 24px var(--shadow-soft-color));
  }

  @media (min-width: 768px) {
    order: -1;
    width: min(280px, 35vw);
    max-width: 320px;
  }
`;

export const DecorIcon = styled.span<{
  $delay: number;
  $left: string;
  $top: string;
  $animation?: 'float' | 'sparkle' | 'pulse';
}>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $animation }) =>
    $animation === 'float'
      ? 'var(--color-rose-200)'
      : $animation === 'sparkle'
        ? 'var(--color-lavender-200)'
        : 'var(--color-blush-200)'};
  z-index: 1;
  filter: drop-shadow(0 2px 4px var(--shadow-muted));
  animation: ${({ $animation }) =>
      $animation === 'float'
        ? float
        : $animation === 'sparkle'
          ? sparkle
          : gentlePulse}
    ${({ $animation }) => ($animation === 'pulse' ? '3s' : '4s')} ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;

  left: ${({ $left }) => $left};
  top: ${({ $top }) => $top};
  font-size: ${({ $animation }) =>
    $animation === 'sparkle' ? '1.25rem' : $animation === 'float' ? '1.5rem' : '1.75rem'};
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  flex: 1;
  min-width: 0;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 1rem;
  animation: ${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  text-shadow: 0 2px 20px var(--shadow-soft-color);

  * {
    font-size: clamp(2.75rem, 9vw, 4.5rem) !important;
  }
`;

export const SubtitleWrapper = styled.div`
  max-width: 540px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
  animation: ${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;

  * {
    font-size: clamp(1.05rem, 2.5vw, 1.35rem) !important;
  }
`;

export const CTAWrapper = styled.div`
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
  justify-content: center;
  animation: ${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
`;

export const FeaturedSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem 3rem;
  background: var(--color-cream-100);
`;

export const SectionTitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  animation: ${fadeIn} 0.8s ease;
`;

export const QuickLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
`;

export const QuickLinkCard = styled(Link)<{ $delay?: number }>`
  padding: 2.25rem;
  background: var(--color-white);
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  text-decoration: none;
  color: inherit;
  transition: all ${({ theme }) => theme.transitions.normal};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      var(--quick-link-gradient-start) 0%,
      var(--quick-link-gradient-end) 100%
    );
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.normal};
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: ${({ theme }) => theme.shadows.glow};
    border-color: var(--color-blush-100);

    &::before {
      opacity: 1;
    }

    .card-icon {
      transform: scale(1.15);
      color: var(--color-rose-200);
    }
  }
`;

export const CardIcon = styled.span`
  font-size: 3rem;
  color: var(--color-lavender-200);
  transition: all ${({ theme }) => theme.transitions.normal};
`;


export const WhySection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
`;

export const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const WhyCard = styled.div<{ $delay: number }>`
  padding: 2rem;
  background: var(--color-white);
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  animation: ${scaleIn} 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: ${({ $delay }) => $delay * 0.1}s;
  opacity: 0;
  transition: all ${({ theme }) => theme.transitions.normal};
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    border-color: var(--color-lavender-100);

    .why-icon {
      transform: rotate(-5deg) scale(1.1);
    }
  }
`;

export const WhyIcon = styled.span`
  display: inline-flex;
  font-size: 2.5rem;
  color: var(--color-rose-200);
  margin-bottom: 1rem;
  transition: transform ${({ theme }) => theme.transitions.normal};
`;


export const QuoteSection = styled.section`
  padding: 4rem 1.5rem;
  background: linear-gradient(
    135deg,
    var(--quote-bg) 0%,
    var(--quote-bg-end) 100%
  );

  [data-theme="dark"] & {
    background: linear-gradient(
      135deg,
      var(--quote-bg) 0%,
      var(--quote-bg-end) 100%
    );
  }
  border-radius: ${({ theme }) => theme.radii.xl};
  margin: 0 1.5rem 4rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const QuoteWrapper = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 1rem;
  line-height: 1.5;

  &::before {
    content: '"';
    opacity: 0.5;
  }
  &::after {
    content: '"';
    opacity: 0.5;
  }

  * {
    font-size: clamp(1.5rem, 4vw, 2.25rem) !important;
  }
`;

export const QuoteAuthorWrapper = styled.div`
  text-align: center;
`;
