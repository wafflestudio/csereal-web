'use client';

import { useEffect, useState, useTransition } from 'react';

import { StraightNode } from '@/components/common/Nodes';
import KeywordInput from '@/components/common/search/KeywordInput';
import SelectedTags from '@/components/common/search/SelectedTags';
import TagFilter from '@/components/common/search/TagFilter';
import { useCustomSearchParams } from '@/utils/hooks/useCustomSearchParams';

interface SearchBoxProps {
  tags: string[]; // 전체 태그(선택지) 목록
  disabled?: boolean;
  formOnly?: boolean;
}

export default function SearchBox({ tags, disabled = false, formOnly = false }: SearchBoxProps) {
  const { tags: initTags, keyword: initKeyword, setSearchParams } = useCustomSearchParams();
  const [keyword, setKeyword] = useState(initKeyword ?? '');
  const [, startTransition] = useTransition();

  useEffect(() => {
    setKeyword(initKeyword ?? '');
  }, [initKeyword]);

  const search = (tags?: string[]) => {
    // TODO: startTrnaisition이 의미있는지 확인
    startTransition(() => {
      setSearchParams({ purpose: 'search', keyword, tag: tags ?? initTags });
    });
  };

  return (
    <div className={`mb-9 w-full ${disabled && 'opacity-30'}`}>
      <form
        className="flex flex-col gap-5 rounded-sm bg-neutral-50 p-6"
        onSubmit={(e) => {
          e.preventDefault();
          search();
        }}
      >
        <TagFilter tags={tags} selectedTags={initTags} disabled={disabled} searchTags={search} />
        <KeywordInput keyword={keyword} setKeyword={setKeyword} disabled={disabled} />
      </form>

      {!formOnly && (
        <>
          <StraightNode double={true} margin="mt-9 mb-3" />
          <SelectedTags tags={initTags} search={search} disabled={disabled} />
        </>
      )}
    </div>
  );
}
