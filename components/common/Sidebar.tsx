import Link from 'next/link';

import { Location } from '@/types/common';

import { CurvedVerticalNode } from './Nodes';

interface SidebarProps {
  mainTab: Location;
  currentTab: Location;
  subTabs: Location[];
  margin?: string;
}

export default function Sidebar({ mainTab, currentTab, subTabs, margin = '' }: SidebarProps) {
  const height = `${(subTabs.length + 1) * 30}px`;

  return (
    <div className={`flex ${margin}`} style={{ height: height }}>
      <CurvedVerticalNode grow={false} />
      <div className="pt-[11px]">
        <h3 className="font-yoon tracking-[.015em] font-bold text-[13px]">{mainTab.name}</h3>
        <SubTabs subTabs={subTabs} currentTab={currentTab} />
      </div>
    </div>
  );
}

interface SubTabsProps {
  currentTab: Location;
  subTabs: Location[];
}

function SubTabs({ subTabs, currentTab }: SubTabsProps) {
  return (
    <ul className="mt-[16px] pl-[20px]">
      {subTabs.map((tab) => (
        <li
          key={tab.name}
          className={`text-xs font-yoon tracking-[.015em] mb-[14px] ${
            tab.name === currentTab.name && 'font-bold text-main-orange'
          }`}
        >
          <Link href={tab.path}>{tab.name}</Link>
        </li>
      ))}
    </ul>
  );
}
