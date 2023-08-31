import { Reservation, ReservationPostBody } from '@/types/reservation';

export const getMockWeeklyReservation = async (
  roomId: number,
  year: number,
  month: number,
  day: number,
): Promise<Reservation[]> => {
  const startDate = buildDate(month, day, 0, 0);
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 7);

  const startDateTime = startDate.getTime();
  const endDateTime = endDate.getTime();

  return reservations.filter((x) => {
    const time = x.startTime.getTime();
    return startDateTime <= time && time <= endDateTime;
  });
};

export const postMockReservation = async (body: ReservationPostBody) => {
  reservations.push({
    id: reservations[reservations.length - 1].id + 1,
    ...body,
    recurrenceId: 'RECURRENCEID',
    roomName: 'jeju',
    roomLocation: '123-456',
    userName: '유저 이름',
  });
};

const buildMockReservation = (id: number, startTime: Date, endTime: Date): Reservation => ({
  id,
  recurrenceId: 'RECURRENCEID',

  purpose: '목적',

  startTime,
  endTime,
  recurringWeeks: 1,

  title: '예약 1',
  professor: '담당 교수 1',

  roomName: 'jeju',
  roomLocation: '123-456',

  userName: '유저 이름',
  contactEmail: 'email@gmail.com',
  contactPhone: '8642',
});

const buildDate = (month: number, date: number, hour: number, minute: 0 | 30): Date => {
  const ret = new Date();
  ret.setMonth(month - 1);
  ret.setDate(date);
  ret.setHours(hour);
  ret.setMinutes(minute);
  return ret;
};

const reservations: Reservation[] = [
  buildMockReservation(0, buildDate(8, 31, 15, 30), buildDate(8, 31, 17, 30)),
  buildMockReservation(1, buildDate(8, 31, 18, 30), buildDate(8, 31, 20, 30)),
  buildMockReservation(1, buildDate(9, 2, 18, 30), buildDate(9, 2, 20, 30)),
  buildMockReservation(1, buildDate(9, 20, 18, 30), buildDate(9, 20, 20, 30)),
];
