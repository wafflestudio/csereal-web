import { getMockWeeklyReservation, postMockReservation } from '@/data/reservation';

import { ReservationPostBody } from '@/types/reservation';

export const getWeeklyReservation = getMockWeeklyReservation;

export const postReservation = async (body: ReservationPostBody) => postMockReservation;

export const deleteSingleReservation = async (id: number) => {};

export const deleteAllRecurringReservation = async (id: number) => {};

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
