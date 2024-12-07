'use server';

import { revalidateTag } from 'next/cache';

import { deleteCourseChanges } from '@/apis/v1/academics/[studentType]/course-changes/[year]';
import { putAcademicsGuide } from '@/apis/v1/academics/[studentType]/guide';
import {
  deleteCurriculum,
  putCurriculum,
} from '@/apis/v1/academics/undergraduate/curriculum/[year]';
import { putDegreeRequirements } from '@/apis/v1/academics/undergraduate/degree-requirements';
import { postGeneralStudies } from '@/apis/v1/academics/undergraduate/general-studies-requirements';
import {
  deleteGeneralStudies,
  putGeneralStudies,
} from '@/apis/v1/academics/undergraduate/general-studies-requirements/[year]';
import { postScholarship, putScholarshipGuide } from '@/apis/v2/academics/[type]/scholarship';
import { postCourse, putCourse } from '@/apis/v2/academics/courses';
import { deleteCourse } from '@/apis/v2/academics/courses/[code]';
import { putScholarship } from '@/apis/v2/academics/scholarship';
import { deleteScholarship } from '@/apis/v2/academics/scholarship/[id]';
import {
  FETCH_TAG_COURSE,
  FETCH_TAG_COURSE_CHANGES,
  FETCH_TAG_CURRICULUM,
  FETCH_TAG_DEGREE,
  FETCH_TAG_GENERAL_STUDIES,
  FETCH_TAG_GUIDE,
  FETCH_TAG_SCHOLARSHIP,
} from '@/constants/network';
import { redirect } from '@/i18n/routing';
import {
  Course,
  Curriculum,
  GeneralStudiesRequirement,
  Scholarship,
  StudentType,
} from '@/types/academics';
import { WithLanguage } from '@/types/language';
import { getPath } from '@/utils/page';
import { graduateScholarship, undergraduateScholarship } from '@/utils/segmentNode';
import { decodeFormDataFileName } from '@/utils/string';

import { withErrorHandler } from './errorHandler';

export const putGuideAction = withErrorHandler(async (type: StudentType, formData: FormData) => {
  decodeFormDataFileName(formData, 'newAttachments');
  await putAcademicsGuide(type, formData);
  revalidateTag(FETCH_TAG_GUIDE);
});

/** 교과과정 */

export const postCourseAction = withErrorHandler(async (data: Course) => {
  await postCourse(data);
  revalidateTag(FETCH_TAG_COURSE);
});

export const putCourseAction = withErrorHandler(async (data: Course) => {
  await putCourse(data);
  revalidateTag(FETCH_TAG_COURSE);
});

export const deleteCourseAction = withErrorHandler(async (code: string) => {
  await deleteCourse(code);
  revalidateTag(FETCH_TAG_COURSE);
});

/** 전공 이수 표준 형태 */

export const putCurriculumAction = withErrorHandler(async (data: Curriculum) => {
  await putCurriculum(data);
  revalidateTag(FETCH_TAG_CURRICULUM);
});

export const deleteCurriculumAction = withErrorHandler(async (year: number) => {
  await deleteCurriculum(year);
  revalidateTag(FETCH_TAG_CURRICULUM);
});

/** 필수 교양 과목 */

export const postGeneralStudiesAction = withErrorHandler(
  async (data: GeneralStudiesRequirement) => {
    await postGeneralStudies(data);
    revalidateTag(FETCH_TAG_GENERAL_STUDIES);
  },
);

export const putGeneralStudiesAction = withErrorHandler(async (data: GeneralStudiesRequirement) => {
  await putGeneralStudies(data);
  revalidateTag(FETCH_TAG_GENERAL_STUDIES);
});

export const deleteGeneralStudiesAction = withErrorHandler(async (year: number) => {
  await deleteGeneralStudies(year);
  revalidateTag(FETCH_TAG_GENERAL_STUDIES);
});

/** 졸업 규정 */

export const putDegreeRequirementsAction = withErrorHandler(async (formData: FormData) => {
  decodeFormDataFileName(formData, 'newAttachments');
  await putDegreeRequirements(formData);
  revalidateTag(FETCH_TAG_DEGREE);
});

/** 교과목 변경 내역 */

export const deleteCourseChangesAction = withErrorHandler(
  async (type: StudentType, year: number) => {
    await deleteCourseChanges(type, year);
    revalidateTag(FETCH_TAG_COURSE_CHANGES);
  },
);

/** 장학 제도 */

const undergraduateScholarshipPath = getPath(undergraduateScholarship);
const graduateScholarshipPath = getPath(graduateScholarship);

export const putScholarshipGuideAction = withErrorHandler(
  async (type: StudentType, description: string) => {
    await putScholarshipGuide(type, description);
    revalidateTag(FETCH_TAG_SCHOLARSHIP);
    // TODO: 현재 locale로 redirect
    redirect({
      href: type === 'graduate' ? graduateScholarshipPath : undergraduateScholarshipPath,
      locale: 'ko',
    });
  },
);

export const postScholarshipAction = withErrorHandler(
  async (
    type: StudentType,
    data: { koName: string; koDescription: string; enName: string; enDescription: string },
  ) => {
    await postScholarship(type, data);
    revalidateTag(FETCH_TAG_SCHOLARSHIP);
    // TODO: 현재 locale로 redirect
    redirect({
      href: type === 'graduate' ? graduateScholarshipPath : undergraduateScholarshipPath,
      locale: 'ko',
    });
  },
);

export const putScholarshipAction = withErrorHandler(
  async (type: StudentType, id: number, data: WithLanguage<Scholarship>) => {
    await putScholarship(id, data);
    revalidateTag(FETCH_TAG_SCHOLARSHIP);
    // TODO: 현재 locale로 redirect
    redirect({
      href: `${type === 'graduate' ? graduateScholarshipPath : undergraduateScholarshipPath}/${id}`,
      locale: 'ko',
    });
  },
);

export const deleteScholarshipAction = withErrorHandler(async (type: StudentType, id: number) => {
  await deleteScholarship(id);
  revalidateTag(FETCH_TAG_SCHOLARSHIP);
  // TODO: 현재 locale로 redirect
  redirect({
    href: type === 'graduate' ? graduateScholarshipPath : undergraduateScholarshipPath,
    locale: 'ko',
  });
});
