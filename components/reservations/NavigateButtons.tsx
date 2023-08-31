'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useReducer } from 'react';

import BasicButton from './BasicButton';
import DateSelector from './DateSelector';

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

  return (
    <div>
      <BasicButton className="w-[6.25rem] relative h-full" onClick={toggle}>
        날짜 선택
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
    const prevWeekDate = subWeekFromDate(date);
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
    const prevWeekDate = addWeekToDate(date);
    querySetter(prevWeekDate);
  };

  return (
    <BasicButton className="w-[1.875rem]" onClick={handleClick}>
      <span className="material-symbols-rounded text-xl align-middle">navigate_next</span>
    </BasicButton>
  );
}

const useDateQuery = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (date: Date) => router.push(`${pathname}?startDate=${dateToYmdStr(date)}`);
};

const ymdToDate = (ymd: { year: number; month: number; day: number }) => {
  return new Date(ymd.year, ymd.month - 1, ymd.day);
};

const dateToYmdStr = (date: Date): string => {
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    .map((x) => (x + '').padStart(2, '0'))
    .join('-');
};

const addWeekToDate = (date: Date): Date => {
  const ret = new Date(date);
  ret.setDate(ret.getDate() + 7);
  return ret;
};

const subWeekFromDate = (date: Date): Date => {
  const ret = new Date(date);
  ret.setDate(ret.getDate() - 7);
  return ret;
};
