import LinkIcon from '@/public/image/link_icon.svg';

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
    <SelectionTitle animationKey={name}>
      <a
        href={link}
        target="_blank"
        className="group flex items-center gap-1 h-10"
        rel="noopener noreferrer"
      >
        <span>{name}</span>
        <LinkIcon className="mt-1 fill-neutral-400 group-hover:fill-main-orange" />
      </a>
    </SelectionTitle>
  );
}
