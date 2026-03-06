import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.9; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const PageWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  padding: 3rem 1.5rem;
`;

export const Icon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: ${pulse} 1.5s ease-in-out infinite;
  color: var(--color-lavender-200);
`;

export const TitleWrapper = styled.div`
  margin-bottom: 0.75rem;
  animation: ${fadeIn} 0.5s ease;
`;

export const MessageWrapper = styled.div`
  margin-bottom: 1rem;
  animation: ${fadeIn} 0.5s ease 0.1s both;
`;

export const ConfirmationIdWrapper = styled.div`
  margin-bottom: 2rem;
  animation: ${fadeIn} 0.5s ease 0.2s both;
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: ${fadeIn} 0.5s ease 0.3s both;
`;
