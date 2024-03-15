import { getWeeklyReservation } from '@/actions/reservation';

import CalendarContent from './calendar/CalendarContent';
import Toolbar from './calendar/CalendarToolbar';

type ReservationCalendarProps = {
  roomId: number;
  selectedDate: Date;
};

export default async function ReservationCalendar({
  roomId,
  selectedDate,
}: ReservationCalendarProps) {
  const startOfWeek = getStartOfWeek(selectedDate);

  // TODO: 중복되는 정보 fetch 최적화
  const [desktopReservations, mobileReservations] = await Promise.all([
    getWeeklyReservation({
      roomId,
      year: startOfWeek.getFullYear(),
      month: startOfWeek.getMonth() + 1,
      day: startOfWeek.getDate(),
    }),
    getWeeklyReservation({
      roomId,
      year: selectedDate.getFullYear(),
      month: selectedDate.getMonth() + 1,
      day: selectedDate.getDate(),
    }),
  ]);

  return (
    <div>
      <h3 className="mb-7 text-2xl font-bold text-neutral-800">{formatTitle(selectedDate)}</h3>
      <Toolbar date={selectedDate} roomId={roomId} />
      <CalendarContent
        desktopStartDate={startOfWeek}
        mobileStartDate={selectedDate}
        desktopReservations={desktopReservations}
        mobileReservations={mobileReservations}
      />
    </div>
  );
}

const formatTitle = (date: Date) =>
  `${date.getFullYear()} ${(date.getMonth() + 1).toString().padStart(2, '0')}월`;

/** 일주일의 시작을 월요일로 간주 */
const getStartOfWeek = (date: Date) => {
  const ret = new Date(date);
  const diff = (date.getDay() || 7) - 1;
  ret.setDate(ret.getDate() - diff);
  return ret;
};
