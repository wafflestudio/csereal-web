import { experimental_useFormStatus as useFormStatus } from 'react-dom';

import useModal from '@/hooks/useModal';

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

  return (
    <ModalFrame onClose={closeModal}>
      <form
        className="px-10 py-6 bg-white"
        action={() => {
          onConfirm();
          closeModal();
        }}
      >
        <AlertMessage message={message} />
        <div className="text-right">
          <CancelButton
            text={cancelText}
            onClick={() => {
              onCancel?.();
              closeModal();
            }}
          />
          <ConfirmButton text={confirmText} />
        </div>
      </form>
    </ModalFrame>
  );
}

function AlertMessage({ message }: { message: string }) {
  return <p className="mt-1 mb-6">{message}</p>;
}

function CancelButton({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <button
      className={`px-[17px] h-[2.1875rem] rounded-[.0625rem] border border-neutral-200 bg-neutral-100 hover:bg-neutral-200 font-noto font--bold text-xs text-neutral-500 hover:text-neutral-700`}
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  );
}

function ConfirmButton({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      className={`ml-2.5 px-[17px] h-[2.1875rem] rounded-[.0625rem] bg-neutral-700 hover:bg-neutral-500 font-bold text-xs text-white`}
      disabled={pending}
      type="submit"
    >
      {text}
    </button>
  );
}
