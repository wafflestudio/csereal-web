import { deleteRequest, putRequest } from '@/apis';
import { CourseChange, StudentType } from '@/types/academics';

export const putCourseChanges = (type: StudentType, data: CourseChange) =>
  putRequest(`/v1/academics/${type}/course-changes/${data.year}`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description: data.description }),
    jsessionID: true,
  });

export const deleteCourseChanges = async (type: StudentType, year: number) =>
  deleteRequest(`/v1/academics/${type}/course-changes/${year}`, {
    jsessionID: true,
  });
