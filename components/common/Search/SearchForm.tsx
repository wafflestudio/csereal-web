import { useReducer, useState } from 'react';

import { QueryParams } from '@/utils/search';

import KeywordInput from './KeywordInput';
import TagFilter from './TagFilter';

interface SearchProps {
  tags: string[];
  initTags: string[];
  initKeyword: string;
  setSearchParams(params: QueryParams): void;
}

export default function SearchForm({ tags, initTags, initKeyword, setSearchParams }: SearchProps) {
  const [expanded, toggleExpanded] = useReducer((x) => !x, true);
  const iconName = expanded ? 'expand_less' : 'expand_more';
  const [keyword, setKeyword] = useState<string>(initKeyword);
  const [selectedTags, setSelectedTags] = useState<string[]>(initTags);

  const search = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params: QueryParams = { keyword, tag: selectedTags };
    setSearchParams(params);
  };

  return (
    <div className="mb-6 w-[840px]">
      <h4 className="flex items-center gap-1 cursor-pointer w-fit" onClick={toggleExpanded}>
        <span className="text-sm font-bold font-yoon">검색</span>
        <span className="material-symbols-outlined font-semibold">{iconName}</span>
      </h4>
      {expanded && (
        <form
          className="grid grid-cols-[auto_1fr_auto] grid-rows-[auto_30px] gap-y-7 pt-4 pl-3"
          onSubmit={search}
        >
          <TagFilter tags={tags} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
          <KeywordInput keyword={keyword} setKeyword={setKeyword} />
          <SearchButton />
        </form>
      )}
    </div>
  );
}

function SearchButton() {
  return (
    <button className="col-start-3 mr-2.5 h-[1.875rem] w-[4.5rem] bg-neutral-700 font-yoon font-bold text-white text-xs">
      결과 보기
    </button>
  );
}
