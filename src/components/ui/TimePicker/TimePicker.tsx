import { useEffect, useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaClock } from 'react-icons/fa';
import {
  InputWrapper,
  StyledInput,
  IconWrapper,
  TimePickerWrapper,
  Label,
  ErrorText,
} from './styled';

const CustomInput = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { $hasError?: boolean; $disabled?: boolean }
>(({ value, onClick, $hasError, $disabled, ...props }, ref) => (
  <InputWrapper onClick={onClick}>
    <StyledInput
      ref={ref}
      $hasError={$hasError}
      $disabled={$disabled}
      value={value ?? ''}
      readOnly
      {...props}
    />
    <IconWrapper>
      <FaClock size={20} />
    </IconWrapper>
  </InputWrapper>
));

CustomInput.displayName = 'CustomInput';

export type TimePickerProps = {
  selectedTime?: Date | null;
  onChange?: (date: Date | null) => void;
  placeholder?: string;
  timeFormat?: string;
  minTime?: Date;
  maxTime?: Date;
  disabled?: boolean;
  error?: string;
  label?: string;
  id?: string;
};

export const TimePicker = ({
  selectedTime = null,
  onChange,
  placeholder = 'Select time',
  timeFormat = 'HH:mm',
  minTime,
  maxTime,
  disabled = false,
  error,
  label,
  id,
}: TimePickerProps) => {
  const [time, setTime] = useState<Date | null>(selectedTime);

  useEffect(() => {
    setTime(selectedTime);
  }, [selectedTime]);

  const handleTimeChange = (newTime: Date | null) => {
    if (!disabled) {
      setTime(newTime);
      onChange?.(newTime);
    }
  };

  const inputId = id ?? label?.toLowerCase().replace(/\s/g, '-');

  return (
    <TimePickerWrapper>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <DatePicker
        selected={time}
        onChange={handleTimeChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat={timeFormat}
        disabled={disabled}
        minTime={minTime}
        maxTime={maxTime}
        id={inputId}
        customInput={
          <CustomInput
            $hasError={Boolean(error)}
            $disabled={disabled}
            placeholder={placeholder}
          />
        }
      />
      {error && <ErrorText>{error}</ErrorText>}
    </TimePickerWrapper>
  );
};
