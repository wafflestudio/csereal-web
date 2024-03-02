import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';
import { useRef } from 'react';

import { useOutClickAlerter } from '@/utils/hooks/useOutClickAlerter';

export default function MuiDateSelector({
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
  const ref = useRef(null);
  useOutClickAlerter(ref, () => setDate());

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
    <LocalizationProvider adapterLocale="ko" dateAdapter={AdapterDayjs}>
      <DateCalendar
        ref={ref}
        className={className}
        value={dayjs(date)}
        views={['day']}
        onChange={(value) => {
          const date = value?.toDate();
          date && setDate(date);
        }}
        shouldDisableDate={shouldDisableDate}
        showDaysOutsideCurrentMonth
      />
    </LocalizationProvider>
  );
}
