import { Dispatch, SetStateAction } from 'react';

import { SimpleSlide } from '@/types/admin';

import SlideListHeader from './SlideLIstHeader';
import SlideListRow from './SlideListRow';

interface SlideListProps {
  posts: SimpleSlide[];
  selectedPostIds: Set<number>;
  setSelectedPostIds: Dispatch<SetStateAction<Set<number>>>;
}

export default function SlideList({ posts, selectedPostIds, setSelectedPostIds }: SlideListProps) {
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
      <SlideListHeader />
      <ul className={`divide-y divide-neutral-200 divide-dashed`}>
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
