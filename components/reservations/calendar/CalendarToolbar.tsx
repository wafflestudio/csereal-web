import {
  MakeReservationButton,
  NextWeekButton,
  PreviousWeekButton,
  SelectDayButton,
  TodayButton,
} from './NavigateButtons';

export default function Toolbar({ date }: { date: Date }) {
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
}
