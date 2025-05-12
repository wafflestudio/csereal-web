import '@/components/common/calendar.css';

import dayjs, { Dayjs } from 'dayjs';
import Calendar from 'react-calendar';

export default function ReactCalendar({
  date,
  setDate,
  className,
  enablePast,
}: {
  date: Date;
  setDate: (date?: Date) => void;
  className?: string;
  enablePast?: boolean;
}) {
  const shouldDisableDate = (day: Dayjs) => {
    if (enablePast) return false;

    const date = day.toDate();

    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    return date < today;
  };

  return (
    <Calendar
      className={className}
      onChange={(value) => {
        const date = value as Date;
        if (date) setDate(date);
      }}
      value={date}
      tileDisabled={({ date }) => shouldDisableDate(dayjs(date))}
    />
  );
}
