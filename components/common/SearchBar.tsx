'use client';

import { useState } from 'react';

import { QueryKey, useMyURLSearchParams } from '@/utils/search';

interface SearchBarProps {
  margin?: string;
  setSearchParams(key: QueryKey, value: string, replace?: boolean): void;
}

export default function SearchBar({ margin = '', setSearchParams }: SearchBarProps) {
  const [keyword, setKeyword] = useState<string>('');
  const KEY: QueryKey = 'keyword';

  const searchByKeyword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParams(KEY, keyword);
  };

  return (
    <form className={`flex items-center gap-2.5 ${margin}`} onSubmit={searchByKeyword}>
      <label htmlFor="search" className="text-sm font-yoon font-bold">
        검색
      </label>
      <div className="flex items-center py-1 px-1.5 h-[30px] border rounded-[3px]">
        <input
          type="text"
          id="search"
          className="outline-none"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button>
          <span className="material-symbols-rounded text-xl mr-1.5">search</span>
        </button>
      </div>
    </form>
  );
}
