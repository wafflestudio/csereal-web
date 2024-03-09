import LinkIcon from '@/public/image/link_icon.svg';

import SelectionTitle from '@/components/common/selection/SelectionTitle';
import HTMLViewer from '@/components/editor/HTMLViewer';

import { ResearchCenter } from '@/types/research';

interface ResearchCenterDetailProps {
  center: ResearchCenter;
}

export default function ResearchCenterDetails({
  center: { name, description, imageURL, websiteURL },
}: ResearchCenterDetailProps) {
  return (
    <div>
      <ResearchCenterTitle name={name} link={websiteURL} />
      <HTMLViewer
        htmlContent={description}
        className="mx-2.5"
        {...(imageURL
          ? { topRightContent: { type: 'image', width: 320, height: 160, url: imageURL } }
          : {})}
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
        className="group flex items-center gap-1"
        rel="noopener noreferrer"
      >
        <span>{name}</span>
        <LinkIcon className="mt-0.5 fill-neutral-500 group-hover:fill-main-orange" />
      </a>
    </SelectionTitle>
  );
}
