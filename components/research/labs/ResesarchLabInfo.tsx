import Link from 'next/link';

import CornerFoldedRectangle from '@/components/common/CornerFoldedRectangle';

import { COLOR_THEME } from '@/constants/color';

import { ResearchLab } from '@/types/research';

export default function ResearchLabInfo({ lab }: { lab: ResearchLab }) {
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
      margin="mt-[-64px] mb-11 ml-11"
    >
      <div className="w-60 h-40 py-5 px-6 flex flex-col justify-between">
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
        </ul>
        <Link href={lab.websiteURL} className="w-fit underline text-sm hover:text-main-orange">
          Website
        </Link>
      </div>
    </CornerFoldedRectangle>
  );
}
