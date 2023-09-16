import Link from 'next-intl/link';

import { seminar } from '@/types/page';

import { getPath } from '@/utils/page';

import ImageWithFallback from '../common/ImageWithFallback';

export interface SeminarRowProps {
  id: number;
  title: string;
  host: string;
  company: string;
  date: Date;
  location: string;
  imageURL: string | null;
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
  return (
    <article
      className={`font-noto flex py-[1.2rem] border-neutral-200 ${
        !isYearLast ? 'border-t-[1px]' : null
      }`}
    >
      <Link
        href={`${seminarPath}/${id}`}
        className={`flex items-center justify-center h-[6.25rem] w-[6.25rem] relative ${
          !imageURL && 'bg-neutral-100'
        }`}
      >
        <ImageWithFallback
          alt="대표 이미지"
          src={imageURL}
          fill
          priority
          className="object-cover"
        />
      </Link>
      <div className="flex flex-col items-start pl-5 break-all">
        <Link href={`${seminarPath}/${id}`} className="hover:underline">
          <h3 className="text-md font-bold mb-[.63rem] leading-5 text-neutral-800">{title}</h3>
        </Link>

        <Link
          href={`${seminarPath}/${id}`}
          className="hover:cursor-pointer flex flex-row leading-[1.63rem] items-center"
        >
          <span className="material-symbols-rounded font-light text-lg cursor-default mr-1 text-neutral-400">
            person
          </span>
          <p className="text-xs font-normal text-neutral-500">{host}</p>
          <p className="text-xs font-normal w-5 text-center text-neutral-500">|</p>
          <p className="text-xs font-normal text-neutral-500">{company}</p>
        </Link>
        <Link
          href={`${seminarPath}/${id}`}
          className="hover:cursor-pointer flex flex-row leading-[1.63rem] items-center"
        >
          <span className="material-symbols-rounded font-light text-lg cursor-default mr-1 text-neutral-400">
            calendar_month
          </span>
          <p className="text-xs font-normal mr-2 text-neutral-500">{formatDateWithDays(date)}</p>
          <span className="material-symbols-rounded font-light text-lg cursor-default mr-1 text-neutral-400">
            distance
          </span>
          <p className="text-xs font-normal text-neutral-500">{location}</p>
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
