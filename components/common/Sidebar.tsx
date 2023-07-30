import Link from 'next/link';

import { SegmentNode } from '@/types/page';

import { getAllSubTabs, getDepth, getPath, getRootTab } from '@/utils/page';

import { CurvedVerticalNode } from './Nodes';

interface SidebarProps {
  currentTab: SegmentNode;
}

export default function Sidebar({ currentTab }: SidebarProps) {
  const rootTab = getRootTab(currentTab);
  const subTabs = getAllSubTabs(rootTab);
  const height = `${(subTabs.length + 1) * 30}px`;

  return (
    <div
      className="flex row-span-full col-start-2 mt-[52px] ml-[40px] sticky top-[212px]"
      style={{ height }}
    >
      <CurvedVerticalNode grow={false} />
      <div className="pt-[11px] pl-1.5">
        <h3 className="font-yoon font-bold text-sm">{rootTab.name}</h3>
        <ul className="mt-[16px]">
          {subTabs.map((tab) => (
            <SubTab
              tab={tab}
              isCurrent={tab.name === currentTab.name}
              key={`${tab.parent?.name}_${tab.name}`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

function SubTab({ tab, isCurrent }: { tab: SegmentNode; isCurrent: boolean }) {
  const marginLeft = `${(getDepth(tab) - 1) * 12}px`;

  return (
    <li
      className={`w-fit text-xs font-yoon mb-[14px] ${isCurrent && 'font-bold text-main-orange'}`}
      style={{ marginLeft }}
    >
      {tab.isPage ? (
        <Link href={getPath(tab)} className="hover:text-main-orange whitespace-nowrap">
          {tab.name}
        </Link>
      ) : (
        <span className="whitespace-nowrap">{tab.name}</span>
      )}
    </li>
  );
}
