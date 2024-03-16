'use client';

import { ReservationPreview } from '@/types/reservation';

import { isSameDay } from '@/utils/date';
import useResponsive from '@/utils/hooks/useResponsive';

import CalendarColumn from './CalendarColumn';
import useResponsiveRow from '../useResponsiveRow';

export default function CalendarContent({
  desktopStartDate,
  mobileStartDate,
  desktopReservations,
  mobileReservations,
}: {
  desktopStartDate: Date;
  mobileStartDate: Date;
  desktopReservations: ReservationPreview[];
  mobileReservations: ReservationPreview[];
}) {
  const { screenType } = useResponsive();
  const reservations = screenType === 'desktop' ? desktopReservations : mobileReservations;
  const startDate = screenType === 'desktop' ? desktopStartDate : mobileStartDate;

  const columnCnt = useResponsiveRow();
  const dates = getNextDays(startDate, columnCnt);
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
  const { screenType } = useResponsive();
  const rows = screenType === 'desktop' ? desktopRows : mobileRows;

  return (
    <div>
      <div className="h-[4.0625rem] border-y border-r border-neutral-200 bg-neutral-100" />
      {rows.map((x, idx) => (
        <div
          key={idx}
          className="flex h-12 items-center justify-center border-b border-r border-neutral-200 bg-neutral-100 px-4"
        >
          <time className="text-xs font-medium text-neutral-800">{x}</time>
        </div>
      ))}
    </div>
  );
};

const getNextDays = (date: Date, cnt: number) => {
  return Array(cnt)
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

const mobileRows = [
  ...Array(4)
    .fill(0)
    .map((_, x) => x + 8 + ''),
  '12',
  ...Array(10)
    .fill(0)
    .map((_, x) => x + 1 + ''),
];

const desktopRows = [
  ...Array(4)
    .fill(0)
    .map((_, x) => x + 8 + 'AM'),
  '12PM',
  ...Array(10)
    .fill(0)
    .map((_, x) => x + 1 + 'PM'),
];
