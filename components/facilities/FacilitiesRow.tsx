import Image from 'next/image';

import HTMLViewer from '../editor/HTMLViewer';

export interface FacilitiesRowProps {
  name: string;
  description: string;
  location: string;
  imageURL: string;
}

export default function FacilitiesRow({
  name,
  description,
  location,
  imageURL,
}: FacilitiesRowProps) {
  return (
    <article className="text-neutral-700  flex my-[1.2rem] flex-row items-start justify-between break-all">
      <div className="flex flex-col w-[35.5rem]">
        <h3 className="text-neutral-800 text-md font-noto font-bold mb-[.69rem] leading-5">
          {name}
        </h3>
        <HTMLViewer htmlContent={description} />
        <div className="flex gap-[0.12rem]">
          <span className="material-symbols-rounded font-light text-lg leading-[1.63rem]">
            distance
          </span>
          <p className="text-sm leading-[1.63rem]">{location}</p>
        </div>
      </div>

      <FacilitiesRowImage imageURL={imageURL} />
    </article>
  );
}

function FacilitiesRowImage({ imageURL }: { imageURL: string }) {
  return (
    <div className="w-60 h-40 relative">
      <Image alt="대표 이미지" src={imageURL} fill sizes="10rem" priority />
    </div>
  );
}
