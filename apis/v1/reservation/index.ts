import { postRequest } from '@/apis';
import { ReservationPostBody } from '@/apis/types/reservation';

export const postReservation = async (body: ReservationPostBody) => {
  await postRequest('/v1/reservation', {
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
    jsessionID: true,
  });
};
