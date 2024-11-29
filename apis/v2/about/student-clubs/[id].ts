import { deleteRequest } from '@/apis';

export const deleteClub = (id: number) =>
  deleteRequest(`/v2/about/student-clubs/${id}`, { jsessionID: true });
