import { MouseEventHandler } from 'react';

import { Link } from '@/navigation';

import useModal from '@/utils/hooks/useModal';
import { CustomError, handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

import AlertModal from '../modal/AlertModal';

export function GrayButton({
  title,
  disabled,
  onClick,
}: {
  title: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className={`rounded-[.0625rem] border-[1px] border-neutral-200 bg-neutral-100 px-[.875rem] py-[.3125rem] text-md font-medium leading-[1.5rem] text-neutral-500 enabled:hover:bg-neutral-200 ${
        disabled && 'opacity-30'
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export function BlackButton({
  title,
  disabled,
  onClick,
}: {
  title: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className={`rounded-[.0625rem] bg-neutral-700 px-[.875rem] py-[.34rem] text-xs font-bold leading-[1.5rem] text-white enabled:hover:bg-neutral-500 ${
        disabled && 'opacity-30'
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export function CreateButton({ href }: { href: string }) {
  return (
    <div className="mb-9 max-w-[768px] text-right">
      <Link href={href} className="inline-block">
        <BlackButton title="추가하기" />
      </Link>
    </div>
  );
}

export function DeleteButton({ onDelete }: { onDelete: () => Promise<CustomError | void> }) {
  const { openModal } = useModal();

  const handleDelete = async () => {
    try {
      handleServerAction(await onDelete());
      successToast('구성원을 삭제했습니다.');
    } catch (error) {
      errorToast('구성원을 삭제하지 못했습니다.');
    }
  };

  return (
    <GrayButton
      title="삭제"
      onClick={() =>
        openModal(
          <AlertModal
            message="구성원을 삭제하시겠습니까?"
            confirmText="삭제"
            onConfirm={handleDelete}
          />,
        )
      }
    />
  );
}

export function EditButton({ href }: { href: string }) {
  return (
    <Link href={href} className="inline-block">
      <GrayButton title="편집" />
    </Link>
  );
}
