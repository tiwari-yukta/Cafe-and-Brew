import {
  StepperWrapper,
  StepperButton,
  StepperQuantity,
} from './styled';

export type QuantityStepperProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  disabled?: boolean;
};

export const QuantityStepper = ({
  quantity,
  onIncrease,
  onDecrease,
  disabled = false,
}: QuantityStepperProps) => (
  <StepperWrapper>
    <StepperButton
      type="button"
      onClick={onDecrease}
      disabled={disabled}
      aria-label="Decrease quantity"
    >
      −
    </StepperButton>
    <StepperQuantity>{quantity}</StepperQuantity>
    <StepperButton
      type="button"
      onClick={onIncrease}
      disabled={disabled}
      aria-label="Increase quantity"
    >
      +
    </StepperButton>
  </StepperWrapper>
);
