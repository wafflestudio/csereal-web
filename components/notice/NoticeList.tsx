import { Dispatch } from 'react';

import { NoticePreview } from '@/types/notice';

import NoticeListHeader from './NoticeListHeader';
import NoticeListRow from './NoticeListRow';

interface NoticeListProps {
  posts: NoticePreview[];
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

  return posts.length ? (
    <div className="mt-9 mb-10 mx-2.5 border-y border-neutral-200">
      <NoticeListHeader isEditMode={isEditMode} />
      <ul className={`${isEditMode && 'divide-y divide-neutral-200 divide-dashed'}`}>
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
  ) : (
    <p className="mt-6 mb-8 mx-2.5">검색 결과가 존재하지 않습니다.</p>
  );
}
