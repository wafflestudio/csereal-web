'use server';

import { cookies } from 'next/dist/client/components/headers';

import { Reservation, ReservationPostBody, ReservationPreview } from '@/types/reservation';

import { deleteRequest, getRequest, postRequest } from '../apis';

const reservationPath = '/reservation';

export const postReservation = async (body: ReservationPostBody) => {
  await postRequest(reservationPath, {
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });
};

export const getWeeklyReservation = async (params: {
  roomId: number;
  year: number;
  month: number;
  day: number;
}) => {
  const jsessionId = cookies().get('JSESSIONID');
  return (await getRequest(`${reservationPath}/week`, params, {
    credentials: 'include',
    headers: {
      Cookie: `JSESSIONID=${jsessionId?.value}`,
    },
  })) as ReservationPreview[];
};

export const getReservation = async (id: number) => {
  return getRequest(`${reservationPath}/${id}`) as Promise<Reservation>;
};

export const deleteSingleReservation = async (id: number) => {
  await deleteRequest(`${reservationPath}/${id}`);
};

export const deleteAllRecurringReservation = async (id: string) => {
  await deleteRequest(`${reservationPath}/recurring/${id}`);
};
