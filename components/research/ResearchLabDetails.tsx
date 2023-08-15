import Link from 'next/link';

import CornerFoldedRectangle from '@/components/common/CornerFoldedRectangle';
import HTMLViewer from '@/components/common/HTMLViewer';

import { COLOR_THEME } from '@/constants/color';

import { researchGroups } from '@/types/page';
import { ResearchLab } from '@/types/research';

import { getPath } from '@/utils/page';
import { ReactNode } from 'react';

// import './test.css';

export default function ResearchLabDetails({ lab }: { lab: ResearchLab }) {
  return (
    <div>
      <AffiliatedGroup groupName={lab.group} />
      <ResearchLabInfo lab={lab} />
      <HTMLViewer htmlContent={lab.description} />
    </div>
  );
}

function Pentagon({ children }: { children?: ReactNode }) {
  const clipPath = 'polygon(0% 0%, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0% 100%)';

  return (
    <div style={{ filter: 'url(#round)' }}>
      <div className="bg-white font-yoon text-sm h-10 w-fit py-2.5 px-4" style={{ clipPath }}>
        {children}
      </div>

      <svg className="invisible absolute w-0 h-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="round">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="round"
            />
            <feComposite in="SourceGraphic" in2="round" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Pentagon2({ children }: { children?: ReactNode }) {
  const clipPath = 'polygon(0% 0%, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0% 100%)';

  return (
    <div style={{ filter: 'url(#round)' }}>
      <div className="bg-main-orange font-yoon text-sm w-fit p-px" style={{ clipPath }}>
        {children}
      </div>

      <svg className="invisible absolute w-0 h-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="round">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="round"
            />
            <feComposite in="SourceGraphic" in2="round" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function PentagonBorder({ children }: { children: ReactNode }) {
  return (
    <div>
      <Pentagon2>
        <Pentagon>{children}</Pentagon>
      </Pentagon2>
    </div>
  );
}

const researchGroupsPath = getPath(researchGroups);

function AffiliatedGroup({ groupName }: { groupName: string }) {
  return (
    <PentagonBorder>
      <Link href={`${researchGroupsPath}?selected=${groupName} w-fit`}>{groupName} 연구 그룹</Link>
    </PentagonBorder>
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
