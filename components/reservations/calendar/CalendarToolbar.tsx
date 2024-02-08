import LoginUserVisible from '@/components/common/LoginUserVisible';

import {
  MakeReservationButton,
  NextWeekButton,
  PreviousWeekButton,
  SelectDayButton,
  TodayButton,
} from './NavigateButtons';

export default function Toolbar({ date, roomId }: { date: Date; roomId: number }) {
  const today = new Date();
  const todayButtonHidden =
    today.getFullYear() === date.getFullYear() &&
    today.getMonth() === date.getMonth() &&
    today.getDate() === date.getDate();

  return (
    <div className="flex h-7 items-stretch justify-between mb-6">
      <div className="flex gap-2">
        <SelectDayButton date={date} />
        <PreviousWeekButton date={date} />
        <NextWeekButton date={date} />
        <TodayButton hidden={todayButtonHidden} />
      </div>
      <div className="flex gap-2">
        <LoginUserVisible>
          <MakeReservationButton roomId={roomId} />
        </LoginUserVisible>
      </div>
    </div>
  );
}
