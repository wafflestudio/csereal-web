'use client';

import { useRouter } from 'next/navigation';
import { useState, ChangeEventHandler, FormEventHandler } from 'react';

export default function SearchForm() {
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
    <form className="flex items-center mt-8 gap-[.69rem]" onSubmit={searchText}>
      <label className="font-yoon text-md font-bold">검색</label>
      <div className="flex justify-center outline-none rounded-[.1875rem] min-w-[8rem] w-[13.5rem] h-[1.875rem] border-neutral-700 border  px-[.63rem]">
        <input
          type="text"
          id="search"
          className="font-yoon text-xs font-bold bg-transparent w-full outline-none"
          value={text}
          onChange={handleChange}
        />
        <button className="flex justify-center items-center">
          <span className="material-symbols-rounded text-[1.25rem] font-regular text-neutral-700 hover:text-neutral-700">
            search
          </span>
        </button>
      </div>
    </form>
  );
}
