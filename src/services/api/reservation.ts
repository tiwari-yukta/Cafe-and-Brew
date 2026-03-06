import type { ReservationFormValues } from '@/types';

export type ReservationResponse = {
  success: boolean;
  confirmationId: string;
  message: string;
};

export async function submitReservation(
  data: ReservationFormValues
): Promise<ReservationResponse> {
  await new Promise((resolve) =>
    setTimeout(resolve, 800 + Math.random() * 500)
  );

  const confirmationId = `RES-${Date.now().toString(36).toUpperCase()}`;

  return {
    success: true,
    confirmationId,
    message: `Reservation confirmed for ${data.guests} guests on ${data.date} at ${data.time}`,
  };
}
