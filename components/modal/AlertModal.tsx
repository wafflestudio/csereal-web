import ModalFrame from './ModalFrame';

export interface AlertModalProps {
  message: string;
  cancelText?: string;
  confirmText?: string;
  onConfirm: () => void;
  onClose: () => void;
}

export default function AlertModal({
  message,
  cancelText = '취소',
  confirmText = '확인',
  onConfirm,
  onClose,
}: AlertModalProps) {
  return (
    <ModalFrame onClose={onClose}>
      <div className="px-10 py-6">
        <DialogMessage message={message} />
        <div className="text-right">
          <CancelButton text={cancelText} onClick={onClose} />
          <ConfirmButton
            text={confirmText}
            onClick={() => {
              onConfirm();
              onClose();
            }}
          />
        </div>
      </div>
    </ModalFrame>
  );
}

function DialogMessage({ message }: { message: string }) {
  return <p className="mt-1 mb-6">{message}</p>;
}

function CancelButton({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <button
      className={`px-[.875rem] h-[2.1875rem] rounded-[.0625rem] border border-neutral-200 bg-neutral-100 hover:bg-neutral-200 font-medium text-xs text-neutral-500`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

function ConfirmButton({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <button
      className={`ml-2.5 px-[.875rem] h-[2.1875rem] rounded-[.0625rem] bg-neutral-700 hover:bg-neutral-500 font-medium text-xs text-white`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
