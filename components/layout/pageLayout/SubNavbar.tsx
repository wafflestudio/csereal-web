import { useTranslations } from 'next-intl';

import { CurvedVerticalNode } from '@/components/common/Nodes';
import NavLabel from '@/components/layout/navbar/NavLabel';
import { SegmentNode } from '@/constants/segmentNode';
import { Link } from '@/i18n/routing';
import useStyle from '@/utils/hooks/useStyle';
import { getAllSubTabs, getDepth, getPath, getRootTab } from '@/utils/page';

const ITEM_HEIGHT = 33;
const INDENTATION = 16;

export default function SubNavbar({ currentTab }: { currentTab: SegmentNode }) {
  const t = useTranslations('Nav');
  const rootTab = getRootTab(currentTab);
  const subTabs = getAllSubTabs(rootTab).filter((tab) => !tab.hideInSubNav?.(currentTab));

  const height = `${(subTabs.length + 1) * ITEM_HEIGHT}px`;

  return (
    <div className="absolute right-[80px] top-0 hidden h-full sm:block">
      <div
        className="sticky top-[52px] col-start-2 row-span-full mb-8 mt-[3.25rem] flex"
        {...useStyle((style) => (style.height = height), [height])}
      >
        <CurvedVerticalNode grow={false} />
        <div className="pl-1.5 pt-[0.6875rem]">
          <Link href={getPath(rootTab)} className="text-neutral-800 hover:text-main-orange">
            <h3 className="inline whitespace-nowrap text-base font-semibold">{t(rootTab.name)}</h3>
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
      className={`mb-3.5 w-fit text-sm ${
        isCurrent ? 'font-bold tracking-wider text-main-orange' : 'text-neutral-700'
      }`}
      {...useStyle((style) => (style.marginLeft = marginLeft), [marginLeft])}
    >
      {tab.isPage ? (
        <Link href={getPath(tab)} className="whitespace-nowrap hover:text-main-orange">
          <NavLabel text={tab.name} />
        </Link>
      ) : (
        <span className="whitespace-nowrap">{t(tab.name)}</span>
      )}
    </li>
  );
}
