'use client';

import Link from 'next/link';
import { MouseEventHandler, useReducer, useState } from 'react';

import useModal from '@/hooks/useModal';

import BasicButton from './BasicButton';
import ModalFrame from '../modal/ModalFrame';

export default function AddReservationModal() {
  const { closeModal } = useModal();
  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
  };
  const [privacyChecked, togglePrivacyChecked] = useReducer((x) => !x, false);

  return (
    <ModalFrame onClose={closeModal}>
      <form
        className="font-noto bg-white w-[24.4rem] text-neutral-700 px-5 py-6"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2 className="text-[1.25rem] mb-7">시설 예약</h2>

        <div className="flex flex-col gap-2 mb-6">
          <RequiredTextInputFieldset title="단체 이름" />
          <RequiredTextInputFieldset title="연락가능 이메일" />
          <RequiredTextInputFieldset title="연락가능 전화번호" />
          <RequiredTextInputFieldset title="지도교수" />
          <PurposeTextInputFieldset />

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
          <BasicButton type="submit" className="w-[4.25rem]">
            예약하기
          </BasicButton>
        </div>
      </form>
    </ModalFrame>
  );
}

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
            outline-none pl-2`}
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
