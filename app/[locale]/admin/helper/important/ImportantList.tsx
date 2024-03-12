import { Dispatch } from 'react';

import { ImportantPostIdentifier, ImportantPreview } from '@/types/admin';

import ImportantListHeader from './ImportantListHeader';
import ImportantListRow from './ImportantListRow';

interface ImportantListProps {
  posts: ImportantPreview[];
  selectedPostIdentifiers: ImportantPostIdentifier[];
  changeSelectedIdentifiers: Dispatch<{
    type: 'ADD' | 'DELETE';
    identifier: ImportantPostIdentifier;
  }>;
}

export default function ImportantList({
  posts,
  selectedPostIdentifiers,
  changeSelectedIdentifiers,
}: ImportantListProps) {
  const selectPost = (identifier: ImportantPostIdentifier) =>
    changeSelectedIdentifiers({ type: 'ADD', identifier });

  const deselectPost = (identifier: ImportantPostIdentifier) =>
    changeSelectedIdentifiers({ type: 'DELETE', identifier });

  const getIsSelected = (identifier: ImportantPostIdentifier) =>
    selectedPostIdentifiers.some(
      (p) => p.id === identifier.id && p.category === identifier.category,
    );

  const toggleSelected = (identifier: ImportantPostIdentifier) => {
    getIsSelected(identifier) ? deselectPost(identifier) : selectPost(identifier);
  };

  return (
    <div className="mx-2.5 mb-8">
      <ImportantListHeader />
      <ul className={`divide-y divide-dashed divide-neutral-200 border-b border-neutral-200`}>
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
