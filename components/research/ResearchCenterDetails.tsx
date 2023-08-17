import Link from 'next/link';

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

function ResearchCenterTitle({ name, link }: { name: string; link: string }) {
  return (
    <SelectionTitle key={name}>
      <Link href={link} target="_blank" className="group flex items-center gap-1 h-10">
        <span>{name}</span>
        <span className="material-symbols-rounded rotate-[-45deg] pt-1 text-neutral-400 group-hover:text-main-orange">
          link
        </span>
      </Link>
    </SelectionTitle>
  );
}
