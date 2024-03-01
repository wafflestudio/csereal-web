import { Link } from '@/navigation';
import Calendar from '@/public/image/calendar.svg';
import Distance from '@/public/image/distance.svg';
import Person from '@/public/image/person.svg';

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
  hideDivider?: boolean;
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
  hideDivider,
}: SeminarRowProps) {
  const seminarPostPath = `${seminarPath}/${id}`;

  return (
    <article
      className={`flex flex-col sm:flex-row py-[1.2rem] gap-4 sm:gap-5 border-neutral-200 ${
        !isYearLast && !hideDivider ? 'border-t' : null
      }`}
    >
      <ImageCell imageURL={imageURL} href={seminarPostPath} />
      <div className="flex flex-col gap-1 sm:gap-0 items-start break-all">
        <TitleCell title={title} href={seminarPostPath} />
        <HostInformationCell host={host} company={company} href={seminarPostPath} />
        <DateAndLocationCell date={date} location={location} href={seminarPostPath} />
      </div>
    </article>
  );
}

function ImageCell({ imageURL, href }: { imageURL: string | null; href: string }) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-center h-[160px] w-[160px] sm:h-[6.25rem] sm:w-[6.25rem] relative ${
        !imageURL && 'bg-neutral-100'
      }`}
    >
      <ImageWithFallback alt="대표 이미지" src={imageURL} fill className="object-cover" />
    </Link>
  );
}

function TitleCell({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href} className="hover:underline">
      <h3 className="font-bold mb-1 sm:mb-5">{title}</h3>
    </Link>
  );
}

function HostInformationCell({
  host,
  company,
  href,
}: {
  host: string;
  company: string;
  href: string;
}) {
  return (
    <Link href={href} className="cursor-pointer flex flex-wrap gap-0.5 items-center">
      <Person />
      <Text text={host} />
      <VerticalDivider />
      <Text text={company} />
    </Link>
  );
}

function DateAndLocationCell({
  date,
  location,
  href,
}: {
  date: Date;
  location: string;
  href: string;
}) {
  return (
    <Link href={href} className="hover:cursor-pointer flex gap-0.5 items-center">
      <Calendar />
      <Text text={formatDateWithDays(date)} />
      <VerticalDivider />
      <Distance />
      <Text text={location} />
    </Link>
  );
}

function Text({ text }: { text: string }) {
  return <span className="text-md font-normal text-neutral-500">{text}</span>;
}

function VerticalDivider() {
  return <span className="text-md font-normal w-4 sm:w-5 text-center text-neutral-500">|</span>;
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
