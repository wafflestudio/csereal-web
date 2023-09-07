import { Dispatch, SetStateAction } from 'react';

import { SimpleNoticePost } from '@/types/post';

import NoticeListHeader from './NoticeListHeader';
import NoticeListRow from './NoticeListRow';

interface NoticeListProps {
  posts: SimpleNoticePost[];
  isEditMode: boolean;
  selectedPostIds: Set<number>;
  changeSelectedIds: Dispatch<{ type: 'ADD' | 'DELETE'; id: number }>;
}

export default function NoticeList({
  posts,
  isEditMode,
  selectedPostIds,
  changeSelectedIds,
}: NoticeListProps) {
  const selectPost = (id: number) => changeSelectedIds({ type: 'ADD', id });

  const deselectPost = (id: number) => changeSelectedIds({ type: 'DELETE', id });

  const toggleSelected = (id: number, isSelected: boolean) => {
    isSelected ? deselectPost(id) : selectPost(id);
  };

  return (
    <div className="mt-6 mb-8 mx-2.5 text-xs border-y border-neutral-200">
      <NoticeListHeader isEditMode={isEditMode} />
      <ul className={`font-noto ${isEditMode && 'divide-y divide-neutral-200 divide-dashed'}`}>
        {posts.map((post, i) => (
          <NoticeListRow
            key={i}
            post={post}
            isEditMode={isEditMode}
            isSelected={selectedPostIds.has(post.id)}
            toggleSelected={toggleSelected}
          />
        ))}
      </ul>
    </div>
  );
}
