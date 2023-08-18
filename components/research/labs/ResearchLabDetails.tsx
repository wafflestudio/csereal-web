import Link from 'next/link';

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
      />
    </div>
  );
}

const researchGroupsPath = getPath(researchGroups);

function AffiliatedGroup({ groupName }: { groupName: string }) {
  return (
    <div className={`test relative w-fit`}>
      <Link
        href={`${researchGroupsPath}?selected=${groupName}`}
        className="inline-block w-fit h-[42px] font-yoon text-sm py-2.5 px-4 whitespace-nowrap"
      >
        <span>{groupName} 연구 그룹</span>
      </Link>
    </div>
  );
}
