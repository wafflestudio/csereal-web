import { Dispatch, SetStateAction } from 'react';

import { SimpleImportant } from '@/types/admin';

import ImportantListHeader from './ImportantListHeader';
import ImportantListRow from './ImportantListRow';
import { ImportantInfo } from './ImportantManagement';

interface ImportantListProps {
  posts: SimpleImportant[];
  selectedPostInfos: ImportantInfo[];
  setSelectedPostInfos: Dispatch<SetStateAction<ImportantInfo[]>>;
}

export default function ImportantList({
  posts,
  selectedPostInfos,
  setSelectedPostInfos,
}: ImportantListProps) {
  const selectPost = (postInfo: ImportantInfo) => {
    setSelectedPostInfos((prev) => [...prev, postInfo]);
  };

  const deselectPost = (postInfo: ImportantInfo) => {
    setSelectedPostInfos((prev) =>
      prev.filter((info) => !(info.id === postInfo.id && info.category === postInfo.category)),
    );
  };

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
