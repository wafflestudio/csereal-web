import { deleteRequest, getRequest } from '@/apis';
import { Reservation } from '@/apis/types/reservation';

export const getReservation = async (id: number) => {
  return await getRequest<Reservation>(`/v1/reservation/${id}`);
};

export const deleteSingleReservation = async (id: number) => {
  await deleteRequest(`/v1/reservation/${id}`, { jsessionID: true });
};
