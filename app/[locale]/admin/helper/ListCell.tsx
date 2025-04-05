import { Link } from '@/i18n/routing';
import CheckboxOrange from '@/public/image/checkbox_orange.svg';
import { useDayjs } from '@/utils/hooks/useDayjs';

interface CheckboxCellProps {
  isChecked: boolean;
  toggleCheck: () => void;
  width: string;
}

export function CheckboxCell({ isChecked = true, toggleCheck, width }: CheckboxCellProps) {
  return (
    <span className={`${width} flex justify-center`}>
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

export function IndexCell({ index, width }: { index: number; width: string }) {
  return <span className={`${width} text-center`}>{index}</span>;
}

export function CategoryCell({ category, width }: { category: string; width: string }) {
  return <span className={`${width} text-center`}>{category}</span>;
}

export function TitleCell({ title, href, width }: { title: string; href: string; width: string }) {
  return (
    <span className={`${width} min-w-0 grow pl-3 font-medium`}>
      <Link
        href={href}
        className="flex items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap hover:underline"
      >
        {/* span이 있어야 text-ellipsis 작동 */}
        <span className="overflow-hidden text-ellipsis whitespace-nowrap">{title}</span>
      </Link>
    </span>
  );
}

export function DateCell({ date, width }: { date: string; width: string }) {
  const formatDate = useDayjs();
  return (
    <span className={`${width} pl-8`}>
      {formatDate ? formatDate({ date: date, format: 'simple' }) : ''}
    </span>
  );
}

export function EditCell({ href, width }: { href: string; width: string }) {
  return (
    <span className={`${width} pl-3`}>
      <Link
        href={href}
        className="cursor-pointer whitespace-nowrap font-medium text-main-orange hover:underline"
      >
        편집
      </Link>
    </span>
  );
}
