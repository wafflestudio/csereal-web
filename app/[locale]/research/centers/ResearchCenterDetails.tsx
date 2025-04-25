'use client';

import { deleteResearchCenterAction } from '@/actions/research';
import { ResearchCenter } from '@/apis/types/research';
import { EditButton } from '@/components/common/Buttons';
import { DeleteButton } from '@/components/common/ClientButtons';
import LoginVisible from '@/components/common/LoginVisible';
import SelectionTitle from '@/components/common/selection/SelectionTitle';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import { researchCenters } from '@/constants/segmentNode';
import LinkIcon from '@/public/image/link_icon.svg';
import { WithLanguage } from '@/types/language';
import { getPath } from '@/utils/page';
import { handleServerResponse } from '@/utils/serverActionError';

interface ResearchCenterDetailsProps {
  center: ResearchCenter;
  ids: WithLanguage<number>;
}

const centersPath = getPath(researchCenters);

export default function ResearchCenterDetails({ center, ids }: ResearchCenterDetailsProps) {
  const handleDelete = async () => {
    const resp = await deleteResearchCenterAction(ids);
    handleServerResponse(resp, { successMessage: '연구 센터를 삭제했습니다.' });
  };

  return (
    <>
      <div className="justify-between sm:flex">
        <ResearchCenterTitle name={center.name} link={center.websiteURL} />
        <LoginVisible staff>
          <div className="flex h-fit justify-end gap-3">
            <DeleteButton onDelete={handleDelete} />
            <EditButton href={`${centersPath}/edit?id=${center.id}`} />
          </div>
        </LoginVisible>
      </div>
      <HTMLViewer
        htmlContent={center.description}
        topRightContent={
          center.mainImageUrl
            ? {
                type: 'image',
                widthPX: 320,
                heightPX: 200,
                url: center.mainImageUrl,
                mobileFullWidth: true,
              }
            : undefined
        }
        wrapperClassName="px-2.5"
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
