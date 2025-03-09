import { Dispatch } from 'react';

import { batchDeleteNoticeAction, unpinNoticeAction } from '@/actions/notice';
import AlertModal from '@/components/modal/AlertModal';
import useModal from '@/utils/hooks/useModal';
import { errorToast, successToast } from '@/utils/toast';

import { BatchButton, CreateButton, EditButton } from './EditButtons';
import { PostSelectAction } from './usePostSelect';

interface AdminFeaturesProps {
  isEditMode: boolean;
  toggleEditMode: () => void;
  selectedIds: Set<number>;
  dispatchIds: Dispatch<PostSelectAction>;
}

export default function AdminFeatures({
  isEditMode,
  toggleEditMode,
  selectedIds,
  dispatchIds,
}: AdminFeaturesProps) {
  const { openModal } = useModal();

  const handleBatchDelete = async () => {
    const result = await batchDeleteNoticeAction(selectedIds);
    if (result?.message) {
      errorToast('공지를 삭제하지 못했습니다: ' + result.message);
    } else {
      successToast('선택된 공지를 삭제했습니다.');
      dispatchIds({ type: 'RESET' });
    }
  };

  const handleBatchUnpin = async () => {
    const result = await unpinNoticeAction(selectedIds);
    if (result?.message) {
      errorToast('공지를 고정 해제하지 못했습니다: ' + result.message);
    } else {
      successToast('선택된 공지를 고정 해제했습니다.');
      dispatchIds({ type: 'RESET' });
    }
  };

  return (
    <div className="mx-2.5 mt-12 flex">
      {isEditMode && (
        <div className="flex items-center gap-4">
          <SelectedCountStatus count={selectedIds.size} />
          <BatchButton
            disabled={selectedIds.size === 0}
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
            disabled={selectedIds.size === 0}
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
        <CreateButton disabled={isEditMode} />
      </div>
    </div>
  );
}

function SelectedCountStatus({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1">
      <span className="material-symbols-rounded text-lg font-extralight text-neutral-500">
        check_box
      </span>
      <span className="text-sm tracking-wide text-neutral-500">{count}개 게시물 선택</span>
    </div>
  );
}
