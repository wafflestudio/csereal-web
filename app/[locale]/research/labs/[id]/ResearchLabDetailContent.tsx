'use client';

import { useTranslations } from 'next-intl';

import { deleteResearchLabAction } from '@/actions/research';
import { ResearchLab } from '@/apis/types/research';
import { EditButton } from '@/components/common/Buttons';
import { DeleteButton } from '@/components/common/ClientButtons';
import LoginVisible from '@/components/common/LoginVisible';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import { researchGroups, researchLabs } from '@/constants/segmentNode';
import { Link } from '@/i18n/routing';
import PentagonLong from '@/public/image/pentagon_long.svg';
import PentagonShort from '@/public/image/pentagon_short.svg';
import { WithLanguage } from '@/types/language';
import useResponsive from '@/utils/hooks/useResponsive';
import { getPath } from '@/utils/page';
import { handleServerResponse } from '@/utils/serverActionError';
import { replaceSpaceWithDash } from '@/utils/string';

import ResearchLabInfo from './ResesarchLabInfo';

const labsPath = getPath(researchLabs);

export default function ResearchLabDetailContent({
  lab,
  ids,
}: {
  lab: ResearchLab;
  ids: WithLanguage<number>;
}) {
  const { isMobile } = useResponsive();

  const handleDelete = async () => {
    const resp = await deleteResearchLabAction(ids);
    handleServerResponse(resp, { successMessage: '연구실을 삭제했습니다.' });
  };

  return (
    <div>
      <LoginVisible staff>
        <div className="mb-8 flex h-fit justify-end gap-3">
          <DeleteButton onDelete={handleDelete} />
          <EditButton href={`${labsPath}/${lab.id}/edit`} />
        </div>
      </LoginVisible>
      <AffiliatedGroup groupName={lab.group.name} />
      <div className="mx-2 mb-1 mt-6 flex justify-end sm:hidden">
        <ResearchLabInfo lab={lab} />
      </div>
      <HTMLViewer
        htmlContent={lab.description}
        topRightContent={
          isMobile ? undefined : { type: 'component', content: <ResearchLabInfo lab={lab} /> }
        }
        wrapperClassName="mt-6"
      />
    </div>
  );
}

const researchGroupsPath = getPath(researchGroups);
const LENGTH_BOUNDARY = 10;

function AffiliatedGroup({ groupName }: { groupName: string }) {
  const t = useTranslations('Content');

  const width = groupName.length < LENGTH_BOUNDARY ? 'w-[10.875rem]' : 'w-[16.4375rem]';
  const affiliatedGroupPath = `${researchGroupsPath}?selected=${replaceSpaceWithDash(groupName)}`;

  return (
    <div className="relative w-fit">
      <Link
        href={affiliatedGroupPath}
        className={`absolute ${width} peer flex h-10 items-center justify-center pr-1 text-center text-sm duration-300 hover:text-white`}
      >
        <span className="tracking-[-0.019em]">
          {groupName} {t('스트림')}
        </span>
      </Link>
      <div className="text-white peer-hover:text-main-orange">
        {groupName.length < LENGTH_BOUNDARY ? (
          <PentagonShort className="duration-300" />
        ) : (
          <PentagonLong className="duration-300" />
        )}
      </div>
    </div>
  );
}
