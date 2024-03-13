import { NOTICE_ROW_CELL_WIDTH } from './NoticeListRow';

export default function NoticeListHeader({ isEditMode }: { isEditMode: boolean }) {
  const paddingLeft = isEditMode ? 'pl-[6.25rem]' : 'pl-[3.125rem]';

  return (
    <h5
      className={`h-11 ${paddingLeft} hidden items-center border-b border-neutral-200 text-[15px] text-neutral-800 sm:flex`}
    >
      <span
        className={`${NOTICE_ROW_CELL_WIDTH.title} min-w-0 grow whitespace-nowrap tracking-wide sm:pl-3`}
      >
        제목
      </span>
      <span
        className={`${NOTICE_ROW_CELL_WIDTH.date} whitespace-nowrap text-left tracking-wide sm:pl-8 sm:pr-10`}
      >
        {/* 아래 날짜들과 정렬하려면 너비를 직접 똑같이 맞춰줘야 함 */}
        <span className="inline-block w-20">날짜</span>
      </span>
    </h5>
  );
}
