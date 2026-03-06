import { StyledBadge } from './styled';
import type { BadgeVariant } from './styled';

export type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
};

export const Badge = ({
  variant = 'default',
  children,
}: BadgeProps) => {
  return <StyledBadge $variant={variant}>{children}</StyledBadge>;
};
