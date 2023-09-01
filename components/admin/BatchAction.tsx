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
    <div className="flex items-center gap-1 mr-6">
      <span className="material-symbols-rounded text-neutral-500 text-lg font-extralight">
        check_box
      </span>
      <span className="text-neutral-500 text-xs tracking-wide">{count}개 게시물 선택</span>
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
      className="px-[0.875rem] h-[2.1875rem] border border-neutral-200 bg-neutral-100 rounded-[0.0625rem] text-neutral-500 text-xs font-medium tracking-[0.02em] disabled:bg-neutral-50 disabled:text-neutral-300"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
