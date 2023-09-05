import { Reservation } from '@/types/reservation';

import styles from './cellstyle.module.css';
import { ReservationDetailModalButton } from '../modals/ReservationDetailModal';

export default function CalendarColumn({
  date,
  selected,
  reservations,
}: {
  date: Date;
  selected: boolean;
  reservations: Reservation[];
}) {
  return (
    <div className="flex flex-col items-stretch w-[6.25rem]">
      <ColumnIndex selected={selected} date={date} />
      <div className="relative">
        <ColumnBackground selected={selected} />
        {reservations.map((reservation) => (
          <CalendarCell key={reservation.id} reservation={reservation} />
        ))}
      </div>
    </div>
  );
}

const ColumnIndex = ({ selected, date }: { selected: boolean; date: Date }) => {
  const dayToStr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  return (
    <div
      className={`
        h-[4.0625rem] border border-x-neutral-200 border-b-neutral-200 border-t-neutral-300 
        bg-neutral-100 px-3 py-[.62rem] flex flex-col justify-between
        ${selected && 'bg-neutral-200'}
        `}
    >
      <p className="font-yoon text-xs font-medium">{dayToStr[date.getDay()]}</p>
      <p className="font-yoon text-base font-bold leading-4">{date.getDate()}</p>
    </div>
  );
};

const ColumnBackground = ({ selected }: { selected: boolean }) => {
  return Array(30)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className={`h-6 box-border ${styles.cell} ${selected && 'bg-[rgba(64,64,64,0.3)]'}`}
      />
    ));
};

const CalendarCell = ({ reservation }: { reservation: Reservation }) => {
  // 셀 높이 구하기
  // 30분으로 나눴을 때 몇 칸인지
  const unitCnt =
    (reservation.endTime.getTime() - reservation.startTime.getTime()) / 1000 / 60 / 30;
  const unitHeightInREM = 1.5;
  const height = unitCnt * unitHeightInREM;

  // 셀 y축 offset 구하기
  const { startTime, endTime } = reservation;
  const topTime = new Date(
    startTime.getFullYear(),
    startTime.getMonth(),
    startTime.getDate(),
    8,
    0,
  );
  const topOffset = ((startTime.getTime() - topTime.getTime()) / 1000 / 60 / 30) * unitHeightInREM;

  // 셀 내부 텍스트 구하기
  const timeText = `${padZero(startTime.getHours())}:${padZero(startTime.getMinutes())} - ${padZero(
    endTime.getHours(),
  )}:${padZero(endTime.getMinutes())}`;

  return (
    <ReservationDetailModalButton
      className={`absolute bg-[rgba(64,64,64,0.3)]  left-0 right-0 flex flex-col items-center border border-neutral-400`}
      style={{ height: height + 'rem', top: topOffset + 'rem' }}
      reservation={reservation}
    >
      {unitCnt !== 1 && (
        <div className="flex h-6 items-center">
          <p className="font-yoon text-xs font-bold">{timeText}</p>
        </div>
      )}
      <div className="flex h-6 items-center">
        <p className="font-yoon text-xs font-medium">{reservation.userName}</p>
      </div>
    </ReservationDetailModalButton>
  );
};

const padZero = (val: number): string => (val + '').padStart(2, '0');
