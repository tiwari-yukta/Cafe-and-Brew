import type { ReactNode } from 'react';
import { StyledTypography } from './styled';

export type TypographyProps = {
  name?:
    | 'text'
    | 'textSm'
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'heading5'
    | 'heading6'
    | 'secondary'
    | 'secondarySm'
    | 'subtitle'
    | 'muted'
    | 'error'
    | 'display';

  weight?: 300 | 400 | 500 | 600 | 700;
  children: ReactNode;
  as?: React.ElementType;
  className?: string;
};

const tagMapping: Record<string, React.ElementType> = {
  text: 'p',
  textSm: 'p',
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3',
  heading4: 'h4',
  heading5: 'h5',
  heading6: 'h6',
  secondary: 'p',
  secondarySm: 'p',
  subtitle: 'p',
  muted: 'p',
  error: 'p',
  display: 'h1',
};

export const Typography = ({
  name = 'text',
  weight,
  children,
  as,
  className,
}: TypographyProps) => {
  const tag = as ?? tagMapping[name] ?? 'p';
  return (
    <StyledTypography as={tag} $name={name} $weight={weight} className={className}>
      {children}
    </StyledTypography>
  );
};
