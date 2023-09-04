import { Dispatch, SetStateAction } from 'react';

import { useQueryString } from '@/hooks/useQueryString';

import { SimpleNoticePost } from '@/types/post';

import NoticeListHeader from './NoticeListHeader';
import NoticeListRow from './NoticeListRow';

interface NoticeListProps {
  posts: SimpleNoticePost[];
  isEditMode: boolean;
  selectedPostIds: Set<number>;
  setSelectedPostIds: Dispatch<SetStateAction<Set<number>>>;
}

export default function NoticeList({
  posts,
  isEditMode,
  selectedPostIds,
  setSelectedPostIds,
}: NoticeListProps) {
  const queryString = useQueryString();

  const selectPost = (id: number) => {
    setSelectedPostIds((prev) => new Set(prev.add(id)));
  };

  const deselectPost = (id: number) => {
    setSelectedPostIds((prev) => {
      prev.delete(id);
      return new Set(prev);
    });
  };

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
            queryString={queryString}
            isEditMode={isEditMode}
            isSelected={selectedPostIds.has(post.id)}
            toggleSelected={toggleSelected}
          />
        ))}
      </ul>
    </div>
  );
}
