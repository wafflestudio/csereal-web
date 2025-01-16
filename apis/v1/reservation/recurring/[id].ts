import { deleteRequest } from '@/apis';

export const deleteAllRecurringReservation = async (id: string) => {
  await deleteRequest(`/v1/reservation/recurring/${id}`, { jsessionID: true });
};
