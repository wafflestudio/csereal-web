'use client';

import { deleteFacilityAction } from '@/actions/about';
import { DeleteButton, EditButton } from '@/components/common/Buttons';
import ImageWithFallback from '@/components/common/ImageWithFallback';
import LoginVisible from '@/components/common/LoginVisible';
import HTMLViewer from '@/components/common/HTMLViewer';
import Distance from '@/public/image/distance.svg';
import { Facility } from '@/types/about';
import { errorToStr } from '@/utils/error';
import { getPath } from '@/utils/page';
import { facilities } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

const facilitiesPath = getPath(facilities);

export default function FacilitesList({ facilities }: { facilities: Facility[] }) {
  return (
    <div className="mt-[-20px] flex flex-col divide-y divide-neutral-200">
      {facilities.map((facility) => (
        <FacilitiesRow key={facility.id} facility={facility} />
      ))}
    </div>
  );
}

function FacilitiesRow({ facility }: { facility: Facility }) {
  const handleDelete = async () => {
    try {
      handleServerAction(await deleteFacilityAction(facility.id));
      successToast('시설 안내를 삭제했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <article className={`flex flex-col-reverse items-start justify-between gap-5 py-5 sm:flex-row`}>
      <div className="flex flex-col sm:w-[35.5rem]">
        <h3 className="mb-3 text-base font-bold leading-5">{facility.name}</h3>
        <HTMLViewer htmlContent={facility.description} />
        <div className="flex translate-x-[-4px] items-start gap-px">
          <Distance className="shrink-0" />
          <p className="pt-0.5 text-md text-neutral-500">{facility.locations.join(', ')}</p>
        </div>
        <LoginVisible staff>
          <div className="mt-5 flex gap-3">
            <DeleteButton onDelete={handleDelete} />
            <EditButton href={`${facilitiesPath}/edit?id=${facility.id}`} />
          </div>
        </LoginVisible>
      </div>
      <FacilitiesRowImage imageURL={facility.imageURL ?? ''} />
    </article>
  );
}

function FacilitiesRowImage({ imageURL }: { imageURL: string }) {
  return (
    <div className="relative h-44 w-full shrink-0 sm:w-60">
      {/* 학부장님 피드백이 있기도 했고, 이미지 비중이 큰 페이지라서 quality를 낮추고 priority 설정 */}
      <ImageWithFallback
        alt="대표 이미지"
        src={imageURL}
        fill
        className="object-cover"
        quality={30}
        priority
      />
    </div>
  );
}
