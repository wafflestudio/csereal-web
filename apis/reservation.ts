import { cookies } from 'next/dist/client/components/headers';

import { Reservation, ReservationPostBody, ReservationPreview } from '@/types/reservation';

import {
  deleteRequest,
  deleteRequestWithCookie,
  getRequest,
  getRequestWithCookie,
  postRequestWithCookie,
} from '.';

const reservationPath = '/reservation';

export const postReservation = async (body: ReservationPostBody) => {
  await postRequestWithCookie(reservationPath, {
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

export const getReservation = async (id: number) =>
  getRequestWithCookie(`${reservationPath}/${id}`) as Promise<Reservation[]>;

export const deleteSingleReservation = async (id: number) => {
  await deleteRequestWithCookie(`${reservationPath}/${id}`);
};

export const deleteAllRecurringReservation = async (id: string) => {
  await deleteRequestWithCookie(`${reservationPath}/recurring/${id}`);
};

export const roomNameToId = {
  // 세미나실
  '301-417': 1,
  '301-521': 2,
  '301-551-4': 3,
  '301-552-1': 4,
  '301-552-2': 5,
  '301-552-3': 6,
  '301-553-6': 7,
  '301-317': 8,
  '302-308': 9,
  '302-309-1': 10,
  '302-309-2': 11,
  '302-309-3': 12,
  //   실습실
  '302-311-1': 13,
  '302-310-2': 14,
  // 공과대학 강의실
  '302-208': 15,
  '302-209': 16,
} as const;
