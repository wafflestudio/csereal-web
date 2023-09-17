'use client';

import { useRouter } from 'next/navigation';
import { useState, ChangeEventHandler, FormEventHandler } from 'react';

export default function HeaderSearchBar() {
  const [text, setText] = useState('');
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
    <form
      className="flex justify-center outline-none rounded-[.0625rem] min-w-[8rem] w-[13.5rem] h-[1.875rem] bg-neutral-200 pr-2"
      onSubmit={searchText}
    >
      <input
        type="text"
        id="search"
        className="outline-none font-yoon text-xs w-full px-2 bg-transparent"
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
