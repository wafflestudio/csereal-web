'use client';

import { useState } from 'react';

export default function Header() {
  const [text, setText] = useState('');

  return (
    <header className="h-[8.75rem] mb-[20px] bg-neutral-200 sticky top-0 z-40 pt-12 px-[3.75rem] pb-[1.19rem] flex justify-between">
      <div>
        <a href="/">
          <h2 className="font-yoon text-[1.375rem] font-bold tracking-[.03438rem] mb-[0.31rem] line-clamp-1">
            서울대학교 컴퓨터공학부
          </h2>
          <h3 className="font-yoon text-[.875rem] font-bold tracking-[-0.04375rem] line-clamp-2">
            Seoul National University
            <br />
            Dept. of Computer Science and Engineering
          </h3>
        </a>
      </div>
      <div className="flex flex-col justify-between items-end flex-grow">
        <div>
          <button className="font-yoon text-xs font-normal text-neutral-700">로그인</button>
          <span className="font-yoon text-xs font-normal text-neutral-700 mx-[.62rem]">|</span>
          <button className="font-yoon text-xs font-normal text-neutral-700">ENG</button>
        </div>
        <HeaderSearchBar text={text} setText={setText} />
      </div>
    </header>
  );
}

function HeaderSearchBar({ text, setText }: { text: string; setText: (text: string) => void }) {
  return (
    <div className="flex items-center py-1 px-1.5 h-[30px] border rounded-[3px] max-w-[13.5rem] w-full">
      <input
        type="text"
        id="search"
        className="outline-none font-yoon text-xs w-full"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>
        <span className="material-symbols-rounded text-xl mr-1.5">search</span>
      </button>
    </div>
  );
}
