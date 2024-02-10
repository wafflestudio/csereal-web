import { MouseEventHandler, ReactNode } from 'react';

import Dropdown from '@/components/common/Dropdown';
import ModalFrame from '@/components/modal/ModalFrame';
import MuiDateSelector from '@/components/mui/MuiDateSelector';

import useModal from '@/hooks/useModal';

import { ReservationPostBody } from '@/types/reservation';

import { isSameDay } from '@/utils/date';

import getOptimalEndTime from './getOptimalEndTime';
import { SetReservationBody } from './useAddReservation';

// TODO: 로직들 함수화
export default function TopForm({
  body,
  setBody,
  setDate,
}: {
  body: ReservationPostBody;
  setBody: SetReservationBody;
  setDate: (date: Date) => void;
}) {
  return (
    <div className="flex flex-col items-start gap-1 mb-6">
      <InputWithLabel title="예약 날짜">
        <DateInput date={new Date(body.startTime)} setDate={setDate} />
      </InputWithLabel>

      <div className="flex gap-3">
        <InputWithLabel title="시작 시간">
          <StartTimePicker
            startDate={new Date(body.startTime)}
            endDate={new Date(body.endTime)}
            setStartDate={(x) => setBody('startTime', x.toISOString())}
            setEndDate={(x) => setBody('endTime', x.toISOString())}
          />
        </InputWithLabel>
        <InputWithLabel title="사용 시간">
          <DurationPicker
            startTime={new Date(body.startTime)}
            endTime={new Date(body.endTime)}
            setEndTime={(x) => setBody('endTime', x.toISOString())}
          />
        </InputWithLabel>
      </div>

      <InputWithLabel title="매주 반복">
        <Dropdown
          contents={Array(14)
            .fill(0)
            .map((_, i) => i + 1 + '')}
          selectedIndex={body.recurringWeeks - 1}
          onClick={(x) => setBody('recurringWeeks', x + 1)}
        />
        회
      </InputWithLabel>
    </div>
  );
}

const InputWithLabel = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <fieldset className="flex items-center gap-2">
      <label className="font-normal">{title}: </label>
      {children}
    </fieldset>
  );
};

const DateInput = ({ date, setDate }: { date: Date; setDate: (date: Date) => void }) => {
  const { openModal, closeModal } = useModal();

  const labelStr = `${(date.getFullYear() + '').slice(2)}.${(date.getMonth() + 1 + '').padStart(
    2,
    '0',
  )}.${(date.getDate() + '').padStart(2, '0')}.`;

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    openModal(
      <ModalFrame onClose={closeModal}>
        <MuiDateSelector
          date={date}
          setDate={(date) => {
            date && setDate(date);
            closeModal();
          }}
          className="bg-neutral-100"
        />
      </ModalFrame>,
    );
  };

  return (
    <div>
      <button
        className="bg-white border border-neutral-200 rounded-sm font-normal flex items-center justify-between py-[.3125rem] pr-[.3125rem] pl-[.625rem] gap-2"
        onClick={handleClick}
      >
        {labelStr}
        <span className="material-symbols-outlined text-base">calendar_month</span>
      </button>
    </div>
  );
};

const StartTimePicker = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: {
  startDate: Date;
  endDate: Date;
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
}) => {
  const now = new Date();
  let contents = Array(15)
    .fill(0)
    .map((_, i) => i + 8)
    .reduce<[number, number][]>((prev, cur) => [...prev, [cur, 0], [cur, 30]], []);

  // 당일 예약이라면 가능한 시작 시간들을 필터링
  if (isSameDay(startDate, now)) {
    contents = contents.filter(([hour, minute]) => {
      return now.getHours() < hour || (now.getHours() === hour && now.getMinutes() <= minute);
    });
  }

  const contentsInStr = contents.map(
    ([hour, minute]) => `${(hour + '').padStart(2, '0')}:${(minute + '').padStart(2, '0')}`,
  );

  let selectedIndex = contents.findIndex(
    ([hour, minute]) => hour === startDate.getHours() && minute === startDate.getMinutes(),
  );
  if (selectedIndex === -1) selectedIndex = 0;

  const handleClick = (idx: number) => {
    const [hour, minute] = contents[idx];

    const newStartDate = new Date(startDate);
    newStartDate.setHours(hour);
    newStartDate.setMinutes(minute);
    setStartDate(newStartDate);

    const newEndDate = getOptimalEndTime({
      prevStart: startDate,
      prevEnd: endDate,
      newStart: newStartDate,
    });
    setEndDate(newEndDate);
  };

  return <Dropdown contents={contentsInStr} selectedIndex={selectedIndex} onClick={handleClick} />;
};

const DurationPicker = ({
  startTime,
  endTime,
  setEndTime,
}: {
  startTime: Date;
  endTime: Date;
  setEndTime: (date: Date) => void;
}) => {
  const endOfDayInMinute = 23 * 60; // 예약은 밤 11시까지만 가능
  const startTimeInMinute = startTime.getHours() * 60 + startTime.getMinutes();

  // 최대 3시간이라서 최대값은 6
  const remainingOptionCnt = Math.min(6, (endOfDayInMinute - startTimeInMinute) / 30);

  const contents = Array(remainingOptionCnt)
    .fill(0)
    .map((_, i) => {
      const minutes = (i + 1) * 30;
      if (minutes % 60 === 0) return minutes / 60 + '시간';
      else return minutes + '분';
    });

  const endTimeInMinute = endTime.getHours() * 60 + endTime.getMinutes();
  const selectedIndex = (endTimeInMinute - startTimeInMinute) / 30 - 1;

  const handleClick = (idx: number) => {
    const newEndTime = new Date(startTime);
    newEndTime.setTime(startTime.getTime() + (idx + 1) * 30 * 60 * 1000);
    setEndTime(newEndTime);
  };

  return <Dropdown contents={contents} selectedIndex={selectedIndex} onClick={handleClick} />;
};
