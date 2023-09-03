import { Reservation } from '@/types/reservation';

import CalendarContent from './calendar/CalendarContent';
import Toolbar from './calendar/CalendarToolbar';

export default function ReservationCalendar({
  startDate,
  selectedDate,
  reservations,
}: {
  startDate: Date;
  selectedDate: Date;
  reservations: Reservation[];
}) {
  const headerText = `${selectedDate.getFullYear()}/${(selectedDate.getMonth() + 1 + '').padStart(
    2,
    '0',
  )}`;
  return (
    <div className="w-[47.5rem]">
      <h3 className="text-2xl font-bold text-neutral-800 mb-4">{headerText}</h3>
      <Toolbar date={selectedDate} />
      <CalendarContent startDate={startDate} reservations={reservations} />
    </div>
  );
}
