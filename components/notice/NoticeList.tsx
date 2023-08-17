import { Dispatch, SetStateAction } from 'react';

import { useQueryString } from '@/hooks/useQueryString';

import { SimpleNoticePost } from '@/types/post';

import NoticeListHeader from './NoticeListHeader';
import NoticeListRow from './NoticeListRow';

interface NoticeListProps {
  posts: SimpleNoticePost[];
  isEditMode: boolean;
  selectedPosts: number[];
  setSelectedPosts: Dispatch<SetStateAction<number[]>>;
}

export default function NoticeList({
  posts,
  isEditMode,
  selectedPosts,
  setSelectedPosts,
}: NoticeListProps) {
  const queryString = useQueryString();

  const selectPost = (id: number) => {
    setSelectedPosts((prev) => [...prev, id]);
  };

  const deselectPost = (id: number) => {
    setSelectedPosts((prev) => prev.filter((pId) => pId !== id));
  };

  const toggleSelected = (id: number, isSelected: boolean) => {
    isSelected ? deselectPost(id) : selectPost(id);
  };

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
            isSelected={selectedPosts.includes(post.id)}
            toggleSelected={toggleSelected}
          />
        ))}
      </ul>
    </div>
  );
}
