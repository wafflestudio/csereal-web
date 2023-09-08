import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function MuiDateSelector({
  date,
  setDate,
  className,
}: {
  date: Date;
  setDate: (date: Date) => void;
  className?: string;
}) {
  const shouldDisableDate = (day: Dayjs) => {
    const date = day.toDate();

    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    return date < today;
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <LocalizationProvider adapterLocale="ko" dateAdapter={AdapterDayjs}>
        <DateCalendar
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
    </ThemeProvider>
  );
}
