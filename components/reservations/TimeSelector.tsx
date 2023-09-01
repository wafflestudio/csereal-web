import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import {
  LocalizationProvider,
  DateCalendar,
  StaticTimePicker,
  TimeClock,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { useRef } from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function TimeSelector({
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
        <StaticTimePicker
          className={className}
          value={dayjs(date)}
          onAccept={(value) => {
            const date = value?.toDate();
            date && setDate(date);
          }}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
