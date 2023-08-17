import Image from 'next/image';
import Link from 'next/link';

import clipIcon from '@/public/image/clip_icon.svg';
import pinIcon from '@/public/image/pin_icon.svg';

import { useQueryString } from '@/hooks/useQueryString';

import { notice } from '@/types/page';
import { SimpleNoticePost } from '@/types/post';

import { formatDate } from '@/utils/formatting';
import { getPath } from '@/utils/page';

interface NoticeListProps {
  posts: SimpleNoticePost[];
  isEditMode: boolean;
}

const noticePath = getPath(notice);

export default function NoticeList({ posts, isEditMode }: NoticeListProps) {
  const queryString = useQueryString();

  return (
    <div className="mt-6 mb-8 mx-2.5 text-xs border-y border-neutral-300">
      <h5 className="h-10 pl-[3.125rem] flex font-yoon items-center border-b border-neutral-300">
        <span className="grow pl-3 text-neutral-700 tracking-wide">제목</span>
        <span className="w-[12.5rem] pl-8 text-neutral-700 tracking-wide">날짜</span>
      </h5>
      <ul className="font-noto">
        {posts.map((post, i) => (
          <NoticeListRow post={post} href={`${noticePath}/${post.id}${queryString}`} key={i} />
        ))}
      </ul>
    </div>
  );
}

interface NoticeListRowProps {
  post: SimpleNoticePost;
  href: string;
}

function NoticeListRow({ post, href }: NoticeListRowProps) {
  const fontWeight = post.isPinned ? 'font-bold' : 'font-normal';

  return (
    <li className={`flex items-center h-10 py-2.5 odd:bg-neutral-50 even:bg-white ${fontWeight}`}>
      <span className="w-[3.125rem] px-[0.8125rem] shrink-0">
        {post.isPinned && <Image src={pinIcon} alt="고정글" width={24} />}
      </span>
      <span className="pl-3 w-[35.625rem] text-neutral-700 tracking-wide">
        <Link href={href} className="flex items-center gap-1.5 hover:text-main-orange">
          <span className="whitespace-nowrap text-ellipsis overflow-hidden">{post.title}</span>
          <Image src={clipIcon} alt="has_attachment" />
        </Link>
      </span>
      <span className="w-[12.5rem] pl-8 shrink-0 text-neutral-700 tracking-wide">
        {formatDate(new Date(post.createdAt))}
      </span>
    </li>
  );
}
