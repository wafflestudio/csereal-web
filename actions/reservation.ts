'use server';

import { revalidateTag } from 'next/cache';

import { FETCH_TAG_RESERVATION } from '@/constants/network';

import { Reservation, ReservationPostBody, ReservationPreview } from '@/types/reservation';

import { deleteRequest, getRequest, postRequest } from '../apis';

const reservationPath = '/reservation';

export const postReservation = async (body: ReservationPostBody) => {
  await postRequest(reservationPath, {
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
    jsessionID: true,
  });
  revalidateTag(FETCH_TAG_RESERVATION);
};

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
  return getRequest(`${reservationPath}/${id}`) as Promise<Reservation>;
};

export const deleteSingleReservation = async (id: number) => {
  await deleteRequest(`${reservationPath}/${id}`, { jsessionID: true });
  revalidateTag(FETCH_TAG_RESERVATION);
};

export const deleteAllRecurringReservation = async (id: string) => {
  await deleteRequest(`${reservationPath}/recurring/${id}`, { jsessionID: true });
  revalidateTag(FETCH_TAG_RESERVATION);
};
