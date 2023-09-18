'use client';

import { useState, ChangeEventHandler, KeyboardEventHandler } from 'react';

import { useCustomSearchParams } from '@/hooks/useCustomSearchParams';

export default function HeaderSearchBar() {
  const [text, setText] = useState('');

  // TODO: /search 페이지 구현
  const { setSearchParams } = useCustomSearchParams('/search');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const searchText = () => {
    const trimmedText = text.trim();
    if (trimmedText) setSearchParams({ keyword: trimmedText, purpose: 'search' });
  };

  return (
    <form
      className="flex justify-center outline-none rounded-[.0625rem] min-w-[8rem] w-[13.5rem] h-[1.875rem] bg-neutral-200 pr-2"
      onSubmit={searchText}
    >
      <input
        type="text"
        id="search"
        className="outline-none font-yoon text-xs w-full px-2 bg-transparent autofill-bg-neutral-200"
        value={text}
        onChange={handleChange}
      />
      <button className="flex justify-center items-center w-fit">
        <span className="material-symbols-rounded text-[1.25rem] font-light text-neutral-500 hover:text-neutral-700">
          search
        </span>
      </button>
    </form>
  );
}
