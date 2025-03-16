'use client';

import { useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';

import useModal from '@/utils/hooks/useModal';

import { ConfirmButton, GrayButton } from '../common/Buttons';
import ModalFrame from './ModalFrame';

interface AlertModalProps {
  message: string;
  cancelText?: string;
  confirmText?: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

export default function AlertModal({
  message,
  cancelText = '취소',
  confirmText = '확인',
  onCancel,
  onConfirm,
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
          onConfirm();
          closeModal();
        }}
      >
        <AlertMessage message={message} />
        <div className="text-right">
          <GrayButton
            title={cancelText}
            onClick={() => {
              onCancel?.();
              closeModal();
            }}
          />
          <ConfirmButton title={confirmText} buttonRef={confirmButtonRef} />
        </div>
      </form>
    </ModalFrame>
  );
}

function AlertMessage({ message }: { message: string }) {
  return <p className="mb-6 mt-1 text-neutral-800">{message}</p>;
}
