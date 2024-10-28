'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import {
  deleteCareerCompany,
  deleteClub,
  deleteFacility,
  postCareerCompany,
  postCareerStat,
  postClub,
  postFacility,
  putCareerCompany,
  putCareerDescription,
  putCareerStat,
  putClub,
  putContact,
  putDirections,
  putFacility,
  putGreetings,
  putHistory,
  putOverview,
} from '@/apis/about';
import { CareerStatEditorContent } from '@/components/editor/CareerStatEditor';
import {
  FETCH_TAG_CAREER,
  FETCH_TAG_CLUB,
  FETCH_TAG_CONTACT,
  FETCH_TAG_DIRECTIONS,
  FETCH_TAG_FACILITIES,
  FETCH_TAG_GREETINGS,
  FETCH_TAG_HISTORY,
  FETCH_TAG_OVERVIEW,
} from '@/constants/network';
import { FutureCareers } from '@/types/about';
import { getPath } from '@/utils/page';
import {
  contact,
  directions,
  facilities,
  futureCareers,
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

/** 졸업생 진로 */

const careerPath = getPath(futureCareers);

export const putCareerDescriptionAction = withErrorHandler(
  async (data: { koDescription: string; enDescription: string }) => {
    await putCareerDescription(data);
    revalidateTag(FETCH_TAG_CAREER);
    redirect(careerPath);
  },
);

export const postCareerStatAction = withErrorHandler(async (data: CareerStatEditorContent) => {
  await postCareerStat(data);
  revalidateTag(FETCH_TAG_CAREER);
  redirect(careerPath);
});

export const putCareerStatAction = withErrorHandler(async (data: CareerStatEditorContent) => {
  await putCareerStat(data);
  revalidateTag(FETCH_TAG_CAREER);
  redirect(careerPath);
});

export const postCareerCompanyAction = withErrorHandler(
  async (data: { name: string; url?: string; year: number }) => {
    await postCareerCompany(data);
    revalidateTag(FETCH_TAG_CAREER);
    redirect(careerPath);
  },
);

export const putCareerCompanyAction = withErrorHandler(
  async (id: number, data: FutureCareers['companies'][number]) => {
    await putCareerCompany(id, data);
    revalidateTag(FETCH_TAG_CAREER);
    redirect(careerPath);
  },
);

export const deleteCareerCompanyAction = withErrorHandler(async (id: number) => {
  await deleteCareerCompany(id);
  revalidateTag(FETCH_TAG_CAREER);
  redirect(careerPath);
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

/** 찾아오는 길 */

const directionsPath = getPath(directions);

export const putDirectionsAction = withErrorHandler(
  async (id: number, data: { koDescription: string; enDescription: string }) => {
    await putDirections(id, data);
    revalidateTag(FETCH_TAG_DIRECTIONS);
    redirect(directionsPath);
  },
);
