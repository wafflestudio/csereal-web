import { ImportantPostIdentifier, ImportantPreview } from '@/apis/types/admin';
import { news, notice, seminar } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

import { CategoryCell, CheckboxCell, DateCell, EditCell, IndexCell, TitleCell } from '../ListCell';

interface ImportantListRowProps {
  index: number;
  post: ImportantPreview;
  isSelected: boolean;
  toggleSelected: (postInfo: ImportantPostIdentifier) => void;
}

export const IMPORTANT_ROW_CELL_WIDTH = {
  check: 'w-[3.125rem]',
  index: 'w-[3.125rem]',
  category: 'w-[6.25rem]',
  title: 'w-[25rem]',
  date: 'w-[9.375rem]',
  edit: 'w-auto min-w-[4.375rem]',
} as const;

const importantCategoryPaths = {
  notice: getPath(notice),
  news: getPath(news),
  seminar: getPath(seminar),
};

export default function ImportantListRow({
  index,
  post,
  isSelected,
  toggleSelected,
}: ImportantListRowProps) {
  const categoryPath = importantCategoryPaths[post.category];

  return (
    <li
      className={`flex items-center py-[12px] text-md tracking-wide ${
        isSelected && 'bg-neutral-100'
      }`}
    >
      <CheckboxCell
        isChecked={isSelected}
        toggleCheck={() => toggleSelected({ id: post.id, category: post.category })}
        width={IMPORTANT_ROW_CELL_WIDTH.check}
      />
      <IndexCell index={index} width={IMPORTANT_ROW_CELL_WIDTH.index} />
      <CategoryCell category={post.category} width={IMPORTANT_ROW_CELL_WIDTH.category} />
      <TitleCell
        title={post.title}
        href={`${categoryPath}/${post.id}`}
        width={IMPORTANT_ROW_CELL_WIDTH.title}
      />
      <DateCell date={post.createdAt} width={IMPORTANT_ROW_CELL_WIDTH.date} />
      <EditCell href={`${categoryPath}/${post.id}/edit`} width={IMPORTANT_ROW_CELL_WIDTH.edit} />
    </li>
  );
}
