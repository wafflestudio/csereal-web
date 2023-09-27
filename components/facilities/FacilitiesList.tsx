'use client';

import Image from 'next/image';
import { useState } from 'react';

import Distance from '@/public/image/distance.svg';

import { Facilities } from '@/types/about';

import HTMLViewer from '../editor/HTMLViewer';

export default function FacilitesList({ facilities }: { facilities: Facilities }) {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  hoveredIndex ||= 0;
  return (
    <div className="flex flex-col">
      {facilities.facilitiesList.map((post, index) => (
        <div key={index} className={index !== 0 ? 'border-t-[1px] border-neutral-200' : undefined}>
          <FacilitiesRow
            name={post.name}
            description={post.description}
            location={post.location}
            imageURL={post.imageURL}
            isColor={hoveredIndex === index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        </div>
      ))}
    </div>
  );
}

export interface FacilitiesRowProps {
  name: string;
  description: string;
  location: string;
  imageURL: string;
  isColor: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function FacilitiesRow({
  name,
  description,
  location,
  imageURL,
  isColor,
  onMouseEnter,
  onMouseLeave,
}: FacilitiesRowProps) {
  return (
    <article
      className="text-neutral-700  flex my-[1.2rem] flex-row items-start justify-between break-all"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col w-[35.5rem]">
        <h3 className="text-neutral-800 text-md font-noto font-bold mb-[.69rem] leading-5">
          {name}
        </h3>
        <HTMLViewer htmlContent={description} />
        <div className="flex items-center gap-[0.12rem]">
          <Distance />
          <p className="text-sm leading-[1.63rem] translate-x-[-2px]">{location}</p>
        </div>
      </div>

      <FacilitiesRowImage imageURL={imageURL} isColor={isColor} />
    </article>
  );
}

function FacilitiesRowImage({ imageURL, isColor }: { imageURL: string; isColor: boolean }) {
  const src = isColor
    ? `/image/facilities/${imageURL}-color.png`
    : `/image/facilities/${imageURL}-original.png`;

  return (
    <div className="w-60 h-40 relative">
      <Image alt="대표 이미지" src={src} fill sizes="10rem" />
    </div>
  );
}
