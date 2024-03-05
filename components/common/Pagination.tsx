interface PaginationProps {
  totalPostsCount: number;
  /** 한 페이지에 보여줄 글 개수 */
  postsCountPerPage: number;
  currentPage: number;
  /** 페이지네이션 바에 보여줄 페이지 개수 */
  pageLimit?: number;
  setCurrentPage(pageNum: number): void;
  disabled?: boolean;
}

const MAX_PAGE = 10000; // totalPostsCount 실제값이 아닌 추정치가 왔을 경우 사용할 마지막 페이지 번호

export default function Pagination({
  totalPostsCount,
  postsCountPerPage,
  currentPage,
  pageLimit = 10,
  setCurrentPage,
  disabled = false,
}: PaginationProps) {
  const numPages = Math.ceil((totalPostsCount || 1) / postsCountPerPage); // 전체 페이지 개수
  const firstNum = currentPage - ((currentPage - 1) % pageLimit); // 페이지네이션 시작 번호

  // fetch하는 동안 NUM_PAGES가 1이 되기에 최솟값이 1이도록 처리
  const paginationNumberCnt = Math.max(1, Math.min(pageLimit, numPages - firstNum + 1));

  // 페이지 범위 넘어가면 마지막 페이지로 리다이렉트
  if (numPages < currentPage) setCurrentPage(numPages);

  return (
    <div className={`flex justify-center ${disabled && 'opacity-30'}`}>
      <ul className="flex gap-x-2 h-6 mx-auto text-neutral-800 tracking-wide">
        <PaginationArrow
          iconName="keyboard_double_arrow_left"
          num={1}
          disabled={currentPage === 1 || disabled}
          movePageNumber={setCurrentPage}
        />
        <PaginationArrow
          iconName="navigate_before"
          num={firstNum - 1}
          disabled={firstNum === 1 || disabled}
          movePageNumber={setCurrentPage}
        />
        <div className="flex gap-x-2 px-2">
          {Array(paginationNumberCnt)
            .fill(firstNum)
            .map((num, i) => (
              <PaginationNumber
                num={num + i}
                isSelected={currentPage === num + i}
                disabled={disabled}
                movePageNumber={setCurrentPage}
                key={i}
              />
            ))}
        </div>
        <PaginationArrow
          iconName="navigate_next"
          num={firstNum + pageLimit}
          disabled={firstNum + pageLimit > numPages || disabled}
          movePageNumber={setCurrentPage}
        />
        <PaginationArrow
          iconName="keyboard_double_arrow_right"
          num={currentPage === 1 ? MAX_PAGE : numPages}
          disabled={currentPage === numPages || disabled}
          movePageNumber={setCurrentPage}
        />
      </ul>
    </div>
  );
}

interface PaginationArrowProps {
  iconName: string;
  num: number;
  disabled: boolean;
  movePageNumber(num: number): void;
}

function PaginationArrow({ iconName, num, disabled, movePageNumber }: PaginationArrowProps) {
  const arrowStyle = disabled
    ? 'cursor-default text-neutral-400'
    : 'cursor-pointer hover:text-main-orange';

  return (
    <li className={arrowStyle} onClick={() => disabled || movePageNumber(num)}>
      <span className="material-symbols-rounded font-light text-2xl">{iconName}</span>
    </li>
  );
}

interface PaginationNumberProps {
  num: number;
  isSelected: boolean;
  disabled: boolean;
  movePageNumber(num: number): void;
}

function PaginationNumber({ num, isSelected, disabled, movePageNumber }: PaginationNumberProps) {
  const cursorStyle = isSelected || disabled ? 'cursor-default' : 'cursor-pointer';
  const textStyle = isSelected ? 'text-main-orange' : disabled ? '' : 'hover:text-main-orange';

  return (
    <li
      className={`flex items-center justify-center px-2 ${cursorStyle} ${textStyle}`}
      onClick={() => !isSelected && !disabled && movePageNumber(num)}
    >
      <span className={`text-md ${isSelected && 'font-bold underline'}`}>{num}</span>
    </li>
  );
}
