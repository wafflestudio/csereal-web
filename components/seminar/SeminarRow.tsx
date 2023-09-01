import Image from 'next/image';
import Link from 'next/link';

import SnuLogo from '@/public/image/SNU_Logo.svg';

import { useQueryString } from '@/hooks/useQueryString';

import { seminar } from '@/types/page';

import { getPath } from '@/utils/page';

export interface SeminarRowProps {
  id: number;
  title: string;
  host: string;
  company: string;
  date: Date;
  location: string;
  imageURL?: string;
  isYearLast: boolean;
}

const seminarPath = getPath(seminar);

export default function SeminarRow({
  id,
  title,
  host,
  company,
  date,
  location,
  imageURL,
  isYearLast,
}: SeminarRowProps) {
  const queryString = useQueryString();
  return (
    <article
      className={`text-neutral-700 font-noto flex py-[1.2rem] border-neutral-200 ${
        !isYearLast ? 'border-t-[1px]' : null
      }`}
    >
      <Link
        href={`${seminarPath}/${id}${queryString}`}
        className={`flex items-center justify-center h-[6.25rem] w-[6.25rem] relative ${
          !imageURL && 'bg-neutral-100'
        }`}
      >
        {imageURL ? (
          <Image alt="대표 이미지" src={imageURL} fill sizes="10rem" priority />
        ) : (
          <SnuLogo className="fill-neutral-400" />
        )}
      </Link>
      <div className="flex flex-col items-start pl-5 break-all">
        <Link href={`${seminarPath}/${id}${queryString}`} className="hover:underline">
          <h3 className="text-md font-bold mb-[.63rem] leading-5">{title}</h3>
        </Link>

        <Link
          href={`${seminarPath}/${id}${queryString}`}
          className="hover:cursor-pointer flex flex-row leading-[1.63rem] items-center"
        >
          <span className="material-symbols-rounded font-light text-[1.25rem] cursor-default text-neutral-400">
            person
          </span>
          <p className="text-xs font-normal ">{host}</p>
          <p className="text-xs font-normal text-neutral-400 w-4 text-center">|</p>
          <p className="text-xs font-normal ">{company}</p>
        </Link>
        <Link
          href={`${seminarPath}/${id}${queryString}`}
          className="hover:cursor-pointer flex flex-row leading-[1.63rem] items-center"
        >
          <span className="material-symbols-rounded font-light text-lg cursor-default text-neutral-400">
            calendar_month
          </span>
          <p className="text-xs font-normal mx-1">{formatDateWithDays(date)}</p>
          <span className="material-symbols-rounded font-light text-lg cursor-default text-neutral-400">
            distance
          </span>
          <p className="text-xs font-normal ml-[1.5px]">{location}</p>
        </Link>
      </div>
    </article>
  );
}

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

const formatDateWithDays = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = date.getDay();

  return `${month}/${day} (${DAYS[dayOfWeek]}) ${padZero(date.getHours())}:${padZero(
    date.getMinutes(),
  )}`;
};

const padZero = (str: number) => (str + '').padStart(2, '0');
