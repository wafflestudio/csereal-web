import { useReducer, useState } from 'react';

import { SearchInfo } from '@/hooks/useCustomSearchParams';

import KeywordInput from './KeywordInput';
import TagFilter from './TagFilter';
import { StraightNode } from '@/components/common/Nodes';
import Tags from '@/components/common/Tags';

interface SearchProps {
  tags: string[]; // 전체 태그(선택지) 목록
  initTags: string[]; // 처음에 선택된 태그들 (useCustomSearchParams의 tags)
  initKeyword: string; // 초기 검색 키워드 (useCustomSearchParams의 keyword)
  setSearchParams(searchInfo: SearchInfo): void; // useCustomSearchParams의 setSearchParams
}

export default function SearchForm({ tags, initTags, initKeyword, setSearchParams }: SearchProps) {
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
    <div className="mb-6 pr-2.5 w-full">
      <h4 className="flex items-center gap-1 cursor-pointer w-fit" onClick={toggleExpanded}>
        <span className="text-md font-bold font-yoon text-neutral-700 tracking-wide">검색</span>
        <span className="material-symbols-outlined font-semibold text-neutral-700">{iconName}</span>
      </h4>
      {expanded && (
        <form
          className="grid grid-cols-[auto_1fr_auto] grid-rows-auto gap-y-7 pt-4 pl-3 min-w-max"
          onSubmit={search}
        >
          <TagFilter tags={tags} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
          <KeywordInput keyword={keyword} setKeyword={setKeyword} />
          <SearchButton />
        </form>
      )}
      <StraightNode double={true} margin="mt-6 mb-3" />
      <div className="flex justify-between items-start gap-3 px-2.5">
        <Tags tags={initTags.length ? initTags : ['전체']} />
        {Boolean(initTags.length) && <TagResetButton onClickReset={resetTags} />}
      </div>
    </div>
  );
}

function SearchButton() {
  return (
    <button className="col-start-3 h-[1.875rem] w-[4.5rem] bg-neutral-700 font-yoon font-bold text-white text-xs tracking-[0.02em] hover:bg-neutral-500">
      결과 보기
    </button>
  );
}

function TagResetButton({ onClickReset }: { onClickReset: () => void }) {
  return (
    <button
      onClick={onClickReset}
      className="flex items-center gap-[0.125rem] text-main-orange hover:text-neutral-400 text-xs whitespace-nowrap"
    >
      <span className="material-symbols-outlined scale-x-[-1] font-light text-base">refresh</span>
      <span>태그 초기화</span>
    </button>
  );
}
