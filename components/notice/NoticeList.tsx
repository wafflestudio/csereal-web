import { useQueryString } from '@/hooks/useQueryString';

import { SimpleNoticePost } from '@/types/post';

import NoticeListHeader from './NoticeListHeader';
import NoticeListRow from './NoticeListRow';

interface NoticeListProps {
  posts: SimpleNoticePost[];
  isEditMode: boolean;
}

export default function NoticeList({ posts, isEditMode }: NoticeListProps) {
  const queryString = useQueryString();

  return (
    <div className="mt-6 mb-8 mx-2.5 text-xs border-y border-neutral-300">
      <NoticeListHeader isEditMode={isEditMode} />
      <ul className={`font-noto ${isEditMode && 'divide-y divide-neutral-200 divide-dashed'}`}>
        {posts.map((post, i) => (
          <NoticeListRow
            key={i}
            post={post}
            queryString={queryString}
            isEditMode={isEditMode}
            isSelected={true}
          />
        ))}
      </ul>
    </div>
  );
}
