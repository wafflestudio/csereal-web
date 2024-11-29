import { getRequest, postRequest } from '@/apis';
import { FETCH_TAG_COURSE_CHANGES } from '@/constants/network';
import { CourseChange, StudentType } from '@/types/academics';

export const getCourseChanges = (type: StudentType) =>
  getRequest<CourseChange[]>(`/v1/academics/${type}/course-changes`, undefined, {
    next: { tags: [FETCH_TAG_COURSE_CHANGES] },
  });

export const postCourseChanges = (type: StudentType, data: CourseChange) =>
  postRequest(`/v1/academics/${type}/course-changes`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, name: '교과목 변경 내역' }),
    jsessionID: true,
  });
