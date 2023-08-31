import { Reservation } from '@/types/reservation';

import BasicButton from './BasicButton';
import CalendarContent from './CalendarContent';
import {
  MakeReservationButton,
  NextWeekButton,
  PreviousWeekButton,
  SelectDayButton,
  TodayButton,
} from './NavigateButtons';

export default function ReservationCalendar({
  startDate,
  selectedDate,
  reservations,
}: {
  startDate: Date;
  selectedDate: Date;
  reservations: Reservation[];
}) {
  return (
    <div className="w-[47.5rem]">
      <Header year={selectedDate.getFullYear()} month={selectedDate.getMonth() + 1} />
      <Toolbar date={selectedDate} />
      <CalendarContent
        startDate={startDate}
        selectedDate={selectedDate}
        reservations={reservations}
      />
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

const Toolbar = ({ date }: { date: Date }) => {
  const today = new Date();
  const todayButtonHidden =
    today.getFullYear() === date.getFullYear() &&
    today.getMonth() === date.getMonth() &&
    today.getDate() === date.getDate();

  return (
    <div className="flex h-7 items-stretch justify-between mb-4">
      <div className="w-[4.0625rem]" />
      <div className="flex gap-2">
        <TodayButton hidden={todayButtonHidden} />
        <SelectDayButton date={date} />
        <PreviousWeekButton date={date} />
        <NextWeekButton date={date} />
      </div>
      <div className="flex gap-2">
        <MakeReservationButton />
      </div>
    </div>
  );
};
