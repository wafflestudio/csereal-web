'use client';

import Link from 'next-intl/link';
import { ReactNode } from 'react';

import Dropdown from '@/components/common/Dropdown';
import ModalFrame from '@/components/modal/ModalFrame';
import MuiDateSelector from '@/components/mui/MuiDateSelector';
import BasicButton from '@/components/reservations/BasicButton';

import useModal from '@/hooks/useModal';

import { isSameDay } from '@/utils/date';

import getOptimalEndTime from './getOptimalEndTime';
import useAddReservation from './useAddReservation';

export default function AddReservationModal({ roomId }: { roomId: number }) {
  const { closeModal } = useModal();
  const { handleSubmit, body, setBody, setDate, privacyChecked, togglePrivacyChecked } =
    useAddReservation(roomId);

  return (
    <ModalFrame onClose={closeModal}>
      <form
        className="font-noto bg-white w-[24.4rem] text-neutral-700 px-5 py-6 border-main-orange border-t-[3px] border-b"
        onSubmit={handleSubmit}
      >
        <h2 className="text-[1.25rem] mb-7">시설 예약</h2>

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
                .map((_, i) => i + 1 + '회')}
              selectedIndex={body.recurringWeeks - 1}
              onClick={(x) => setBody('recurringWeeks', x + 1)}
            />
          </InputWithLabel>
        </div>

        <div className="flex flex-col gap-2 mb-6">
          <RequiredTextInputFieldset
            type="text"
            title="단체 이름"
            text={body.title}
            setText={(x) => setBody('title', x)}
          />
          <RequiredTextInputFieldset
            type="email"
            title="연락가능 이메일"
            text={body.contactEmail}
            setText={(x) => setBody('contactEmail', x)}
          />
          <RequiredTextInputFieldset
            type="tel"
            title="연락가능 전화번호"
            text={body.contactPhone}
            setText={(x) => setBody('contactPhone', x)}
          />
          <RequiredTextInputFieldset
            type="text"
            title="지도교수"
            text={body.professor}
            setText={(x) => setBody('professor', x)}
          />

          <PurposeTextInputFieldset text={body.purpose} setText={(x) => setBody('purpose', x)} />

          <div className="flex itmes-center gap-1 text-normal text-neutral-500">
            <span className="material-symbols-outlined text-base my-auto">error</span>
            <p className="text-sm ">예약 시간 20분 후까지 사용하지 않을 시 예약이 취소됩니다.</p>
          </div>
        </div>

        <PrivacyFieldset checked={privacyChecked} toggleChecked={togglePrivacyChecked} />

        <div className="flex justify-end h-[1.875rem] gap-2">
          <BasicButton className="w-[2.75rem]" onClick={closeModal}>
            취소
          </BasicButton>
          <BasicButton type="submit" className={`w-[4.25rem]`}>
            예약하기
          </BasicButton>
        </div>
      </form>
    </ModalFrame>
  );
}

const InputWithLabel = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <fieldset className="flex items-center gap-2">
      <label className="text-sm font-normal">{title}: </label>
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

  return (
    <div>
      <button
        className="border border-neutral-300 rounded-sm text-sm font-normal flex items-center justify-between py-[.3125rem] pr-[.3125rem] pl-[.625rem] gap-2"
        onClick={(e) => {
          e.preventDefault();
          openModal(
            <ModalFrame onClose={closeModal}>
              <MuiDateSelector
                date={date}
                setDate={(date) => {
                  date && setDate(date);
                  closeModal();
                }}
                className="bg-white"
              />
            </ModalFrame>,
          );
        }}
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

    const newEndDate = getOptimalEndTime(startDate, endDate, newStartDate);
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

const RequiredTextInputFieldset = ({
  type,
  title,
  text,
  setText,
}: {
  type: string;
  title: string;
  text: string;
  setText: (text: string) => void;
}) => {
  return (
    <fieldset className="text-sm font-normal">
      <legend className="mb-1">
        {title}
        <span className="text-main-orange">*</span>
      </legend>
      <input
        type={type}
        className={`w-full rounded-sm border border-neutral-200 bg-neutral-50 h-[1.75rem]
            outline-none pl-2 autofill-bg-white`}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
      />
    </fieldset>
  );
};

const PurposeTextInputFieldset = ({
  text,
  setText,
}: {
  text: string;
  setText: (text: string) => void;
}) => {
  return (
    <fieldset className="text-sm font-normal">
      <legend className="mb-1">
        사용 목적<span className="text-main-orange">*</span>
      </legend>
      <textarea
        className={`w-full rounded-sm border border-neutral-200 bg-neutral-50
            outline-none p-1 h-14`}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </fieldset>
  );
};

const PrivacyFieldset = ({
  checked,
  toggleChecked,
}: {
  checked: boolean;
  toggleChecked: () => void;
}) => {
  return (
    <fieldset className="flex flex-col mb-6 text-sm font-normal">
      <legend className="mb-1">개인정보 수집 및 이용동의</legend>

      <div className="flex items-center gap-3">
        <div
          className="flex items-center gap-1 hover:cursor-pointer select-none"
          onClick={toggleChecked}
        >
          <span className="material-symbols-outlined text-base text-neutral-500">
            {checked ? 'check_box' : 'check_box_outline_blank'}
          </span>
          <p>
            개인정보 수집이용에 관한 사항(필수)<span className="text-main-orange">*</span>
          </p>
        </div>

        <Link
          className="text-neutral-400 flex items-center"
          href="/reservations/privacy-policy"
          target="_blank"
        >
          자세히
          <span className="material-symbols-outlined text-xs">chevron_right</span>
        </Link>
      </div>
    </fieldset>
  );
};
