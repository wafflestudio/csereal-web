import { useFormContext } from 'react-hook-form';

import { BlackButton, GrayButton } from '@/components/common/Buttons';
import AlertModal from '@/components/modal/AlertModal';
import useModal from '@/utils/hooks/useModal';

interface Props {
  onCancel: () => void;
  onDelete?: () => Promise<void>;
  onSubmit: () => Promise<void>;
  submitLabel?: string;
}

export default function Action({ onCancel, onDelete, onSubmit, submitLabel }: Props) {
  const {
    formState: { isSubmitting, isDirty },
  } = useFormContext();
  const { openModal } = useModal();

  return (
    <div className="relative mb-6 flex items-center justify-end gap-3">
      <ErrorMessages />
      <GrayButton
        title="취소"
        disabled={isSubmitting}
        onClick={(e) => {
          e.preventDefault();
          if (isDirty) {
            openModal(<AlertModal message="편집중인 내용이 사라집니다." onConfirm={onCancel} />);
          } else {
            onCancel();
          }
        }}
      />
      {onDelete && (
        <BlackButton
          title="삭제"
          disabled={isSubmitting}
          onClick={(e) => {
            e.preventDefault();
            openModal(<AlertModal message="게시물을 삭제하시겠습니까?" onConfirm={onDelete} />);
          }}
        />
      )}
      <BlackButton title={submitLabel ?? '저장하기'} disabled={isSubmitting} onClick={onSubmit} />
    </div>
  );
}

const ErrorMessages = () => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <ul className="text-md text-[#FF0000]">
      {Object.values(errors).map((error, idx) => (
        <li key={idx}>{error?.message?.toString()}</li>
      ))}
    </ul>
  );
};
