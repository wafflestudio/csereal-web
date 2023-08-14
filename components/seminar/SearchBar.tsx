'use client';

import { useState, ChangeEventHandler, KeyboardEventHandler } from 'react';

import { SearchInfo } from '@/hooks/useCustomSearchParams';

interface SeminarSearchBarProps {
  setSearchParams: (searchInfo: SearchInfo) => void;
}

export default function SeminarSearchBar({ setSearchParams }: SeminarSearchBarProps) {
  const [text, setText] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const searchText = () => {
    const trimmedText = text.trim();
    if (trimmedText) setSearchParams({ keyword: trimmedText, purpose: 'search' });
  };

  return (
    <form
      className="flex justify-center outline outline-1 outline-neutral-700 rounded-[.1875rem] max-w-[13.5rem] w-full"
      onSubmit={searchText}
    >
      <input
        type="text"
        id="search"
        className="outline-none font-yoon text-xs w-full pl-2"
        value={text}
        onChange={handleChange}
      />
      <button className="flex justify-center items-center py-[.31rem] pr-[.81rem]">
        <span className="material-symbols-rounded text-xl font-normal text-neutral-700">
          search
        </span>
      </button>
    </form>
  );
}