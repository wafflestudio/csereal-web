import { deleteRequest } from '@/apis';

export const deleteCourse = async (code: string) =>
  deleteRequest(`/v2/academics/courses/${code}`, { jsessionID: true });
