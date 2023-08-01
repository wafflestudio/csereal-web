import Image from 'next/image';
import Link from 'next/link';

import pinIcon from '@/public/image/pin_icon.svg';

import { NoticePostSimple } from '@/types/notice';
import { notice } from '@/types/page';

import { formatDate } from '@/utils/formatting';
import { getPath } from '@/utils/page';

interface NoticeListProps {
  posts: NoticePostSimple[];
}

const noticePath = getPath(notice);

export default function NoticeList({ posts }: NoticeListProps) {
  return (
    <div className="mt-3 mb-8 mx-2.5 text-xs">
      <h5 className="h-[40px] pl-[50px] flex font-yoon border-b border-neutral-300 items-center">
        <span className="grow pl-3">제목</span>
        <span className="w-[200px] pl-3">날짜</span>
      </h5>
      <ul>
        {posts.map((post, i) => (
          <NoticeListRow post={post} isPinned={post.isPinned} idx={i} key={i} />
        ))}
      </ul>
    </div>
  );
}

interface NoticeListRowProps {
  post: NoticePostSimple;
  isPinned: boolean;
  idx: number;
}

function NoticeListRow({ post, isPinned, idx }: NoticeListRowProps) {
  const bgColor = idx % 2 ? 'bg-white' : 'bg-neutral-100';
  const fontWeight = isPinned ? 'font-bold' : 'font-normal';

  return (
    <li className={`flex items-center py-[8px] ${bgColor} ${fontWeight}`}>
      <span className="w-[50px] px-[13px] shrink-0">
        {isPinned && <Image src={pinIcon} alt="고정글" width={24} />}
      </span>
      <span className="py-[3px] pl-3 grow">
        <Link href={`${noticePath}/${post.id}`}>{post.title}</Link>
      </span>
      <span className="w-[200px] pl-3 shrink-0">{formatDate(new Date(post.createdAt))}</span>
    </li>
  );
}
