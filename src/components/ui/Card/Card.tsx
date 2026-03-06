import { StyledCard } from './styled';
import type { CardPadding } from './styled';

export type CardProps = {
  children: React.ReactNode;
  padding?: CardPadding;
  elevated?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Card = ({
  children,
  padding = 'md',
  elevated = false,
  ...props
}: CardProps) => {
  return (
    <StyledCard $padding={padding} $elevated={elevated} {...props}>
      {children}
    </StyledCard>
  );
};
