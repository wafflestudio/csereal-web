import { useController } from 'react-hook-form';

import MuiDateSelector from '@/components/common/MuiDateSelector';
import Dropdown from '@/components/form/legacy/Dropdown';
import ModalFrame from '@/components/modal/ModalFrame';
import useModal from '@/utils/hooks/useModal';

interface Props {
  name: string;
  hideTime?: boolean;
  enablePast?: boolean;
  disabled?: boolean;
}

export default function DateSelector({
  name,
  hideTime = false,
  enablePast = false,
  disabled = false,
}: Props) {
  const { openModal, closeModal } = useModal();
  const {
    field: { value: date, onChange },
  } = useController({ name });

  const openCalendar = () => {
    openModal(
      <ModalFrame onClose={closeModal}>
        <MuiDateSelector
          date={date}
          setDate={(date) => {
            if (date) onChange(date);
            closeModal();
          }}
          className="bg-white"
          enablePast={enablePast}
        />
      </ModalFrame>,
    );
  };

  return (
    <div>
      <div className="flex gap-[.62rem]">
        <BorderButton text={formatDate(date)} onClick={openCalendar} disabled={disabled} />
        {!hideTime && (
          <div className="flex gap-1">
            <Dropdown
              contents={Array(24)
                .fill(0)
                .map((x, i) => (i + '').padStart(2, '0') + '시')}
              selectedIndex={date.getHours()}
              onClick={(idx) => {
                const newDate = new Date(date);
                newDate.setHours(idx);
                onChange(newDate);
              }}
              borderStyle="border-neutral-300"
            />
            <Dropdown
              contents={minuteDropdownContent}
              selectedIndex={Math.floor(date.getMinutes() / 15)}
              onClick={(idx) => {
                const newDate = new Date(date);
                newDate.setMinutes(idx * 15);
                onChange(newDate);
              }}
              borderStyle="border-neutral-300"
            />
          </div>
        )}
      </div>
    </div>
  );
}

const BorderButton = ({
  text,
  onClick,
  disabled,
}: {
  text: string;
  onClick: () => void;
  disabled: boolean;
}) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`h-[1.875rem] rounded-sm border border-neutral-300
            px-4 text-md outline-none hover:bg-neutral-100 disabled:hover:bg-transparent`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

const formatDate = (date: Date) => {
  const DAYS = ['일', '월', '화', '수', '목', '금', '토'];
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${
    DAYS[date.getDay()]
  }요일`;
};

const minuteDropdownContent = Array(4)
  .fill(0)
  .map((x, i) => (i * 15 + '').padStart(2, '0') + '분');
