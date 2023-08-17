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
      <NoticeListHeader isEditMode={isEditMode} />
      <ul className={`font-noto ${isEditMode && 'divide-y divide-neutral-200 divide-dashed'}`}>
        {posts.map((post, i) => (
          <NoticeListRow
            post={post}
            href={`${noticePath}/${post.id}${queryString}`}
            isEditMode={isEditMode}
            key={i}
          />
        ))}
      </ul>
    </div>
  );
}

const NOTICE_ROW_ITEM_WIDTH = {
  check: 'w-[3.125rem]',
  pin: 'w-[3.125rem]',
  title: 'w-[35.625rem]',
  date: 'w-auto',
} as const;

function NoticeListHeader({ isEditMode }: { isEditMode: boolean }) {
  const paddingLeft = isEditMode ? 'pl-[6.25rem]' : 'pl-[3.125rem]';

  return (
    <h5
      className={`h-10 ${paddingLeft} flex font-yoon items-center border-b border-neutral-300 text-neutral-700`}
    >
      <span className={`${NOTICE_ROW_ITEM_WIDTH.title} pl-3 tracking-wide`}>제목</span>
      <span className={`${NOTICE_ROW_ITEM_WIDTH.date} pl-8 tracking-wide`}>날짜</span>
    </h5>
  );
}

interface NoticeListRowProps {
  post: SimpleNoticePost;
  href: string;
  isEditMode: boolean;
}

function NoticeListRow({ post, href, isEditMode }: NoticeListRowProps) {
  const fontWeight = post.isPinned ? 'font-bold' : 'font-normal';

  return (
    <li
      className={`flex items-center h-10 py-2.5 text-neutral-700 ${fontWeight} ${
        !isEditMode && 'odd:bg-neutral-50'
      }`}
    >
      {isEditMode && <span className={`${NOTICE_ROW_ITEM_WIDTH.check} px-[0.8125rem]`}>a</span>}
      <span className={`${NOTICE_ROW_ITEM_WIDTH.pin} px-[0.8125rem] shrink-0`}>
        {post.isPinned && <Image src={pinIcon} alt="고정글" width={24} />}
      </span>
      <span className={`${NOTICE_ROW_ITEM_WIDTH.title} pl-3 tracking-wide`}>
        <Link href={href} className="flex items-center gap-1.5 hover:text-main-orange">
          <span className="whitespace-nowrap text-ellipsis overflow-hidden">{post.title}</span>
          <Image src={clipIcon} alt="has_attachment" />
        </Link>
      </span>
      <span className={`${NOTICE_ROW_ITEM_WIDTH.date} pl-8 tracking-wide`}>
        {formatDate(new Date(post.createdAt))}
      </span>
    </li>
  );
}
