'use client';

import { useTranslations } from 'next-intl';
import { useState, ChangeEventHandler, FormEvent } from 'react';

import { useCustomSearchParams } from '@/utils/hooks/useCustomSearchParams';

export default function SeminarSearchBar() {
  const t = useTranslations('Content');
  const { keyword: initKeyword, setSearchParams } = useCustomSearchParams();
  const [text, setText] = useState(initKeyword ?? '');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const searchText = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (trimmedText) setSearchParams({ keyword: trimmedText, purpose: 'search' });
  };

  return (
    <form className="flex w-fit items-center gap-5" onSubmit={searchText}>
      <label htmlFor="search" className="font-bold">
        {t('검색')}
      </label>
      <div className="flex h-[1.875rem] w-60 items-center rounded-sm bg-neutral-100 pr-3">
        <input
          type="text"
          id="search"
          className="autofill-bg-neutral-100 w-full rounded-sm bg-transparent px-2 text-sm tracking-wide outline-none"
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
