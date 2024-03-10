'use client';

import SearchBox from '@/components/common/search/SearchBox';

import { SEARCH_TAGS } from '@/constants/tag';

import { useCustomSearchParams } from '@/utils/hooks/useCustomSearchParams';

export default function SearchBoxWrapper() {
  const { keyword, tags, setSearchParams } = useCustomSearchParams();
  return (
    <SearchBox
      tags={SEARCH_TAGS}
      initTags={tags}
      initKeyword={keyword ?? ''}
      setSearchParams={setSearchParams}
    />
  );
}
