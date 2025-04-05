'use client';

import { useEffect, useReducer, useRef } from 'react';

import BasicButton from '@/app/[locale]/reservations/[roomType]/[roomName]/helper/BasicButton';
import AddReservationModal from '@/app/[locale]/reservations/[roomType]/[roomName]/helper/modals/AddReservationModal';
import MuiDateSelector from '@/components/common/MuiDateSelector';
import { usePathname, useRouter } from '@/i18n/routing';
import useModal from '@/utils/hooks/useModal';

// TODO: button -> Link 수정
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

  const calendarRef = useClickOutside<HTMLDivElement>(() => {
    if (showCalendar) toggleCalendar();
  });

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
          <div ref={calendarRef}>
            <MuiDateSelector
              className="absolute top-2 z-10 border border-neutral-300 bg-white"
              date={date}
              setDate={(date) => {
                if (date) querySetter(date);
                toggleCalendar();
              }}
              enablePast
            />
          </div>
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
    router.push(`${pathname}?selectedDate=${str}`, { scroll: false });
  };
};

const useClickOutside = <T extends HTMLElement>(handler: () => void) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handleClickOutside = (ev: MouseEvent | TouchEvent) => {
      const target = ev.target;
      if (!(target instanceof Node)) return;
      if (ref.current && !ref.current.contains(target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [handler]);

  return ref;
};
