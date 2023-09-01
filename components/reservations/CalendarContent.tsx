import { Reservation } from '@/types/reservation';

import CalendarColumn from './CalendarColumn';

export default function CalendarContent({
  startDate,
  selectedDate,
  reservations,
}: {
  startDate: Date;
  selectedDate: Date;
  reservations: Reservation[];
}) {
  const dates = getNextSevenDays(startDate);
  const today = new Date();

  return (
    <div className="flex">
      <RowIndex />
      {dates.map((date) => (
        <CalendarColumn
          key={date.toISOString()}
          date={date}
          selected={isSameDay(date, today)}
          reservations={reservations.filter((x) => isReservationInDate(x, date))}
        />
      ))}
    </div>
  );
}

const RowIndex = () => {
  const rows = [
    ...Array(5)
      .fill(0)
      .map((_, x) => x + 8 + 'AM'),
    ...Array(10)
      .fill(0)
      .map((_, x) => x + 1 + 'PM'),
  ];

  return (
    <div className="flex flex-col items-stretch w-[3.75rem]">
      <div className="h-[4.0625rem] border border-x-neutral-200 border-b-neutral-200 border-t-neutral-300 bg-neutral-100" />
      {rows.map((x) => (
        <div
          key={x}
          className="h-12 border-x border-b border-neutral-200 flex items-center justify-center"
        >
          <p className="font-yoon text-xs text-neutral-700 font-medium text-center">{x}</p>
        </div>
      ))}
    </div>
  );
};

const getNextSevenDays = (date: Date) => {
  return Array(7)
    .fill(0)
    .map((_, i) => {
      const temp = new Date(date);
      temp.setDate(temp.getDate() + i);
      return temp;
    });
};

const isReservationInDate = (reservation: Reservation, date: Date): boolean => {
  return isSameDay(reservation.startTime, date) && isSameDay(reservation.endTime, date);
};

const isSameDay = (date1: Date, date2: Date) =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate();
