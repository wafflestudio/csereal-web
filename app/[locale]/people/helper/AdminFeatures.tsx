'use client';

import { useRouter } from '@/navigation';

import { GrayButton } from '@/components/common/Buttons';
import AlertModal from '@/components/modal/AlertModal';

import useModal from '@/utils/hooks/useModal';
import { CustomError, handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

interface AdminFeaturesProps {
  onDelete: () => Promise<CustomError>;
  editHref: string;
}

export default function AdminFeatures({ onDelete, editHref }: AdminFeaturesProps) {
  const router = useRouter();
  const { openModal } = useModal();

  const handleDelete = async () => {
    try {
      handleServerAction(await onDelete());
      successToast('삭제했습니다.');
    } catch (error) {
      errorToast('삭제하지 못했습니다.');
    }
  };

  return (
    <div className="mt-16 flex gap-3">
      <GrayButton
        title="삭제"
        onClick={() =>
          openModal(
            <AlertModal message="삭제하시겠습니까?" confirmText="삭제" onConfirm={handleDelete} />,
          )
        }
      />
      <GrayButton title="편집" onClick={() => router.push(editHref)} />
    </div>
  );
}
