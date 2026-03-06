import { useMutation } from '@tanstack/react-query';
import { submitReservation } from '@/services/api';
import type { ReservationFormValues } from '@/types';
import type { ReservationResponse } from '@/services/api';

type UseReservationMutationOptions = {
  onSuccess?: (
    data: ReservationResponse,
    values: ReservationFormValues
  ) => void;
};

export const useReservationMutation = (options?: UseReservationMutationOptions) => {
  return useMutation<ReservationResponse, Error, ReservationFormValues>({
    mutationFn: submitReservation,
    onSuccess: options?.onSuccess,
  });
};
