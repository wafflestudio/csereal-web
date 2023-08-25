import Link from 'next/link';

import { CurvedVerticalNode } from '@/components/common/Nodes';

import { SegmentNode } from '@/types/page';

import { getAllSubTabs, getDepth, getPath, getRootTab } from '@/utils/page';

interface SubNavbarProps {
  currentTab: SegmentNode;
}

export default function SubNavbar({ currentTab }: SubNavbarProps) {
  const rootTab = getRootTab(currentTab);
  const subTabs = getAllSubTabs(rootTab);
  const height = `${(subTabs.length + 1) * 30 + 10}px`;

  return (
    <div
      className="flex row-span-full col-start-2 mt-[3.25rem] w-[11.25rem] sticky top-16"
      style={{ height }}
    >
      <CurvedVerticalNode grow={false} />
      <div className="pt-[0.6875rem] pl-1.5">
        <h3 className="font-yoon font-bold text-sm text-neutral-600">{rootTab.name}</h3>
        <ul className="mt-4">
          {subTabs.map((tab) => (
            <SubTab
              tab={tab}
              isCurrent={tab === currentTab}
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
      className={`w-fit text-xs font-yoon mb-3.5 ${
        isCurrent ? 'font-bold text-main-orange tracking-wider' : 'text-neutral-600'
      }`}
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
