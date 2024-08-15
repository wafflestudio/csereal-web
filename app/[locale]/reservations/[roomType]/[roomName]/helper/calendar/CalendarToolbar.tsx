'use client';

import LoginVisible from '@/components/common/LoginVisible';

import useResponsiveRow from '../useResponsiveRow';
import {
  ChangeDateButton,
  MakeReservationButton,
  SelectDayButton,
  TodayButton,
} from './NavigateButtons';

export default function Toolbar({ date, roomId }: { date: Date; roomId: number }) {
  const offset = useResponsiveRow();

  const today = new Date();
  const todayButtonVisible =
    today.getFullYear() !== date.getFullYear() ||
    today.getMonth() !== date.getMonth() ||
    today.getDate() !== date.getDate();

  return (
    <div className="mb-6 flex h-[1.875rem] items-stretch justify-between">
      <div className="flex items-stretch gap-2">
        <SelectDayButton date={date} />
        <ChangeDateButton targetDate={addDayToDate(date, -offset)} symbolName="navigate_before" />
        <ChangeDateButton targetDate={addDayToDate(date, offset)} symbolName="navigate_next" />
        {todayButtonVisible && <TodayButton />}
      </div>
      <LoginVisible>
        <MakeReservationButton roomId={roomId} />
      </LoginVisible>
    </div>
  );
}

const addDayToDate = (date: Date, day: number) => {
  const ret = new Date(date);
  ret.setDate(ret.getDate() + day);
  return ret;
};
