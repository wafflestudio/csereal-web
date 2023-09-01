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
      <form className="bg-white w-[24.4rem] text-neutral-700 px-5 py-6">
        <h2 className="text-[1.25rem] mb-7">시설 예약</h2>
        <PrivacyFieldset checked={privacyChecked} toggleChecked={togglePrivacyChecked} />
        <BottomToolbar closeModal={closeModal} handleSubmit={handleSubmit} />
      </form>
    </ModalFrame>
  );
}

const PrivacyFieldset = ({
  checked,
  toggleChecked,
}: {
  checked: boolean;
  toggleChecked: () => void;
}) => {
  return (
    <fieldset className="flex flex-col gap-1">
      <legend className="text-sm font-normal">개인정보 수집 및 이용동의</legend>

      <div className="flex items-center gap-1">
        <span
          onClick={toggleChecked}
          className="material-symbols-outlined text-base text-neutral-500 hover:cursor-pointer select-none"
        >
          {checked ? 'check_box' : 'check_box_outline_blank'}
        </span>
        <Link className="text-sm font-normal" href="/reservations/privacy-policy" target="_blank">
          개인정보 수집이용에 관한 사항(필수)<span className="text-main-orange">*</span>
        </Link>
        <span className="material-symbols-outlined text-md text-neutral-400">chevron_right</span>
      </div>
    </fieldset>
  );
};

const BottomToolbar = ({
  closeModal,
  handleSubmit,
}: {
  closeModal: () => void;
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className="flex justify-end h-[1.875rem] gap-2">
      <BasicButton className="w-[2.75rem]" onClick={closeModal}>
        취소
      </BasicButton>
      <BasicButton className="w-[4.25rem]" onClick={handleSubmit}>
        예약하기
      </BasicButton>
    </div>
  );
};
