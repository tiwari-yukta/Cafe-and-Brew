import styled from 'styled-components';

export const ItemWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid var(--color-cream-200);
  background: var(--color-cream-50);
  border-radius: ${({ theme }) => theme.radii.lg};
  margin-bottom: 0.75rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 56px;
  height: 56px;
  min-width: 56px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radii.md};
`;

export const Details = styled.div`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  /* Prevent name from squeezing to 0 and breaking each letter onto its own line */
  @media (min-width: 481px) {
    min-width: 80px;
  }
`;

export const Name = styled.h4`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: var(--color-text-primary);
  margin-bottom: 0.25rem;
  word-break: normal;
  overflow-wrap: break-word;
`;

export const Price = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: var(--color-text-secondary);
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  min-width: fit-content;

  @media (max-width: 480px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
`;

