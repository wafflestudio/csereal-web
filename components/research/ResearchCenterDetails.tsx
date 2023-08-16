import Link from 'next/link';

import HTMLViewer from '@/components/common/HTMLViewer';
import { StraightNode } from '@/components/common/Nodes';

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
        mainImage={{ url: center.imageURL, width: 320, height: 190 }}
        margin="mt-3 ml-2.5"
      />
    </div>
  );
}

function ResearchCenterTitle({ name, link }: { name: string; link: string }) {
  return (
    <div className="w-fit">
      <h4 className="px-2.5 font-bold text-[1.25rem] leading-10">
        <Link href={link} target="_blank" className="group flex items-center gap-1 h-10">
          <span>{name}</span>
          <span className="material-symbols-rounded rotate-[-45deg] font-medium text-neutral-400 group-hover:text-main-orange">
            link
          </span>
        </Link>
      </h4>
      <StraightNode />
    </div>
  );
}
