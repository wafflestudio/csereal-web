'use client';

import { useState } from 'react';

import { StraightNode } from '@/components/common/Nodes';

import { SearchInfo, useCustomSearchParams } from '@/utils/hooks/useCustomSearchParams';

import SearchForm from './SearchForm';
import SelectedTags from './SelectedTags';

interface SearchBoxProps {
  tags: string[]; // 전체 태그(선택지) 목록
  disabled?: boolean;
  formOnly?: boolean;
}

export default function SearchBox({ tags, disabled = false, formOnly = false }: SearchBoxProps) {
  const { tags: initTags, keyword: initKeyword, setSearchParams } = useCustomSearchParams();
  const [keyword, setKeyword] = useState(initKeyword ?? '');

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
