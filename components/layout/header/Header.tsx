'use client';

import HeaderSearchBar from './HeaderSearchBar';

export default function Header() {
  return (
    <header className="h-[8.75rem] bg-white sticky top-0 z-40 pt-12 px-[3.75rem] pb-[1.19rem] flex justify-between">
      <HeaderTitle />
      <HeaderRight />
    </header>
  );
}

function HeaderTitle() {
  return (
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
  );
}

function HeaderRight() {
  const lang = 'ENG';
  const handleLogin = () => {
    //
  };
  const handleLangChange = () => {
    //
  };

  return (
    <div className="flex flex-col justify-between items-end flex-grow">
      <div>
        <button className="font-yoon text-xs font-normal text-neutral-700" onClick={handleLogin}>
          로그인
        </button>
        <span className="font-yoon text-xs font-normal text-neutral-700 mx-[.62rem]">|</span>
        <button
          className="font-yoon text-xs font-normal text-neutral-700"
          onClick={handleLangChange}
        >
          {lang}
        </button>
      </div>
      <HeaderSearchBar />
    </div>
  );
}
