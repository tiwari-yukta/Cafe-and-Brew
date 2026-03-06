import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const PageHeader = styled.header`
  margin-bottom: 2rem;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 1rem;
`;


export const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const SearchWrapper = styled.div`
  flex: 1;
  min-width: 200px;
`;

export const CategoryButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const CategoryBtn = styled.button<{ $active: boolean }>`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.radii.full};
  border: 2px solid
    ${({ $active }) =>
      $active ? 'var(--color-lavender-100)' : 'var(--color-blush-100)'};
  background: ${({ $active }) =>
    $active ? 'var(--color-lavender-100)' : 'var(--color-white)'};
  color: var(--color-text-primary);
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: var(--color-lavender-100);
    background: var(--color-lavender-100);
  }
`;

export const LoadingState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: var(--color-text-secondary);
`;

export const LoadingTextWrapper = styled.div`
  margin-top: 1rem;
`;
