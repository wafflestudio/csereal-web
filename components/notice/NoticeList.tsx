import Image from 'next/image';
import Link from 'next/link';

import pinIcon from '@/public/image/pin_icon.svg';

import { useQueryString } from '@/hooks/useQueryString';

import { notice } from '@/types/page';
import { SimpleNoticePost } from '@/types/post';

import { formatDate } from '@/utils/formatting';
import { getPath } from '@/utils/page';

interface NoticeListProps {
  posts: SimpleNoticePost[];
}

const noticePath = getPath(notice);

export default function NoticeList({ posts }: NoticeListProps) {
  const queryString = useQueryString();

  return (
    <div className="mt-3 mb-8 mx-2.5 text-xs">
      <h5 className="h-10 pl-[3.125rem] flex font-yoon items-center">
        <span className="grow pl-3 text-neutral-700 tracking-wide">제목</span>
        <span className="w-[12.5rem] pl-8 text-neutral-700 tracking-wide">날짜</span>
      </h5>
      <ul className="border-y border-neutral-300 font-noto">
        {posts.map((post, i) => (
          <NoticeListRow
            post={post}
            isPinned={post.isPinned}
            idx={i}
            href={`${noticePath}/${post.id}${queryString}`}
            key={i}
          />
        ))}
      </ul>
    </div>
  );
}

interface NoticeListRowProps {
  post: SimpleNoticePost;
  isPinned: boolean;
  idx: number;
  href: string;
}

function NoticeListRow({ post, isPinned, idx, href }: NoticeListRowProps) {
  const bgColor = idx % 2 ? 'bg-white' : 'bg-neutral-50';
  const fontWeight = isPinned ? 'font-bold' : 'font-normal';

  return (
    <li className={`flex items-center py-2 ${bgColor} ${fontWeight}`}>
      <span className="w-[3.125rem] px-[0.8125rem] shrink-0">
        {isPinned && <Image src={pinIcon} alt="고정글" width={24} />}
      </span>
      <span className="py-[0.1875rem] pl-3 grow text-neutral-700 tracking-wide">
        <Link href={href} className="hover:text-main-orange">
          {post.title}
        </Link>
      </span>
      <span className="w-[12.5rem] pl-8 shrink-0 text-neutral-700 tracking-wide">
        {formatDate(new Date(post.createdAt))}
      </span>
    </li>
  );
}
