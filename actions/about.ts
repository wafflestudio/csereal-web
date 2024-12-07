'use server';

import { revalidateTag } from 'next/cache';

import { putContact } from '@/apis/v2/about/contact';
import { putDirections } from '@/apis/v2/about/directions/[id]';
import { postFacility } from '@/apis/v2/about/facilities';
import { deleteFacility, putFacility } from '@/apis/v2/about/facilities/[id]';
import { putFutureCareers } from '@/apis/v2/about/future-careers';
import { postCareerCompany } from '@/apis/v2/about/future-careers/company';
import { deleteCareerCompany, putCareerCompany } from '@/apis/v2/about/future-careers/company/[id]';
import { CareerStat, postCareerStat, putCareerStat } from '@/apis/v2/about/future-careers/stats';
import { putGreetings } from '@/apis/v2/about/greetings';
import { putHistory } from '@/apis/v2/about/history';
import { putOverview } from '@/apis/v2/about/overview';
import { postClub, putClub } from '@/apis/v2/about/student-clubs';
import { deleteClub } from '@/apis/v2/about/student-clubs/[id]';
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
import {
  contact,
  directions,
  facilities,
  futureCareers,
  greetings,
  history,
  overview,
  studentClubs,
} from '@/constants/segmentNode';
import { redirectKo } from '@/i18n/routing';
import { FutureCareers } from '@/types/about';
import { getPath } from '@/utils/page';
import { decodeFormDataFileName } from '@/utils/string';

import { withErrorHandler } from './errorHandler';

/** 학부 소개 */

const overviewPath = getPath(overview);

export const putOverviewAction = withErrorHandler(async (formData: FormData) => {
  decodeFormDataFileName(formData, 'newAttachments');
  await putOverview(formData);
  revalidateTag(FETCH_TAG_OVERVIEW);
  redirectKo(overviewPath);
});

/** 학부장 인사말 */

const greetingsPath = getPath(greetings);

export const putGreetingsAction = withErrorHandler(async (formData: FormData) => {
  await putGreetings(formData);
  revalidateTag(FETCH_TAG_GREETINGS);
  redirectKo(greetingsPath);
});

/** 연혁 */

const historyPath = getPath(history);

export const putHistoryAction = withErrorHandler(async (formData: FormData) => {
  await putHistory(formData);
  revalidateTag(FETCH_TAG_HISTORY);
  redirectKo(historyPath);
});

/** 졸업생 진로 */

const careerPath = getPath(futureCareers);

export const putCareerDescriptionAction = withErrorHandler(
  async (data: { koDescription: string; enDescription: string }) => {
    await putFutureCareers(data);
    revalidateTag(FETCH_TAG_CAREER);
    redirectKo(careerPath);
  },
);

export const postCareerStatAction = withErrorHandler(async (data: CareerStat) => {
  await postCareerStat(data);
  revalidateTag(FETCH_TAG_CAREER);
  redirectKo(careerPath);
});

export const putCareerStatAction = withErrorHandler(async (data: CareerStat) => {
  await putCareerStat(data);
  revalidateTag(FETCH_TAG_CAREER);
  redirectKo(careerPath);
});

export const postCareerCompanyAction = withErrorHandler(
  async (data: { name: string; url?: string; year: number }) => {
    await postCareerCompany(data);
    revalidateTag(FETCH_TAG_CAREER);
    redirectKo(careerPath);
  },
);

export const putCareerCompanyAction = withErrorHandler(
  async (id: number, data: FutureCareers['companies'][number]) => {
    await putCareerCompany(id, data);
    revalidateTag(FETCH_TAG_CAREER);
    redirectKo(careerPath);
  },
);

export const deleteCareerCompanyAction = withErrorHandler(async (id: number) => {
  await deleteCareerCompany(id);
  revalidateTag(FETCH_TAG_CAREER);
  redirectKo(careerPath);
});

/** 동아리 */

const clubPath = getPath(studentClubs);

export const postClubAction = withErrorHandler(async (formData: FormData) => {
  await postClub(formData);
  revalidateTag(FETCH_TAG_CLUB);
  redirectKo(clubPath);
});

export const putClubAction = withErrorHandler(async (formData: FormData) => {
  await putClub(formData);
  revalidateTag(FETCH_TAG_CLUB);
  redirectKo(clubPath);
});

export const deleteClubAction = withErrorHandler(async (id: number) => {
  await deleteClub(id);
  revalidateTag(FETCH_TAG_CLUB);
  redirectKo(clubPath);
});

/** 시설 안내 */

const facilitiesPath = getPath(facilities);

export const postFacilityAction = withErrorHandler(async (formData: FormData) => {
  await postFacility(formData);
  revalidateTag(FETCH_TAG_FACILITIES);
  redirectKo(facilitiesPath);
});

export const putFacilityAction = withErrorHandler(async (id: number, formData: FormData) => {
  await putFacility(id, formData);
  revalidateTag(FETCH_TAG_FACILITIES);
  redirectKo(facilitiesPath);
});

export const deleteFacilityAction = withErrorHandler(async (id: number) => {
  await deleteFacility(id);
  revalidateTag(FETCH_TAG_FACILITIES);
  redirectKo(facilitiesPath);
});

/** 연락처 */

const contactPath = getPath(contact);

export const putContactAction = withErrorHandler(async (formData: FormData) => {
  await putContact(formData);
  revalidateTag(FETCH_TAG_CONTACT);
  redirectKo(contactPath);
});

/** 찾아오는 길 */

const directionsPath = getPath(directions);

export const putDirectionsAction = withErrorHandler(
  async (id: number, data: { koDescription: string; enDescription: string }) => {
    await putDirections(id, data);
    revalidateTag(FETCH_TAG_DIRECTIONS);
    redirectKo(directionsPath);
  },
);
