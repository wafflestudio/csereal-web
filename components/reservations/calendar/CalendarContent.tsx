import { ReservationPreview } from '@/types/reservation';

import CalendarColumn from './CalendarColumn';

export default function CalendarContent({
  startDate,
  reservations,
}: {
  startDate: Date;
  reservations: ReservationPreview[];
}) {
  const dates = getNextSevenDays(startDate);
  const today = new Date();

  return (
    <div className="flex border-b border-neutral-200">
      <RowIndex />
      {dates.map((date) => (
        <CalendarColumn
          key={date.getTime()}
          date={date}
          selected={isSameDay(date, today)}
          reservations={reservations.filter((x) => isReservationInDate(x, date))}
        />
      ))}
    </div>
  );
}

const RowIndex = () => {
  return (
    <div>
      <div className="h-[4.0625rem] border-y border-r border-neutral-200 bg-neutral-100" />
      {rows.map((x) => (
        <div
          key={x}
          className="flex h-12 w-[3.75rem] items-center justify-center border-b border-r border-neutral-200 bg-neutral-100"
        >
          <time className="text-xs font-medium text-neutral-800">{x}</time>
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

const isReservationInDate = (reservation: ReservationPreview, date: Date): boolean => {
  return (
    isSameDay(new Date(reservation.startTime), date) &&
    isSameDay(new Date(reservation.endTime), date)
  );
};

const isSameDay = (date1: Date, date2: Date) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

const rows = [
  ...Array(4)
    .fill(0)
    .map((_, x) => x + 8 + 'AM'),
  '12PM',
  ...Array(10)
    .fill(0)
    .map((_, x) => x + 1 + 'PM'),
];
