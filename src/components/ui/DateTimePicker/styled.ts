import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
`;

export const StyledInput = styled.input<{ $hasError?: boolean; $disabled?: boolean }>`
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 1rem;
  border: 2px solid
    ${({ $hasError }) =>
      $hasError ? 'var(--color-rose-200)' : 'var(--color-cream-200)'};
  border-radius: ${({ theme }) => theme.radii.md};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  background: var(--color-cream-100);
  color: var(--color-text-primary);
  outline: none;
  transition: all ${({ theme }) => theme.transitions.fast};

  &::placeholder {
    color: var(--color-text-muted);
  }

  &:focus {
    border-color: var(--color-lavender-100);
    box-shadow: 0 0 0 2px rgba(196, 176, 224, 0.2);
  }

  &:disabled {
    background: var(--color-cream-200);
    color: var(--color-text-muted);
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-muted);
  pointer-events: none;
  line-height: 1;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-primary);
  font-family: ${({ theme }) => theme.fonts.body};
`;

export const ErrorText = styled.span`
  font-size: 0.75rem;
  color: var(--color-error);
  margin-top: 0.25rem;
  display: block;
  font-family: ${({ theme }) => theme.fonts.body};
`;

export const DatePickerWrapper = styled.div`
  .react-datepicker {
    font-family: ${({ theme }) => theme.fonts.body};
    border-radius: ${({ theme }) => theme.radii.lg};
    border: 2px solid var(--color-cream-200);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    background: var(--color-surface);
  }

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__header {
    background: var(--color-cream-100);
    border-bottom: 2px solid var(--color-cream-200);
    border-top-left-radius: ${({ theme }) => theme.radii.lg};
    border-top-right-radius: ${({ theme }) => theme.radii.lg};
    padding-top: 12px;
  }

  .react-datepicker__current-month {
    color: var(--color-text-primary);
  }

  .react-datepicker__day-name {
    color: var(--color-text-secondary);
    width: 36px;
    margin: 5px;
  }

  .react-datepicker__month-container {
    padding: 8px;
  }

  .react-datepicker__day {
    margin: 5px;
    border-radius: ${({ theme }) => theme.radii.sm};
    width: 36px;
    height: 36px;
    line-height: 36px;
    color: var(--color-text-primary);

    &:hover {
      background: var(--color-lavender-100);
    }
  }

  .react-datepicker__day--selected {
    background: var(--color-lavender-200) !important;
    color: var(--color-text-primary);
    font-weight: 600;

    &:hover {
      background: var(--color-lavender-300) !important;
    }
  }

  .react-datepicker__day--today {
    font-weight: 600;
  }

  .react-datepicker__time-container {
    border-left: 2px solid var(--color-cream-200);
    background: var(--color-surface);
  }

  .react-datepicker__time-box,
  .react-datepicker__time-list {
    background: var(--color-surface) !important;
    color: var(--color-text-primary);
  }

  .react-datepicker__time-list-item {
    color: var(--color-text-primary) !important;

    &:hover {
      background: var(--color-lavender-100) !important;
    }
  }

  .react-datepicker__time-list-item--selected {
    background: var(--color-lavender-200) !important;
    color: var(--color-text-primary) !important;
  }
`;
