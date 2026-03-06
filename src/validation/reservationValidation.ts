import * as Yup from 'yup';

export const reservationValidationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9+\-\s()]+$/, 'Invalid phone number')
    .required('Phone is required'),
  date: Yup.string().required('Date is required'),
  time: Yup.string().required('Time is required'),
  guests: Yup.number()
    .min(1, 'At least 1 guest')
    .max(10, 'Maximum 10 guests')
    .required('Guest count is required'),
  specialRequests: Yup.string().max(500, 'Maximum 500 characters'),
});
