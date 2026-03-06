import styled from 'styled-components';

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({ theme }) => theme.radii.full};
  border: 2px solid var(--color-blush-100);
  background: transparent;
  color: var(--color-text-primary);
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  font-size: 1.25rem;

  &:hover {
    background: var(--color-blush-100);
    transform: rotate(15deg);
  }

  [data-theme="dark"] & {
    border-color: var(--color-lavender-300);
    color: var(--color-text-primary);

    &:hover {
      background: var(--color-lavender-300);
    }
  }
`;
