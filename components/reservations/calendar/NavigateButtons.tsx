'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useReducer } from 'react';

import useModal from '@/hooks/useModal';

import MuiDateSelector from '../../mui/MuiDateSelector';
import BasicButton from '../BasicButton';
import AddReservationModal from '../modals/AddReservationModal';

export function SelectDayButton({ date }: { date: Date }) {
  const querySetter = useDateQuery();
  const [showCalendar, toggleCalendar] = useReducer((x) => !x, false);

  const today = new Date();
  const isDateToday =
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate();

  const formatDateStr = (date: Date): string => {
    return (
      [Math.floor(date.getFullYear() / 100), date.getMonth() + 1, date.getDate()]
        .map((x) => (x + '').padStart(2, '0'))
        .join('.') + '.'
    );
  };

  return (
    <div className="flex items-stretch">
      <BasicButton
        className="w-[6.25rem] flex gap-1 items-center justify-center"
        onClick={toggleCalendar}
      >
        {isDateToday ? (
          '날짜 선택'
        ) : (
          <>
            <span className="material-symbols-rounded text-sm">calendar_month</span>
            {formatDateStr(date)}
          </>
        )}
      </BasicButton>
      <div className="relative">
        {showCalendar && (
          <MuiDateSelector
            className="absolute border-neutral-300 border top-2 z-10 bg-white"
            date={date}
            setDate={(date) => {
              querySetter(date);
              toggleCalendar();
            }}
          />
        )}
      </div>
    </div>
  );
}

export function ChangeDateButton({
  targetDate,
  symbolName,
}: {
  targetDate: Date;
  symbolName: string;
}) {
  const querySetter = useDateQuery();
  const handleClick = () => querySetter(targetDate);

  return (
    <BasicButton className="w-[1.875rem]" onClick={handleClick}>
      <span className="material-symbols-rounded text-xl font-light align-middle">{symbolName}</span>
    </BasicButton>
  );
}

export function TodayButton() {
  const querySetter = useDateQuery();
  const handleClick = () => querySetter(new Date());

  return (
    <BasicButton className="w-[2.6875rem]" onClick={handleClick}>
      오늘
    </BasicButton>
  );
}

export function MakeReservationButton({ roomId }: { roomId: number }) {
  const { openModal } = useModal();
  const handleClick = () => {
    openModal(<AddReservationModal roomId={roomId} />);
  };

  return (
    <BasicButton className="w-[4.0625rem]" onClick={handleClick}>
      예약하기
    </BasicButton>
  );
}

const useDateQuery = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (date: Date) => {
    const str = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
      .map((x) => (x + '').padStart(2, '0'))
      .join('-');
    router.push(`${pathname}?selectedDate=${str}`);
  };
};
