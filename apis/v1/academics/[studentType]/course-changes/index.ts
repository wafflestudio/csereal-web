import { getRequest, postRequest } from '@/apis';
import { StudentType } from '@/apis/types/academics';
import { AcademicsCommon } from '@/apis/v1/academics/types';
import { FETCH_TAG_COURSE_CHANGES } from '@/constants/network';

export const getCourseChanges = (type: StudentType) =>
  getRequest<AcademicsCommon[]>(`/v1/academics/${type}/course-changes`, undefined, {
    next: { tags: [FETCH_TAG_COURSE_CHANGES] },
  });

export const postCourseChanges = (type: StudentType, data: AcademicsCommon) =>
  postRequest(`/v1/academics/${type}/course-changes`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, name: '교과목 변경 내역' }),
    jsessionID: true,
  });
