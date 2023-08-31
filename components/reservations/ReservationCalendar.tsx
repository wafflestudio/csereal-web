import { Reservation } from '@/types/reservation';

import BasicButton from './BasicButton';

export default function ReservationCalendar({
  date: { year, month, day },
  reservations,
}: {
  date: { year: number; month: number; day: number };
  reservations: Reservation[];
}) {
  return (
    <div className="w-[47.5rem]">
      <Header year={year} month={month} />
      <Toolbar />
    </div>
  );
}

const Header = ({ year, month }: { year: number; month: number }) => {
  return (
    <h3 className="text-2xl font-bold text-neutral-800 mb-4">
      {year}/{month}
    </h3>
  );
};

const Toolbar = () => {
  return (
    <div className="flex h-7 items-stretch justify-between">
      <div className="w-24" />
      <div className="flex gap-2">
        <BasicButton className="w-[2.6875rem]">오늘</BasicButton>
        <BasicButton className="w-[6.25rem]">날짜 선택</BasicButton>
        <BasicButton className="w-[1.875rem]">
          <span className="material-symbols-rounded text-xl align-middle">navigate_before</span>
        </BasicButton>
        <BasicButton className="w-[1.875rem]">
          <span className="material-symbols-rounded text-xl align-middle">navigate_next</span>
        </BasicButton>
      </div>
      <div className="flex gap-2">
        <BasicButton className="w-[4.0625rem]">예약하기</BasicButton>
        <BasicButton className="w-[4.1875rem]">예약 삭제</BasicButton>
      </div>
    </div>
  );
};
