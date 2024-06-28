import { MouseEventHandler, ReactNode } from 'react';

import Dropdown from '@/components/common/form/Dropdown';
import MuiDateSelector from '@/components/common/MuiDateSelector';
import ModalFrame from '@/components/modal/ModalFrame';

import { ReservationPostBody } from '@/types/reservation';

import { isSameDay } from '@/utils/date';
import useModal from '@/utils/hooks/useModal';

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
    <div className="mb-6 flex flex-col items-start gap-1">
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
        <InputWithLabel title="종료 시간">
          <EndTimePicker
            startTime={new Date(body.startTime)}
            endTime={new Date(body.endTime)}
            setEndTime={(x) => setBody('endTime', x.toISOString())}
          />
        </InputWithLabel>
      </div>

      <InputWithLabel title="매주 반복">
        <Dropdown
          contents={Array(20)
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
        className="flex items-center justify-between gap-2 rounded-sm border border-neutral-200 bg-white py-[.3125rem] pl-[.625rem] pr-[.3125rem] font-normal"
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

const EndTimePicker = ({
  startTime,
  endTime,
  setEndTime,
}: {
  startTime: Date;
  endTime: Date;
  setEndTime: (date: Date) => void;
}) => {
  // 예약은 밤 11시까지만 가능
  const firstMin = startTime.getHours() * 60 + startTime.getMinutes();
  const lastMin = 23 * 60;
  const contentSize = (lastMin - firstMin) / 30;

  // 선택 가능한 날짜 목록
  const dateList = [...Array(contentSize).keys()].map((i) => {
    const date = new Date(startTime);
    date.setMinutes(date.getMinutes() + (i + 1) * 30);
    return date;
  });

  // 드롭다운에 띄울 문자열 목록
  const format = (num: number) => num.toString().padStart(2, '0');
  const strList = dateList.map((date) => `${format(date.getHours())}:${format(date.getMinutes())}`);

  const idx = dateList.findIndex((date) => date.getTime() === endTime.getTime());
  const handleClick = (idx: number) => setEndTime(dateList[idx]);

  return <Dropdown contents={strList} selectedIndex={idx} onClick={handleClick} />;
};
