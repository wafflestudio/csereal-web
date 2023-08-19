import Link from 'next/link';

import PentagonLong from '@/public/image/pentagon_long.svg';
import PentagonShort from '@/public/image/pentagon_short.svg';

import HTMLViewer from '@/components/common/HTMLViewer';

import { researchGroups } from '@/types/page';
import { ResearchLab } from '@/types/research';

import { getPath } from '@/utils/page';

import ResearchLabInfo from './ResesarchLabInfo';

export default function ResearchLabDetails({ lab }: { lab: ResearchLab }) {
  return (
    <div>
      <AffiliatedGroup groupName={lab.group} />
      <HTMLViewer
        htmlContent={lab.description}
        topRightContent={{ type: 'component', content: <ResearchLabInfo lab={lab} /> }}
        margin="mt-6"
      />
    </div>
  );
}

const researchGroupsPath = getPath(researchGroups);
const LENGTH_BOUNDARY = 10;

function AffiliatedGroup({ groupName }: { groupName: string }) {
  const width = groupName.length < LENGTH_BOUNDARY ? 'w-[10.875rem]' : 'w-[16.4375rem]';

  return (
    <div className="relative w-fit">
      <Link
        href={`${researchGroupsPath}?selected=${groupName}`}
        className={`absolute inline-block ${width} h-[42px] font-yoon text-sm text-center py-2.5 peer hover:text-white duration-300`}
      >
        <span className="font-yoon tracking-[-0.019em] text-center">{groupName} 연구그룹</span>
      </Link>
      {groupName.length < LENGTH_BOUNDARY ? (
        <div className="text-white peer-hover:text-main-orange">
          <PentagonShort className="duration-300" />
        </div>
      ) : (
        <div className="text-white peer-hover:text-main-orange">
          <PentagonLong className="duration-300" />
        </div>
      )}
    </div>
  );
}
