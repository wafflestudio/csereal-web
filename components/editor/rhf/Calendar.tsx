import { useController } from 'react-hook-form';

import MuiDateSelector from '@/components/common/MuiDateSelector';
import ModalFrame from '@/components/modal/ModalFrame';
import useModal from '@/utils/hooks/useModal';

interface Props {
  name: string;
}

export default function Calendar({ name }: Props) {
  const {
    field: { value, onChange },
  } = useController({ name });
  const date = value as Date;
  const { openModal, closeModal } = useModal();

  const labelStr = `${(date.getFullYear() + '').slice(2)}.${(date.getMonth() + 1 + '').padStart(
    2,
    '0',
  )}.${(date.getDate() + '').padStart(2, '0')}.`;

  return (
    <button
      className="flex items-center justify-between gap-2 self-start rounded-sm border border-neutral-300 py-[.3125rem] pl-[.625rem] pr-[.3125rem] text-sm font-normal"
      onClick={(e) => {
        e.preventDefault();
        openModal(
          <ModalFrame onClose={closeModal}>
            <MuiDateSelector
              enablePast
              date={date}
              setDate={(date) => {
                if (date) onChange(date);
                closeModal();
              }}
              className="bg-white"
            />
          </ModalFrame>,
        );
      }}
    >
      {labelStr}
      <span className="material-symbols-outlined text-base">calendar_month</span>
    </button>
  );
}
