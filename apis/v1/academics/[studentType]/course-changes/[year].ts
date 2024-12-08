import { deleteRequest, putRequest } from '@/apis';
import { StudentType } from '@/apis/types/academics';

export const putCourseChanges = (type: StudentType, year: number, body: FormData) =>
  putRequest(`/v1/academics/${type}/course-changes/${year}`, { body, jsessionID: true });

export const deleteCourseChanges = async (type: StudentType, year: number) =>
  deleteRequest(`/v1/academics/${type}/course-changes/${year}`, {
    jsessionID: true,
  });
