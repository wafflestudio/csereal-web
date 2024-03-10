import { useState } from 'react';

import { StraightNode } from '@/components/common/Nodes';

import { SearchInfo } from '@/utils/hooks/useCustomSearchParams';

import SearchForm from './SearchForm';
import SelectedTags from './SelectedTags';

interface SearchBoxProps {
  tags: string[]; // 전체 태그(선택지) 목록
  initTags: string[]; // 처음에 선택된 태그들 (useCustomSearchParams의 tags)
  initKeyword: string; // 초기 검색 키워드 (useCustomSearchParams의 keyword)
  setSearchParams(searchInfo: SearchInfo): void; // useCustomSearchParams의 setSearchParams
  disabled?: boolean;
  formOnly?: boolean;
}

export default function SearchBox({
  tags,
  initTags,
  initKeyword,
  setSearchParams,
  disabled = false,
  formOnly = false,
}: SearchBoxProps) {
  const [keyword, setKeyword] = useState<string>(initKeyword);

  const search = (tags?: string[]) => {
    const info: SearchInfo = { purpose: 'search', keyword, tag: tags ?? initTags };
    setSearchParams(info);
  };

  return (
    <div className={`mb-9 w-full ${disabled && 'opacity-30'}`}>
      <SearchForm
        disabled={disabled}
        search={search}
        tags={tags}
        selectedTags={initTags}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      {!formOnly && (
        <>
          <StraightNode double={true} margin="mt-9 mb-3" />
          <SelectedTags tags={initTags} search={search} disabled={disabled} />
        </>
      )}
    </div>
  );
}
