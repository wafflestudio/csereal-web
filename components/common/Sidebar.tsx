import Link from 'next/link';

import { SegmentNode } from '@/types/page';

import { getAllSubTabs, getDepth, getFullPath, getRootTab } from '@/utils/page';

import { CurvedVerticalNode } from './Nodes';

interface SidebarProps {
  currentTab: SegmentNode;
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
        <ul className="mt-[16px]">
          {subTabs.map((tab) => (
            <SubTab tab={tab} isCurrent={tab.name === currentTab.name} key={tab.name} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function SubTab({ tab, isCurrent }: { tab: SegmentNode; isCurrent: boolean }) {
  const paddingLeft = `${(getDepth(tab) - 1) * 15}px`;

  return (
    <li
      key={tab.name}
      className={`text-xs font-yoon mb-[14px] ${isCurrent && 'font-bold text-main-orange'}`}
      style={{ paddingLeft: paddingLeft }}
    >
      {tab.isPage ? <Link href={getFullPath(tab)}>{tab.name}</Link> : <span>{tab.name}</span>}
    </li>
  );
}
