'use client';

import HeaderSearchBar from './HeaderSearchBar';

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-40 pt-12 px-[3.75rem] pb-[1.69rem] flex justify-between">
      <HeaderTitle />
      <HeaderRight />
    </header>
  );
}

function HeaderTitle() {
  return (
    <div className="font-yoon font-bold text-neutral-700">
      <a href="/">
        <h2 className="text-xl tracking-[.03438rem] line-clamp-1 mb-[0.31rem]">
          서울대학교 컴퓨터공학부
        </h2>
        <h3 className="text-md tracking-[-0.04375rem] line-clamp-2 leading-tight">
          Seoul National University
          <br />
          Dept. of Computer Science and Engineering
        </h3>
      </a>
    </div>
  );
}

function HeaderRight() {
  // TODO
  const lang = 'ENG';

  const handleLogin = () => {
    // TODO
  };
  const handleLangChange = () => {
    // TODO
  };

  return (
    <div className="flex flex-col justify-between items-end flex-grow">
      <div className="font-yoon text-xs font-normal text-neutral-700 flex gap-[.62rem]">
        <button onClick={handleLogin}>로그인</button>
        <span>|</span>
        <button onClick={handleLangChange}>{lang}</button>
      </div>
      <HeaderSearchBar />
    </div>
  );
}
