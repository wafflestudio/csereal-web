import Image from 'next/image';

import HTMLViewer from '@/components/editor/HTMLViewer';

import { ResearchGroup } from '@/types/research';

import ResearchGroupLabs from './ResearchGroupLabs';

interface ResearchGroupDetailProps {
  group: ResearchGroup;
}

export default function ResearchGroupDetails({ group }: ResearchGroupDetailProps) {
  return (
    <div className="bg-neutral-100 px-7 pb-9 pt-8 sm:pb-[100px] sm:pl-[100px] sm:pr-[320px] sm:pt-[50px]">
      <h2 className="mb-6 ml-1 whitespace-nowrap text-base font-bold leading-loose sm:mx-0 sm:mb-[18px] sm:text-[24px]">
        {group.name} 연구 그룹
      </h2>
      <div className="max-w-[780px] bg-white p-[18px] sm:mx-0 sm:p-[40px]">
        <HTMLViewer htmlContent={group.description} />
      </div>
      {group.imageURL !== null && (
        <div className="relative mt-6 h-[200px]">
          <Image
            src={group.imageURL}
            alt={`${group.name}_연구그룹_사진`}
            priority
            fill
            objectFit="contain"
          />
        </div>
      )}
      <ResearchGroupLabs labs={group.labs} />
    </div>
  );
}
