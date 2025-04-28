import { postRequest } from '@/apis';
import { ReservationPostBody } from '@/apis/types/reservation';

export const postReservation = async (body: ReservationPostBody) => {
  await postRequest('/v2/reservation', {
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
    jsessionID: true,
  });
};
