import { Link } from '@/navigation';
import Calendar from '@/public/image/calendar.svg';
import Distance from '@/public/image/distance.svg';
import Person from '@/public/image/person.svg';

import { SeminarPreview } from '@/types/seminar';

import { getPath } from '@/utils/page';
import { seminar } from '@/utils/segmentNode';

import ImageWithFallback from '../../../../components/common/ImageWithFallback';

export interface SeminarRowProps {
  seminar: SeminarPreview;
  hideDivider: boolean;
}

const seminarPath = getPath(seminar);

export default function SeminarRow({
  seminar: { id, isYearLast, imageURL, title, name, affiliation, startDate, location },
  hideDivider,
}: SeminarRowProps) {
  const seminarPostPath = `${seminarPath}/${id}`;

  return (
    <Link
      href={seminarPostPath}
      className={`group flex py-[1.2rem] border-neutral-200 ${
        !isYearLast && !hideDivider ? 'border-t' : null
      }`}
    >
      <ImageCell imageURL={imageURL} />
      <div className="pl-5">
        <TitleCell title={title} />
        <HostInformationCell host={name} company={affiliation} />
        <DateAndLocationCell date={new Date(startDate)} location={location} />
      </div>
    </Link>
  );
}

function ImageCell({ imageURL }: { imageURL: string | null }) {
  return (
    // title에 밀리는 것을 막기 위해 shrink-0 사용
    <div className={'h-[6.25rem] w-[6.25rem] relative shrink-0'}>
      <ImageWithFallback alt="대표 이미지" fill src={imageURL} className="object-cover" />
    </div>
  );
}

function TitleCell({ title }: { title: string }) {
  return (
    <h3 className="group-hover:underline font-bold mb-5 max-w-[calc(100% - 6.25rem)]">{title}</h3>
  );
}

function HostInformationCell({ host, company }: { host: string; company: string }) {
  return (
    <div className="hover:cursor-pointer flex gap-0.5 items-center">
      <Person />
      <span className="text-md font-normal text-neutral-500">{host}</span>
      <VerticalDivider />
      <span className="text-md font-normal text-neutral-500">{company}</span>
    </div>
  );
}

function DateAndLocationCell({ date, location }: { date: Date; location: string }) {
  return (
    <div className="hover:cursor-pointer flex gap-0.5 items-center">
      <Calendar />
      <span className="text-md font-normal text-neutral-500">{formatDateWithDays(date)}</span>
      <VerticalDivider />
      <Distance />
      <span className="text-md font-normal text-neutral-500">{location}</span>
    </div>
  );
}

function VerticalDivider() {
  return <span className="text-md font-normal w-5 text-center text-neutral-500">|</span>;
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
