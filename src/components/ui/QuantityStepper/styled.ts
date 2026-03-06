import styled from 'styled-components';

export const StepperWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const StepperButton = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 2px solid var(--color-blush-100);
  background: var(--color-surface);
  color: var(--color-text-primary);
  cursor: pointer;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover:not(:disabled) {
    background: var(--color-blush-100);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const StepperQuantity = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  min-width: 2rem;
  text-align: center;
  color: var(--color-text-primary);
`;
