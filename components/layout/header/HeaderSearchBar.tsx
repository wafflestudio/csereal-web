'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HeaderSearchBar() {
  const { text, setText, searchText } = useSearch();

  return (
    <form
      className="flex justify-center outline-none rounded-[.0625rem] w-[13.5rem] h-[1.875rem] bg-neutral-200 pr-2"
      onSubmit={(e) => {
        e.preventDefault();
        searchText();
      }}
    >
      <input
        type="text"
        id="search"
        className="outline-none text-xs w-full px-2 bg-transparent autofill-bg-neutral-200"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="material-symbols-rounded text-[1.25rem] text-neutral-800 hover:text-neutral-500">
        search
      </button>
    </form>
  );
}

function useSearch() {
  const [text, setText] = useState('');
  const router = useRouter();

  const searchText = () => {
    const query = text.trim();
    if (query) {
      router.push(`/search?keyword=${query}`);
    }
  };

  return { text, setText, searchText };
}
