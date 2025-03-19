'use client';

import { useTransition } from 'react';

import AlertModal from '@/components/modal/AlertModal';
import useModal from '@/utils/hooks/useModal';
import { errorToast, successToast } from '@/utils/toast';

export default function PostDeleteButton({
  id,
  deleteAction,
}: {
  id: string;
  deleteAction: (id: number) => Promise<{ message: string } | undefined>;
}) {
  const { openModal } = useModal();
  const [, startTransition] = useTransition();

  const idInNumber = +id;
  if (Number.isNaN(idInNumber)) {
    errorToast('유효하지 않은 id: ' + id);
    return;
  }

  const handleDelete = async () => {
    startTransition(async () => {
      const result = await deleteAction(idInNumber);
      if (result) {
        errorToast(result.message);
      } else {
        successToast('게시글을 삭제했습니다.');
      }
    });
  };

  return (
    <button
      onClick={() =>
        openModal(
          <AlertModal
            message="선택한 게시글을 삭제하시겠습니까?"
            confirmText="삭제"
            onConfirm={handleDelete}
          />,
        )
      }
      className="mr-3 h-[35px] rounded-[0.0625rem] border border-neutral-300 bg-neutral-100 px-[17px] text-md font-semibold tracking-[0.1em] text-neutral-500 hover:bg-neutral-200"
    >
      삭제
    </button>
  );
}
