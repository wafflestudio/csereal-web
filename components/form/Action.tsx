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
    <ul className="absolute -top-2 -translate-y-full text-sm text-[#FF0000]">
      {Object.entries(errors).map(([fieldName, error], idx) => {
        if (error === undefined) {
          return null;
        }

        if (error.message) {
          return (
            <li key={idx}>
              {fieldName}: {error.message.toString()}
            </li>
          );
        }

        // 3 뎁스는 없겠지...
        return Object.entries(error).map(([fieldName2, error], idx) => (
          <li key={idx} className="ml-2">
            {fieldName}.{fieldName2}: {error?.message?.toString()}
          </li>
        ));
      })}
    </ul>
  );
};
