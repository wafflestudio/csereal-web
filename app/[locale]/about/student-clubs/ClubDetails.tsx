import SelectionTitle from '@/components/common/selection/SelectionTitle';
import HTMLViewer from '@/components/editor/HTMLViewer';

import { Club } from '@/types/about';

export default function ClubDetails({ club }: { club: Club }) {
  return (
    <div>
      <ClubTitle name={club.name} engName={club.engName} />
      <HTMLViewer
        htmlContent={club.description}
        topRightContent={
          club.imageURL ? { type: 'image', width: 320, height: 200, url: club.imageURL } : undefined
        }
        className="ml-2.5"
      />
    </div>
  );
}

function ClubTitle({ name, engName }: { name: string; engName: string }) {
  return (
    <SelectionTitle animationKey={name}>
      <div className="flex items-center gap-2">
        <span className="text-base sm:text-[24px] font-bold">{name}</span>
        <span className="text-xs sm:text-md font-medium tracking-[0.02rem] pt-[0.1875rem]">
          {engName}
        </span>
      </div>
    </SelectionTitle>
  );
}
