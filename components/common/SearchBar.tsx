'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

interface SearchBarProps {
  margin?: string;
}

type QueryKey = 'keyword' | 'tag';

export function useMyURLSearchParams() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const setSearchParams = (key: QueryKey, value: string, replace: boolean = true) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));

    if (!value) {
      params.delete(key);
    } else if (replace) {
      params.set(key, value);
    } else {
      params.append(key, value);
    }

    const query = params.toString();
    const pathWithQuery = query ? `${pathname}?${query}` : pathname;
    router.push(pathWithQuery);
  };

  const deleteSearchParams = (key: QueryKey, value?: string) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));

    if (!value) {
      params.delete(key);
    } else {
    }
  };

  return { setSearchParams, deleteSearchParams } as const;
}

export default function SearchBar({ margin = '' }: SearchBarProps) {
  const [keyword, setKeyword] = useState<string>('');
  const { setSearchParams } = useMyURLSearchParams();

  const searchByKeyword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParams('keyword', keyword);
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
