import { Dispatch, SetStateAction } from 'react';

import { SimpleImportant } from '@/types/admin';

import ImportantListHeader from './ImportantListHeader';
import ImportantListRow from './ImportantListRow';

interface ImportantListProps {
  posts: SimpleImportant[];
  selectedPostIds: Set<number>;
  setSelectedPostIds: Dispatch<SetStateAction<Set<number>>>;
}

export default function ImportantList({
  posts,
  selectedPostIds,
  setSelectedPostIds,
}: ImportantListProps) {
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
    <div className="mt-6 mb-8 mx-2.5">
      <ImportantListHeader />
      <ul className={`divide-y divide-neutral-200 divide-dashed border-b border-neutral-300`}>
        {posts.map((post, i) => (
          <ImportantListRow
            key={i}
            index={i + 1}
            post={post}
            isSelected={selectedPostIds.has(post.id)}
            toggleSelected={toggleSelected}
          />
        ))}
      </ul>
    </div>
  );
}
