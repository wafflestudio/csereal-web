import { Dispatch, FormEvent, SetStateAction } from 'react';

import KeywordInput from './KeywordInput';
import TagFilter from './TagFilter';

interface SearchFormProps {
  disabled: boolean;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  tags: string[];
  selectedTags: string[];
  setSelectedTags: Dispatch<SetStateAction<string[]>>;
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
}

export default function SearchForm({
  disabled,
  onSubmit,
  tags,
  selectedTags,
  setSelectedTags,
  keyword,
  setKeyword,
}: SearchFormProps) {
  return (
    <form
      className="grid grid-cols-[auto_1fr_auto] grid-rows-auto gap-y-7 pt-4 pl-3 pr-2.5 min-w-max"
      onSubmit={onSubmit}
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
  );
}

function SearchButton({ disabled }: { disabled: boolean }) {
  return (
    <button
      className="col-start-3 px-3 py-[0.1875rem] rounded-[0.0625rem] bg-neutral-200 enabled:hover:bg-neutral-300 font-yoon font-bold text-xs tracking-[0.02em]"
      disabled={disabled}
    >
      결과 보기
    </button>
  );
}
