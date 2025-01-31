import { deleteRequest, putRequest } from '@/apis';
import { StudentType } from '@/apis/types/academics';

export const putCourseChanges = (studentType: StudentType, year: number, body: FormData) =>
  putRequest(`/v2/academics/${studentType}/course-changes/${year}`, { body, jsessionID: true });

export const deleteCourseChanges = async (studentType: StudentType, year: number) =>
  deleteRequest(`/v2/academics/${studentType}/course-changes/${year}`, {
    jsessionID: true,
  });
