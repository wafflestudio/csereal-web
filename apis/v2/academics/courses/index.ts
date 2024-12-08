import { getRequest, postRequest, putRequest } from '@/apis';
import { Course, StudentType } from '@/apis/types/academics';
import { FETCH_TAG_COURSE } from '@/constants/network';
import { Language } from '@/types/language';

export const getCourses = (type: StudentType, language: Language) =>
  getRequest<Course[]>(`/v2/academics/courses?studentType=${type}&sort=${language}`, undefined, {
    next: { tags: [FETCH_TAG_COURSE] },
  });

export const postCourse = (data: Course) =>
  postRequest(`/v2/academics/courses`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });

export const putCourse = (data: Course) =>
  putRequest(`/v2/academics/courses`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });
