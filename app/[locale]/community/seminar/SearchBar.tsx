'use client';

import { useState, ChangeEventHandler, FormEvent } from 'react';

import { SearchInfo } from '@/utils/hooks/useCustomSearchParams';

interface SeminarSearchBarProps {
  keyword?: string;
  setSearchParams: (searchInfo: SearchInfo) => void;
}

export default function SeminarSearchBar({ keyword, setSearchParams }: SeminarSearchBarProps) {
  const [text, setText] = useState(keyword ?? '');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const searchText = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (trimmedText) setSearchParams({ keyword: trimmedText, purpose: 'search' });
  };

  return (
    <form className="flex w-fit gap-5 items-center" onSubmit={searchText}>
      <label htmlFor="search" className="font-bold">
        검색
      </label>
      <div className="rounded-sm bg-neutral-100 flex items-center w-60 h-[1.875rem] pr-3">
        <input
          type="text"
          id="search"
          className="outline-none rounded-sm w-full text-sm px-2 bg-transparent tracking-wide autofill-bg-neutral-100"
          value={text}
          onChange={handleChange}
        />
        <button className="material-symbols-rounded text-[1.25rem] font-light text-neutral-800 hover:text-neutral-500">
          search
        </button>
      </div>
    </form>
  );
}
