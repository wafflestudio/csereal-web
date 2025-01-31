import { getRequest, postRequest } from '@/apis';
import { AcademicsCommon, StudentType } from '@/apis/types/academics';
import { FETCH_TAG_COURSE_CHANGES } from '@/constants/network';

export const getCourseChanges = (studentType: StudentType) =>
  getRequest<AcademicsCommon[]>(`/v2/academics/${studentType}/course-changes`, undefined, {
    next: { tags: [FETCH_TAG_COURSE_CHANGES] },
  });

export const postCourseChanges = (studentType: StudentType, data: AcademicsCommon) =>
  postRequest(`/v2/academics/${studentType}/course-changes`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, name: '교과목 변경 내역' }),
    jsessionID: true,
  });
