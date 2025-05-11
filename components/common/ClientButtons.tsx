import { MouseEventHandler } from 'react';
import { useFormStatus } from 'react-dom';

import { GrayButton } from '@/components/common/Buttons';
import AlertModal from '@/components/modal/AlertModal';
import useModal from '@/utils/hooks/useModal';
import { CustomError } from '@/utils/serverActionError';

export const ConfirmButton = ({
  title,
  ref,
  onClick,
}: {
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  ref?: React.RefObject<HTMLButtonElement | null>;
}) => {
  const { pending } = useFormStatus();

  return (
    <button
      className={`ml-2.5 h-[2.1875rem] rounded-[.0625rem] bg-neutral-700 px-[.875rem] py-[.3125rem] text-md font-medium leading-[1.5rem] text-white hover:bg-neutral-500 ${
        pending && 'opacity-30'
      }`}
      disabled={pending}
      type="submit"
      onClick={onClick}
      ref={ref}
    >
      {title}
    </button>
  );
};

export function DeleteButton({ onDelete }: { onDelete: () => Promise<CustomError | void> }) {
  const { openModal } = useModal();

  return (
    <GrayButton
      title="삭제"
      onClick={() =>
        openModal(
          <AlertModal message="삭제하시겠습니까?" confirmText="삭제" onConfirm={onDelete} />,
        )
      }
    />
  );
}
