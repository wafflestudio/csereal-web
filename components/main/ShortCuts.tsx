'use client';

import Link from 'next/link';

import MainNode51 from '@/public/image/main_5_1.svg';
import MainNode52 from '@/public/image/main_5_2.svg';
import MainNode53 from '@/public/image/main_5_3.svg';

interface ShortCutsProps {
  shortCuts: { title: string; href: string }[];
}

const POSITIONS = [
  'top-[223px] right-[145px]',
  'top-[413px] left-[146px]',
  'top-[550px] right-[277px]',
];

const NODES: { Component: React.ReactNode; location: 'top' | 'bottom' }[] = [
  { Component: <MainNode51 />, location: 'bottom' },
  { Component: <MainNode52 />, location: 'bottom' },
  { Component: <MainNode53 />, location: 'top' },
];

export default function ShortCuts({ shortCuts }: ShortCutsProps) {
  return (
    <section className="relative flex justify-center h-[615px]">
      {shortCuts.map((shortcut, i) => (
        <ShortCutBox
          key={shortcut.title}
          title={shortcut.title}
          href={shortcut.href}
          location={POSITIONS[i]}
          nodes={NODES[i]}
        />
      ))}
    </section>
  );
}

interface ShortCutBoxProps {
  title: string;
  href: string;
  location: string;
  nodes: { Component: React.ReactNode; location: 'top' | 'bottom' };
}

function ShortCutBox({ title, href, location, nodes }: ShortCutBoxProps) {
  return (
    <div className={`absolute flex flex-col gap-2 items-center ${location}`}>
      {nodes.location === 'top' && nodes.Component}
      <Link
        href={href}
        className={`px-3 py-2.5 h-[60px] bg-[#1E1E1E80] shadow-[1px_1px_3px_0_rgba(255,255,255,0.05)_inset,_-1px_-1px_4px_0_rgba(0,0,0,0.4)_inset] backdrop-blur-[2.5px] flex flex-col justify-between rounded-sm w-fit`}
      >
        <span className="min-w-[8.4375rem] font-yoon font-bold text-sm text-main-orange tracking-wide">
          {title}
        </span>
        <span className="min-w-[8.4375rem] flex items-center justify-end scale-90 origin-right">
          <span className="font-yoon font-medium text-[10px] text-main-orange tracking-wide">
            바로가기
          </span>
          <span className="material-symbols-outlined font-light text-md text-main-orange pt-[2px]">
            navigate_next
          </span>
        </span>
      </Link>
      {nodes.location === 'bottom' && nodes.Component}
    </div>
  );
}
