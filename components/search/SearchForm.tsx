'use client';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useState, ChangeEventHandler, FormEventHandler } from 'react';

export default function SearchForm({ query }: { query: string }) {
  const [text, setText] = useState(query);
  const router = useRouter();
  const t = useTranslations('Nav');

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
    <form className="flex w-fit mt-6" onSubmit={searchText}>
      <input
        type="text"
        id="search"
        className="outline-none border border-neutral-300 rounded-l-sm text-xs w-[13.5rem] h-8 px-2 bg-transparent placeholder:text-neutral-300 tracking-[0.02em] autofill-bg-white"
        value={text}
        onChange={handleChange}
      />
      <button className="flex justify-center items-center py-[.1875rem] px-3 h-8 border-y border-r border-neutral-300 rounded-r-sm font-yoon font-bold text-xs tracking-[0.02em]">
        검색
      </button>
    </form>
  );
}
