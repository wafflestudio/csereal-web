import { CSSProperties } from 'react';

import HTMLViewer from '@/components/common/HTMLViewer';
import { StraightNode } from '@/components/common/Nodes';

import { Club } from '@/types/club';

export default function ClubDetails({ club }: { club: Club }) {
  const len = `${club.image ? club.image.width + 28 : 0}px`;
  const nodeWidth: CSSProperties = {
    width: `calc(100% - ${len})`,
  };

  return (
    <div>
      <ClubTitle name={club.name} engName={club.engName} />
      <StraightNode style={nodeWidth} />
      <HTMLViewer htmlContent={club.description} mainImage={club.image} margin="ml-2.5 mt-2" />
    </div>
  );
}

function ClubTitle({ name, engName }: { name: string; engName: string }) {
  return (
    <h4 className="flex items-center gap-x-2.5 ml-2.5 mb-1 h-10 font-noto text-neutral-700">
      <span className="text-[1.25rem] font-black">{name}</span>
      <span className="text-md font-medium tracking-[0.02rem] pt-[0.1875rem]">{engName}</span>
    </h4>
  );
}
