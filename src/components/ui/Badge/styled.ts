import styled, { css } from 'styled-components';

export type BadgeVariant = 'default' | 'success' | 'warning';

const variantStyles = {
  default: css`
    background: var(--color-lavender-100);
    color: var(--color-text-primary);
  `,
  success: css`
    background: var(--color-mint-100);
    color: var(--color-text-primary);
  `,
  warning: css`
    background: var(--color-blush-100);
    color: var(--color-text-primary);
  `,
};

export const StyledBadge = styled.span<{ $variant: BadgeVariant }>`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  padding: 0.25rem 0.5rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  ${({ $variant }) => variantStyles[$variant]}
`;
