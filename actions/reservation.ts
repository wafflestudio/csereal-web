'use server';

import { revalidateTag } from 'next/cache';

import { ReservationPostBody } from '@/apis/types/reservation';
import { getReservation } from '@/apis/v1/reservation/[id]';
import { FETCH_TAG_RESERVATION } from '@/constants/network';

import { deleteRequest } from '../apis';
import { withErrorHandler } from './errorHandler';

const reservationPath = '/reservation';

export const postReservation = withErrorHandler(async (body: ReservationPostBody) => {
  await postReservation(body);
  revalidateTag(FETCH_TAG_RESERVATION);
});

export const getReservationAction = getReservation;

export const deleteSingleReservation = withErrorHandler(async (id: number) => {
  await deleteRequest(`${reservationPath}/${id}`, { jsessionID: true });
  revalidateTag(FETCH_TAG_RESERVATION);
});

export const deleteAllRecurringReservation = withErrorHandler(async (id: string) => {
  await deleteRequest(`${reservationPath}/recurring/${id}`, { jsessionID: true });
  revalidateTag(FETCH_TAG_RESERVATION);
});
