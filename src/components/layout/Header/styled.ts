import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HEADER_HEIGHT = '4.25rem';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: color-mix(in srgb, var(--color-bg) 95%, transparent);
  backdrop-filter: blur(12px);
  padding: 1rem 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.soft};

  [data-theme="dark"] & {
    background: color-mix(in srgb, var(--color-bg) 90%, transparent);
  }
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  min-width: 0;
`;

export const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: var(--color-text-primary);
  text-decoration: none;
  transition: transform ${({ theme }) => theme.transitions.fast};
  flex-shrink: 0;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 400px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ThemeAndAuth = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  flex-shrink: 0;
  margin-left: 0.25rem;

  a, button {
    white-space: nowrap;
  }
`;

export const MobileHeaderActions = styled.div`
  display: none;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  flex-shrink: 0;

  a, button {
    white-space: nowrap;
  }

  @media (max-width: 767px) {
    display: flex;
  }
`;

export const NavLink = styled(Link)<{ $active?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ $active }) =>
    $active ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'};
  text-decoration: none;
  padding: 0.5rem 0;
  border-bottom: 2px solid
    ${({ $active }) => ($active ? 'var(--color-blush-100)' : 'transparent')};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: var(--color-text-primary);
  }
`;

export const CartButtonWrapper = styled.div`
  position: relative;
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -4px;
  right: -4px;
  background: var(--color-rose-100);
  color: var(--color-text-primary);
  font-size: 0.75rem;
  min-width: 1.25rem;
  height: 1.25rem;
  border-radius: ${({ theme }) => theme.radii.full};
  display: flex;
  align-items: center;
  justify-content: center;
`;
