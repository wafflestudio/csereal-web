import Link from 'next/link';

import CornerFoldedRectangle from '@/components/common/CornerFoldedRectangle';
import HTMLViewer from '@/components/common/HTMLViewer';

import { COLOR_THEME } from '@/constants/color';

import { researchGroups } from '@/types/page';
import { ResearchLab } from '@/types/research';

import { getPath } from '@/utils/page';

export default function ResearchLabDetails({ lab }: { lab: ResearchLab }) {
  return (
    <div>
      <AffiliatedGroup groupName={lab.group} />
      <ResearchLabInfo lab={lab} />
      <HTMLViewer htmlContent={lab.description} />
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

function ResearchLabInfo({ lab }: { lab: ResearchLab }) {
  const dropShadow = 'drop-shadow(1px 2px 2px rgba(0,0,0,0.25)';
  const triangleLength = 2.5; // 20px
  const radius = 0.125; // 2px

  return (
    <CornerFoldedRectangle
      triangleDropShadow={dropShadow}
      rectangleDropShadow={dropShadow}
      radius={radius}
      triangleLength={triangleLength}
      colorTheme={COLOR_THEME.white}
    >
      <div className="w-60 py-6 px-7">
        <ul className="[&>li]:mb-1 font-noto">
          <li className="text-sm flex gap-1">
            <span className="whitespace-nowrap">교수: </span>
            <span> {lab.professors.join(', ')}</span>
          </li>
          <li className="text-sm flex gap-1">
            <span className="whitespace-nowrap">랩실: </span> <span>{lab.location}</span>
          </li>
          <li className="text-sm flex gap-1">
            <span className="whitespace-nowrap">전화: </span> <span>{lab.tel}</span>
          </li>
          <li className="mt-[1.625rem]">
            <Link href={lab.websiteURL} className="underline text-sm">
              Website
            </Link>
          </li>
        </ul>
      </div>
    </CornerFoldedRectangle>
  );
}
