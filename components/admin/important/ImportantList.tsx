import { Dispatch, SetStateAction } from 'react';

import { ImportantInfo, ImportantPreview } from '@/types/admin';

import ImportantListHeader from './ImportantListHeader';
import ImportantListRow from './ImportantListRow';

interface ImportantListProps {
  posts: ImportantPreview[];
  selectedPostInfos: ImportantInfo[];
  changeSelectedInfos: Dispatch<{ type: 'ADD' | 'DELETE'; postInfo: ImportantInfo }>;
}

export default function ImportantList({
  posts,
  selectedPostInfos,
  changeSelectedInfos,
}: ImportantListProps) {
  const selectPost = (postInfo: ImportantInfo) => changeSelectedInfos({ type: 'ADD', postInfo });

  const deselectPost = (postInfo: ImportantInfo) =>
    changeSelectedInfos({ type: 'DELETE', postInfo });

  const getIsSelected = (postInfo: ImportantInfo) =>
    selectedPostInfos.some((p) => p.id === postInfo.id && p.category === postInfo.category);

  const toggleSelected = (postInfo: ImportantInfo) => {
    getIsSelected(postInfo) ? deselectPost(postInfo) : selectPost(postInfo);
  };

  return (
    <div className="mb-8 mx-2.5">
      <ImportantListHeader />
      <ul className={`divide-y divide-neutral-200 divide-dashed border-b border-neutral-300`}>
        {posts.map((post, i) => (
          <ImportantListRow
            key={i}
            index={i + 1}
            post={post}
            isSelected={getIsSelected({ id: post.id, category: post.category })}
            toggleSelected={toggleSelected}
          />
        ))}
      </ul>
    </div>
  );
}
