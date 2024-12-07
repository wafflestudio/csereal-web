import { news } from '@/constants/segmentNode';
import { SlidePreview } from '@/types/admin';
import { getPath } from '@/utils/page';

import { CheckboxCell, DateCell, EditCell, IndexCell, TitleCell } from '../ListCell';

interface SlideListRowProps {
  index: number;
  post: SlidePreview;
  isSelected: boolean;
  toggleSelected: (id: number) => void;
}

export const SLIDE_ROW_CELL_WIDTH = {
  check: 'w-[3.125rem]',
  index: 'w-[3.125rem]',
  title: 'w-[31.25rem]',
  date: 'w-[9.375rem]',
  edit: 'w-auto min-w-[4.375rem]',
} as const;

const newsPath = getPath(news);

export default function SlideListRow({
  index,
  post,
  isSelected,
  toggleSelected,
}: SlideListRowProps) {
  return (
    <li
      className={`flex flex-nowrap items-center py-[12px] text-md tracking-wide ${
        isSelected && 'bg-neutral-100'
      }`}
    >
      <CheckboxCell
        isChecked={isSelected}
        toggleCheck={() => toggleSelected(post.id)}
        width={SLIDE_ROW_CELL_WIDTH.check}
      />
      <IndexCell index={index} width={SLIDE_ROW_CELL_WIDTH.index} />
      <TitleCell
        title={post.title}
        href={`${newsPath}/${post.id}`}
        width={SLIDE_ROW_CELL_WIDTH.title}
      />
      <DateCell date={post.createdAt} width={SLIDE_ROW_CELL_WIDTH.date} />
      <EditCell href={`${newsPath}/${post.id}/edit`} width={SLIDE_ROW_CELL_WIDTH.edit} />
    </li>
  );
}
