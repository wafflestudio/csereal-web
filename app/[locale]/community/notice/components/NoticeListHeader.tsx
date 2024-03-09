import { NOTICE_ROW_CELL_WIDTH } from './NoticeListRow';

export default function NoticeListHeader({ isEditMode }: { isEditMode: boolean }) {
  const paddingLeft = isEditMode ? 'pl-[6.25rem]' : 'pl-[3.125rem]';

  return (
    <h5
      className={`h-11 ${paddingLeft} hidden items-center border-b border-neutral-200 pr-4 text-[15px] text-neutral-800 sm:flex`}
    >
      <span className={`${NOTICE_ROW_CELL_WIDTH.title} grow whitespace-nowrap pl-3 tracking-wide`}>
        제목
      </span>
      <span className={`${NOTICE_ROW_CELL_WIDTH.date} whitespace-nowrap pl-8 tracking-wide`}>
        날짜
      </span>
    </h5>
  );
}
