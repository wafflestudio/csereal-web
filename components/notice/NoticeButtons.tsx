import Link from 'next/link';

interface BatchButtonProps {
  isDisabled: boolean;
  onClickButton: () => void;
  children: React.ReactNode;
}

export function BatchButton({ isDisabled, onClickButton, children }: BatchButtonProps) {
  return (
    <button
      className="px-3 h-[2.1875rem] border border-neutral-200 bg-neutral-100 rounded-[0.0625rem] text-neutral-500 text-xs font-medium disabled:bg-neutral-50 disabled:text-neutral-300"
      onClick={onClickButton}
      disabled={isDisabled}
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
      className="px-[0.875rem] h-[2.1875rem] rounded-[0.0625rem] bg-main-orange text-white text-xs tracking-[0.02em] font-bold"
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
        className="ml-4 px-[0.875rem] h-[2.1875rem] rounded-[0.0625rem] bg-neutral-700 enabled:hover:bg-neutral-500 text-white text-xs tracking-[0.02em] font-bold disabled:opacity-30"
        disabled={isDisabled}
      >
        새 게시글
      </button>
    </Link>
  );
}
