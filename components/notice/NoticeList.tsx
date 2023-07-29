import Image from 'next/image';

import pinIcon from '@/public/image/pin_icon.svg';

import { Post } from '@/types/notice';

interface NoticeListProps {
  pinnedPosts: Post[];
  normalPosts: Post[];
}

export default function NoticeList({ pinnedPosts, normalPosts }: NoticeListProps) {
  return (
    <div className="mt-3 mb-8 mx-2.5 text-xs">
      <h5 className="h-[40px] pl-[50px] flex font-yoon border-b border-neutral-300 items-center">
        <span className="w-[570px] pl-3">제목</span>
        <span className="w-[200px] pl-3">날짜</span>
      </h5>
      <ul>
        {pinnedPosts.map((post, i) => (
          <NoticeListRow post={post} isPinned={true} idx={i} key={i} />
        ))}
        {normalPosts.map((notice, i) => (
          <NoticeListRow
            post={notice}
            isPinned={false}
            idx={pinnedPosts.length + i}
            key={pinnedPosts.length + i}
          />
        ))}
      </ul>
    </div>
  );
}

interface NoticeListRowProps {
  post: { title: string; date: string };
  isPinned: boolean;
  idx: number;
}

function NoticeListRow({ post, isPinned, idx }: NoticeListRowProps) {
  const bgColor = idx % 2 ? 'bg-white' : 'bg-neutral-100';
  const fontWeight = isPinned ? 'font-bold' : 'font-normal';

  return (
    <li className={`flex items-center h-[40px] ${bgColor} ${fontWeight}`}>
      <span className="w-[50px] px-[13px]">
        {isPinned && <Image src={pinIcon} alt="고정글" width={24} />}
      </span>
      <span className="w-[570px] pl-3">{post.title}</span>
      <span className="w-[200px] pl-3">{post.date}</span>
    </li>
  );
}
