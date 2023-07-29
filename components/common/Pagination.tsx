import { QueryParams } from '@/utils/search';

interface PaginationProps {
  total: number;
  limit: number;
  current: number;
  setCurrent(newParams: QueryParams, purpose: 'search' | 'pagination'): void;
}

const PAGE_LIMIT = 10;

export default function Pagination({ total, limit, current, setCurrent }: PaginationProps) {
  const NUM_PAGES = Math.ceil(total / limit);
  const firstNum = current - ((current - 1) % PAGE_LIMIT); // 페이지네이션 시작 번호

  const paginate = (num: number) => {
    setCurrent({ page: `${num}` }, 'pagination');
  };

  return (
    <div className="flex justify-center">
      <ul className="flex gap-x-[0.3125rem] font-yoon h-[22px] mx-auto">
        <PaginationArrow
          iconName="keyboard_double_arrow_left"
          num={1}
          disabled={current === 1}
          paginate={paginate}
        />
        <PaginationArrow
          iconName="navigate_before"
          num={current - 1}
          disabled={firstNum === 1}
          paginate={paginate}
        />
        {Array(Math.min(limit, NUM_PAGES - firstNum + 1))
          .fill(firstNum)
          .map((num, i) => (
            <PaginationNumber
              num={num + i}
              isSelected={current === num + i}
              paginate={paginate}
              key={i}
            />
          ))}
        <PaginationArrow
          iconName="navigate_next"
          num={current + 1}
          disabled={firstNum + PAGE_LIMIT > NUM_PAGES}
          paginate={paginate}
        />
        <PaginationArrow
          iconName="keyboard_double_arrow_right"
          num={NUM_PAGES}
          disabled={current === NUM_PAGES}
          paginate={paginate}
        />
      </ul>
    </div>
  );
}

interface PaginationArrowProps {
  iconName: string;
  num: number;
  disabled: boolean;
  paginate(num: number): void;
}

function PaginationArrow({ iconName, num, disabled, paginate }: PaginationArrowProps) {
  const arrowStyle = disabled
    ? 'cursor-default text-neutral-400'
    : 'cursor-pointer hover:text-main-orange';
  return (
    <li className={arrowStyle} onClick={() => disabled || paginate(num)}>
      <span className="material-symbols-rounded font-light text-xl">{iconName}</span>
    </li>
  );
}

interface PaginationNumberProps {
  num: number;
  isSelected: boolean;
  paginate(num: number): void;
}

function PaginationNumber({ num, isSelected, paginate }: PaginationNumberProps) {
  return (
    <li
      className="flex items-center justify-center w-[22px] cursor-pointer"
      onClick={() => paginate(num)}
    >
      <span
        className={`text-xs ${
          isSelected && 'font-bold underline text-main-orange'
        } hover:text-main-orange`}
      >
        {num}
      </span>
    </li>
  );
}
