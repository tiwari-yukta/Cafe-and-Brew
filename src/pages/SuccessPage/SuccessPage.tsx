import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { FaCoffee } from 'react-icons/fa';
import { MdTableRestaurant } from 'react-icons/md';
import { HiOutlineSparkles } from 'react-icons/hi2';
import { Button, Typography } from '@/components/ui';
import { PageWrapper, Icon, TitleWrapper, MessageWrapper, ConfirmationIdWrapper, Actions } from './styled';

type SuccessLocationState = {
  type?: 'order' | 'reservation';
  orderId?: string;
  confirmationId?: string;
  message?: string;
};

export const SuccessPage = memo(function SuccessPage() {
  const location = useLocation();
  const state = location.state as SuccessLocationState | null;

  const isReservation = state?.type === 'reservation';
  const confirmationId = state?.confirmationId ?? state?.orderId;
  const message =
    state?.message ??
    (isReservation
      ? "We'll see you soon!"
      : 'Thank you for your order. Pick it up at the counter!');

  return (
    <PageWrapper>
      <Icon>{isReservation ? <MdTableRestaurant /> : <HiOutlineSparkles />}</Icon>
      <TitleWrapper>
        <Typography name="display">
          {isReservation ? 'Reservation Confirmed!' : 'Order Placed!'}
        </Typography>
      </TitleWrapper>
      <MessageWrapper>
        <Typography name="text">{message}</Typography>
      </MessageWrapper>
      {confirmationId && (
        <ConfirmationIdWrapper>
          <Typography name="muted">Confirmation: {confirmationId}</Typography>
        </ConfirmationIdWrapper>
      )}
      <Actions>
        <Button to={ROUTES.HOME}>Back to Home</Button>
        <Button to={ROUTES.PRODUCTS} variant="secondary">
          <FaCoffee />
          Browse Menu
        </Button>
      </Actions>
    </PageWrapper>
  );
});
