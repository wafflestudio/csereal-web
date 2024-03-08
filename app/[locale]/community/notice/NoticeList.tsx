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
    <div className="mx-2.5 mb-10 mt-9 border-y border-neutral-200">
      <NoticeListHeader isEditMode={isEditMode} />
      <ul className={`${isEditMode && 'divide-y divide-dashed divide-neutral-200'}`}>
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
    <p className="mx-2.5 mb-8 mt-6">검색 결과가 존재하지 않습니다.</p>
  );
}
