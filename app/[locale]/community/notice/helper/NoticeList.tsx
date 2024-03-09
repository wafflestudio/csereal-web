import { Dispatch } from 'react';

import { NoticePreview } from '@/types/notice';

import NoticeListHeader from './NoticeListHeader';
import NoticeListRow from './NoticeListRow';
import { PostSelectAction } from './usePostSelect';

interface NoticeListProps {
  posts: NoticePreview[];
  isEditMode: boolean;
  selectedIds: Set<number>;
  dispatchIds: Dispatch<PostSelectAction>;
}

export default function NoticeList({
  posts,
  isEditMode,
  selectedIds,
  dispatchIds,
}: NoticeListProps) {
  if (posts.length === 0) return <p className="mx-2.5 mb-8 mt-6">검색 결과가 존재하지 않습니다.</p>;

  return (
    <div className="mx-2.5 mb-10 mt-9 border-y border-neutral-200">
      <NoticeListHeader isEditMode={isEditMode} />
      <ul className={`${isEditMode && 'divide-y divide-dashed divide-neutral-200'}`}>
        {posts.map((post) => (
          <NoticeListRow
            key={post.id}
            post={post}
            isEditMode={isEditMode}
            isSelected={selectedIds.has(post.id)}
            toggleSelected={() => dispatchIds({ type: 'TOGGLE', id: post.id })}
          />
        ))}
      </ul>
    </div>
  );
}