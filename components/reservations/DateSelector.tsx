import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function DateSelector({
  date,
  setDate,
  className,
}: {
  date: Date;
  setDate: (date: Date) => void;
  className?: string;
}) {
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
          showDaysOutsideCurrentMonth
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
