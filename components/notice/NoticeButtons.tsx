import Link from 'next/link';

interface BatchButtonProps {
  onClickButton: () => void;
  children: React.ReactNode;
}

export function BatchButton({ onClickButton, children }: BatchButtonProps) {
  return (
    <button
      className="w-[4.5rem] h-[2.1875rem] border border-neutral-200 bg-neutral-100 rounded-[0.0625rem] text-neutral-500 text-xs font-medium"
      onClick={onClickButton}
    >
      {children}
    </button>
  );
}

interface EditButtonProps {
  isEditMode: boolean;
  toggleEditMode: () => void;
}

export function EditButton({ isEditMode, toggleEditMode }: EditButtonProps) {
  return (
    <button
      type="button"
      className="px-4 h-[2.1875rem] rounded-[0.0625rem] bg-main-orange text-white text-xs tracking-[0.02em] font-bold"
      onClick={toggleEditMode}
    >
      {isEditMode ? '완료' : '편집'}
    </button>
  );
}

interface CreateButtonProps {
  mainPath: string;
  isDisabled: boolean;
}

export function CreateButton({ mainPath, isDisabled }: CreateButtonProps) {
  return (
    <Link href={`${mainPath}/create`}>
      <button
        type="button"
        className={`ml-4 px-3 h-[2.1875rem] rounded-[0.0625rem] bg-neutral-700 hover:bg-neutral-500 text-white text-xs tracking-[0.02em] font-bold ${
          isDisabled && 'opacity-30'
        }`}
        disabled={isDisabled}
      >
        새 게시글
      </button>
    </Link>
  );
}
