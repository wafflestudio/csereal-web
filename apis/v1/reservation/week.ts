import { getRequest } from '@/apis';
import { ReservationPreview } from '@/apis/types/reservation';

export const getWeeklyReservation = async (params: {
  roomId: number;
  year: number;
  month: number;
  day: number;
}) => {
  return await getRequest<ReservationPreview[]>(`/v1/reservation/week`, params, {
    jsessionID: true,
  });
};
