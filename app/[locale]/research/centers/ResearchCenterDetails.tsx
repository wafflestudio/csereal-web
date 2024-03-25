import LinkIcon from '@/public/image/link_icon.svg';

import ContentWithImage from '@/components/common/ContentWithImage';
import SelectionTitle from '@/components/common/selection/SelectionTitle';

import { ResearchCenter } from '@/types/research';

interface ResearchCenterDetailProps {
  center: ResearchCenter;
}

export default function ResearchCenterDetails({
  center: { name, description, imageURL, websiteURL },
}: ResearchCenterDetailProps) {
  return (
    <>
      <ResearchCenterTitle name={name} link={websiteURL} />
      <ContentWithImage
        imageURL={imageURL}
        content={description}
        containerClassName="px-2.5"
        imageWidth={320}
        imageHeight={200}
      />
    </>
  );
}

function ResearchCenterTitle({ name, link }: { name: string; link: string }) {
  return (
    <SelectionTitle animationKey={name}>
      <a
        href={link}
        target="_blank"
        className="group flex cursor-pointer items-center gap-1"
        rel="noopener noreferrer"
      >
        <span>{name}</span>
        <LinkIcon className="mt-0.5 fill-neutral-500 group-hover:fill-main-orange" />
      </a>
    </SelectionTitle>
  );
}
