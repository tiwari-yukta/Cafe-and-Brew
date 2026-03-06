import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './useAuth';
import { useReservationStore } from '@/store';
import type { ReservationFormValues } from '@/types';
import { ROUTES } from '@/constants/routes';

export function useAccountPage() {
  const { user, isLoading, logout } = useAuth();
  const navigate = useNavigate();
  const reservations = useReservationStore((s) =>
    user ? s.getByUserId(user.uid) : []
  );
  const updateReservation = useReservationStore((s) => s.updateReservation);
  const removeReservation = useReservationStore((s) => s.removeReservation);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const displayName = user?.displayName || user?.email?.split('@')[0] || 'User';
  const initials = displayName
    .split(/\s+/)
    .map((w) => w.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const handleLogout = useCallback(async () => {
    await logout();
    navigate(ROUTES.HOME);
  }, [logout, navigate]);

  const handleEditSave = useCallback(
    (values: ReservationFormValues) => {
      if (editingId) {
        updateReservation(editingId, values);
        setEditingId(null);
      }
    },
    [editingId, updateReservation]
  );

  const handleDeleteConfirm = useCallback(
    (id: string) => {
      removeReservation(id);
      setDeletingId(null);
    },
    [removeReservation]
  );

  const editingReservation = editingId
    ? reservations.find((r) => r.id === editingId)
    : null;

  return {
    user,
    isLoading,
    reservations,
    displayName,
    initials,
    editingId,
    deletingId,
    editingReservation,
    setEditingId,
    setDeletingId,
    handleLogout,
    handleEditSave,
    handleDeleteConfirm,
  };
}
