'use server';

import { revalidateTag } from 'next/cache';

import { Course, Scholarship, StudentType } from '@/apis/types/academics';
import { postAcademicsByPostType } from '@/apis/v2/academics/[studentType]/[postType]';
import {
  deleteAcademicsByPostType,
  putAcademicsByPostType,
} from '@/apis/v2/academics/[studentType]/[postType]/[year]';
import { putAcademicsGuide } from '@/apis/v2/academics/[studentType]/guide';
import {
  postScholarship,
  putScholarshipGuide,
} from '@/apis/v2/academics/[studentType]/scholarship';
import { postCourse, putCourse } from '@/apis/v2/academics/courses';
import { deleteCourse } from '@/apis/v2/academics/courses/[code]';
import { putScholarship } from '@/apis/v2/academics/scholarship';
import { deleteScholarship } from '@/apis/v2/academics/scholarship/[id]';
import { putDegreeRequirements } from '@/apis/v2/academics/undergraduate/degree-requirements';
import { ScholarshipFormData } from '@/app/[locale]/academics/components/scholarship/ScholarshipEditor';
import {
  FETCH_TAG_COURSE,
  FETCH_TAG_COURSE_CHANGES,
  FETCH_TAG_CURRICULUM,
  FETCH_TAG_DEGREE,
  FETCH_TAG_GENERAL_STUDIES,
  FETCH_TAG_GUIDE,
  FETCH_TAG_SCHOLARSHIP,
} from '@/constants/network';
import {
  curriculum,
  degree,
  generalStudies,
  graduateCourseChanges,
  graduateGuide,
  graduateScholarship,
  undergraduateCourseChanges,
  undergraduateGuide,
  undergraduateScholarship,
} from '@/constants/segmentNode';
import { redirectKo } from '@/i18n/routing';
import { WithLanguage } from '@/types/language';
import { getPath } from '@/utils/page';
import { decodeFormDataFileName } from '@/utils/string';

import { withErrorHandler } from './errorHandler';

/** 안내 */

const graduateGuidePath = getPath(graduateGuide);
const undergraduateGuidePath = getPath(undergraduateGuide);

export const putGuideAction = withErrorHandler(async (type: StudentType, formData: FormData) => {
  decodeFormDataFileName(formData, 'newAttachments');
  await putAcademicsGuide(type, formData);
  revalidateTag(FETCH_TAG_GUIDE);
  redirectKo(type === 'graduate' ? graduateGuidePath : undergraduateGuidePath);
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

const curriculumPath = getPath(curriculum);

export const postCurriculumAction = withErrorHandler(async (formData: FormData) => {
  decodeFormDataFileName(formData, 'attachments');
  await postAcademicsByPostType('undergraduate', 'curriculum', formData);
  revalidateTag(FETCH_TAG_CURRICULUM);
  redirectKo(curriculumPath);
});

export const putCurriculumAction = withErrorHandler(async (year: number, formData: FormData) => {
  decodeFormDataFileName(formData, 'attachments');
  await putAcademicsByPostType('undergraduate', 'curriculum', year, formData);
  revalidateTag(FETCH_TAG_CURRICULUM);
  redirectKo(curriculumPath);
});

export const deleteCurriculumAction = withErrorHandler(async (year: number) => {
  await deleteAcademicsByPostType('undergraduate', 'curriculum', year);
  revalidateTag(FETCH_TAG_CURRICULUM);
  redirectKo(curriculumPath);
});

/** 필수 교양 과목 */

const generalStudiesPath = getPath(generalStudies);

export const postGeneralStudiesAction = withErrorHandler(async (formData: FormData) => {
  decodeFormDataFileName(formData, 'attachments');
  await postAcademicsByPostType('undergraduate', 'general-studies-requirements', formData);
  revalidateTag(FETCH_TAG_GENERAL_STUDIES);
  redirectKo(generalStudiesPath);
});

export const putGeneralStudiesAction = withErrorHandler(
  async (year: number, formData: FormData) => {
    decodeFormDataFileName(formData, 'attachments');
    await putAcademicsByPostType('undergraduate', 'general-studies-requirements', year, formData);
    revalidateTag(FETCH_TAG_GENERAL_STUDIES);
    redirectKo(generalStudiesPath);
  },
);

export const deleteGeneralStudiesAction = withErrorHandler(async (year: number) => {
  await deleteAcademicsByPostType('undergraduate', 'general-studies-requirements', year);
  revalidateTag(FETCH_TAG_GENERAL_STUDIES);
  redirectKo(generalStudiesPath);
});

/** 졸업 규정 */

const degreePath = getPath(degree);

export const putDegreeRequirementsAction = withErrorHandler(async (formData: FormData) => {
  decodeFormDataFileName(formData, 'newAttachments');
  await putDegreeRequirements(formData);
  revalidateTag(FETCH_TAG_DEGREE);
  redirectKo(degreePath);
});

/** 교과목 변경 내역 */

const graduateCourseChangesPath = getPath(graduateCourseChanges);
const undergraduateCourseChangesPath = getPath(undergraduateCourseChanges);

export const postCourseChangesAction = withErrorHandler(
  async (studentType: StudentType, formData: FormData) => {
    decodeFormDataFileName(formData, 'newAttachments');
    await postAcademicsByPostType(studentType, 'course-changes', formData);
    revalidateTag(FETCH_TAG_COURSE_CHANGES);
    redirectKo(
      studentType === 'graduate' ? graduateCourseChangesPath : undergraduateCourseChangesPath,
    );
  },
);

export const putCourseChangesAction = withErrorHandler(
  async (studentType: StudentType, year: number, formData: FormData) => {
    decodeFormDataFileName(formData, 'newAttachments');
    await putAcademicsByPostType(studentType, 'course-changes', year, formData);
    revalidateTag(FETCH_TAG_COURSE_CHANGES);
    redirectKo(
      studentType === 'graduate' ? graduateCourseChangesPath : undergraduateCourseChangesPath,
    );
  },
);

export const deleteCourseChangesAction = withErrorHandler(
  async (studentType: StudentType, year: number) => {
    await deleteAcademicsByPostType(studentType, 'course-changes', year);
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
    redirectKo(type === 'graduate' ? graduateScholarshipPath : undergraduateScholarshipPath);
  },
);

export const postScholarshipAction = withErrorHandler(
  async (type: StudentType, data: ScholarshipFormData) => {
    await postScholarship(type, data);
    revalidateTag(FETCH_TAG_SCHOLARSHIP);
    redirectKo(type === 'graduate' ? graduateScholarshipPath : undergraduateScholarshipPath);
  },
);

export const putScholarshipAction = withErrorHandler(
  async (type: StudentType, id: number, data: WithLanguage<Scholarship>) => {
    await putScholarship(data);
    revalidateTag(FETCH_TAG_SCHOLARSHIP);
    redirectKo(
      `${type === 'graduate' ? graduateScholarshipPath : undergraduateScholarshipPath}/${id}`,
    );
  },
);

export const deleteScholarshipAction = withErrorHandler(async (type: StudentType, id: number) => {
  await deleteScholarship(id);
  revalidateTag(FETCH_TAG_SCHOLARSHIP);
  redirectKo(type === 'graduate' ? graduateScholarshipPath : undergraduateScholarshipPath);
});
