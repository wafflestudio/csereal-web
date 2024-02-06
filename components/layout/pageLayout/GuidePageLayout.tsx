'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React, { ReactNode } from 'react';

import useCurrentSegmentNode from '@/hooks/useCurrentSegmentNode';

import { getPath } from '@/utils/page';

interface GuidePageLayoutProps {
  title?: string | JSX.Element;
  subtitle?: string;
  description: string;
}

export default function GuidePageLayout({
  title,
  subtitle = 'Welcome!',
  description,
}: GuidePageLayoutProps) {
  const t = useTranslations('Nav');
  const currentPage = useCurrentSegmentNode();
  title ||= t(currentPage.name);

  return (
    <div className="bg-[#171717]">
      <div className="bg-[#171717] p-[100px]">
        <div className="text-[#919191] text-[24px] tracking-wide">{subtitle}</div>
        <div className="text-[#ffffff] text-[64px] font-bold tracking-wide mt-[10px]">{title}</div>
        <div className="text-[#d4d4d4] text-[14px] mt-[20px]">{description}</div>
      </div>
      <div className="bg-[#121212] p-[100px]">
        <div className="flex gap-[40px]">
          {currentPage.children!.map((subpage, index) => (
            <DetailItem
              key={index}
              title={subpage.name}
              description="연구 그룹은 어쩌고 저쩌고 연구 그룹은 어쩌고 저쩌고"
              href={getPath(subpage)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface DetailItemProps {
  title: string;
  description: string;
  href: string;
}

function DetailItem({ title, description, href }: DetailItemProps) {
  return (
    <Link href={href}>
      <div className="w-[300px] h-[240px] bg-[#ededed] py-[36px] px-[24px] hover:bg-main-orange">
        <div className="text-[#262626] text-[24px] mb-[16px] ">{title}</div>
        <div className="text-[#404040] text-[14px]">{description}</div>
      </div>
    </Link>
  );
}
