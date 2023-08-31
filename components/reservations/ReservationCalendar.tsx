import { Reservation } from '@/types/reservation';

import BasicButton from './BasicButton';
import CalendarContent from './CalendarContent';
import {
  NextWeekButton,
  PreviousWeekButton,
  SelectDayButton,
  TodayButton,
} from './NavigateButtons';

export default function ReservationCalendar({
  ymd,
  reservations,
}: {
  ymd: { year: number; month: number; day: number };
  reservations: Reservation[];
}) {
  return (
    <div className="w-[47.5rem]">
      <Header year={ymd.year} month={ymd.month} />
      <Toolbar {...ymd} />
      <CalendarContent ymd={ymd} />
    </div>
  );
}

const Header = ({ year, month }: { year: number; month: number }) => {
  return (
    <h3 className="text-2xl font-bold text-neutral-800 mb-4">
      {year}/{(month + '').padStart(2, '0')}
    </h3>
  );
};

const Toolbar = (date: { year: number; month: number; day: number }) => {
  const today = new Date();
  const todayButtonHidden =
    today.getFullYear() === date.year &&
    today.getMonth() + 1 === date.month &&
    today.getDate() === date.day;

  return (
    <div className="flex h-7 items-stretch justify-between mb-4">
      <div className="w-24" />
      <div className="flex gap-2">
        <TodayButton hidden={todayButtonHidden} />
        <SelectDayButton {...date} />
        <PreviousWeekButton {...date} />
        <NextWeekButton {...date} />
      </div>
      <div className="flex gap-2">
        <BasicButton className="w-[4.0625rem]">예약하기</BasicButton>
        <BasicButton className="w-[4.1875rem]">예약 삭제</BasicButton>
      </div>
    </div>
  );
};
