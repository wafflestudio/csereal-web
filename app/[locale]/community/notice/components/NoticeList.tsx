import { Dispatch } from 'react';

import { NoticePreview } from '@/apis/types/notice';
import NoticeListHeader from '@/app/[locale]/community/notice/components/NoticeListHeader';
import NoticeListRow from '@/app/[locale]/community/notice/components/NoticeListRow';
import { PostSelectAction } from '@/app/[locale]/community/notice/components/usePostSelect';
import NoSearchResult from '@/components/common/NoSearchResult';

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
  if (posts.length === 0) return <NoSearchResult />;

  return (
    <div className="mb-10 mt-9 border-y border-neutral-200 sm:mx-2.5">
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
