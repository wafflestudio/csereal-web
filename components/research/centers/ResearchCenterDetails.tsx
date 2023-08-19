import Image from 'next/image';
import Link from 'next/link';

import linkIcon from '@/public/image/link_icon.svg';

import HTMLViewer from '@/components/common/HTMLViewer';
import SelectionTitle from '@/components/common/selection/SelectionTitle';

import { ResearchCenter } from '@/types/research';

interface ResearchCenterDetailProps {
  center: ResearchCenter;
}

export default function ResearchCenterDetails({ center }: ResearchCenterDetailProps) {
  return (
    <div>
      <ResearchCenterTitle name={center.name} link={center.link} />
      <HTMLViewer
        htmlContent={center.description}
        topRightContent={{ type: 'image', width: 320, height: 160, url: center.imageURL }}
        margin="mt-3 ml-2.5"
      />
    </div>
  );
}

const NEUTRAL_400_FILTER =
  'invert-[.64] sepia-0 saturate-0 hue-rotate-[142deg] brightness-100 contrast-[.98]';
const MAIN_ORANGE_HOVER_FILTER =
  'hover:invert-[.54] hover:sepia-[.77] hover:saturate-[34.83] hover:hue-rotate-[350deg] hover:brightness-100 hover:contrast-[1.03]';

function ResearchCenterTitle({ name, link }: { name: string; link: string }) {
  return (
    <SelectionTitle animationKey={name}>
      <Link href={link} target="_blank" className="group flex items-center gap-0.5 h-10">
        <span>{name}</span>
        <Image
          src={linkIcon}
          alt="center_link_icon"
          className={`${NEUTRAL_400_FILTER} ${MAIN_ORANGE_HOVER_FILTER}`}
        />
      </Link>
    </SelectionTitle>
  );
}
