import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReservationForm } from '@/components/features/reservation';
import { useReservationMutation, useAuth } from '@/hooks';
import { useReservationStore } from '@/store';
import type { ReservationFormValues } from '@/types';
import type { ReservationResponse } from '@/services/api';
import { ROUTES } from '@/constants/routes';
import { Typography } from '@/components/ui';
import { PageWrapper, TitleWrapper, SubtitleWrapper, FormCard } from './styled';

export const ReservationPage = memo(function ReservationPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const addReservation = useReservationStore((s) => s.addReservation);
  const mutation = useReservationMutation({
    onSuccess: (data: ReservationResponse, values: ReservationFormValues) => {
      if (user?.uid) {
        addReservation(user.uid, values);
      }
      navigate(ROUTES.SUCCESS, {
        state: {
          type: 'reservation',
          confirmationId: data.confirmationId,
          message: data.message,
        },
      });
    },
  });

  const handleSubmit = (values: ReservationFormValues) => {
    mutation.mutate(values);
  };

  return (
    <PageWrapper>
      <TitleWrapper>
        <Typography name="display">Reserve a Table</Typography>
      </TitleWrapper>
      <SubtitleWrapper>
        <Typography name="subtitle">
          Book your cozy spot at Café and Brew. We can&apos;t wait to welcome you!
        </Typography>
      </SubtitleWrapper>
      <FormCard>
        <ReservationForm
          onSubmit={handleSubmit}
          isLoading={mutation.isPending}
        />
      </FormCard>
    </PageWrapper>
  );
});
