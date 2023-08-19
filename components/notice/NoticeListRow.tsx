import Image from 'next/image';
import Link from 'next/link';

import clipIcon from '@/public/image/clip_icon.svg';
import pinIcon from '@/public/image/pin_icon.svg';

import { notice } from '@/types/page';
import { SimpleNoticePost } from '@/types/post';

import { formatDate } from '@/utils/formatting';
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
        !isEditMode && 'odd:bg-neutral-50'
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
  const iconName = isChecked ? 'check_box' : 'check_box_outline_blank';

  return (
    <span className={`${NOTICE_ROW_CELL_WIDTH.check} px-[0.8125rem]`}>
      <span
        className="material-symbols-rounded cursor-pointer text-[1.25rem] font-light"
        onClick={toggleCheck}
      >
        {iconName}
      </span>
    </span>
  );
}

function PinCell({ isPinned }: { isPinned: boolean }) {
  return (
    <span className={`${NOTICE_ROW_CELL_WIDTH.pin} px-[0.8125rem] shrink-0`}>
      {isPinned && <Image src={pinIcon} alt="고정글" width={24} />}
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
        <Image src={clipIcon} alt="has_attachment" />
      </span>
    );
  } else {
    return (
      <span className={`${NOTICE_ROW_CELL_WIDTH.title} pl-3`}>
        <Link href={href} className="flex max-w-fit items-center gap-1.5 hover:text-main-orange">
          <span className="whitespace-nowrap text-ellipsis overflow-hidden tracking-wide">
            {title}
          </span>
          <Image src={clipIcon} alt="has_attachment" />
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
