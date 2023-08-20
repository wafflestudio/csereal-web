import { useReducer } from 'react';
import { Calendar } from 'react-calendar';

import { DAYS } from '@/utils/formatting';
import './Calendar.css';

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
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleExpanded();
        }}
        className={`rounded-sm border border-neutral-700 h-[1.875rem]
            outline-none font-noto text-xs font-normal hover:bg-neutral-100 w-[10rem]`}
      >
        {formatDate(date)}
      </button>
      <div className="relative">
        {expanded && (
          <Calendar
            className="absolute top-0 left-0"
            onChange={(value) => {
              if (value instanceof Date) {
                setDate(value);
                toggleExpanded();
              }
            }}
          />
        )}
      </div>
    </div>
  );
}

const formatDate = (date: Date) => {
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${
    DAYS[date.getDay()]
  }요일`;
};
