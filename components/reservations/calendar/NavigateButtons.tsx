'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useReducer } from 'react';

import useModal from '@/hooks/useModal';

import BasicButton from '../BasicButton';
import AddReservationModal from '../modals/AddReservationModal';
import DateSelector from '../../mui/DateSelector';

export function TodayButton({ hidden }: { hidden: boolean }) {
  const querySetter = useDateQuery();

  const handleClick = () => {
    querySetter(new Date());
  };

  return (
    <BasicButton
      className={`${hidden && 'disabled opacity-0'} w-[2.6875rem]`}
      onClick={handleClick}
    >
      오늘
    </BasicButton>
  );
}

export function SelectDayButton({ date }: { date: Date }) {
  const querySetter = useDateQuery();
  const [show, toggle] = useReducer((x) => !x, false);

  const today = new Date();
  const isDateToday =
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate();

  const formatDateStr = (date: Date): string => {
    return [date.getFullYear(), date.getMonth() + 1, date.getDate()]
      .map((x) => (x + '').padStart(2, '0'))
      .join('.');
  };

  return (
    <div>
      <BasicButton
        className="w-[6.25rem] h-full flex gap-1 items-center justify-center"
        onClick={toggle}
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
        {show && (
          <DateSelector
            className="absolute border-neutral-300 border top-2 z-10 bg-white"
            date={date}
            setDate={(date) => {
              date && querySetter(date);
              toggle();
            }}
          />
        )}
      </div>
    </div>
  );
}

export function PreviousWeekButton({ date }: { date: Date }) {
  const querySetter = useDateQuery();

  const handleClick = () => {
    const prevWeekDate = addDayToDate(date, -7);
    querySetter(prevWeekDate);
  };

  return (
    <BasicButton className="w-[1.875rem]" onClick={handleClick}>
      <span className="material-symbols-rounded text-xl align-middle">navigate_before</span>
    </BasicButton>
  );
}

export function NextWeekButton({ date }: { date: Date }) {
  const querySetter = useDateQuery();

  const handleClick = () => {
    const prevWeekDate = addDayToDate(date, 7);
    querySetter(prevWeekDate);
  };

  return (
    <BasicButton className="w-[1.875rem]" onClick={handleClick}>
      <span className="material-symbols-rounded text-xl align-middle">navigate_next</span>
    </BasicButton>
  );
}

export function MakeReservationButton() {
  const { openModal } = useModal();
  const handleClick = () => {
    openModal(<AddReservationModal />);
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

const addDayToDate = (date: Date, day: number) => {
  const ret = new Date(date);
  ret.setDate(ret.getDate() + day);
  return ret;
};
