'use client';

import { useRouter } from 'next/navigation';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';

export default function SearchForm({ query }: { query: string }) {
  const [text, setText] = useState(query);
  const router = useRouter();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const searchText: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const query = text.trim();
    if (query) {
      router.push(`/search?query=${query}`);
    }
  };

  return (
    <form className="mt-6 flex w-fit" onSubmit={searchText}>
      <input
        type="text"
        id="search"
        className="autofill-bg-white h-8 w-[13.5rem] rounded-l-sm border border-neutral-300 bg-transparent px-2 text-xs tracking-[0.02em] outline-none placeholder:text-neutral-300"
        value={text}
        onChange={handleChange}
      />
      <button className="flex h-8 items-center justify-center rounded-r-sm border-y border-r border-neutral-300 px-3 py-[.1875rem] text-xs font-bold tracking-[0.02em]">
        검색
      </button>
    </form>
  );
}
