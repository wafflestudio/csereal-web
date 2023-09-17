import Link from 'next/link';

import { NoticeMain } from '@/types/main';
import { notice } from '@/types/page';

import { getPath } from '@/utils/page';

interface NoticeListMainProps {
  selectedNotices: NoticeMain[];
}

const noticePath = getPath(notice);

export default function NoticeListMain({ selectedNotices }: NoticeListMainProps) {
  return (
    <ul className="flex flex-col gap-1">
      {selectedNotices.map((notice, i) => (
        <NoticeRow key={notice.id} notice={notice} isLast={i === selectedNotices.length - 1} />
      ))}
    </ul>
  );
}

interface NoticeRowProps {
  notice: NoticeMain;
  isLast: boolean;
}

function NoticeRow({ notice, isLast }: NoticeRowProps) {
  return (
    <li>
      <Link
        className={`flex items-center gap-2.5 text-xs tracking-wide ${isLast && 'pr-5'}`}
        href={`${noticePath}/${notice.id}`}
      >
        <span className="whitespace-nowrap">{formatDate(new Date(notice.createdAt))}</span>
        <span className="whitespace-nowrap text-ellipsis overflow-hidden">{notice.title}</span>
      </Link>
    </li>
  );
}

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

const formatDate = (dateObj: Date) => {
  const month = String(dateObj.getMonth() + 1);
  const date = String(dateObj.getDate()).padStart(2, '0');
  const day = DAYS[dateObj.getDay()];

  return `${month}/${date} (${day})`; // e.g. 8/18 (수)
};
