'use client';

import { useState, ChangeEventHandler, KeyboardEventHandler } from 'react';

export default function HeaderSearchBar() {
  const [text, setText] = useState('');

  const searchText = () => {
    if (!text) return;
    console.log(text + ' 검색');
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') searchText();
  };

  return (
    <div className="flex items-center py-1 px-1.5 h-[30px] border rounded-[3px] max-w-[13.5rem] w-full">
      <input
        type="text"
        id="search"
        className="outline-none font-yoon text-xs w-full"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={searchText}>
        <span className="material-symbols-rounded text-xl mr-1.5">search</span>
      </button>
    </div>
  );
}
