import Dropdown from '@/components/common/form/Dropdown';
import MuiDateSelector from '@/components/common/MuiDateSelector';
import ModalFrame from '@/components/modal/ModalFrame';

import useModal from '@/utils/hooks/useModal';

export default function DateSelector({
  date,
  setDate,
  hideTime = false,
}: {
  date: Date;
  setDate: (date: Date) => void;
  hideTime?: boolean;
}) {
  const { openModal, closeModal } = useModal();
  const openCalendar = () => {
    openModal(
      <ModalFrame onClose={closeModal}>
        <MuiDateSelector
          date={date}
          setDate={(date) => {
            date && setDate(date);
            closeModal();
          }}
          className="bg-white"
        />
      </ModalFrame>,
    );
  };

  return (
    <div>
      <div className="flex gap-[.62rem]">
        <BorderButton text={formatDate(date)} onClick={openCalendar} />
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
                setDate(newDate);
              }}
              borderStyle="border-neutral-700"
            />
            <Dropdown
              contents={minuteDropdownContent}
              selectedIndex={Math.floor(date.getMinutes() / 15)}
              onClick={(idx) => {
                const newDate = new Date(date);
                newDate.setMinutes(idx * 15);
                setDate(newDate);
              }}
              borderStyle="border-neutral-700"
            />
          </div>
        )}
      </div>
    </div>
  );
}

const BorderButton = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`rounded-sm border border-neutral-700 h-[1.875rem]
            outline-none text-xs hover:bg-neutral-100 px-4`}
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
