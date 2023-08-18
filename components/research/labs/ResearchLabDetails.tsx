import Link from 'next/link';

import Pentagon from '@/public/image/pentagon.svg';

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

function AffiliatedGroup({ groupName }: { groupName: string }) {
  return (
    <div className="relative w-fit">
      <Link
        href={`${researchGroupsPath}?selected=${groupName}`}
        className="absolute inline-block w-full h-[42px] font-yoon text-sm text-center py-2.5 px-4 whitespace-nowrap peer hover:text-white duration-300"
      >
        <span className="font-yoon tracking-[-0.019em] text-center">{groupName} 연구 그룹</span>
      </Link>
      <div className="peer-hover:text-main-orange text-white">
        <Pentagon className="duration-300" />
      </div>
    </div>
  );
}
