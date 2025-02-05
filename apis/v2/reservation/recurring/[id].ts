import { deleteRequest } from '@/apis';

export const deleteAllRecurringReservation = async (id: string) => {
  await deleteRequest(`/v2/reservation/recurring/${id}`, { jsessionID: true });
};
