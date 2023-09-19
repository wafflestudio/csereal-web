'use client';

import { deleteMultipleNotices, patchMultipleNotices } from '@/apis/notice';

import useModal from '@/hooks/useModal';

import { notice } from '@/types/page';

import { getPath } from '@/utils/page';

import { BatchButton, CreateButton, EditButton } from './NoticeButtons';
import { errorToast, successToast } from '../common/toast';
import AlertModal from '../modal/AlertModal';

interface AdminFeaturesProps {
  isEditMode: boolean;
  toggleEditMode: () => void;
  selectedPostIds: Set<number>;
  resetSelectedPosts: () => void;
}

const noticePath = getPath(notice);

export default function AdminFeatures({
  isEditMode,
  toggleEditMode,
  selectedPostIds,
  resetSelectedPosts,
}: AdminFeaturesProps) {
  const { openModal } = useModal();

  const handleBatchDelete = async () => {
    try {
      await deleteMultipleNotices(Array.from(selectedPostIds));
      successToast('선택된 공지를 삭제했습니다.');
      resetSelectedPosts();
    } catch (error) {
      errorToast('공지를 삭제하지 못했습니다.');
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        throw error;
      }
    }
  };

  const handleBatchUnpin = async () => {
    try {
      await patchMultipleNotices(Array.from(selectedPostIds));
      successToast('선택된 공지를 고정 해제했습니다.');
      resetSelectedPosts();
    } catch (error) {
      errorToast('공지를 고정 해제하지 못했습니다.');
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        throw error;
      }
    }

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
