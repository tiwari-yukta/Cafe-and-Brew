import styled, { css } from 'styled-components';
import type { TypographyProps } from './Typography';

const variantStyles: Record<NonNullable<TypographyProps['name']>, ReturnType<typeof css>> = {
  text: css`
    font-size: 0.875rem;
    color: var(--color-text-primary);
    font-family: ${({ theme }) => theme.fonts.body};
  `,
  textSm: css`
    font-size: 0.75rem;
    color: var(--color-text-primary);
    font-family: ${({ theme }) => theme.fonts.body};
  `,
  secondary: css`
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    font-family: ${({ theme }) => theme.fonts.body};
  `,
  secondarySm: css`
    font-size: 0.75rem;
    color: var(--color-text-secondary);
    font-family: ${({ theme }) => theme.fonts.body};
  `,
  subtitle: css`
    font-size: 1rem;
    color: var(--color-text-secondary);
    font-family: ${({ theme }) => theme.fonts.body};
  `,
  muted: css`
    font-size: 1rem;
    color: var(--color-text-muted);
    font-family: ${({ theme }) => theme.fonts.body};
  `,
  heading1: css`
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-text-primary);
    font-family: ${({ theme }) => theme.fonts.heading};
  `,
  heading2: css`
    font-size: 2rem;
    font-weight: 600;
    color: var(--color-text-primary);
    font-family: ${({ theme }) => theme.fonts.heading};
  `,
  heading3: css`
    font-size: 1.75rem;
    font-weight: 500;
    color: var(--color-text-primary);
    font-family: ${({ theme }) => theme.fonts.heading};
  `,
  heading4: css`
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--color-text-primary);
    font-family: ${({ theme }) => theme.fonts.heading};
  `,
  heading5: css`
    font-size: 1.25rem;
    font-weight: 400;
    color: var(--color-text-primary);
    font-family: ${({ theme }) => theme.fonts.heading};
  `,
  heading6: css`
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-text-primary);
    font-family: ${({ theme }) => theme.fonts.body};
  `,
  error: css`
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--color-rose-300);
    font-family: ${({ theme }) => theme.fonts.body};
  `,
  display: css`
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--color-text-primary);
    font-family: ${({ theme }) => theme.fonts.heading};
  `,
};

export const StyledTypography = styled.div<{
  $name: TypographyProps['name'];
  $weight?: TypographyProps['weight'];
}>`
  ${({ $name = 'text' }) => variantStyles[$name ?? 'text']}
  ${({ $weight }) =>
    $weight != null &&
    css`
      font-weight: ${$weight};
    `}
  margin: 0;
`;
