import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Reservation, ReservationFormValues } from '@/types';

type ReservationStore = {
  reservations: Reservation[];
  addReservation: (userId: string, data: ReservationFormValues) => Reservation;
  updateReservation: (id: string, data: Partial<ReservationFormValues>) => void;
  removeReservation: (id: string) => void;
  getByUserId: (userId: string) => Reservation[];
};

const generateId = () => `RES-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

export const useReservationStore = create<ReservationStore>()(
  persist(
    (set, get) => ({
      reservations: [],

      addReservation: (userId, data) => {
        const id = generateId();
        const reservation: Reservation = {
          id,
          userId,
          ...data,
          createdAt: Date.now(),
        };
        set((state) => ({
          reservations: [...state.reservations, reservation],
        }));
        return reservation;
      },

      updateReservation: (id, data) => {
        set((state) => ({
          reservations: state.reservations.map((r) =>
            r.id === id ? { ...r, ...data } : r
          ),
        }));
      },

      removeReservation: (id) => {
        set((state) => ({
          reservations: state.reservations.filter((r) => r.id !== id),
        }));
      },

      getByUserId: (userId) => {
        return get().reservations.filter((r) => r.userId === userId);
      },
    }),
    { name: 'cafe-and-brew-reservations' }
  )
);
