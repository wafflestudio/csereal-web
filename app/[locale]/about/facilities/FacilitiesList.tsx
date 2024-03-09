import Image from 'next/image';

import Distance from '@/public/image/about/distance.svg';

import { Facilities } from '@/types/about';

import HTMLViewer from '../../../../components/editor/HTMLViewer';

export default function FacilitesList({ facilities }: { facilities: Facilities }) {
  return (
    <div className="flex flex-col">
      {facilities.map((post, index) => (
        <FacilitiesRow
          key={index}
          name={post.name}
          description={post.description}
          location={post.locations.join(', ')}
          imageURL={post.imageURL ?? ''} // TODO: imageURL이 non-null되면 수정
          border={index !== 0}
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
  border: boolean;
}

function FacilitiesRow({ name, description, location, imageURL, border }: FacilitiesRowProps) {
  return (
    <article
      className={`flex flex-row items-start justify-between break-all py-[1.2rem] text-neutral-700 ${
        border ? 'border-t-[1px] border-neutral-200' : undefined
      }`}
    >
      <div className="flex w-[35.5rem] flex-col">
        <h3 className=" mb-[.69rem] text-base font-bold leading-5 text-neutral-800">{name}</h3>
        <HTMLViewer htmlContent={description} />
        <div className="flex items-center gap-[0.12rem]">
          <Distance />
          <p className="translate-x-[-2px] text-md leading-[1.63rem]">{location}</p>
        </div>
      </div>

      <FacilitiesRowImage imageURL={imageURL} />
    </article>
  );
}

function FacilitiesRowImage({ imageURL }: { imageURL: string }) {
  const src = `/image/facilities/${imageURL}-color.png`;

  return (
    <div className="relative h-40 w-60">
      <Image alt="대표 이미지" src={src} fill sizes="10rem" />
    </div>
  );
}
