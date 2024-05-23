'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { usePathname } from '@/navigation';

export default function HeaderSearchBar() {
  const { text, setText, search } = useSearch();

  return (
    <form
      className="flex h-[1.875rem] w-[13.5rem] justify-center rounded-[.0625rem] bg-neutral-200 pr-2 outline-none"
      onSubmit={(e) => {
        e.preventDefault();
        search();
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

  // 필요시 text와 keyword를 동기화
  const keyword = useSearchParams().get('keyword');
  const pathname = usePathname();

  useEffect(() => {
    if (keyword && pathname === '/search') {
      setText(keyword);
    }
  }, [keyword, pathname]);

  const search = () => {
    const query = text.trim();
    if (query !== '') {
      router.push(`/search?keyword=${query}`);
    }
  };

  return { text, setText, search };
}
