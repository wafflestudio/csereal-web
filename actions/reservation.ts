'use server';

import { revalidateTag } from 'next/cache';

import { Reservation, ReservationPostBody, ReservationPreview } from '@/apis/types/reservation';
import { FETCH_TAG_RESERVATION } from '@/constants/network';

import { deleteRequest, getRequest, postRequest } from '../apis';
import { withErrorHandler } from './errorHandler';

const reservationPath = '/reservation';

export const postReservation = withErrorHandler(async (body: ReservationPostBody) => {
  await postRequest(reservationPath, {
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
    jsessionID: true,
  });
  revalidateTag(FETCH_TAG_RESERVATION);
});

export const getWeeklyReservation = async (params: {
  roomId: number;
  year: number;
  month: number;
  day: number;
}) => {
  return (await getRequest(`${reservationPath}/week`, params, {
    jsessionID: true,
  })) as ReservationPreview[];
};

export const getReservation = async (id: number) => {
  return getRequest(`${reservationPath}/${id}`, undefined, {
    jsessionID: true,
  }) as Promise<Reservation>;
};

export const deleteSingleReservation = withErrorHandler(async (id: number) => {
  await deleteRequest(`${reservationPath}/${id}`, { jsessionID: true });
  revalidateTag(FETCH_TAG_RESERVATION);
});

export const deleteAllRecurringReservation = withErrorHandler(async (id: string) => {
  await deleteRequest(`${reservationPath}/recurring/${id}`, { jsessionID: true });
  revalidateTag(FETCH_TAG_RESERVATION);
});
