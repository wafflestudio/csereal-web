import Link from 'next/link';

import { Location } from '@/types/page';

import { getAllSubTabs, getFullPath, getRootTab } from '@/utils/page';

import { CurvedVerticalNode } from './Nodes';

interface SidebarProps {
  currentTab: Location;
  margin?: string;
}

export default function Sidebar({ currentTab, margin = '' }: SidebarProps) {
  const rootTab = getRootTab(currentTab);
  const subTabs = getAllSubTabs(rootTab);
  const height = `${(subTabs.length + 1) * 30}px`;

  return (
    <div className={`flex ${margin}`} style={{ height: height }}>
      <CurvedVerticalNode grow={false} />
      <div className="pt-[11px]">
        <h3 className="font-yoon font-bold text-[13px]">{rootTab.name}</h3>
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
          <Link href={getFullPath(tab)}>{tab.name}</Link>
        </li>
      ))}
    </ul>
  );
}
