import { LocalizationProvider, StaticDateTimePicker, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { koKR } from '@mui/x-date-pickers/locales';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { useReducer } from 'react';

export default function DateSelector({
  date,
  setDate,
  hideTime = false,
}: {
  date: Date;
  setDate: (date: Date) => void;
  hideTime?: boolean;
}) {
  const [expanded, toggleExpanded] = useReducer((x) => !x, false);

  return (
    <div>
      <div className="flex gap-[.62rem]">
        <BorderButton text={formatDate(date)} onClick={toggleExpanded} />
        {!hideTime && <BorderButton text={formatTime(date)} onClick={toggleExpanded} />}
      </div>
      <div className="relative">
        {expanded && (
          <DateTimePicker
            date={date}
            setDate={setDate}
            close={toggleExpanded}
            hideTime={hideTime}
          />
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

const DateTimePicker = ({
  date,
  setDate,
  close,
  hideTime,
}: {
  date: Date;
  setDate: (date: Date) => void;
  close: () => void;
  hideTime: boolean;
}) => {
  return (
    <LocalizationProvider
      adapterLocale="ko"
      dateAdapter={AdapterDayjs}
      localeText={koKR.components.MuiLocalizationProvider.defaultProps.localeText}
    >
      <div className="flex flex-col absolute top-1 left-0 z-10 border border-neutral-700 bg-white">
        {hideTime ? (
          <StaticDatePicker
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
        ) : (
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
        )}

        <button className="self-end p-4" onClick={close}>
          완료
        </button>
      </div>
    </LocalizationProvider>
  );
};

const formatDate = (date: Date) => {
  const DAYS = ['일', '월', '화', '수', '목', '금', '토'];
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${
    DAYS[date.getDay()]
  }요일`;
};

const formatTime = (date: Date) => {
  return `${(date.getHours() + '').padStart(2, '0')}:${(date.getMinutes() + '').padStart(2, '0')}`;
};
