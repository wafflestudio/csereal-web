import { Link } from '@/navigation';
import CheckboxOrange from '@/public/image/checkbox_orange.svg';
import ClipIcon from '@/public/image/clip_icon.svg';
import LockIcon from '@/public/image/lock_icon.svg';
import PinIcon from '@/public/image/pin_icon.svg';

import { NoticePreview } from '@/types/notice';
import { notice } from '@/types/page';

import { getPath } from '@/utils/page';

interface NoticeListRowProps {
  post: NoticePreview;
  isEditMode: boolean;
  isSelected: boolean;
  toggleSelected: (id: number, isSelected: boolean) => void;
}

export const NOTICE_ROW_CELL_WIDTH = {
  check: 'sm:w-[3.125rem]',
  pin: 'sm:w-[3.125rem]',
  title: 'sm:w-[35.625rem]',
  date: 'sm:w-auto',
} as const;

export default function NoticeListRow({
  post,
  isEditMode,
  isSelected,
  toggleSelected,
}: NoticeListRowProps) {
  return (
    <li
      className={`flex flex-col gap-2.5 sm:gap-0 sm:flex-row sm:items-center text-[14px] sm:h-11 py-6 sm:py-2.5 px-7 sm:px-0 sm:pr-4 ${
        post.isPinned && 'font-semibold'
      } ${!isEditMode && (post.isPrivate ? 'bg-neutral-200' : 'odd:bg-neutral-50')} ${
        isSelected && 'bg-neutral-100'
      } `}
    >
      {isEditMode && (
        <CheckboxCell
          isChecked={isSelected}
          toggleCheck={() => toggleSelected(post.id, isSelected)}
        />
      )}
      <PrivateOrPinCell isPrivate={post.isPrivate} isPinned={true} />
      <TitleCell
        title={post.title}
        hasAttachment={post.hasAttachment}
        id={post.id}
        isEditMode={isEditMode}
        isPinned={post.isPinned}
      />
      <DateCell date={post.createdAt} />
    </li>
  );
}

interface CheckboxCellProps {
  isChecked: boolean;
  toggleCheck: () => void;
}

function CheckboxCell({ isChecked, toggleCheck }: CheckboxCellProps) {
  return (
    <span className={`${NOTICE_ROW_CELL_WIDTH.check} hidden sm:flex justify-center`}>
      {isChecked ? (
        <CheckboxOrange className="cursor-pointer" onClick={toggleCheck} />
      ) : (
        <span
          className="material-symbols-rounded cursor-pointer text-[1.25rem] font-light"
          onClick={toggleCheck}
        >
          check_box_outline_blank
        </span>
      )}
    </span>
  );
}

function PrivateOrPinCell({ isPrivate, isPinned }: { isPrivate: boolean; isPinned: boolean }) {
  return (
    <span className={`${NOTICE_ROW_CELL_WIDTH.pin} sm:px-[0.8125rem] shrink-0`}>
      {isPrivate ? <LockIcon /> : isPinned && <PinIcon />}
    </span>
  );
}

interface TitleCellProps {
  title: string;
  hasAttachment: boolean;
  id: number;
  isEditMode: boolean;
  isPinned: boolean;
}

const noticePath = getPath(notice);

function TitleCell({ title, hasAttachment, id, isEditMode, isPinned }: TitleCellProps) {
  if (isEditMode) {
    return (
      <span className={`${NOTICE_ROW_CELL_WIDTH.title} pl-3 flex gap-1.5`}>
        <span className="whitespace-nowrap text-ellipsis overflow-hidden tracking-wide">
          {title}
        </span>
        {hasAttachment && <ClipIcon className="shrink-0" />}
      </span>
    );
  } else {
    return (
      <span className={`${NOTICE_ROW_CELL_WIDTH.title} sm:pl-3`}>
        <Link
          href={`${noticePath}/${id}`}
          className="font-semibold sm:font-normal flex max-w-fit items-center gap-1.5 hover:text-main-orange"
        >
          <span
            className={`${
              isPinned && 'text-main-orange sm:text-neutral-800'
            } sm:whitespace-nowrap text-ellipsis overflow-hidden tracking-wide`}
          >
            {title}
          </span>
          {hasAttachment && <ClipIcon className="shrink-0" />}
        </Link>
      </span>
    );
  }
}

function DateCell({ date }: { date: string }) {
  return (
    <span className={`${NOTICE_ROW_CELL_WIDTH.date} sm:pl-8 tracking-wide`}>
      {formatDate(new Date(date))}
    </span>
  );
}

const formatDate = (date: Date) => {
  const yyyy = String(date.getFullYear()).padStart(4, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');

  return `${yyyy}/${mm}/${dd}`; // e.g. 2023/08/01
};
