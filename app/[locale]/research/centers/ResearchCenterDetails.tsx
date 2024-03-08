import LinkIcon from '@/public/image/link_icon.svg';

import ImageWithFallback from '@/components/common/ImageWithFallback';
import SelectionTitle from '@/components/common/selection/SelectionTitle';
import HTMLViewer from '@/components/editor/HTMLViewer';

import { ResearchCenter } from '@/types/research';

import useResponsive from '@/utils/hooks/useResponsive';

interface ResearchCenterDetailProps {
  center: ResearchCenter;
}

export default function ResearchCenterDetails({
  center: { name, description, imageURL, websiteURL },
}: ResearchCenterDetailProps) {
  const { screenType } = useResponsive();

  return (
    <div>
      <ResearchCenterTitle name={name} link={websiteURL} />
      <div className="relative mx-2.5 mb-7 aspect-[4/3] sm:hidden">
        <ImageWithFallback alt={`${name}_이미지`} src={imageURL} className="object-contain" fill />
      </div>
      <HTMLViewer
        htmlContent={description}
        topRightContent={
          screenType === 'desktop'
            ? { type: 'image', width: 320, height: 160, url: imageURL }
            : undefined
        }
        className="mx-2.5"
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
