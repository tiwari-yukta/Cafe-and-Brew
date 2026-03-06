import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background: var(--color-cream-100);
  padding: 2rem 1.5rem;
  margin-top: auto;

  @media (max-width: 767px) {
    padding: 0;
    background: transparent;
  }
`;

export const MobileNav = styled.nav`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
    padding: 0.5rem;
    background: color-mix(in srgb, var(--color-bg) 98%, transparent);
    backdrop-filter: blur(12px);
    box-shadow: 0 -2px 20px var(--shadow-soft-color);
    border-top: 1px solid var(--shadow-muted);
  }
`;

export const MobileNavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  gap: 0.25rem;
`;

export const MobileNavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0.25rem;
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-family: ${({ theme }) => theme.fonts.body};
  transition: color ${({ theme }) => theme.transitions.fast};
  border-radius: ${({ theme }) => theme.radii.md};
  min-width: 0;
  flex: 1;

  &:hover,
  &:focus-visible {
    color: var(--color-text-primary);
    background: var(--hero-blush-alpha-20);
  }

  svg {
    font-size: 1.25rem;
  }
`;

export const MobileNavButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0.25rem;
  color: var(--color-text-secondary);
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-family: ${({ theme }) => theme.fonts.body};
  transition: color ${({ theme }) => theme.transitions.fast};
  border-radius: ${({ theme }) => theme.radii.md};
  min-width: 0;
  flex: 1;
  border: none;
  background: none;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    color: var(--color-text-primary);
    background: var(--hero-blush-alpha-20);
  }

  svg {
    font-size: 1.25rem;
  }
`;

export const MobileNavCartWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MobileNavCartBadge = styled.span`
  position: absolute;
  top: -6px;
  right: -8px;
  background: var(--color-rose-100);
  color: var(--color-text-primary);
  font-size: 0.625rem;
  min-width: 1.125rem;
  height: 1.125rem;
  border-radius: ${({ theme }) => theme.radii.full};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Brand = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: var(--color-text-primary);
  text-decoration: none;
`;

export const Links = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: var(--color-text-primary);
  }
`;

export const CartLinkButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: var(--color-text-primary);
  }
`;

export const CopyrightWrapper = styled.div``;
