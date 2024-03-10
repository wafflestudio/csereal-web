import { Tag } from '@/components/common/Tags';

import { SortOption, ViewOption } from '@/types/academics';

interface CourseToolbarProps {
  viewOption: ViewOption;
  sortOption: SortOption;
  changeOptions: (
    options: { type: 'view'; option: ViewOption } | { type: 'sort'; option: SortOption },
  ) => void;
}

export default function CourseToolbar({
  viewOption,
  sortOption,
  changeOptions,
}: CourseToolbarProps) {
  return (
    <div
      className={`mb-5 flex items-center justify-between pl-5 ${
        viewOption === '카드형' ? 'pr-11' : 'pr-5'
      }`}
    >
      <ViewOptions
        selectedOption={viewOption}
        changeOption={(option) => changeOptions({ type: 'view', option })}
      />
      <SortOptions
        selectedOption={sortOption}
        changeOption={(option) => changeOptions({ type: 'sort', option })}
      />
    </div>
  );
}

interface ViewOptionsProps {
  selectedOption: ViewOption;
  changeOption: (option: ViewOption) => void;
}

function ViewOptions({ selectedOption, changeOption }: ViewOptionsProps) {
  return (
    <div className="hidden gap-3 text-md text-neutral-400 sm:flex">
      <span
        className={selectedOption === '카드형' ? 'text-neutral-700' : 'cursor-pointer'}
        onClick={() => changeOption('카드형')}
      >
        카드형
      </span>
      <span>|</span>
      <span
        className={selectedOption === '목록형' ? 'text-neutral-700' : 'cursor-pointer'}
        onClick={() => changeOption('목록형')}
      >
        목록형
      </span>
    </div>
  );
}

interface SortOptionsProps {
  selectedOption: SortOption;
  changeOption: (option: SortOption) => void;
}

export const SORT_OPTIONS: SortOption[] = ['학년', '교과목 구분', '학점'];

function SortOptions({ selectedOption, changeOption }: SortOptionsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {SORT_OPTIONS.map((option) =>
        option === selectedOption ? (
          <Tag key={option} tag={option} defaultStyle="fill" />
        ) : (
          <Tag
            key={option}
            tag={option}
            hoverStyle="fill"
            defaultStyle="orange"
            onClick={() => changeOption(option)}
          />
        ),
      )}
    </div>
  );
}
