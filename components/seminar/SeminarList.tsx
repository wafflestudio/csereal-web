import Image from 'next/image';
import Link from 'next/link';

export interface SeminarListProps {
  title: string;
  host: string;
  company: string;
  date: Date;
  location: string;
  imageURL: string;
}

const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

export default function SeminarList({
  title,
  host,
  company,
  date,
  location,
  imageURL,
}: SeminarListProps) {
  const dateStr = date.toLocaleDateString('ko', {
    month: 'numeric',
    day: 'numeric',
    weekday: 'short',
  });

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = date.getDay();

  return (
    <article className="text-neutral-700 font-noto flex py-[1.2rem] border-b-[1px] border-neutral-200 ">
      <Link href="" className="h-[6.25rem] w-[6.25rem] relative">
        <Image alt="대표 이미지" src={imageURL} fill sizes="10rem" priority />
      </Link>
      <div className="flex flex-col items-start pl-5 break-all">
        <Link href="" className="hover:underline">
          <h3 className="text-md font-bold mb-[.63rem] leading-5">{title}</h3>
        </Link>

        <Link href="" className="hover:cursor-pointer flex flex-row leading-[1.63rem] items-center">
          <span className="material-symbols-rounded font-light text-[1.25rem] cursor-default text-neutral-400">
            person
          </span>
          <p className="text-xs font-normal ">{host}</p>
          <p className="text-xs font-normal text-neutral-400 w-4 text-center">|</p>
          <p className="text-xs font-normal ">{company}</p>
        </Link>
        <Link
          href=""
          className="hover:cursor-pointer flex flex-row leading-[1.63rem] items-center gap-x-1"
        >
          <span className="material-symbols-rounded font-light text-lg cursor-default text-neutral-400">
            calendar_month
          </span>
          <p className="text-xs font-normal ">
            {month}/{day} ({daysOfWeek[dayOfWeek]})
          </p>
          <span className="material-symbols-rounded font-light text-lg cursor-default text-neutral-400">
            distance
          </span>
          <p className="text-xs font-normal ">{location}</p>
        </Link>
      </div>
    </article>
  );
}
