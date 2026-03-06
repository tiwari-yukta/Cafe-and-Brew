import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: var(--color-text-primary);
`;

export const StyledInput = styled.input<{ $hasError?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  padding: 0.75rem 1rem;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 2px solid
    ${({ $hasError }) =>
      $hasError ? 'var(--color-rose-200)' : 'var(--color-blush-100)'};
  background: var(--color-cream-100);
  color: var(--color-text-primary);
  transition: all ${({ theme }) => theme.transitions.fast};

  &::placeholder {
    color: var(--color-text-muted);
  }

  &:focus {
    outline: none;
    border-color: var(--color-lavender-100);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Error = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: var(--color-error);
`;
