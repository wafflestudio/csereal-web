import Distance from '@/public/image/distance.svg';

import ImageWithFallback from '@/components/common/ImageWithFallback';
import HTMLViewer from '@/components/editor/HTMLViewer';

import { Facilities } from '@/types/about';

export default function FacilitesList({ facilities }: { facilities: Facilities }) {
  return (
    <div className="flex flex-col divide-y divide-neutral-200 pt-2 sm:pt-6">
      {facilities.map((post, index) => (
        <FacilitiesRow
          key={index}
          name={post.name}
          description={post.description}
          location={post.locations.join(', ')}
          imageURL={post.imageURL ?? ''} // TODO: imageURL이 non-null되면 수정
        />
      ))}
    </div>
  );
}

export interface FacilitiesRowProps {
  name: string;
  description: string;
  location: string;
  imageURL: string;
}

function FacilitiesRow({ name, description, location, imageURL }: FacilitiesRowProps) {
  return (
    <article className={`flex flex-col-reverse items-start justify-between gap-5 py-5 sm:flex-row`}>
      <div className="flex flex-col sm:w-[35.5rem]">
        <h3 className="mb-3 text-base font-bold leading-5">{name}</h3>
        <HTMLViewer htmlContent={description} />
        <div className="flex translate-x-[-4px] items-start gap-px">
          <Distance className="shrink-0" />
          <p className="pt-0.5 text-md text-neutral-500">{location}</p>
        </div>
      </div>
      <FacilitiesRowImage imageURL={imageURL} />
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
