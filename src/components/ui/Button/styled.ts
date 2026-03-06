import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import type { Theme } from '@/theme';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  position: absolute;
  inline-size: 1.25rem;
  block-size: 1.25rem;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export const TextWrapper = styled.span<{ $loading: boolean }>`
  visibility: ${({ $loading }) => ($loading ? 'hidden' : 'visible')};
  position: relative;
`;

const variantStyles = (theme: Theme) => ({
  primary: css`
    background: linear-gradient(135deg, ${theme.colors.rose} 0%, ${theme.colors.blush} 100%);
    color: ${theme.colors.text.primary};
    box-shadow: ${theme.shadows.soft};

    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.glow};
    }
  `,
  secondary: css`
    background: linear-gradient(135deg, ${theme.colors.lavender} 0%, ${theme.colors.lavenderDark} 100%);
    color: ${theme.colors.text.primary};
    box-shadow: ${theme.shadows.soft};

    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.medium};
    }
  `,
  outline: css`
    background: transparent;
    color: ${theme.colors.text.primary};
    border: 2px solid ${theme.colors.blush};

    &:hover:not(:disabled) {
      background: ${theme.colors.blush};
      transform: scale(1.02);
    }
  `,
  ghost: css`
    background: transparent;
    color: ${theme.colors.text.primary};

    &:hover:not(:disabled) {
      background: ${theme.colors.cream};
    }
  `,
});

const sizeStyles = (theme: Theme) => ({
  sm: css`
    padding: 0.5rem 1rem;
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeights.medium};
  `,
  md: css`
    padding: 0.75rem 1.5rem;
    font-size: ${theme.fontSizes.md};
    font-weight: ${theme.fontWeights.medium};
  `,
  lg: css`
    padding: 0.875rem 1.75rem;
    font-size: ${theme.fontSizes.lg};
    font-weight: ${theme.fontWeights.medium};
  `,
  xl: css`
    padding: 1rem 2rem;
    font-size: ${theme.fontSizes.xl};
    font-weight: ${theme.fontWeights.semibold};
  `,
});

const baseStyles = css`
  font-family: ${({ theme }) => theme.fonts.body};
  border-radius: ${({ theme }) => theme.radii.full};
  cursor: pointer;
  border: none;
  transition: all ${({ theme }) => theme.transitions.normal};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  position: relative;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }
`;

export type StyledButtonProps = {
  $variant: ButtonVariant;
  $buttonSize: ButtonSize;
  $fullWidth?: boolean;
  $loading?: boolean;
};

export const StyledButton = styled.button<StyledButtonProps>`
  ${baseStyles}
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  ${({ $variant, theme }) => variantStyles(theme)[$variant]}
  ${({ $buttonSize, theme }) => sizeStyles(theme)[$buttonSize]}

  ${({ $loading }) =>
    $loading &&
    css`
      cursor: not-allowed;
    `}
`;

export const StyledLink = styled(Link)<Omit<StyledButtonProps, '$loading'>>`
  ${baseStyles}
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  ${({ $variant, theme }) => variantStyles(theme)[$variant]}
  ${({ $buttonSize, theme }) => sizeStyles(theme)[$buttonSize]}
`;
