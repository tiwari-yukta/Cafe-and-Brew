import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  overflow-x: hidden;
`;

export const EmptyStateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 50vh;
  padding: 2rem 1.5rem;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 1rem;
  text-align: center;
`;

export const EmptyStateTextWrapper = styled.div`
  max-width: 320px;
  margin: 0 0 2rem;
  line-height: 1.6;
`;

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
