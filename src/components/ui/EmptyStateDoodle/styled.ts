import styled from 'styled-components';

export const DoodleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;

  svg {
    width: 100px;
    height: auto;
    max-width: 120px;
    opacity: 0.9;
    filter: drop-shadow(0 4px 12px var(--shadow-soft-color));
  }
`;
