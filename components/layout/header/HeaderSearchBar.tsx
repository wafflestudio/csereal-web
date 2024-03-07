'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HeaderSearchBar() {
  const { text, setText, searchText } = useSearch();

  return (
    <form
      className="flex h-[1.875rem] w-[13.5rem] justify-center rounded-[.0625rem] bg-neutral-200 pr-2 outline-none"
      onSubmit={(e) => {
        e.preventDefault();
        searchText();
      }}
    >
      <input
        type="text"
        id="search"
        className="autofill-bg-neutral-200 w-full bg-transparent px-2 text-xs outline-none"
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
