'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import {
  deleteClub,
  deleteFacility,
  postClub,
  postFacility,
  putClub,
  putContact,
  putFacility,
  putGreetings,
  putHistory,
  putOverview,
} from '@/apis/about';
import {
  FETCH_TAG_CLUB,
  FETCH_TAG_CONTACT,
  FETCH_TAG_FACILITIES,
  FETCH_TAG_GREETINGS,
  FETCH_TAG_HISTORY,
  FETCH_TAG_OVERVIEW,
} from '@/constants/network';
import { getPath } from '@/utils/page';
import {
  contact,
  facilities,
  greetings,
  history,
  overview,
  studentClubs,
} from '@/utils/segmentNode';

import { withErrorHandler } from './errorHandler';

/** 학부 소개 */

const overviewPath = getPath(overview);

export const putOverviewAction = withErrorHandler(async (formData: FormData) => {
  await putOverview(formData);
  revalidateTag(FETCH_TAG_OVERVIEW);
  redirect(overviewPath);
});

/** 학부장 인사말 */

const greetingsPath = getPath(greetings);

export const putGreetingsAction = withErrorHandler(async (formData: FormData) => {
  await putGreetings(formData);
  revalidateTag(FETCH_TAG_GREETINGS);
  redirect(greetingsPath);
});

/** 연혁 */

const historyPath = getPath(history);

export const putHistoryAction = withErrorHandler(async (formData: FormData) => {
  await putHistory(formData);
  revalidateTag(FETCH_TAG_HISTORY);
  redirect(historyPath);
});

/** 동아리 */

const clubPath = getPath(studentClubs);

export const postClubAction = withErrorHandler(async (formData: FormData) => {
  await postClub(formData);
  revalidateTag(FETCH_TAG_CLUB);
  redirect(clubPath);
});

export const putClubAction = withErrorHandler(async (formData: FormData) => {
  await putClub(formData);
  revalidateTag(FETCH_TAG_CLUB);
  redirect(clubPath);
});

export const deleteClubAction = withErrorHandler(async (id: number) => {
  await deleteClub(id);
  revalidateTag(FETCH_TAG_CLUB);
  redirect(clubPath);
});

/** 시설 안내 */

const facilitiesPath = getPath(facilities);

export const postFacilityAction = withErrorHandler(async (formData: FormData) => {
  await postFacility(formData);
  revalidateTag(FETCH_TAG_FACILITIES);
  redirect(facilitiesPath);
});

export const putFacilityAction = withErrorHandler(async (id: number, formData: FormData) => {
  await putFacility(id, formData);
  revalidateTag(FETCH_TAG_FACILITIES);
  redirect(facilitiesPath);
});

export const deleteFacilityAction = withErrorHandler(async (id: number) => {
  await deleteFacility(id);
  revalidateTag(FETCH_TAG_FACILITIES);
  redirect(facilitiesPath);
});

/** 연락처 */

const contactPath = getPath(contact);

export const putContactAction = withErrorHandler(async (formData: FormData) => {
  await putContact(formData);
  revalidateTag(FETCH_TAG_CONTACT);
  redirect(contactPath);
});
