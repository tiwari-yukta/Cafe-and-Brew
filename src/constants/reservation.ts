import type { ReservationFormValues } from '@/types';

export const RESERVATION_INITIAL_VALUES: ReservationFormValues = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: 1,
  specialRequests: '',
};
