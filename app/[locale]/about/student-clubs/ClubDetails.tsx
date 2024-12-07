'use client';

import { deleteClubAction } from '@/actions/about';
import { DeleteButton, EditButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import SelectionTitle from '@/components/common/selection/SelectionTitle';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import { studentClubs } from '@/constants/segmentNode';
import { Club } from '@/apis/types/about';
import { Language, WithLanguage } from '@/types/language';
import { errorToStr } from '@/utils/error';
import { getPath } from '@/utils/page';
import { handleServerAction_legacy } from '@/utils/serverActionError';
import { replaceSpaceWithDash } from '@/utils/string';
import { errorToast, successToast } from '@/utils/toast';

const clubPath = getPath(studentClubs);

export default function ClubDetails({
  club,
  language,
}: {
  club: WithLanguage<Club>;
  language: Language;
}) {
  const handleDelete = async () => {
    try {
      handleServerAction(await deleteClubAction(club.ko.id));
      successToast('동아리를 삭제했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <div>
      <div className="justify-between sm:flex">
        <ClubTitle
          title={club[language].name}
          subtitle={club[language === 'ko' ? 'en' : 'ko'].name}
        />
        <LoginVisible staff>
          <div className="flex h-fit justify-end gap-3">
            <DeleteButton onDelete={handleDelete} />
            <EditButton href={`${clubPath}/edit?selected=${replaceSpaceWithDash(club.en.name)}`} />
          </div>
        </LoginVisible>
      </div>
      <HTMLViewer
        htmlContent={club[language].description}
        topRightContent={
          club[language].imageURL
            ? {
                type: 'image',
                widthPX: 320,
                heightPX: 200,
                url: club[language].imageURL!,
                mobileFullWidth: true,
              }
            : undefined
        }
      />
    </div>
  );
}

function ClubTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <SelectionTitle animationKey={title}>
      <div className="flex items-center gap-2">
        <span className="text-base font-bold sm:text-[24px]">{title}</span>
        <span className="pt-[0.1875rem] text-xs font-medium tracking-[0.02rem] sm:text-md">
          {subtitle}
        </span>
      </div>
    </SelectionTitle>
  );
}
