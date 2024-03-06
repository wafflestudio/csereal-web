import Image from 'next/image';

import HTMLViewer from '@/components/editor/HTMLViewer';

import { ResearchGroup } from '@/types/research';

import ResearchGroupLabs from './ResearchGroupLabs';

interface ResearchGroupDetailProps {
  group: ResearchGroup;
}

export default function ResearchGroupDetails({ group }: ResearchGroupDetailProps) {
  return (
    <div className="bg-neutral-100 pt-8 pb-9 sm:pl-[100px] sm:pr-[320px] sm:pt-[50px] sm:pb-[100px]">
      <h2 className="mb-6 sm:mb-[18px] ml-8 mr-7 sm:mx-0 font-bold text-base sm:text-[24px] leading-loose whitespace-nowrap">
        {group.name} 연구 그룹
      </h2>
      <div className="bg-white mx-7 sm:mx-0 p-[18px] sm:p-[40px] max-w-[780px]">
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
