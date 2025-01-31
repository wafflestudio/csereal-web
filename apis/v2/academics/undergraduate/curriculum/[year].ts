import { deleteRequest, putRequest } from '@/apis';
import { Curriculum } from '@/apis/types/academics';

export const putCurriculum = (data: Curriculum) =>
  putRequest(`/v2/academics/undergraduate/curriculum/${data.year}`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description: data.description }),
    jsessionID: true,
  });

export const deleteCurriculum = async (year: number) =>
  deleteRequest(`/v2/academics/undergraduate/curriculum/${year}`, { jsessionID: true });
