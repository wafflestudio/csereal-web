'use client';

import { Link } from '@/navigation';

import { BlackButton, GrayButton } from '@/components/common/Buttons';
import AlertModal from '@/components/modal/AlertModal';

import { FacultyStatus } from '@/types/people';

import useModal from '@/utils/hooks/useModal';
import { CustomError, handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

export function CreateButton({ pathname, status }: { pathname: string; status?: FacultyStatus }) {
  return (
    <div className="mb-9 max-w-[768px] text-right">
      <Link href={{ pathname, query: { status } }} className="inline-block">
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
