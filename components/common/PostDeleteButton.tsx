'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

import { newsDeleteAction } from '@/actions/newsActions';
import { noticeDeleteAction } from '@/actions/noticeActions';
import { deleteRequestWithCookie } from '@/apis';

import useModal from '@/hooks/useModal';

import { errorToast, successToast } from '../../utils/toast';
import AlertModal from '../modal/AlertModal';

export default function PostDeleteButton({ postType, id }: { postType: string; id: string }) {
  const { openModal } = useModal();
  const [_, startTransition] = useTransition();

  const router = useRouter();

  const idInNumber = +id;
  if (Number.isNaN(idInNumber)) {
    errorToast('유효하지 않은 id: ' + id);
    return;
  }

  const handleDelete = async () => {
    startTransition(async () => {
      switch (postType) {
        case 'notice': {
          const result = await noticeDeleteAction(idInNumber);
          result ? errorToast(result.message) : successToast('게시글을 삭제했습니다.');
          break;
        }
        case 'news': {
          const result = await newsDeleteAction(idInNumber);
          result ? errorToast(result.message) : successToast('게시글을 삭제했습니다.');
          break;
        }
      }
    });
    // try {
    //   await deleteRequestWithCookie(`/${postType}/${id}`);
    //   successToast('게시글을 삭제했습니다.');
    //   router.replace(`/community/${postType}`);
    // } catch (error) {
    //   errorToast('게시글을 삭제하지 못했습니다.');
    //   if (error instanceof Error) {
    //     console.log(error.message);
    //   } else {
    //     throw error;
    //   }
    // }
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
      className="mr-3 px-[17px] h-[35px] rounded-[0.0625rem] border border-neutral-500 bg-neutral-100 hover:bg-neutral-500 font-noto font-bold text-sm text-neutral-500 hover:text-white tracking-[0.02em]"
    >
      삭제
    </button>
  );
}
