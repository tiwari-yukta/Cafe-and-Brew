import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui';

export const ProductLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const StyledCard = styled(Card)`
  position: relative;
  overflow: hidden;
  transition: transform ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-4px);
  }
`;

export const OutOfStockBadge = styled.div`
  position: absolute;
  bottom: 0.5rem;
  left: 0.5rem;
`;

export const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  margin-bottom: 1rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const WishlistButton = styled.button<{ $inWishlist?: boolean }>`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.radii.full};
  background: var(--card-overlay);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: ${({ $inWishlist }) =>
    $inWishlist ? '#E53935' : 'var(--color-text-secondary)'};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: scale(1.1);
  }

  [data-theme="dark"] & {
    background: var(--card-overlay);
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 0.25rem;
`;

export const DescriptionWrapper = styled.div`
  margin-bottom: 0.75rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const Price = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: var(--color-text-primary);
`;
