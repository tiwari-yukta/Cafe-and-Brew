import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const overlayFade = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: var(--overlay);
  backdrop-filter: blur(4px);
  z-index: 1000;
  animation: ${overlayFade} 0.25s ease;
`;

export const Drawer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: min(400px, 100vw);
  height: 100vh;
  background: var(--color-surface);
  box-shadow: -4px 0 24px var(--color-shadow);
  display: flex;
  flex-direction: column;
  z-index: 1001;
  animation: ${slideIn} 0.3s ease;

  @media (max-width: 480px) {
    width: 100vw;
    max-width: 100%;
  }
`;

/** Full-page cart layout - same UI as drawer but as a normal page (for mobile) */
export const CartPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-surface);
  max-width: 500px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--color-cream-200);
  flex-shrink: 0;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const HeaderTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: var(--color-text-primary);
  margin: 0;
  display: flex;
  align-items: baseline;
  gap: 0.375rem;
`;

export const ItemCount = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: var(--color-text-secondary);
`;

export const CloseButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({ theme }) => theme.radii.full};
  border: none;
  background: transparent;
  color: var(--color-text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: var(--color-cream-200);
    color: var(--color-text-primary);
  }
`;

export const BackButton = styled(Link)`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({ theme }) => theme.radii.full};
  border: none;
  background: transparent;
  color: var(--color-text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: var(--color-cream-200);
    color: var(--color-text-primary);
  }
`;

export const WishlistLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: var(--color-rose-200);
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  &:hover {
    text-decoration: underline;
  }
`;

export const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Footer = styled.div`
  padding: 1rem 1.25rem;
  border-top: 1px solid var(--color-cream-200);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: var(--color-text-secondary);
`;

export const TotalRow = styled(SummaryRow)`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: var(--color-text-primary);
  padding-top: 0.75rem;
  margin-top: 0.5rem;
  border-top: 2px solid var(--color-cream-200);
`;

export const ProceedButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, var(--color-rose-200) 0%, var(--color-blush-100) 100%);
  color: var(--color-text-primary);
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.md};
  border: none;
  border-radius: ${({ theme }) => theme.radii.lg};
  text-decoration: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  box-shadow: ${({ theme }) => theme.shadows.soft};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

export const EmptyWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`;

export const EmptyText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: var(--color-text-secondary);
  margin: 0.5rem 0 1.5rem;
  line-height: 1.5;
`;

/* CartDrawerItem */
export const ItemCard = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: var(--color-cream-50);
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid var(--color-cream-200);
  position: relative;

  @media (max-width: 360px) {
    flex-wrap: wrap;
  }
`;

export const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ItemDetails = styled.div`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  /* Ensure name has room - prevents -webkit-line-clamp from breaking each character */
  min-width: 100px;
`;

export const Name = styled.h4`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: var(--color-text-primary);
  margin: 0 0 0.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: normal;
`;

export const Price = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: var(--color-text-secondary);
`;

export const ItemActions = styled.div`
  margin-top: 0.5rem;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  border: none;
  background: transparent;
  color: var(--color-text-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: var(--color-rose-200);
    background: var(--color-rose-50);
  }
`;
