import Image from 'next/image';
import { useTranslations } from 'next-intl';

import HTMLViewer from '@/components/editor/HTMLViewer';
import { ResearchGroup } from '@/types/research';

import ResearchGroupLabs from './ResearchGroupLabs';

interface ResearchGroupDetailProps {
  group: ResearchGroup;
}

export default function ResearchGroupDetails({ group }: ResearchGroupDetailProps) {
  const t = useTranslations('Content');

  return (
    <div className="flex flex-col bg-neutral-100 px-7 pb-9 pt-8 sm:pb-[100px] sm:pl-[100px] sm:pr-[320px] sm:pt-[50px]">
      <h2 className="mb-6 ml-1 whitespace-nowrap text-base font-bold leading-loose sm:mx-0 sm:mb-[18px] sm:text-[24px]">
        {group.name} {t('스트림')}
      </h2>
      <HTMLViewer
        htmlContent={group.description}
        className="max-w-[780px] bg-white p-[18px] sm:mx-0 sm:p-[40px]"
      />
      {group.imageURL !== null && (
        // TODO: 반응형
        <div className="relative mt-10 aspect-[2/1] w-[80%] max-w-[720px] self-end">
          {/* TODO: 이미지 반응형 */}
          <Image
            src={group.imageURL}
            alt={`${group.name}_연구그룹_사진`}
            fill
            sizes="800px" // TODO: 이게 맞나?
            className="object-cover"
          />
        </div>
      )}
      <ResearchGroupLabs labs={group.labs} />
    </div>
  );
}
