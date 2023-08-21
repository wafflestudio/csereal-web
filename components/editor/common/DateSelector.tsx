import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { koKR } from '@mui/x-date-pickers/locales';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { useReducer } from 'react';

import { DAYS } from '@/utils/formatting';

export default function DateSelector({
  date,
  setDate,
}: {
  date: Date;
  setDate: (date: Date) => void;
}) {
  const [expanded, toggleExpanded] = useReducer((x) => !x, false);

  return (
    <div>
      <div className="flex gap-[.62rem]">
        <BorderButton text={formatDate(date)} onClick={toggleExpanded} />
        <BorderButton text={formatTime(date)} onClick={toggleExpanded} />
      </div>
      <div className="relative">
        {expanded && (
          <LocalizationProvider
            adapterLocale="ko"
            dateAdapter={AdapterDayjs}
            localeText={koKR.components.MuiLocalizationProvider.defaultProps.localeText}
          >
            <div className="flex flex-col absolute top-1 left-0 z-10 border border-neutral-700 bg-white">
              <StaticDateTimePicker
                value={dayjs(date)}
                onChange={(value) => {
                  const date = value?.toDate();
                  date && setDate(date);
                }}
                slotProps={{
                  actionBar: {
                    actions: [],
                  },
                }}
              />
              <button className="self-end p-4" onClick={toggleExpanded}>
                완료
              </button>
            </div>
          </LocalizationProvider>
        )}
      </div>
    </div>
  );
}

const BorderButton = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`rounded-sm border border-neutral-700 h-[1.875rem]
            outline-none font-noto text-xs font-normal hover:bg-neutral-100 px-4`}
    >
      {text}
    </button>
  );
};

const formatDate = (date: Date) => {
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${
    DAYS[date.getDay()]
  }요일`;
};

const formatTime = (date: Date) => {
  return `${(date.getHours() + '').padStart(2, '0')}:${(date.getMinutes() + '').padStart(2, '0')}`;
};
