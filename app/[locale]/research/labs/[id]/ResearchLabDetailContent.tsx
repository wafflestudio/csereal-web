'use client';

import { Link } from '@/navigation';
import PentagonLong from '@/public/image/pentagon_long.svg';
import PentagonShort from '@/public/image/pentagon_short.svg';

import HTMLViewer from '@/components/editor/HTMLViewer';

import { ResearchLab } from '@/types/research';

import useResponsive from '@/utils/hooks/useResponsive';
import { getPath } from '@/utils/page';
import { researchGroups } from '@/utils/segmentNode';
import { replaceSpaceWithDash } from '@/utils/string';

import ResearchLabInfo from './ResesarchLabInfo';

export default function ResearchLabDetailContent({ lab }: { lab: ResearchLab }) {
  const { screenType } = useResponsive();

  return (
    <div>
      <AffiliatedGroup groupName={lab.group} />
      <div className="mx-2 mb-1 mt-6 flex justify-end sm:hidden">
        <ResearchLabInfo lab={lab} />
      </div>
      <HTMLViewer
        htmlContent={lab.description}
        topRightContent={
          screenType === 'desktop'
            ? { type: 'component', content: <ResearchLabInfo lab={lab} /> }
            : undefined
        }
        className="mt-6 "
      />
    </div>
  );
}

const researchGroupsPath = getPath(researchGroups);
const LENGTH_BOUNDARY = 10;

function AffiliatedGroup({ groupName }: { groupName: string }) {
  const width = groupName.length < LENGTH_BOUNDARY ? 'w-[10.875rem]' : 'w-[16.4375rem]';
  const affiliatedGroupPath = `${researchGroupsPath}?selected=${replaceSpaceWithDash(groupName)}`;

  return (
    <div className="relative w-fit">
      <Link
        href={affiliatedGroupPath}
        className={`absolute ${width} peer flex h-10 items-center justify-center pr-1 text-center text-sm duration-300 hover:text-white`}
      >
        <span className="tracking-[-0.019em]">{groupName} 연구그룹</span>
      </Link>
      <div className="text-white peer-hover:text-main-orange">
        {groupName.length < LENGTH_BOUNDARY ? (
          <PentagonShort className="duration-300" />
        ) : (
          <PentagonLong className="duration-300" />
        )}
      </div>
    </div>
  );
}
