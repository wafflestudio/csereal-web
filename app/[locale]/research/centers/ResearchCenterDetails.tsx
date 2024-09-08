import SelectionTitle from '@/components/common/selection/SelectionTitle';
import HTMLViewer from '@/components/editor/HTMLViewer';
import LinkIcon from '@/public/image/link_icon.svg';
import { ResearchCenter } from '@/types/research';

interface ResearchCenterDetailProps {
  center: ResearchCenter;
}

export default function ResearchCenterDetails({
  center: { name, description, mainImageUrl, websiteURL },
}: ResearchCenterDetailProps) {
  return (
    <>
      <ResearchCenterTitle name={name} link={websiteURL} />
      <HTMLViewer
        htmlContent={description}
        topRightContent={
          mainImageUrl
            ? {
                type: 'image',
                widthPX: 320,
                heightPX: 200,
                url: mainImageUrl,
                mobileFullWidth: true,
              }
            : undefined
        }
        className="px-2.5"
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
