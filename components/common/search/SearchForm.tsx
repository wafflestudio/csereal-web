import { useReducer, useState } from 'react';

import { StraightNode } from '@/components/common/Nodes';
import Tags from '@/components/common/Tags';

import { SearchInfo } from '@/hooks/useCustomSearchParams';

import KeywordInput from './KeywordInput';
import TagFilter from './TagFilter';

interface SearchFormProps {
  tags: string[]; // 전체 태그(선택지) 목록
  initTags: string[]; // 처음에 선택된 태그들 (useCustomSearchParams의 tags)
  initKeyword: string; // 초기 검색 키워드 (useCustomSearchParams의 keyword)
  disabled?: boolean;
  setSearchParams(searchInfo: SearchInfo): void; // useCustomSearchParams의 setSearchParams
}

export default function SearchForm({
  tags,
  initTags,
  initKeyword,
  disabled = false,
  setSearchParams,
}: SearchFormProps) {
  const [expanded, toggleExpanded] = useReducer((x) => !x, true);
  const iconName = expanded ? 'expand_less' : 'expand_more';
  const [keyword, setKeyword] = useState<string>(initKeyword);
  const [selectedTags, setSelectedTags] = useState<string[]>(initTags);

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
    <div className={`mb-6 w-full ${disabled && 'opacity-30'}`}>
      <h4
        className={`flex items-center gap-1 ${
          disabled ? 'cursor-default' : 'cursor-pointer'
        } w-fit`}
        onClick={() => !disabled && toggleExpanded()}
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
            disabled={disabled}
          />
          <KeywordInput keyword={keyword} setKeyword={setKeyword} disabled={disabled} />
          <SearchButton disabled={disabled} />
        </form>
      )}
      <StraightNode double={true} margin="mt-6 mb-3" />
      <div className="flex justify-between items-start gap-3 px-2.5">
        <Tags tags={initTags.length ? initTags : ['전체']} />
        {initTags.length > 0 && <TagResetButton onClickReset={resetTags} disabled={disabled} />}
      </div>
    </div>
  );
}

function SearchButton({ disabled }: { disabled: boolean }) {
  return (
    <button
      className="col-start-3 h-[1.875rem] w-[4.5rem] bg-neutral-700 enabled:hover:bg-neutral-500 font-yoon font-bold text-white text-xs tracking-[0.02em]"
      disabled={disabled}
    >
      결과 보기
    </button>
  );
}

interface TagResetButtonProps {
  disabled: boolean;
  onClickReset: () => void;
}

function TagResetButton({ disabled, onClickReset }: TagResetButtonProps) {
  return (
    <button
      onClick={onClickReset}
      className="flex items-center gap-[0.125rem] text-main-orange enabled:hover:text-neutral-400 text-xs whitespace-nowrap"
      disabled={disabled}
    >
      <span className="material-symbols-outlined scale-x-[-1] font-light text-base">refresh</span>
      <span>태그 초기화</span>
    </button>
  );
}
