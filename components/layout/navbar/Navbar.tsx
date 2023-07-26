'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import naviBarClose from '@/public/image/NaviBar_Close.svg';
import naviBarMenu from '@/public/image/NaviBar_Menu.svg';
import snuLogo from '@/public/image/SNU_Logo.svg';

import { SegmentNode, main as mainSegmentNode } from '@/types/page';

import { getPath } from '@/utils/page';

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className="row-span-full bg-main-orange pt-12 flex flex-col items-center">
      <Link href="/" className="mb-10">
        <Image src={snuLogo} alt="서울대 로고" priority />
      </Link>
      {expanded ? (
        <NavbarExpanded close={() => setExpanded(false)} />
      ) : (
        <NavbarClosed expand={() => setExpanded(true)} />
      )}
    </nav>
  );
}

function NavbarExpanded({ close }: { close: () => void }) {
  return (
    <>
      <ul className="mx-12 flex flex-col text-center gap-9">
        {mainSegmentNode.children?.map((child, i) => (
          <NavbarExpandedRow key={i} segmentNode={child} />
        ))}
      </ul>
      <button onClick={close} className="mt-8">
        <Image
          src={naviBarClose}
          alt="네비게이션 닫기 버튼"
          className="text-[.875rem] fill-white font-medium"
        />
      </button>
    </>
  );
}

function NavbarExpandedRow({ segmentNode }: { segmentNode: SegmentNode }) {
  const pathName = usePathname();
  const isHere = pathName.startsWith(getPath(segmentNode));
  return (
    <li className={`text-white font-yoon text-[.875rem] font-medium ${isHere ? '' : 'opacity-60'}`}>
      {segmentNode.name}
    </li>
  );
}

function NavbarClosed({ expand }: { expand: () => void }) {
  return (
    <button onClick={expand} className="mx-5">
      <Image src={naviBarMenu} alt="네비게이션 펼치기 버튼" />
    </button>
  );
}

/*
      <ul>
        <li>소개</li>
        <li>소식</li>
        <li>구성원</li>
        <li>연구</li>
        <li>입학</li>
        <li>학사 및 교과</li>
        <li>시설 예약</li>
      </ul>
*/
