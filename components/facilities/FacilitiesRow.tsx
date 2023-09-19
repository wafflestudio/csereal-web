'use client';

import Image from 'next/image';
import { useState } from 'react';

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
  const [hover, setHover] = useState(false);
  return (
    <article
      className="text-neutral-700  flex my-[1.2rem] flex-row items-start justify-between break-all"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex flex-col w-[35.5rem]">
        <h3 className="text-neutral-800 text-md font-noto font-bold mb-[.69rem] leading-5 tracking-wide">
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

      <FacilitiesRowImage imageURL={imageURL} hover={hover} />
    </article>
  );
}

function FacilitiesRowImage({ imageURL, hover }: { imageURL: string; hover: boolean }) {
  const src = hover
    ? `/image/facilities/${imageURL}-color.png`
    : `/image/facilities/${imageURL}-original.png`;

  return (
    <div className="w-60 h-40 relative">
      <Image alt="대표 이미지" src={src} fill sizes="10rem" priority />
    </div>
  );
}
