import { StyledButton, StyledLink, Spinner, TextWrapper } from './styled';
import type { ButtonVariant, ButtonSize } from './styled';

export type { ButtonVariant, ButtonSize };

export type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  buttonSize?: ButtonSize;
  to?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  type?: 'submit' | 'button';
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

export const Button = ({
  children,
  variant = 'primary',
  buttonSize = 'md',
  to,
  onClick,
  disabled = false,
  loading = false,
  fullWidth = false,
  type = 'button',
  ...rest
}: ButtonProps) => {
  const commonProps = {
    $variant: variant,
    $buttonSize: buttonSize,
    $fullWidth: fullWidth,
  };

  if (to) {
    return (
      <StyledLink to={to} {...commonProps}>
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledButton
      {...commonProps}
      $loading={loading}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      {...rest}
    >
      {loading && <Spinner />}
      {loading ? (
        <TextWrapper $loading={loading}>{children}</TextWrapper>
      ) : (
        children
      )}
    </StyledButton>
  );
};
