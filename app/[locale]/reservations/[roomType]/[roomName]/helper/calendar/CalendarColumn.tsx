import { ReservationPreview } from '@/apis/types/reservation';

import ReservationModalButton from '../modals/ReservationDetailModal';
import styles from './cellstyle.module.css';

const UNIT_HEIGHT_IN_REM = 1.5;
const UNIT_HEIGHT_TAILWIND = 'h-[1.5rem]';
const THIRTY_MIN_IN_MILLISEC = 1000 * 60 * 30;

export default function CalendarColumn({
  date,
  selected,
  reservations,
}: {
  date: Date;
  selected: boolean;
  reservations: ReservationPreview[];
}) {
  return (
    <div className="flex w-[6.25rem] flex-col items-stretch">
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
  return (
    <div
      className={`
        flex h-[4.0625rem] flex-col
        justify-between border-b border-r
        border-t border-neutral-200 px-3 py-[0.62rem] 
        ${selected ? 'bg-neutral-200' : 'bg-neutral-100'}
        `}
    >
      <p className="text-xs font-medium text-neutral-800">{weekdayStrArr[date.getDay()]}</p>
      <p className="text-base font-bold leading-4 text-neutral-800">{date.getDate()}</p>
    </div>
  );
};

const ColumnBackground = ({ selected }: { selected: boolean }) => {
  return Array(30)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className={`box-border ${styles.cell} ${selected && 'bg-neutral-100'} ${UNIT_HEIGHT_TAILWIND}`}
      />
    ));
};

const CalendarCell = ({ reservation }: { reservation: ReservationPreview }) => {
  const startTime = new Date(reservation.startTime);
  const endTime = new Date(reservation.endTime);

  const { topOffset, unitCnt } = getReservationCellLayout(startTime, endTime);

  return (
    <ReservationModalButton
      id={reservation.id}
      height={unitCnt * UNIT_HEIGHT_IN_REM + 'rem'}
      top={topOffset + 'rem'}
    >
      {unitCnt !== 1 && <CalendarCellTitle startTime={startTime} endTime={endTime} />}
      <p className={`item-center flex text-xs font-medium ${UNIT_HEIGHT_TAILWIND}`}>
        {reservation.title}
      </p>
    </ReservationModalButton>
  );
};

const CalendarCellTitle = ({ startTime, endTime }: { startTime: Date; endTime: Date }) => {
  const timeText = `${padZero(startTime.getHours())}:${padZero(startTime.getMinutes())} - ${padZero(
    endTime.getHours(),
  )}:${padZero(endTime.getMinutes())}`;

  return (
    <p
      className={`mt-[2px] flex items-center text-xs font-bold text-neutral-800 ${UNIT_HEIGHT_TAILWIND}`}
    >
      {timeText}
    </p>
  );
};

const padZero = (val: number): string => (val + '').padStart(2, '0');

const weekdayStrArr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const getReservationCellLayout = (startTime: Date, endTime: Date) => {
  const unitCnt = (endTime.getTime() - startTime.getTime()) / 1000 / 60 / 30;

  // 셀 y축 offset 구하기
  const topTime = new Date(
    startTime.getFullYear(),
    startTime.getMonth(),
    startTime.getDate(),
    8,
    0,
  );
  const topOffset =
    ((startTime.getTime() - topTime.getTime()) / THIRTY_MIN_IN_MILLISEC) * UNIT_HEIGHT_IN_REM;

  return { topOffset, unitCnt };
};
