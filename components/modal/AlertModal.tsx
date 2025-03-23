'use client';

import { useEffect, useRef } from 'react';

import useModal from '@/utils/hooks/useModal';

import { ConfirmButton, GrayButton } from '../common/Buttons';
import ModalFrame from './ModalFrame';

interface AlertModalProps {
  message: string;
  noText?: string;
  yesText?: string;
  yesCallback: () => void;
  noCallback?: () => void;
}

export default function AlertModal({
  message,
  noText = '취소',
  yesText = '확인',
  yesCallback,
  noCallback,
}: AlertModalProps) {
  const { closeModal } = useModal();
  const confirmButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    confirmButtonRef.current?.focus();
  }, []);

  return (
    <ModalFrame onClose={closeModal}>
      <form
        className="bg-white px-10 py-6"
        action={() => {
          yesCallback();
          closeModal();
        }}
      >
        <AlertMessage message={message} />
        <div className="text-right">
          <GrayButton
            title={noText}
            onClick={() => {
              noCallback?.();
              closeModal();
            }}
          />
          <ConfirmButton title={yesText} buttonRef={confirmButtonRef} />
        </div>
      </form>
    </ModalFrame>
  );
}

function AlertMessage({ message }: { message: string }) {
  return <p className="mb-6 mt-1 text-neutral-800">{message}</p>;
}
