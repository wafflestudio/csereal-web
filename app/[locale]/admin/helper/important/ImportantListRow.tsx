import { Link } from '@/navigation';
import CheckboxOrange from '@/public/image/checkbox_orange.svg';

import { ImportantPostIdentifier, ImportantPreview } from '@/types/admin';

import { getPath } from '@/utils/page';
import { news, notice, seminar } from '@/utils/segmentNode';

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
      />
      <IndexCell index={index} />
      <CategoryCell category={post.category} />
      <TitleCell title={post.title} href={`${categoryPath}/${post.id}`} />
      <DateCell date={post.createdAt} />
      <EditCell href={`${categoryPath}/${post.id}/edit`} />
    </li>
  );
}

interface CheckboxCellProps {
  isChecked: boolean;
  toggleCheck: () => void;
}

function CheckboxCell({ isChecked = true, toggleCheck }: CheckboxCellProps) {
  return (
    <span className={`${IMPORTANT_ROW_CELL_WIDTH.check} flex justify-center`}>
      {isChecked ? (
        <CheckboxOrange className="cursor-pointer" onClick={toggleCheck} />
      ) : (
        <span className="material-symbols-rounded cursor-pointer font-light" onClick={toggleCheck}>
          check_box_outline_blank
        </span>
      )}
    </span>
  );
}

function IndexCell({ index }: { index: number }) {
  return <span className={`${IMPORTANT_ROW_CELL_WIDTH.index} text-center`}>{index}</span>;
}

function CategoryCell({ category }: { category: string }) {
  return <span className={`${IMPORTANT_ROW_CELL_WIDTH.category} text-center`}>{category}</span>;
}

function TitleCell({ title, href }: { title: string; href: string }) {
  return (
    <span className={`${IMPORTANT_ROW_CELL_WIDTH.title} min-w-0 grow pl-3 font-medium`}>
      <Link
        href={href}
        className="flex items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap hover:underline"
      >
        <span className="overflow-hidden text-ellipsis whitespace-nowrap">{title}</span>
      </Link>
    </span>
  );
}

function DateCell({ date }: { date: string }) {
  return (
    <span className={`${IMPORTANT_ROW_CELL_WIDTH.date} pl-8`}>{formatDate(new Date(date))}</span>
  );
}

function EditCell({ href }: { href: string }) {
  return (
    <span className={`${IMPORTANT_ROW_CELL_WIDTH.edit} pl-3`}>
      <Link
        href={href}
        className="cursor-pointer whitespace-nowrap font-medium text-main-orange hover:underline"
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
