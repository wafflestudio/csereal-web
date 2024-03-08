import { ReservationPreview } from '@/types/reservation';

import styles from './cellstyle.module.css';
import ReservationModalButton from '../modals/ReservationDetailModal';

const UNIT_HEIGHT_IN_REM = 1.5;
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
  return (
    <div
      className={`
        flex flex-col justify-between
        h-[4.0625rem] px-3 py-[0.62rem]
        border-t border-r border-b border-neutral-200 
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
        className={`box-border ${styles.cell} ${selected && 'bg-neutral-100'}`}
        style={{ height: UNIT_HEIGHT_IN_REM + 'rem' }}
      />
    ));
};

const CalendarCell = async ({ reservation }: { reservation: ReservationPreview }) => {
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
      <p
        className="flex item-center text-xs font-medium"
        style={{ height: UNIT_HEIGHT_IN_REM + 'rem' }}
      >
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
      className="flex items-center text-xs font-bold text-neutral-800 mt-[2px]"
      style={{ height: UNIT_HEIGHT_IN_REM + 'rem' }}
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
