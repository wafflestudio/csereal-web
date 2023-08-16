import HTMLViewer from '@/components/common/HTMLViewer';
import { StraightNode } from '@/components/common/Nodes';

import { Club } from '@/types/club';

export default function ClubDetails({ club }: { club: Club }) {
  return (
    <div>
      <ClubTitle name={club.name} engName={club.engName} />
      <HTMLViewer
        htmlContent={club.description}
        topRightContent={{ type: 'image', width: 320, height: 200, url: club.imageURL }}
        margin="ml-2.5 mt-5"
      />
    </div>
  );
}

function ClubTitle({ name, engName }: { name: string; engName: string }) {
  return (
    <div className="w-fit">
      <h4 className="flex items-center gap-2 px-2.5 mb-1 h-10 font-noto text-neutral-700">
        <span className="text-[1.25rem] font-bold">{name}</span>
        <span className="text-md font-medium tracking-[0.02rem] pt-[0.1875rem]">{engName}</span>
      </h4>
      <StraightNode />
    </div>
  );
}
