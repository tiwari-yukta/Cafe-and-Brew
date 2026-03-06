import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageWrapper = styled.div<{ $center?: boolean }>`
  min-height: 60vh;
  padding: 2rem 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  ${({ $center }) =>
    $center &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const AccountCard = styled.div`
  width: 100%;
  background: var(--color-surface);
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  padding: 2.5rem;
  border: 2px solid var(--color-cream-200);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const ReservationsSection = styled.section`
  margin-top: 1rem;
`;

export const SectionTitleWrapper = styled.div`
  margin: 0 0 1rem 0;
`;

export const ReservationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ReservationCard = styled.div`
  background: var(--color-surface);
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 1.25rem 1.5rem;
  border: 2px solid var(--color-cream-200);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const ReservationDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: var(--color-text-primary);
`;

export const ReservationMeta = styled.span`
  color: var(--color-text-secondary);
`;

export const ReservationActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const EmptyReservationsWrapper = styled.div`
  margin: 0;
`;

export const ModalContent = styled.div`
  padding: 1.5rem;
  max-width: 420px;
`;

export const TitleWrapper = styled.div`
  margin: 0;
`;

export const ModalTitleWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const ModalTextWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
`;

export const ReservationLink = styled(Link)`
  color: var(--color-lavender-300);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const AvatarPlaceholder = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  border-radius: ${({ theme }) => theme.radii.full};
  background: var(--color-lavender-100);
  color: var(--color-text-primary);
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const Name = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: var(--color-text-primary);
`;

export const Email = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: var(--color-text-secondary);
`;
