import { Formik } from 'formik';
import { StyledForm, Row } from './styled';
import { Button, Input, DateTimePicker, TimePicker } from '@/components/ui';
import type { ReservationFormValues } from '@/types';
import { reservationValidationSchema } from '@/validation';
import { RESERVATION_INITIAL_VALUES } from '@/constants/reservation';
import {
  parseDateString,
  formatDateForForm,
  parseTimeString,
  formatTimeForForm,
} from '@/utils/dateUtils';

export type ReservationFormProps = {
  onSubmit: (values: ReservationFormValues) => void;
  isLoading?: boolean;
  initialValues?: Partial<ReservationFormValues>;
  submitLabel?: string;
};

export const ReservationForm = ({
  onSubmit,
  isLoading = false,
  initialValues: initialValuesProp,
  submitLabel = 'Confirm Reservation',
}: ReservationFormProps) => {
  return (
    <Formik
      initialValues={{
        ...RESERVATION_INITIAL_VALUES,
        ...initialValuesProp,
      } as ReservationFormValues}
      validationSchema={reservationValidationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isValid, getFieldProps, setFieldValue, setFieldTouched, values }) => (
        <StyledForm>
          <Input
            label="Name"
            placeholder="Your name"
            {...getFieldProps('name')}
            error={touched.name ? errors.name : undefined}
          />
          <Input
            label="Email"
            type="email"
            placeholder="your@email.com"
            {...getFieldProps('email')}
            error={touched.email ? errors.email : undefined}
          />
          <Input
            label="Phone"
            type="tel"
            placeholder="+91 1234567890"
            {...getFieldProps('phone')}
            error={touched.phone ? errors.phone : undefined}
          />
          <Row>
            <DateTimePicker
              label="Date"
              placeholder="Select date"
              selectedDate={parseDateString(values.date)}
              onChange={(d) => {
                setFieldValue('date', formatDateForForm(d));
                setFieldTouched('date', true);
              }}
              dateFormat="yyyy-MM-dd"
              minDate={new Date()}
              error={touched.date ? errors.date : undefined}
            />
            <TimePicker
              label="Time"
              placeholder="Select time"
              selectedTime={parseTimeString(values.time)}
              onChange={(d) => {
                setFieldValue('time', formatTimeForForm(d));
                setFieldTouched('time', true);
              }}
              timeFormat="HH:mm"
              error={touched.time ? errors.time : undefined}
            />
          </Row>
          <Input
            label="Number of Guests"
            type="number"
            min={1}
            max={10}
            {...getFieldProps('guests')}
            error={touched.guests ? errors.guests : undefined}
          />
          <Input
            label="Special Requests (optional)"
            placeholder="Allergies, celebrations, etc."
            {...getFieldProps('specialRequests')}
            error={touched.specialRequests ? errors.specialRequests : undefined}
          />
          <Button
            type="submit"
            fullWidth
            loading={isLoading}
            disabled={!isValid || isLoading}
          >
            {submitLabel}
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};
