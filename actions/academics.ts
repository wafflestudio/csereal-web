'use server';

import { revalidateTag } from 'next/cache';

import {
  deleteCourse,
  deleteCourseChanges,
  deleteCurriculum,
  deleteGeneralStudies,
  deleteScholarship,
  postCourse,
  postCourseChanges,
  postCurriculum,
  postGeneralStudies,
  postScholarship,
  putAcademicsGuide,
  putCourse,
  putCourseChanges,
  putCurriculum,
  putDegreeRequirements,
  putGeneralStudies,
  putScholarship,
  putScholarshipGuide,
} from '@/apis/academics';
import {
  FETCH_TAG_COURSE,
  FETCH_TAG_COURSE_CHANGES,
  FETCH_TAG_CURRICULUM,
  FETCH_TAG_DEGREE,
  FETCH_TAG_GENERAL_STUDIES,
  FETCH_TAG_GUIDE,
  FETCH_TAG_SCHOLARSHIP,
} from '@/constants/network';
import { redirect } from '@/navigation';
import {
  Course,
  CourseChange,
  Curriculum,
  GeneralStudiesRequirement,
  Scholarship,
  StudentType,
} from '@/types/academics';
import { WithLanguage } from '@/types/language';
import { getPath } from '@/utils/page';
import { graduateScholarship, undergraduateScholarship } from '@/utils/segmentNode';

import { withErrorHandler } from './errorHandler';

export const putGuideAction = withErrorHandler(async (type: StudentType, formData: FormData) => {
  await putAcademicsGuide(type, formData);
  revalidateTag(FETCH_TAG_GUIDE);
});

export const putDegreeRequirementsAction = withErrorHandler(async (formData: FormData) => {
  await putDegreeRequirements(formData);
  revalidateTag(FETCH_TAG_DEGREE);
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

export const postCurriculumAction = withErrorHandler(async (data: Curriculum) => {
  await postCurriculum(data);
  revalidateTag(FETCH_TAG_CURRICULUM);
});

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

/** 교과목 변경 내역 */

export const postCourseChangesAction = withErrorHandler(
  async (type: StudentType, data: CourseChange) => {
    await postCourseChanges(type, data);
    revalidateTag(FETCH_TAG_COURSE_CHANGES);
  },
);

export const putCourseChangesAction = withErrorHandler(
  async (type: StudentType, data: CourseChange) => {
    await putCourseChanges(type, data);
    revalidateTag(FETCH_TAG_COURSE_CHANGES);
  },
);

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
    redirect(type === 'graduate' ? graduateScholarshipPath : undergraduateScholarshipPath);
  },
);

export const postScholarshipAction = withErrorHandler(
  async (
    type: StudentType,
    data: { koName: string; koDescription: string; enName: string; enDescription: string },
  ) => {
    await postScholarship(type, data);
    revalidateTag(FETCH_TAG_SCHOLARSHIP);
    redirect(type === 'graduate' ? graduateScholarshipPath : undergraduateScholarshipPath);
  },
);

export const putScholarshipAction = withErrorHandler(
  async (type: StudentType, id: number, data: WithLanguage<Scholarship>) => {
    await putScholarship(id, data);
    revalidateTag(FETCH_TAG_SCHOLARSHIP);
    redirect(
      `${type === 'graduate' ? graduateScholarshipPath : undergraduateScholarshipPath}/${id}`,
    );
  },
);

export const deleteScholarshipAction = withErrorHandler(async (type: StudentType, id: number) => {
  await deleteScholarship(id);
  revalidateTag(FETCH_TAG_SCHOLARSHIP);
  redirect(type === 'graduate' ? graduateScholarshipPath : undergraduateScholarshipPath);
});
