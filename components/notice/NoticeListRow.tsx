import Link from 'next/link';

import CheckboxOrange from '@/public/image/checkbox_orange.svg';
import ClipIcon from '@/public/image/clip_icon.svg';
import PinIcon from '@/public/image/pin_icon.svg';

import { notice } from '@/types/page';
import { SimpleNoticePost } from '@/types/post';

import { getPath } from '@/utils/page';

interface NoticeListRowProps {
  post: SimpleNoticePost;
  queryString: string;
  isEditMode: boolean;
  isSelected: boolean;
  toggleSelected: (id: number, isSelected: boolean) => void;
}

export const NOTICE_ROW_CELL_WIDTH = {
  check: 'w-[3.125rem]',
  pin: 'w-[3.125rem]',
  title: 'w-[35.625rem]',
  date: 'w-auto',
} as const;

const noticePath = getPath(notice);

export default function NoticeListRow({
  post,
  queryString,
  isEditMode,
  isSelected,
  toggleSelected,
}: NoticeListRowProps) {
  const fontWeight = post.isPinned ? 'font-bold' : 'font-normal';

  return (
    <li
      className={`flex items-center h-10 py-2.5 ${fontWeight} ${
        !isEditMode && 'odd:bg-neutral-100'
      } ${isSelected && 'bg-neutral-100'}`}
    >
      {isEditMode && (
        <CheckboxCell
          isChecked={isSelected}
          toggleCheck={() => toggleSelected(post.id, isSelected)}
        />
      )}
      <PinCell isPinned={post.isPinned} />
      <TitleCell
        title={post.title}
        href={`${noticePath}/${post.id}${queryString}`}
        isEditMode={isEditMode}
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
    <span className={`${NOTICE_ROW_CELL_WIDTH.check} flex justify-center`}>
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

function PinCell({ isPinned }: { isPinned: boolean }) {
  return (
    <span className={`${NOTICE_ROW_CELL_WIDTH.pin} px-[0.8125rem] shrink-0`}>
      {isPinned && <PinIcon />}
    </span>
  );
}

interface TitleCellProps {
  title: string;
  href: string;
  isEditMode: boolean;
}

function TitleCell({ title, href, isEditMode }: TitleCellProps) {
  if (isEditMode) {
    return (
      <span className={`${NOTICE_ROW_CELL_WIDTH.title} pl-3 flex gap-1.5`}>
        <span className="whitespace-nowrap text-ellipsis overflow-hidden tracking-wide">
          {title}
        </span>
        <ClipIcon className="shrink-0" />
      </span>
    );
  } else {
    return (
      <span className={`${NOTICE_ROW_CELL_WIDTH.title} pl-3`}>
        <Link href={href} className="flex max-w-fit items-center gap-1.5 hover:text-main-orange">
          <span className="whitespace-nowrap text-ellipsis overflow-hidden tracking-wide">
            {title}
          </span>
          <ClipIcon className="shrink-0" />
        </Link>
      </span>
    );
  }
}

function DateCell({ date }: { date: string }) {
  return (
    <span className={`${NOTICE_ROW_CELL_WIDTH.date} pl-8 tracking-wide`}>
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
