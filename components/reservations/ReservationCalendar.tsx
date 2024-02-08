import { ReservationPreview } from '@/types/reservation';

import CalendarContent from './calendar/CalendarContent';
import Toolbar from './calendar/CalendarToolbar';
import { PAGE_TITLE_LEFT_MARGIN_PX } from '../layout/pageLayout/PageTitle';

type ReservationCalendarProps = {
  startDate: Date;
  selectedDate: Date;
  reservations: ReservationPreview[];
  roomId: number;
};

export default function ReservationCalendar({
  startDate,
  selectedDate,
  reservations,
  roomId,
}: ReservationCalendarProps) {
  return (
    <div
      className="box-content w-[47.5rem] pb-[7.94rem] pt-[3.19rem] pr-[34.5rem]"
      style={{ marginLeft: PAGE_TITLE_LEFT_MARGIN_PX + 'px' }}
    >
      <h3 className="text-2xl font-bold text-neutral-800 mb-7">{formatTitle(selectedDate)}</h3>
      <Toolbar date={selectedDate} roomId={roomId} />
      <CalendarContent startDate={startDate} reservations={reservations} />
    </div>
  );
}

const formatTitle = (date: Date) =>
  `${date.getFullYear()} ${(date.getMonth() + 1).toString().padStart(2, '0')}월`;
