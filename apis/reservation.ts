import { cookies } from 'next/dist/client/components/headers';

import { Reservation, ReservationPostBody } from '@/types/reservation';

import { deleteRequest, getRequest, postRequestWithCookie } from '.';

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
  })) as Reservation[];
};

export const deleteSingleReservation = async (id: number) => {
  await deleteRequest(`${reservationPath}/${id}`);
};

export const deleteAllRecurringReservation = async (id: number) => {
  await deleteRequest(`${reservationPath}/recurring/${id}`);
};

export const roomNameToId = {
  // 세미나실
  '301-417': 0,
  '301-521': 1,
  '301-551-4': 2,
  '301-552-1': 3,
  '301-552-2': 4,
  '301-552-3': 5,
  '301-553-6': 6,
  '301-317': 7,
  '302-308': 8,
  '302-309-1': 9,
  '302-309-2': 10,
  '302-309-3': 11,
  //   실습실
  '302-311-1': 12,
  '302-310-2': 13,
  // 공과대학 강의실
  '302-208': 14,
  '302-209': 15,
} as const;
