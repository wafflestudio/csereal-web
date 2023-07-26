import Image from 'next/image';

import naviBarMenu from '@/public/image/NaviBar_Menu.svg';
import snuLogo from '@/public/image/SNU_Logo.svg';

export default function Navbar() {
  return (
    <nav className="row-span-full bg-main-orange">
      <Image src={snuLogo} alt="서울대 로고" priority />
      <Image src={naviBarMenu} alt="서울대 로고" />
    </nav>
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
