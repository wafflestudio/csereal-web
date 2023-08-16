import Image from 'next/image';
import Link from 'next/link';

import pinIcon from '@/public/image/pin_icon.svg';

import { useQueryString } from '@/hooks/useQueryString';

import { notice } from '@/types/page';
import { SimpleNoticePost } from '@/types/post';

import { formatDate } from '@/utils/formatting';
import { getPath } from '@/utils/page';

import clipIcon from '@/public/image/clip_icon.svg';

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
      <ul className="font-noto ">
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
  const iconFilter =
    'invert-[.79] sepia-0 saturate-[.399] hue-rotate-[227deg] brightness-[.85] contrast-[.81]';
  const iconHoverFilter =
    'group-hover:invert-[.20] group-hover:sepia-0 saturate-[.12] group-hover:hue-rotate-[152deg] group-hover:brightness-100 group-hover:contrast-[.84]';

  return (
    <li
      className={`flex items-center min-h-[2.5rem] py-2.5 odd:bg-neutral-50 even:bg-white ${fontWeight}`}
    >
      <span className="w-[3.125rem] px-[0.8125rem] shrink-0">
        {post.isPinned && <Image src={pinIcon} alt="고정글" width={24} />}
      </span>
      <span className="pl-3 grow text-neutral-700 tracking-wide">
        <Link href={href} className="group">
          <span className="group-hover:text-main-orange">{post.title}</span>
          <Image
            src={clipIcon}
            alt="has_attachment"
            className={`inline align-middle ml-1 mb-px ${iconFilter} ${iconHoverFilter}`}
          />
        </Link>
      </span>
      <span className="w-[12.5rem] pl-8 shrink-0 text-neutral-700 tracking-wide">
        {formatDate(new Date(post.createdAt))}
      </span>
    </li>
  );
}
