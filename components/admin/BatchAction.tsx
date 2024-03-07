interface BatchActionProps {
  selectedCount: number;
  buttonText: string;
  onClickButton: () => void;
}

export default function BatchAction({
  selectedCount,
  buttonText,
  onClickButton,
}: BatchActionProps) {
  return (
    <div className="mt-[3.25rem] flex items-center">
      <SelectedPostsCount count={selectedCount} />
      <BatchButton disabled={selectedCount === 0} onClick={onClickButton}>
        {buttonText}
      </BatchButton>
    </div>
  );
}

function SelectedPostsCount({ count }: { count: number }) {
  return (
    <div className="mr-6 flex items-center gap-1">
      <span className="material-symbols-rounded text-lg font-extralight text-neutral-500">
        check_box
      </span>
      <span className="text-xs tracking-wide text-neutral-500">{count}개 게시물 선택</span>
    </div>
  );
}

interface BatchButtonProps {
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function BatchButton({ disabled, onClick, children }: BatchButtonProps) {
  return (
    <button
      className="h-[2.1875rem] rounded-[0.0625rem] border border-neutral-200 bg-neutral-100 px-[0.875rem] text-xs font-medium tracking-[0.02em] text-neutral-500 disabled:bg-neutral-50 disabled:text-neutral-300"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
