import Image from 'next/image';

import Distance from '@/public/image/about/distance.svg';

import { Facilities } from '@/types/about';

import HTMLViewer from '../../../../components/editor/HTMLViewer';

export default function FacilitesList({ facilities }: { facilities: Facilities }) {
  return (
    <div className="flex flex-col">
      {facilities.facilitiesList.map((post, index) => (
        <FacilitiesRow
          key={index}
          name={post.name}
          description={post.description}
          location={post.location}
          imageURL={post.imageURL}
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
      className={`text-neutral-700 flex py-[1.2rem] flex-row items-start justify-between break-all ${
        border ? 'border-t-[1px] border-neutral-200' : undefined
      }`}
    >
      <div className="flex flex-col w-[35.5rem]">
        <h3 className="text-neutral-800 text-base font-noto font-bold mb-[.69rem] leading-5">
          {name}
        </h3>
        <HTMLViewer htmlContent={description} />
        <div className="flex items-center gap-[0.12rem]">
          <Distance />
          <p className="text-md leading-[1.63rem] translate-x-[-2px]">{location}</p>
        </div>
      </div>

      <FacilitiesRowImage imageURL={imageURL} />
    </article>
  );
}

function FacilitiesRowImage({ imageURL }: { imageURL: string }) {
  const src = `/image/facilities/${imageURL}-color.png`;

  return (
    <div className="w-60 h-40 relative">
      <Image alt="대표 이미지" src={src} fill sizes="10rem" />
    </div>
  );
}
