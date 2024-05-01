import localFont from 'next/font/local';
import Image from 'next/image';
import { ReactNode } from 'react';

import DownArrow from '@/public/image/main/down_arrow.svg';

const gowunBatang = localFont({ src: './GowunBatang-Regular.ttf' });

export default function GraphicSection() {
  // 헤더 높이 빼기
  return (
    <div className="relative flex w-fit min-w-full flex-col items-center justify-between gap-[50px] pb-[67px] pt-[60px] sm:flex-row-reverse sm:justify-center sm:gap-[75px] sm:pb-[170px] sm:pt-[80px] xl:gap-[125px]">
      <Image
        src="/image/main/background.png"
        alt=""
        className="object-cover sm:hidden"
        unoptimized
        fill
      />
      <DownArrow className="bottom-[5rem] left-1/2 hidden -translate-x-1/2 animate-arrowBounce sm:absolute" />
      <Image
        src="/image/main/mainGraphic.png"
        width={200}
        height={416}
        alt=""
        sizes="1024px"
        className="z-10 h-[12.5rem] w-[80%] object-contain sm:mr-[26px] sm:w-[26rem] xl:mr-[52px]"
      />
      <div className="flex -translate-y-1 flex-col items-center gap-[18px] sm:h-[12.5rem] sm:shrink-0 sm:items-start sm:justify-between">
        <SloganP className="hidden sm:block">서울대학교 컴퓨터공학부는</SloganP>
        <SloganP className="">창의와 지식을 융합하여</SloganP>
        <SloganP className="">컴퓨터기술의</SloganP>
        <SloganP className="">진화를 선도합니다.</SloganP>
      </div>
    </div>
  );
}

const SloganP = ({ className, children }: { className: string; children: ReactNode }) => (
  <p className={`text-[1.8rem] text-white ${className} ${gowunBatang.className}`}>{children}</p>
);
