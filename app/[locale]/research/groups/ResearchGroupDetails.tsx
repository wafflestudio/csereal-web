import Image from 'next/image';

import HTMLViewer from '@/components/editor/HTMLViewer';

import { ResearchGroup } from '@/types/research';

import ResearchGroupLabs from './ResearchGroupLabs';

interface ResearchGroupDetailProps {
  group: ResearchGroup;
}

export default function ResearchGroupDetails({ group }: ResearchGroupDetailProps) {
  return (
    <div className="bg-[#fafafa] pl-[100px] pr-[350px] pt-[50px] pb-[100px]">
      <h2 className="font-bold text-[24px] leading-loose mb-[18px]">{group.name} 연구 그룹</h2>
      <div className="bg-white p-[40px] w-[780px]">
        <HTMLViewer htmlContent={group.description} />
      </div>
      <div className="relative h-[200px] mt-6">
        <Image
          src={group.imageURL}
          alt={`${group.name}_연구그룹_사진`}
          priority
          fill
          objectFit="contain"
        />
      </div>
      <ResearchGroupLabs labs={group.labs} />
    </div>
  );
}