'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useReducer } from 'react';

import useModal from '@/utils/hooks/useModal';

import MuiDateSelector from '../../common/MuiDateSelector';
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
      [date.getFullYear() % 100, date.getMonth() + 1, date.getDate()]
        .map((x) => (x + '').padStart(2, '0'))
        .join('.') + '.'
    );
  };

  return (
    <div>
      <BasicButton
        className="flex h-full w-24 items-center justify-center gap-1 px-[0.625rem]"
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
            className="absolute top-2 z-10 border border-neutral-300 bg-white"
            date={date}
            setDate={(date) => {
              date && querySetter(date);
              toggleCalendar();
            }}
            enablePast
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
      <span className="material-symbols-rounded align-middle text-xl font-light">{symbolName}</span>
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
