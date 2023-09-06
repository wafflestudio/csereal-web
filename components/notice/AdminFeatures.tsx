'use client';

import { revalidatePath } from 'next/cache';
import { Dispatch, SetStateAction, useState } from 'react';

import { deleteMultipleNotices, patchMultipleNotices } from '@/apis/notice';

import useCallbackOnce from '@/hooks/useCallbackOnce';
import useModal from '@/hooks/useModal';

import { notice } from '@/types/page';

import { getPath } from '@/utils/page';

import { BatchButton, CreateButton, EditButton } from './NoticeButtons';
import AlertModal from '../modal/AlertModal';

interface AdminFeaturesProps {
  isEditMode: boolean;
  setIsEditMode: Dispatch<SetStateAction<boolean>>;
  selectedPostIds: Set<number>;
  resetSelectedPosts: () => void;
}

const noticePath = getPath(notice);

export default function AdminFeatures({
  isEditMode,
  setIsEditMode,
  selectedPostIds,
  resetSelectedPosts,
}: AdminFeaturesProps) {
  const { openModal, closeModal } = useModal();

  const toggleEditMode = () => {
    resetSelectedPosts();
    setIsEditMode(!isEditMode);
  };

  const finishRequest = () => {
    resetSelectedPosts();
    revalidatePath('/notice');
    closeModal();
  };

  const handleBatchDelete = useCallbackOnce(async () => {
    await deleteMultipleNotices(Array.from(selectedPostIds));
    finishRequest();
  });

  const handleBatchUnpin = useCallbackOnce(async () => {
    await patchMultipleNotices(Array.from(selectedPostIds));
    finishRequest();
  });

  return (
    <div className="flex mt-12 mx-2.5">
      {isEditMode && (
        <div className="flex items-center gap-3">
          <SelectedCountStatus count={selectedPostIds.size} />
          <BatchButton
            disabled={selectedPostIds.size === 0}
            onClick={() =>
              openModal(
                <AlertModal
                  message="선택한 게시글을 모두 삭제하시겠습니까?"
                  confirmText="삭제"
                  onConfirm={handleBatchDelete}
                  onClose={closeModal}
                />,
              )
            }
          >
            일괄 삭제
          </BatchButton>
          <BatchButton
            disabled={selectedPostIds.size === 0}
            onClick={() =>
              openModal(
                <AlertModal
                  message="선택한 게시글을 모두 고정 해제하시겠습니까?"
                  confirmText="고정 해제"
                  onConfirm={handleBatchUnpin}
                  onClose={closeModal}
                />,
              )
            }
          >
            일괄 고정 해제
          </BatchButton>
        </div>
      )}
      <div className="ml-auto">
        <EditButton isEditMode={isEditMode} toggleEditMode={toggleEditMode} />
        <CreateButton mainPath={noticePath} disabled={isEditMode} />
      </div>
    </div>
  );
}

function SelectedCountStatus({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1 mr-3">
      <span className="material-symbols-rounded text-neutral-500 text-lg font-extralight">
        check_box
      </span>
      <span className="text-neutral-500 text-xs tracking-wide">{count}개 게시물 선택</span>
    </div>
  );
}
