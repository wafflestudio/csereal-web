interface BatchEditButtonsProps {
  selectedPostCount: number;
  onClickBatchDelete: () => void;
  onClickBatchPin: () => void;
}

export default function BatchEditButtons({
  selectedPostCount,
  onClickBatchDelete,
  onClickBatchPin,
}: BatchEditButtonsProps) {
  const isDisabled = selectedPostCount <= 0;

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1 mr-3">
        <span className="material-symbols-rounded text-neutral-500 text-lg font-extralight">
          check_box
        </span>
        <span className="text-neutral-500 text-xs tracking-wide">
          {selectedPostCount}개 게시물 선택
        </span>
      </div>
      <BatchButton isDisabled={isDisabled} onClickButton={onClickBatchDelete}>
        일괄 삭제
      </BatchButton>
      <BatchButton isDisabled={isDisabled} onClickButton={onClickBatchPin}>
        일괄 고정
      </BatchButton>
    </div>
  );
}

interface BatchButtonProps {
  isDisabled: boolean;
  onClickButton: () => void;
  children: React.ReactNode;
}

export function BatchButton({ isDisabled, onClickButton, children }: BatchButtonProps) {
  return (
    <button
      className="w-[4.5rem] h-[2.1875rem] border border-neutral-200 bg-neutral-100 rounded-[0.0625rem] text-neutral-500 text-xs font-medium disabled:bg-neutral-50 disabled:text-neutral-300"
      onClick={onClickButton}
      //   disabled={isDisabled}
    >
      {children}
    </button>
  );
}
