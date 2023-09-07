import { Dispatch, SetStateAction } from 'react';

import { SlidePreview } from '@/types/admin';

import SlideListHeader from './SlideLIstHeader';
import SlideListRow from './SlideListRow';

interface SlideListProps {
  posts: SlidePreview[];
  selectedPostIds: Set<number>;
  changeSelectedIds: Dispatch<{ type: 'ADD' | 'DELETE'; id: number }>;
}

export default function SlideList({ posts, selectedPostIds, changeSelectedIds }: SlideListProps) {
  const selectPost = (id: number) => changeSelectedIds({ type: 'ADD', id });

  const deselectPost = (id: number) => changeSelectedIds({ type: 'DELETE', id });

  const toggleSelected = (id: number) => {
    selectedPostIds.has(id) ? deselectPost(id) : selectPost(id);
  };

  return (
    <div className="mb-8 mx-2.5">
      <SlideListHeader />
      <ul className={`divide-y divide-neutral-200 divide-dashed border-b border-neutral-300`}>
        {posts.map((post, i) => (
          <SlideListRow
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
