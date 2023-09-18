import { FormEvent, useReducer, useState } from 'react';

import { StraightNode } from '@/components/common/Nodes';

import { SearchInfo } from '@/hooks/useCustomSearchParams';

import SearchForm from './SearchForm';
import SelectedTags from './SelectedTags';

interface SearchBoxProps {
  tags: string[]; // 전체 태그(선택지) 목록
  initTags: string[]; // 처음에 선택된 태그들 (useCustomSearchParams의 tags)
  initKeyword: string; // 초기 검색 키워드 (useCustomSearchParams의 keyword)
  disabled?: boolean;
  setSearchParams(searchInfo: SearchInfo): void; // useCustomSearchParams의 setSearchParams
}

export default function SearchBox({
  tags,
  initTags,
  initKeyword,
  disabled = false,
  setSearchParams,
}: SearchBoxProps) {
  const [expanded, toggleExpanded] = useReducer((x) => !x, true);
  const [keyword, setKeyword] = useState<string>(initKeyword);
  const [selectedTags, setSelectedTags] = useState<string[]>(initTags);

  const search = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const info: SearchInfo = { purpose: 'search', keyword, tag: selectedTags };
    setSearchParams(info);
  };

  const resetTags = () => {
    setSelectedTags([]);
    setSearchParams({ purpose: 'search', keyword });
  };

  const deleteTag = (targetTag: string) => {
    const filteredTags = selectedTags.filter((tag) => tag !== targetTag);
    setSelectedTags(filteredTags);
    setSearchParams({ purpose: 'search', keyword, tag: filteredTags });
  };

  return (
    <div className={`mb-6 w-full ${disabled && 'opacity-30'}`}>
      <SearchHeader disabled={disabled} expanded={expanded} toggleExpanded={toggleExpanded} />
      {expanded && (
        <SearchForm
          disabled={disabled}
          onSubmit={search}
          tags={tags}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          keyword={keyword}
          setKeyword={setKeyword}
        />
      )}
      <StraightNode double={true} margin="mt-6 mb-3" />
      <SelectedTags
        tags={initTags}
        deleteTag={deleteTag}
        resetTags={resetTags}
        disabled={disabled}
      />
    </div>
  );
}

interface SearchHeaderProps {
  disabled: boolean;
  expanded: boolean;
  toggleExpanded: () => void;
}

function SearchHeader({ disabled, expanded, toggleExpanded }: SearchHeaderProps) {
  const iconName = expanded ? 'expand_less' : 'expand_more';

  return (
    <h4
      className={`flex items-center gap-1 ${disabled ? 'cursor-default' : 'cursor-pointer'} w-fit`}
      onClick={() => !disabled && toggleExpanded()}
    >
      <span className="text-md font-bold font-yoon text-neutral-700 tracking-wide">검색</span>
      <span className="material-symbols-outlined font-semibold text-neutral-700">{iconName}</span>
    </h4>
  );
}
