'use client';

import Link from 'next/link';

import MainNode51 from '@/public/image/main_5_1.svg';
import MainNode52 from '@/public/image/main_5_2.svg';
import MainNode53 from '@/public/image/main_5_3.svg';

interface ShortCutsProps {
  shortCuts: { title: string; href: string }[];
}

const POSITIONS = [
  'top-[190px] right-[145px]',
  'top-[380px] left-[146px]',
  'top-[517.5px] right-[277px]',
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
        className={`px-3 py-2.5 h-[60px] bg-main-orange flex flex-col justify-between rounded-sm w-fit`}
      >
        <span className="min-w-[8.4375rem] font-yoon font-bold text-sm tracking-wide">{title}</span>
        <span className="min-w-[8.4375rem] flex items-center justify-end scale-90 origin-right">
          <span className="font-yoon font-medium text-[10px] tracking-wide">바로가기</span>
          <span className="material-symbols-outlined font-light text-md pt-[2px]">
            navigate_next
          </span>
        </span>
      </Link>
      {nodes.location === 'bottom' && nodes.Component}
    </div>
  );
}
