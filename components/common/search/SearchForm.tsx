import { Dispatch, SetStateAction } from 'react';

import KeywordInput from './KeywordInput';
import TagFilter from './TagFilter';

interface SearchFormProps {
  disabled: boolean;
  search: (tags?: string[]) => void;
  tags: string[];
  selectedTags: string[];
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
}

export default function SearchForm({
  disabled,
  search,
  tags,
  selectedTags,
  keyword,
  setKeyword,
}: SearchFormProps) {
  return (
    <form
      className="flex flex-col gap-5 p-6 min-w-max bg-neutral-100"
      onSubmit={(e) => {
        e.preventDefault();
        search();
      }}
    >
      <TagFilter tags={tags} selectedTags={selectedTags} disabled={disabled} searchTags={search} />
      <KeywordInput keyword={keyword} setKeyword={setKeyword} disabled={disabled} />
    </form>
  );
}
