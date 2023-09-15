'use client';

import Link from 'next-intl/link';
import { FormEventHandler, ReactNode, useReducer, useState } from 'react';

import Dropdown from '@/components/common/Dropdown';
import ModalFrame from '@/components/modal/ModalFrame';
import MuiDateSelector from '@/components/mui/MuiDateSelector';
import BasicButton from '@/components/reservations/BasicButton';

import useModal from '@/hooks/useModal';

import { ReservationPostBody } from '@/types/reservation';

export default function AddReservationModal() {
  const { closeModal } = useModal();
  const [privacyChecked, togglePrivacyChecked] = useReducer((x) => !x, false);
  const [body, setBody] = useState<ReservationPostBody>(getDefaultBodyValue);

  const canSubmit =
    privacyChecked && body.title !== '' && body.contactEmail !== '' && body.professor !== '';

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    console.log(body);
  };

  const buildBodyValueSetter =
    <T extends keyof ReservationPostBody>(key: T) =>
    (value: ReservationPostBody[T]) =>
      setBody((body) => ({ ...body, [key]: value }));

  // 날짜 선택 모달용
  const setDate = (date: Date) => {
    let newStartTime = new Date(body.startTime);
    newStartTime.setFullYear(date.getFullYear());
    newStartTime.setMonth(date.getMonth());
    newStartTime.setDate(date.getDate());

    // 오늘을 선택헀으면 예약 불가 시간 필터링
    if (isSameDay(newStartTime, new Date())) {
      newStartTime = convertToFastestStartTime(newStartTime);
    }

    const endTime = getOptimalEndTime(body.startTime, body.endTime, newStartTime);

    const startTimeSetter = buildBodyValueSetter('startTime');
    const endTimeSetter = buildBodyValueSetter('endTime');
    startTimeSetter(newStartTime);
    endTimeSetter(endTime);
  };

  return (
    <ModalFrame onClose={closeModal}>
      <form
        className="font-noto bg-white w-[24.4rem] text-neutral-700 px-5 py-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-[1.25rem] mb-7">시설 예약</h2>

        <div className="flex flex-col items-start gap-1 mb-6">
          <InputWithLabel title="예약 날짜">
            <DateInput date={body.startTime} setDate={setDate} />
          </InputWithLabel>

          <div className="flex gap-3">
            <InputWithLabel title="시작 시간">
              <StartTimePicker
                startDate={body.startTime}
                endDate={body.endTime}
                setStartDate={buildBodyValueSetter('startTime')}
                setEndDate={buildBodyValueSetter('endTime')}
              />
            </InputWithLabel>
            <InputWithLabel title="사용 시간">
              <DurationPicker
                startTime={body.startTime}
                endTime={body.endTime}
                setEndTime={buildBodyValueSetter('endTime')}
              />
            </InputWithLabel>
          </div>

          <InputWithLabel title="매주 반복">
            <Dropdown
              contents={Array(14)
                .fill(0)
                .map((_, i) => i + 1 + '회')}
              selectedIndex={body.recurringWeeks}
              onClick={buildBodyValueSetter('recurringWeeks')}
            />
          </InputWithLabel>
        </div>

        <div className="flex flex-col gap-2 mb-6">
          <RequiredTextInputFieldset
            title="단체 이름"
            text={body.title}
            setText={buildBodyValueSetter('title')}
          />
          <RequiredTextInputFieldset
            title="연락가능 이메일"
            text={body.contactEmail}
            setText={buildBodyValueSetter('contactEmail')}
          />
          <RequiredTextInputFieldset
            title="연락가능 전화번호"
            text={body.contactPhone}
            setText={buildBodyValueSetter('contactPhone')}
          />
          <RequiredTextInputFieldset
            title="지도교수"
            text={body.professor}
            setText={buildBodyValueSetter('professor')}
          />

          <PurposeTextInputFieldset text={body.purpose} setText={buildBodyValueSetter('purpose')} />

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
        onClick={() => {
          openModal(
            <ModalFrame onClose={closeModal}>
              <MuiDateSelector
                date={date}
                setDate={(date) => {
                  setDate(date);
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
  title,
  text,
  setText,
}: {
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
        type="text"
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
  text?: string;
  setText: (text?: string) => void;
}) => {
  return (
    <fieldset className="text-sm font-normal">
      <legend className="mb-1">사용 목적</legend>
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

const getDefaultBodyValue = () => {
  const startTime = convertToFastestStartTime(new Date());

  const endTime = new Date(startTime);
  endTime.setTime(endTime.getTime() + 30 * 60 * 1000);

  return {
    roomId: 0,
    startTime,
    endTime,
    recurringWeeks: 0,
    title: '',
    contactEmail: '',
    contactPhone: '',
    professor: '',
  };
};

// date 이후 시점 중 가장 빠른 유효 startTime을 반환
const convertToFastestStartTime = (date: Date) => {
  let startTime = new Date(date);

  // 과거면 현재로 변경
  const now = new Date();
  if (startTime < now) startTime = now;

  startTime.setSeconds(0);
  startTime.setMilliseconds(0);

  // 가장 가까운 30분 혹은 0분으로 올림
  if (30 < startTime.getMinutes()) {
    startTime = new Date(startTime.getTime() + 30 * 60 * 1000);
    startTime.setMinutes(0);
  } else {
    startTime.setMinutes(30);
  }

  // 가장 늦은 시작 시간인 오후 10시 30분보다 늦다면 다음날 8시로 설정
  if (
    startTime.getHours() < 8 ||
    23 <= startTime.getHours() ||
    (startTime.getHours() === 22 && 30 < startTime.getMinutes())
  ) {
    startTime = new Date(startTime.getTime() + 24 * 60 * 60 * 1000);
    startTime.setHours(8);
    startTime.setMinutes(0);
  }
  return startTime;
};

// 기존 사용 시간을 최대한 유지한 채 새로운 startDate에 맞는 새로운 endDate를 반환
const getOptimalEndTime = (prevStartDate: Date, prevEndDate: Date, newStartDate: Date): Date => {
  // 사용 시간을 가능한 유지시킴
  const previousDiff = prevEndDate.getTime() - prevStartDate.getTime();
  let newEndDate = new Date(newStartDate);
  newEndDate.setTime(newStartDate.getTime() + previousDiff);

  // 유지시켰는데 오후 11시 이후면 오후 11시로 고정
  if (
    newEndDate.getDate() != newStartDate.getDate() ||
    (23 <= newEndDate.getHours() && 0 < newEndDate.getMinutes())
  ) {
    newEndDate = new Date(newStartDate);
    newEndDate.setHours(23);
    newEndDate.setMinutes(0);
  }

  return newEndDate;
};

const isSameDay = (lhs: Date, rhs: Date) => {
  return (
    lhs.getFullYear() === rhs.getFullYear() &&
    lhs.getMonth() === rhs.getMonth() &&
    lhs.getDate() === rhs.getDate()
  );
};
