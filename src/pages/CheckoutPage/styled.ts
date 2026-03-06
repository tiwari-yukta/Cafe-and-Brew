import styled from 'styled-components';

const PLACE_ORDER_BAR_HEIGHT = '7rem';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  min-height: calc(100vh - 8rem);
  width: 100%;
  background: white;
  padding-bottom: ${PLACE_ORDER_BAR_HEIGHT};

  @media (max-width: 767px) {
    padding-bottom: calc(${PLACE_ORDER_BAR_HEIGHT} + 4rem); /* + bottom nav */
  }

  [data-theme='dark'] & {
    background: var(--color-bg);
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 1rem;
  flex-shrink: 0;
`;

export const Card = styled.div`
  background: #ffffff;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 1rem 1.25rem;
  margin-bottom: 1rem;

  [data-theme='dark'] & {
    background: var(--color-surface);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  }
`;

export const BagCard = styled(Card)`
  padding: 0;
  overflow: hidden;
`;

export const BagHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--color-cream-200);
`;

export const BagTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: var(--color-text-primary);
`;

export const BagCount = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: var(--color-text-secondary);
`;

export const BagItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
`;

export const ItemsScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: var(--color-text-primary);
`;

export const TotalLabel = styled.span``;

export const TotalValue = styled.span``;

export const SummarySticky = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: #ffffff;
  padding: 1.25rem 1.5rem;
  box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.08);
  border-top: 1px solid var(--color-cream-200);

  [data-theme='dark'] & {
    background: var(--color-surface);
    box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 767px) {
    bottom: 4.5rem; /* above bottom nav */
    border-radius: ${({ theme }) => theme.radii.lg} ${({ theme }) => theme.radii.lg} 0 0;
  }
`;

export const SummaryStickyInner = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const ButtonWrapper = styled.div`
  margin-top: 1rem;
`;  