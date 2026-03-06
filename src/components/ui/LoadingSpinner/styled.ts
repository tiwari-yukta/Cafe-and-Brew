import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  inline-size: 2rem;
  block-size: 2rem;
  border: 3px solid var(--color-cream-200);
  border-top-color: var(--color-text-primary);
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;
