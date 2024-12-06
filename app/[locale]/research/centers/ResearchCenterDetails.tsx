'use client';

import { deleteResearchCenterAction } from '@/actions/research';
import { DeleteButton, EditButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import SelectionTitle from '@/components/common/selection/SelectionTitle';
import HTMLViewer from '@/components/common/HTMLViewer';
import LinkIcon from '@/public/image/link_icon.svg';
import { WithLanguage } from '@/types/language';
import { ResearchCenter } from '@/types/research';
import { errorToStr } from '@/utils/error';
import { getPath } from '@/utils/page';
import { researchCenters } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

interface ResearchCenterDetailsProps {
  center: ResearchCenter;
  ids: WithLanguage<number>;
}

const centersPath = getPath(researchCenters);

export default function ResearchCenterDetails({ center, ids }: ResearchCenterDetailsProps) {
  const handleDelete = async () => {
    try {
      handleServerAction(await deleteResearchCenterAction(ids));
      successToast('연구 센터를 삭제했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
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
        className="px-2.5"
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
