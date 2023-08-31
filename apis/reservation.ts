import { getMockWeeklyReservation, postMockReservation } from '@/data/reservation';

import { ReservationPostBody } from '@/types/reservation';

export const getWeeklyReservation = getMockWeeklyReservation;

export const postReservation = async (body: ReservationPostBody) => postMockReservation;

export const deleteSingleReservation = async (id: number) => {};

export const deleteAllRecurringReservation = async (id: number) => {};
