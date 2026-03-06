import styled from 'styled-components';

export const AuthModalContent = styled.div`
  padding: 1rem;
  max-width: 420px;
`;

export const AuthCard = styled.div`
  background: var(--color-surface);
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  padding: 2rem;
  border: 2px solid var(--color-cream-200);
`;

export const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const SubtitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const ErrorWrapper = styled.div`
  margin: 0 0 1rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0;
  color: var(--color-text-muted);
  font-size: ${({ theme }) => theme.fontSizes.sm};

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--color-cream-200);
  }
`;

export const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem 1.5rem;
  border: 2px solid var(--color-cream-200);
  background: var(--color-surface);
  border-radius: ${({ theme }) => theme.radii.full};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: var(--color-text-primary);
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: var(--color-cream-100);
    border-color: var(--color-blush-100);
  }

  svg {
    font-size: 1.25rem;
  }
`;

export const FooterLink = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: var(--color-text-secondary);

  .auth-toggle {
    background: none;
    border: none;
    color: var(--color-lavender-300);
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    cursor: pointer;
    padding: 0;
    font-family: inherit;
    font-size: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`;
