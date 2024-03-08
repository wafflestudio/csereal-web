import { useTranslations } from 'next-intl';

import { Link } from '@/navigation';

import NavLabel from '@/components/common/NavLabel';
import { CurvedVerticalNode } from '@/components/common/Nodes';

import { getAllSubTabs, getDepth, getPath, getRootTab } from '@/utils/page';
import { SegmentNode } from '@/utils/segmentNode';

interface SubNavbarProps {
  currentTab: SegmentNode;
}

const ITEM_HEIGHT = 33;
const INDENTATION = 16;

export default function SubNavbar({ currentTab }: SubNavbarProps) {
  const t = useTranslations('Nav');
  const rootTab = getRootTab(currentTab);
  const subTabs = getAllSubTabs(rootTab);
  const height = `${(subTabs.length + 1) * ITEM_HEIGHT}px`;

  return (
    <div className="hidden sm:block absolute top-0 right-[80px] h-full">
      <div
        className="flex row-span-full col-start-2 mt-[3.25rem] mb-8 sticky top-20"
        style={{ height }}
      >
        <CurvedVerticalNode grow={false} />
        <div className="pt-[0.6875rem] pl-1.5">
          <Link href={getPath(rootTab)} className="text-neutral-800 hover:text-main-orange">
            <h3 className="inline font-semibold text-base whitespace-nowrap">{t(rootTab.name)}</h3>
          </Link>
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
    </div>
  );
}

function SubTab({ tab, isCurrent }: { tab: SegmentNode; isCurrent: boolean }) {
  const t = useTranslations('Nav');
  const marginLeft = `${(getDepth(tab) - 1) * INDENTATION}px`;

  return (
    <li
      className={`w-fit text-sm mb-3.5 ${
        isCurrent ? 'font-bold text-main-orange tracking-wider' : 'text-neutral-700'
      }`}
      style={{ marginLeft }}
    >
      {tab.isPage ? (
        <Link href={getPath(tab)} className="hover:text-main-orange whitespace-nowrap">
          <NavLabel text={t(tab.name)} />
        </Link>
      ) : (
        <span className="whitespace-nowrap">{t(tab.name)}</span>
      )}
    </li>
  );
}
