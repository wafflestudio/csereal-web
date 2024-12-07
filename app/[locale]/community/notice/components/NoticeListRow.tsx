import PaginatedLink from '@/app/[locale]/community/components/PaginatedLink';
import { notice } from '@/constants/segmentNode';
import CheckboxOrange from '@/public/image/checkbox_orange.svg';
import ClipIcon from '@/public/image/clip_icon.svg';
import LockIcon from '@/public/image/lock_icon.svg';
import PinIcon from '@/public/image/pin_icon.svg';
import { NoticePreview } from '@/types/notice';
import { getPath } from '@/utils/page';

interface NoticeListRowProps {
  post: NoticePreview;
  isEditMode: boolean;
  isSelected: boolean;
  toggleSelected: (id: number, isSelected: boolean) => void;
}

export const NOTICE_ROW_CELL_WIDTH = {
  check: 'sm:w-[3.125rem]',
  pin: 'sm:w-[3.125rem]',
  title: 'sm:w-[18.75rem]',
  date: 'sm:w-auto sm:min-w-[7.125rem]',
} as const;

export default function NoticeListRow({
  post,
  isEditMode,
  isSelected,
  toggleSelected,
}: NoticeListRowProps) {
  return (
    <li
      className={`flex flex-col gap-2.5 px-7 py-6 text-md sm:h-11 sm:flex-row sm:items-center sm:gap-0 sm:px-0 sm:py-2.5 ${
        post.isPinned && 'font-semibold'
      } ${!isEditMode && (post.isPrivate ? 'bg-neutral-200' : 'odd:bg-neutral-50')} ${
        isSelected && 'bg-neutral-100'
      } `}
    >
      {isEditMode && (
        <CheckboxCell
          isChecked={isSelected}
          toggleCheck={() => toggleSelected(post.id, isSelected)}
        />
      )}
      <PrivateOrPinCell isPrivate={post.isPrivate} isPinned={post.isPinned} />
      <TitleCell
        title={post.title}
        hasAttachment={post.hasAttachment}
        id={post.id}
        isEditMode={isEditMode}
        isPinned={post.isPinned}
      />
      <DateCell date={post.createdAt} />
    </li>
  );
}

interface CheckboxCellProps {
  isChecked: boolean;
  toggleCheck: () => void;
}

function CheckboxCell({ isChecked, toggleCheck }: CheckboxCellProps) {
  return (
    <span className={`${NOTICE_ROW_CELL_WIDTH.check} hidden justify-center sm:flex`}>
      {isChecked ? (
        <CheckboxOrange className="cursor-pointer" onClick={toggleCheck} />
      ) : (
        <span
          className="material-symbols-rounded cursor-pointer text-[1.25rem] font-light"
          onClick={toggleCheck}
        >
          check_box_outline_blank
        </span>
      )}
    </span>
  );
}

function PrivateOrPinCell({ isPrivate, isPinned }: { isPrivate: boolean; isPinned: boolean }) {
  return (
    <span
      className={`${NOTICE_ROW_CELL_WIDTH.pin} ${
        !(isPrivate || isPinned) && 'hidden sm:inline-flex'
      } shrink-0 sm:px-[0.8125rem]`}
    >
      {isPrivate ? <LockIcon /> : isPinned && <PinIcon />}
    </span>
  );
}

interface TitleCellProps {
  title: string;
  hasAttachment: boolean;
  id: number;
  isEditMode: boolean;
  isPinned: boolean;
}

const noticePath = getPath(notice);

function TitleCell({ title, hasAttachment, id, isEditMode, isPinned }: TitleCellProps) {
  if (isEditMode) {
    return (
      <span className={`${NOTICE_ROW_CELL_WIDTH.title} flex grow gap-1.5 pl-3`}>
        <span className="overflow-hidden text-ellipsis whitespace-nowrap tracking-wide">
          {title}
        </span>
        {hasAttachment && <ClipIcon className="shrink-0" />}
      </span>
    );
  } else {
    return (
      <span className={`${NOTICE_ROW_CELL_WIDTH.title} min-w-0 grow sm:pl-3`}>
        <PaginatedLink
          href={`${noticePath}/${id}`}
          className="flex items-center gap-1.5 font-semibold sm:font-normal"
        >
          <span
            className={`${
              isPinned && 'font-semibold text-main-orange sm:text-neutral-800'
            } overflow-hidden text-ellipsis text-base tracking-wide hover:text-main-orange sm:whitespace-nowrap sm:text-md`}
          >
            {title}
          </span>
          {hasAttachment && <ClipIcon className="shrink-0" />}
        </PaginatedLink>
      </span>
    );
  }
}

function DateCell({ date }: { date: string }) {
  return (
    <span className={`${NOTICE_ROW_CELL_WIDTH.date} tracking-wide sm:pl-8 sm:pr-10`}>
      {formatDate(new Date(date))}
    </span>
  );
}

const formatDate = (date: Date) => {
  const yyyy = String(date.getFullYear()).padStart(4, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');

  return `${yyyy}/${mm}/${dd}`; // e.g. 2023/08/01
};
