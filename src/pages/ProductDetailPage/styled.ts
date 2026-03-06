import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const BackButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: var(--color-text-secondary);
  background: none;
  border: none;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: var(--color-text-primary);
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

export const Details = styled.div``;

export const TitleWrapper = styled.div`
  margin-bottom: 0.5rem;
`;

export const PriceWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const DescriptionWrapper = styled.div`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const WishlistButtonWrapper = styled.span<{ $inWishlist?: boolean }>`
  ${({ $inWishlist }) =>
    $inWishlist
      ? `
        button svg {
          color: #e53935;
        }
      `
      : ''}
`;

export const LoadingState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  font-family: ${({ theme }) => theme.fonts.body};
  color: var(--color-text-secondary);
`;

export const NotFoundStateWrapper = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  font-family: ${({ theme }) => theme.fonts.body};
  color: var(--color-text-secondary);
`;
