import { useReducer, useState } from 'react';

import { StraightNode } from '@/components/common/Nodes';
import Tags from '@/components/common/Tags';

import { SearchInfo } from '@/hooks/useCustomSearchParams';

import KeywordInput from './KeywordInput';
import TagFilter from './TagFilter';

interface SearchProps {
  tags: string[]; // 전체 태그(선택지) 목록
  initTags: string[]; // 처음에 선택된 태그들 (useCustomSearchParams의 tags)
  initKeyword: string; // 초기 검색 키워드 (useCustomSearchParams의 keyword)
  isDisabled?: boolean;
  setSearchParams(searchInfo: SearchInfo): void; // useCustomSearchParams의 setSearchParams
}

export default function SearchForm({
  tags,
  initTags,
  initKeyword,
  isDisabled = false,
  setSearchParams,
}: SearchProps) {
  const [expanded, toggleExpanded] = useReducer((x) => !x, true);
  const iconName = expanded ? 'expand_less' : 'expand_more';
  const [keyword, setKeyword] = useState<string>(initKeyword);
  const [selectedTags, setSelectedTags] = useState<string[]>(initTags);
  console.log(isDisabled);
  const search = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const info: SearchInfo = { purpose: 'search', keyword, tag: selectedTags };
    setSearchParams(info);
  };

  const resetTags = () => {
    setSelectedTags([]);
    setSearchParams({ purpose: 'search', keyword });
  };

  return (
    <div className={`mb-6 w-full ${isDisabled && 'opacity-30'}`}>
      <h4
        className={`flex items-center gap-1 ${
          isDisabled ? 'cursor-default' : 'cursor-pointer'
        } w-fit`}
        onClick={() => !isDisabled && toggleExpanded()}
      >
        <span className="text-md font-bold font-yoon text-neutral-700 tracking-wide">검색</span>
        <span className="material-symbols-outlined font-semibold text-neutral-700">{iconName}</span>
      </h4>
      {expanded && (
        <form
          className="grid grid-cols-[auto_1fr_auto] grid-rows-auto gap-y-7 pt-4 pl-3 pr-2.5 min-w-max"
          onSubmit={search}
        >
          <TagFilter
            tags={tags}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            isDisabled={isDisabled}
          />
          <KeywordInput keyword={keyword} setKeyword={setKeyword} isDisabled={isDisabled} />
          <SearchButton isDisabled={isDisabled} />
        </form>
      )}
      <StraightNode double={true} margin="mt-6 mb-3" />
      <div className="flex justify-between items-start gap-3 px-2.5">
        <Tags tags={initTags.length ? initTags : ['전체']} />
        {initTags.length > 0 && <TagResetButton onClickReset={resetTags} isDisabled={isDisabled} />}
      </div>
    </div>
  );
}

function SearchButton({ isDisabled }: { isDisabled: boolean }) {
  return (
    <button
      className="col-start-3 h-[1.875rem] w-[4.5rem] bg-neutral-700 enabled:hover:bg-neutral-500 font-yoon font-bold text-white text-xs tracking-[0.02em]"
      disabled={isDisabled}
    >
      결과 보기
    </button>
  );
}

interface TagResetButtonProps {
  isDisabled: boolean;
  onClickReset: () => void;
}

function TagResetButton({ isDisabled, onClickReset }: TagResetButtonProps) {
  return (
    <button
      onClick={onClickReset}
      className="flex items-center gap-[0.125rem] text-main-orange enabled:hover:text-neutral-400 text-xs whitespace-nowrap"
      disabled={isDisabled}
    >
      <span className="material-symbols-outlined scale-x-[-1] font-light text-base">refresh</span>
      <span>태그 초기화</span>
    </button>
  );
}
