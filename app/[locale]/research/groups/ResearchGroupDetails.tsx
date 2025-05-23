'use client';

import { useTranslations } from 'next-intl';

import { deleteResearchGroupAction } from '@/actions/research';
import { ResearchGroup } from '@/apis/types/research';
import ResearchGroupLabs from '@/app/[locale]/research/groups/ResearchGroupLabs';
import { EditButton } from '@/components/common/Buttons';
import { DeleteButton } from '@/components/common/ClientButtons';
import Image from '@/components/common/Image';
import LoginVisible from '@/components/common/LoginVisible';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import { researchGroups } from '@/constants/segmentNode';
import { WithLanguage } from '@/types/language';
import { getPath } from '@/utils/page';
import { handleServerResponse } from '@/utils/serverActionError';

interface ResearchGroupDetailsProps {
  group: ResearchGroup;
  ids: WithLanguage<number>;
}

const groupsPath = getPath(researchGroups);

export default function ResearchGroupDetails({ group, ids }: ResearchGroupDetailsProps) {
  const t = useTranslations('Content');

  const handleDelete = async () => {
    const resp = await deleteResearchGroupAction(ids);
    handleServerResponse(resp, { successMessage: '연구 스트림을 삭제했습니다.' });
  };

  return (
    <div className="flex flex-col bg-neutral-100 px-7 pb-9 pt-8 sm:pb-[100px] sm:pl-[100px] sm:pr-[320px] sm:pt-[50px]">
      <div className="justify-between sm:flex">
        <h2 className="mb-6 ml-1 whitespace-nowrap text-base font-bold leading-loose sm:mx-0 sm:mb-[18px] sm:text-[24px]">
          {group.name} {t('스트림')}
        </h2>
        <LoginVisible staff>
          <div className="flex h-fit justify-end gap-3">
            <DeleteButton onDelete={handleDelete} />
            <EditButton href={`${groupsPath}/edit?id=${group.id}`} />
          </div>
        </LoginVisible>
      </div>
      <HTMLViewer
        htmlContent={group.description}
        wrapperClassName="max-w-[780px] bg-white p-[18px] sm:mx-0 sm:p-[40px]"
      />
      {group.mainImageUrl !== null && (
        // TODO: 반응형
        <div className="relative mt-10 aspect-[2/1] w-[80%] max-w-[720px] self-end">
          {/* TODO: 이미지 반응형 */}
          <Image
            src={group.mainImageUrl}
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
