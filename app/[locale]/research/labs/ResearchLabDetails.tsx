'use client';

import { Link } from '@/navigation';
import PentagonLong from '@/public/image/pentagon_long.svg';
import PentagonShort from '@/public/image/pentagon_short.svg';

import HTMLViewer from '@/components/editor/HTMLViewer';

import { ResearchLab } from '@/types/research';

import { getPath } from '@/utils/page';
import { replaceSpaceWithDash } from '@/utils/replaceCharacter';
import { researchGroups } from '@/utils/segmentNode';

import ResearchLabInfo from './ResesarchLabInfo';

export default function ResearchLabDetails({ lab }: { lab: ResearchLab }) {
  return (
    <div>
      <AffiliatedGroup groupName={lab.group} />
      <HTMLViewer
        htmlContent={lab.description}
        topRightContent={{ type: 'component', content: <ResearchLabInfo lab={lab} /> }}
        className="mt-6"
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
        className={`absolute inline-block ${width} h-10 text-sm text-center py-2.5 peer hover:text-white duration-300`}
      >
        <span className="font-yoon tracking-[-0.019em]">{groupName} 연구그룹</span>
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
