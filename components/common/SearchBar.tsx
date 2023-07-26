'use client';

import { QueryBehavior, QueryName, useSyncedState } from '@/utils/search';

interface SearchBarProps {
  keyword: string; // useMyURLSearchParams에 있는 keyword
  setSearchParams(type: QueryBehavior, name: QueryName, value: string, replace?: boolean): void; // 마찬가지
  margin?: string;
}

export default function SearchBar({ keyword, setSearchParams, margin = '' }: SearchBarProps) {
  const [input, setInput] = useSyncedState<string>(keyword);
  const KEY: QueryName = 'keyword';

  return (
    <form
      className={`flex items-center gap-2.5 ${margin}`}
      onSubmit={(e) => {
        e.preventDefault();
        setSearchParams('add', KEY, input);
      }}
    >
      <label htmlFor="search" className="text-sm font-yoon font-bold">
        검색
      </label>
      <div className="flex items-center py-1 px-1.5 h-[30px] border rounded-[3px]">
        <input
          type="text"
          id="search"
          className="outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>
          <span className="material-symbols-rounded text-xl mr-1.5">search</span>
        </button>
      </div>
    </form>
  );
}
