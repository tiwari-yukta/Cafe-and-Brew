import styled from 'styled-components';
import { HEADER_HEIGHT } from '../Header/styled';

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
  padding: 1.5rem;
  padding-top: calc(${HEADER_HEIGHT} + 1rem);
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  background: #ffffff;
  overflow-x: hidden;

  [data-theme='dark'] & {
    background: var(--color-bg);
  }

  @media (max-width: 767px) {
    padding-bottom: 5rem;
  }
`;
