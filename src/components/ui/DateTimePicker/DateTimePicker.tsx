import { useEffect, useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import {
  InputWrapper,
  StyledInput,
  IconWrapper,
  DatePickerWrapper,
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
      <FaCalendarAlt size={20} />
    </IconWrapper>
  </InputWrapper>
));

CustomInput.displayName = 'CustomInput';

export type DateTimePickerProps = {
  showTime?: boolean;
  selectedDate?: Date | null;
  onChange?: (date: Date | null) => void;
  placeholder?: string;
  dateFormat?: string;
  timeFormat?: string;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  error?: string;
  label?: string;
  id?: string;
};

export const DateTimePicker = ({
  showTime = false,
  selectedDate = null,
  onChange,
  placeholder = 'Select date',
  dateFormat = 'yyyy-MM-dd',
  timeFormat = 'HH:mm',
  minDate,
  maxDate,
  disabled = false,
  error,
  label,
  id,
}: DateTimePickerProps) => {
  const [date, setDate] = useState<Date | null>(selectedDate);

  useEffect(() => {
    setDate(selectedDate);
  }, [selectedDate]);

  const formatString = showTime ? `${dateFormat} ${timeFormat}` : dateFormat;

  const handleDateChange = (newDate: Date | null) => {
    if (!disabled) {
      setDate(newDate);
      onChange?.(newDate);
    }
  };

  const inputId = id ?? label?.toLowerCase().replace(/\s/g, '-');

  return (
    <DatePickerWrapper>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <DatePicker
        selected={date}
        onChange={handleDateChange}
        showTimeSelect={showTime}
        dateFormat={formatString}
        disabled={disabled}
        minDate={minDate}
        maxDate={maxDate}
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
    </DatePickerWrapper>
  );
};
