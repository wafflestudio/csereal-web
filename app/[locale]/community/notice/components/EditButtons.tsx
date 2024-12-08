import { Link } from '@/i18n/routing';
import { getPath } from '@/utils/page';
import { notice } from '@/constants/segmentNode';

const noticePath = getPath(notice);

interface BatchButtonProps {
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export function BatchButton({ disabled, onClick, children }: BatchButtonProps) {
  return (
    <button
      className="h-[2.1875rem] rounded-[0.0625rem] border border-neutral-200 bg-neutral-100 px-3 text-xs font-medium text-neutral-500 disabled:bg-neutral-50 disabled:text-neutral-300"
      onClick={onClick}
      disabled={disabled}
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
      className="h-[2.1875rem] rounded-[0.0625rem] bg-main-orange px-4 text-md font-semibold leading-loose tracking-wider text-white hover:bg-neutral-500"
      onClick={toggleEditMode}
    >
      {isEditMode ? '완료' : '편집'}
    </button>
  );
}

export function CreateButton({ disabled }: { disabled: boolean }) {
  return (
    <Link href={`${noticePath}/create`}>
      <button
        type="button"
        className="ml-4 h-[2.1875rem] rounded-[0.0625rem] bg-neutral-800 px-3 text-md font-semibold leading-loose tracking-wider text-white enabled:hover:bg-neutral-500 disabled:opacity-30"
        disabled={disabled}
      >
        새 게시글
      </button>
    </Link>
  );
}
