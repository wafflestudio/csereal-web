import { QueryParams } from '@/utils/search';

interface PaginationProps {
  total: number;
  limit: number;
  current: number;
  setCurrent(newParams: QueryParams, purpose: 'search' | 'pagination'): void;
}

export default function Pagination({ total, limit, current, setCurrent }: PaginationProps) {
  const NUM_PAGES = Math.ceil(total / limit);
  const firstNum = current - ((current - 1) % 10); // 페이지네이션 시작 번호

  const paginate = (num: number) => {
    setCurrent({ page: `${num}` }, 'pagination');
  };

  return (
    <div className="flex justify-center">
      <ul className="flex gap-x-[0.3125rem] font-yoon h-[22px] mx-auto">
        <PaginationArrow iconName="keyboard_double_arrow_left" num={1} paginate={paginate} />
        <PaginationArrow iconName="navigate_before" num={current - 1} paginate={paginate} />
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
        <PaginationArrow iconName="navigate_next" num={current + 1} paginate={paginate} />
        <PaginationArrow
          iconName="keyboard_double_arrow_right"
          num={NUM_PAGES}
          paginate={paginate}
        />
      </ul>
    </div>
  );
}

interface PaginationArrowProps {
  iconName: string;
  num: number;
  paginate(num: number): void;
}

function PaginationArrow({ iconName, num, paginate }: PaginationArrowProps) {
  return (
    <li className='cursor-pointer' onClick={() => paginate(num)}>
      <span className="material-symbols-rounded font-light text-xl hover:text-main-orange">
        {iconName}
      </span>
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
    <li className="flex items-center justify-center w-[22px] cursor-pointer" onClick={() => paginate(num)}>
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
