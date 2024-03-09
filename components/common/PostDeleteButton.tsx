'use client';

import { useTransition } from 'react';

import { newsDeleteAction } from '@/actions/newsActions';
import { deleteNoticeAction } from '@/actions/noticeActions';
import { seminarDeleteAction } from '@/actions/seminarActions';

import useModal from '@/utils/hooks/useModal';

import { errorToast, successToast } from '../../utils/toast';
import AlertModal from '../modal/AlertModal';

export default function PostDeleteButton({ postType, id }: { postType: string; id: string }) {
  const { openModal } = useModal();
  const [, startTransition] = useTransition();

  const idInNumber = +id;
  if (Number.isNaN(idInNumber)) {
    errorToast('유효하지 않은 id: ' + id);
    return;
  }

  const handleDelete = async () => {
    startTransition(async () => {
      switch (postType) {
        case 'notice': {
          const result = await deleteNoticeAction(idInNumber);
          result ? errorToast(result.message) : successToast('게시글을 삭제했습니다.');
          break;
        }
        case 'news': {
          const result = await newsDeleteAction(idInNumber);
          result ? errorToast(result.message) : successToast('게시글을 삭제했습니다.');
          break;
        }
        case 'seminar': {
          const result = await seminarDeleteAction(idInNumber);
          result ? errorToast(result.message) : successToast('게시글을 삭제했습니다.');
          break;
        }
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
      className=" mr-3 h-[35px] rounded-[0.0625rem] border border-neutral-500 bg-neutral-100 px-[17px] text-sm font-bold tracking-[0.02em] text-neutral-500 hover:bg-neutral-500 hover:text-white"
    >
      삭제
    </button>
  );
}
