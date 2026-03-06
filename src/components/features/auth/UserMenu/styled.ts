import styled from 'styled-components';

export const UserButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radii.full};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: var(--color-cream-100);
  }
`;

export const UserAvatarPlaceholder = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({ theme }) => theme.radii.full};
  background: var(--color-lavender-100);
  color: var(--color-text-primary);
  font-size: 0.75rem;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  min-width: 220px;
  background: var(--color-surface);
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: 0.5rem;
  z-index: 200;
  border: 2px solid var(--color-cream-200);
`;

export const DropdownItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.75rem 1rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: var(--color-text-primary);
  border-radius: ${({ theme }) => theme.radii.md};

  strong {
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }
`;

export const DropdownEmail = styled.span`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
`;

export const DropdownMenuWrapper = styled.div`
  position: relative;
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  background: transparent;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: var(--color-text-secondary);
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radii.md};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: var(--color-rose-100);
    color: var(--color-text-primary);
  }
`;
