import { forwardRef } from 'react';
import { Wrapper, Label, StyledInput, Error } from './styled';

export type InputProps = {
  label?: string;
  error?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, id, ...props },
  ref
) {
  const inputId = id ?? label?.toLowerCase().replace(/\s/g, '-');

  return (
    <Wrapper>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <StyledInput
        ref={ref}
        id={inputId}
        $hasError={Boolean(error)}
        {...props}
      />
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
});
