import Image from 'next/image';
import Link from 'next/link';

import HTMLViewer from '../common/HTMLViewer';

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
    <article className="text-neutral-700 font-noto flex my-[1.2rem] flex-row items-start justify-between break-all h-40">
      <div className="flex flex-col w-[35.5rem] h-auto">
        <Link href="" className="hover:underline">
          <h3 className="text-neutral-800 text-md font-bold mb-[.69rem] leading-5">{name}</h3>
        </Link>
        <Link href="" className="hover:cursor-pointer flex flex-col gap-1">
          <div className="text-sm font-normal leading-[1.63rem]">
            <HTMLViewer htmlContent={description} />
          </div>
          <div className="flex flex-row items-center gap-[0.12rem]">
            <span className="material-symbols-rounded font-light text-lg cursor-default">
              distance
            </span>
            <p className="text-sm font-normal leading-[1.63rem]">{location}</p>
          </div>
        </Link>
      </div>
      <Link href="" className="w-60 h-40 relative">
        <Image alt="대표 이미지" src={imageURL} fill sizes="10rem" priority />
      </Link>
    </article>
  );
}
