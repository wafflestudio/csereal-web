import { Dispatch } from 'react';

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
    if (selectedPostIds.has(id)) {
      deselectPost(id);
    } else {
      selectPost(id);
    }
  };

  return (
    <div className="mx-2.5 mb-8">
      <SlideListHeader />
      <ul className={`divide-y divide-dashed divide-neutral-200 border-b border-neutral-300`}>
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
