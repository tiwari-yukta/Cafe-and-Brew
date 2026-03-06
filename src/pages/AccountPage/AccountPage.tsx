import { Navigate } from 'react-router-dom';
import { FaSignOutAlt, FaEdit, FaTrash } from 'react-icons/fa';
import { Button, Modal, LoadingSpinner, Typography } from '@/components/ui';
import { ReservationForm } from '@/components/features/reservation';
import { useAccountPage } from '@/hooks';
import type { Reservation } from '@/types';
import { ROUTES } from '@/constants/routes';
import { formatDateDisplay, formatTimeDisplay } from '@/utils/dateUtils';
import {
  PageWrapper,
  AccountCard,
  TitleWrapper,
  UserInfo,
  AvatarPlaceholder,
  Email,
  Name,
  ReservationsSection,
  SectionTitleWrapper,
  ReservationList,
  ReservationCard,
  ReservationDetails,
  ReservationMeta,
  ReservationActions,
  EmptyReservationsWrapper,
  ModalContent,
  ModalTitleWrapper,
  ModalTextWrapper,
  ModalActions,
  ReservationLink,
} from './styled';

export const AccountPage = () => {
  const {
    user,
    isLoading,
    reservations,
    displayName,
    initials,
    editingReservation,
    deletingId,
    setEditingId,
    setDeletingId,
    handleLogout,
    handleEditSave,
    handleDeleteConfirm,
  } = useAccountPage();

  if (isLoading) {
    return (
      <PageWrapper $center>
        <LoadingSpinner />
      </PageWrapper>
    );
  }

  if (!user) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return (
    <PageWrapper>
      <AccountCard>
        <TitleWrapper>
          <Typography name="display">My Account</Typography>
        </TitleWrapper>
        <UserInfo>
          <AvatarPlaceholder>{initials}</AvatarPlaceholder>
          <Name>{displayName}</Name>
          {user.email && <Email>{user.email}</Email>}
        </UserInfo>
        <Button variant="ghost" onClick={handleLogout}>
          <FaSignOutAlt />
          Sign Out
        </Button>
      </AccountCard>

      <ReservationsSection>
        <SectionTitleWrapper>
          <Typography name="heading2">My Reservations</Typography>
        </SectionTitleWrapper>
        {reservations.length === 0 ? (
          <EmptyReservationsWrapper>
            <Typography name="muted">
              You haven&apos;t made any reservations yet.{' '}
              <ReservationLink to={ROUTES.RESERVATION}>Book a table</ReservationLink>
            </Typography>
          </EmptyReservationsWrapper>
        ) : (
          <ReservationList>
            {reservations.map((r: Reservation) => (
              <ReservationCard key={r.id}>
                <ReservationDetails>
                  <strong>{formatDateDisplay(r.date)}</strong> at {formatTimeDisplay(r.time)}
                  <ReservationMeta>
                    {r.guests} {r.guests === 1 ? 'guest' : 'guests'} · {r.name}
                    {r.specialRequests && ` · "${r.specialRequests}"`}
                  </ReservationMeta>
                </ReservationDetails>
                <ReservationActions>
                  <Button
                    variant="ghost"
                    buttonSize="sm"
                    onClick={() => setEditingId(r.id)}
                  >
                    <FaEdit />
                    Edit
                  </Button>
                  <Button
                    variant="ghost"
                    buttonSize="sm"
                    onClick={() => setDeletingId(r.id)}
                  >
                    <FaTrash />
                    Delete
                  </Button>
                </ReservationActions>
              </ReservationCard>
            ))}
          </ReservationList>
        )}
      </ReservationsSection>

      <Modal
        isOpen={Boolean(editingReservation)}
        onClose={() => setEditingId(null)}
      >
        <ModalContent>
          <ModalTitleWrapper>
            <Typography name="heading2">Edit Reservation</Typography>
          </ModalTitleWrapper>
          {editingReservation && (
            <ReservationForm
              initialValues={{
                name: editingReservation.name,
                email: editingReservation.email,
                phone: editingReservation.phone,
                date: editingReservation.date,
                time: editingReservation.time,
                guests: editingReservation.guests,
                specialRequests: editingReservation.specialRequests,
              }}
              submitLabel="Save Changes"
              onSubmit={(values) => {
                handleEditSave(values);
              }}
            />
          )}
        </ModalContent>
      </Modal>

      <Modal
        isOpen={Boolean(deletingId)}
        onClose={() => setDeletingId(null)}
      >
        <ModalContent>
          <ModalTitleWrapper>
            <Typography name="heading2">Cancel Reservation?</Typography>
          </ModalTitleWrapper>
          <ModalTextWrapper>
            <Typography name="secondary">
              This reservation will be removed. You can always make a new one.
            </Typography>
          </ModalTextWrapper>
          <ModalActions>
            <Button variant="ghost" onClick={() => setDeletingId(null)}>
              Keep
            </Button>
            <Button
              variant="primary"
              onClick={() => deletingId && handleDeleteConfirm(deletingId)}
            >
              Cancel Reservation
            </Button>
          </ModalActions>
        </ModalContent>
      </Modal>
    </PageWrapper>
  );
};
