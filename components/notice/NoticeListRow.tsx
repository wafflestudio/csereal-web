import Image from 'next/image';
import Link from 'next/link';

import clipIcon from '@/public/image/clip_icon.svg';
import pinIcon from '@/public/image/pin_icon.svg';

import { SimpleNoticePost } from '@/types/post';

import { formatDate } from '@/utils/formatting';

interface NoticeListRowProps {
  post: SimpleNoticePost;
  href: string;
  isEditMode: boolean;
  isSelected: boolean;
}

export const NOTICE_ROW_CELL_WIDTH = {
  check: 'w-[3.125rem]',
  pin: 'w-[3.125rem]',
  title: 'w-[35.625rem]',
  date: 'w-auto',
} as const;

export default function NoticeListRow({ post, href, isEditMode, isSelected }: NoticeListRowProps) {
  const fontWeight = post.isPinned ? 'font-bold' : 'font-normal';

  return (
    <li
      className={`flex items-center h-10 py-2.5 ${fontWeight} ${
        !isEditMode && 'odd:bg-neutral-50'
      }`}
    >
      {isEditMode && <CheckboxCell isChecked={isSelected} />}
      <PinCell isPinned={post.isPinned} />
      <TitleCell title={post.title} href={href} />
      <DateCell date={post.createdAt} />
    </li>
  );
}

function CheckboxCell({ isChecked }: { isChecked: boolean }) {
  const iconName = isChecked ? 'check_box' : 'check_box_outline_blank';

  return (
    <span className={`${NOTICE_ROW_CELL_WIDTH.check} px-[0.8125rem]`}>
      <span className="material-symbols-rounded text-[1.25rem] font-light">{iconName}</span>
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

function TitleCell({ title, href }: { title: string; href: string }) {
  return (
    <span className={`${NOTICE_ROW_CELL_WIDTH.title} pl-3 tracking-wide`}>
      <Link href={href} className="flex items-center gap-1.5 hover:text-main-orange">
        <span className="whitespace-nowrap text-ellipsis overflow-hidden">{title}</span>
        <Image src={clipIcon} alt="has_attachment" />
      </Link>
    </span>
  );
}

function DateCell({ date }: { date: string }) {
  return (
    <span className={`${NOTICE_ROW_CELL_WIDTH.date} pl-8 tracking-wide`}>
      {formatDate(new Date(date))}
    </span>
  );
}
