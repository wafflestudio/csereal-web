'use server';

import { revalidateTag } from 'next/cache';

import { withErrorHandler } from '@/actions/errorHandler';
import { ReservationPostBody } from '@/apis/types/reservation';
import { postReservation } from '@/apis/v2/reservation';
import { deleteSingleReservation, getReservation } from '@/apis/v2/reservation/[id]';
import { deleteAllRecurringReservation } from '@/apis/v2/reservation/recurring/[id]';
import { FETCH_TAG_RESERVATION } from '@/constants/network';

export const postReservationAction = withErrorHandler(async (body: ReservationPostBody) => {
  await postReservation(body);
  revalidateTag(FETCH_TAG_RESERVATION);
});

export const getReservationAction = getReservation;

export const deleteSingleReservationAction = withErrorHandler(async (id: number) => {
  await deleteSingleReservation(id);
  revalidateTag(FETCH_TAG_RESERVATION);
});

export const deleteAllRecurringReservationAction = withErrorHandler(async (id: string) => {
  await deleteAllRecurringReservation(id);
  revalidateTag(FETCH_TAG_RESERVATION);
});
