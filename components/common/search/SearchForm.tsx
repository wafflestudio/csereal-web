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
      className="grid grid-cols-[auto_1fr_auto] grid-rows-auto gap-y-5 p-6 min-w-max bg-neutral-100"
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
      className="col-start-3 px-3 py-[0.1875rem] rounded-[0.0625rem] bg-neutral-200 enabled:hover:bg-neutral-300 font-semibold text-xs tracking-wider"
      disabled={disabled}
    >
      결과 보기
    </button>
  );
}
