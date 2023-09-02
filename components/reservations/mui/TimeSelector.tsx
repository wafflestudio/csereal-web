import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { LocalizationProvider, StaticTimePicker, koKR } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

const darkTheme = createTheme(
  {
    palette: {
      mode: 'dark',
    },
  },
  koKR,
);

export default function TimeSelector({
  date,
  setDate,
  className,
  shouldDisableTime,
}: {
  date: Date;
  setDate: (date: Date) => void;
  className?: string;
  shouldDisableTime?: (date: Date) => boolean;
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
          shouldDisableTime={(value) => {
            if (!shouldDisableTime) return false;
            const date = value.toDate();
            return shouldDisableTime(date);
          }}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
