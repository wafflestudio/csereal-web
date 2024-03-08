'use client';

import { useReducer } from 'react';

import MenuSVG from '@/public/image/header/menu.svg';

export default function MobileNavButton() {
  const [isNavOpen, toggleNav] = useReducer((x) => !x, false);

  return (
    <button onClick={toggleNav} className="flex items-center justify-center sm:hidden">
      {isNavOpen ? (
        <span className="material-symbols-outlined font-light text-white">close</span>
      ) : (
        <MenuSVG className="cursor-pointer" />
      )}
    </button>
  );
}
