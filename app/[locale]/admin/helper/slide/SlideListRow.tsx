import { Link } from '@/navigation';
import CheckboxOrange from '@/public/image/checkbox_orange.svg';

import { SlidePreview } from '@/types/admin';

import { getPath } from '@/utils/page';
import { news } from '@/utils/segmentNode';

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
  edit: 'w-[4.375rem]',
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
      className={`flex items-center py-[12px] text-md tracking-wide ${
        isSelected && 'bg-neutral-100'
      }`}
    >
      <CheckboxCell isChecked={isSelected} toggleCheck={() => toggleSelected(post.id)} />
      <IndexCell index={index} />
      <TitleCell title={post.title} id={post.id} />
      <DateCell date={post.createdAt} />
      <EditCell id={post.id} />
    </li>
  );
}

interface CheckboxCellProps {
  isChecked: boolean;
  toggleCheck: () => void;
}

function CheckboxCell({ isChecked = true, toggleCheck }: CheckboxCellProps) {
  return (
    <span className={`${SLIDE_ROW_CELL_WIDTH.check} flex justify-center`}>
      {isChecked ? (
        <CheckboxOrange className="cursor-pointer" onClick={toggleCheck} />
      ) : (
        <span
          className="material-symbols-rounded cursor-pointer 
         font-light"
          onClick={toggleCheck}
        >
          check_box_outline_blank
        </span>
      )}
    </span>
  );
}

function IndexCell({ index }: { index: number }) {
  return <span className={`${SLIDE_ROW_CELL_WIDTH.index} text-center`}>{index}</span>;
}

function TitleCell({ title, id }: { title: string; id: number }) {
  return (
    <span className={`${SLIDE_ROW_CELL_WIDTH.title} pl-3 font-medium`}>
      <Link
        href={`${newsPath}/${id}`}
        className="flex max-w-fit items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap hover:underline"
      >
        {title}
      </Link>
    </span>
  );
}

function DateCell({ date }: { date: string }) {
  return <span className={`${SLIDE_ROW_CELL_WIDTH.date} pl-8`}>{formatDate(new Date(date))}</span>;
}

function EditCell({ id }: { id: number }) {
  return (
    <span className={`${SLIDE_ROW_CELL_WIDTH.edit} pl-3`}>
      <Link
        href={`${newsPath}/${id}/edit`}
        className="cursor-pointer font-medium text-main-orange hover:underline"
      >
        편집
      </Link>
    </span>
  );
}

const formatDate = (date: Date) => {
  const yyyy = String(date.getFullYear()).padStart(4, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');

  return `${yyyy}/${mm}/${dd}`; // e.g. 2023/08/01
};
