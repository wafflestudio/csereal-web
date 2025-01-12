import { getRequest } from '@/apis';
import { Reservation } from '@/apis/types/reservation';

export const getReservation = async (id: number) => {
  return await getRequest<Reservation>(`/v1/reservation/${id}.ts`);
};
