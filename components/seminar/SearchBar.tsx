'use client';

import { useState, ChangeEventHandler, FormEvent } from 'react';

import { SearchInfo } from '@/hooks/useCustomSearchParams';

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
    <form className="flex w-fit" onSubmit={searchText}>
      <input
        type="text"
        id="search"
        className="outline-none border border-neutral-500 rounded-l-sm text-xs w-[13.5rem] h-8 px-2 bg-transparent placeholder:text-neutral-300 tracking-[0.02em] autofill-bg-white"
        placeholder="세미나 키워드 검색"
        value={text}
        onChange={handleChange}
      />
      <button className="flex justify-center items-center py-[.1875rem] px-3 h-8 border-y border-r border-neutral-500 rounded-r-sm font-bold text-xs tracking-[0.02em]">
        검색
      </button>
    </form>
  );
}
