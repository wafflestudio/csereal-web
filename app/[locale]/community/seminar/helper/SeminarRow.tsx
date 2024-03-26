import { Link } from '@/navigation';
import Calendar from '@/public/image/calendar.svg';
import Distance from '@/public/image/distance.svg';
import Person from '@/public/image/person.svg';

import ImageWithFallback from '@/components/common/ImageWithFallback';

import { SeminarPreview } from '@/types/seminar';

import { formatSeminarDateStr } from '@/utils/date';
import { getPath } from '@/utils/page';
import { seminar } from '@/utils/segmentNode';

export interface SeminarRowProps {
  seminar: SeminarPreview;
}

const seminarPath = getPath(seminar);

export default function SeminarRow({
  seminar: { id, imageURL, title, name, affiliation, startDate, location },
}: SeminarRowProps) {
  const seminarPostPath = `${seminarPath}/${id}`;

  return (
    <Link href={seminarPostPath}>
      <article className="group flex flex-col gap-4 sm:flex-row sm:gap-5">
        <ImageCell imageURL={imageURL} />
        <div className="flex flex-col items-start gap-1 break-all sm:gap-0">
          <TitleCell title={title} />
          <HostInformationCell host={name} company={affiliation} />
          <DateAndLocationCell date={new Date(startDate)} location={location} />
        </div>
      </article>
    </Link>
  );
}

function ImageCell({ imageURL }: { imageURL: string | null }) {
  return (
    // title에 밀리는 것을 막기 위해 shrink-0 사용
    <div
      className={`relative h-[160px] w-[160px] shrink-0 sm:h-[6.25rem] sm:w-[6.25rem] ${
        !imageURL && 'bg-neutral-100'
      }`}
    >
      <ImageWithFallback alt="대표 이미지" src={imageURL} fill className="object-cover" />
    </div>
  );
}

function TitleCell({ title }: { title: string }) {
  return <h3 className="mb-1 grow font-bold group-hover:underline sm:mb-5">{title}</h3>;
}

function HostInformationCell({ host, company }: { host: string; company: string }) {
  return (
    <div className="flex cursor-pointer flex-wrap items-center gap-0.5">
      <Person />
      <Text text={host} />
      <VerticalDivider />
      <Text text={company} />
    </div>
  );
}

function DateAndLocationCell({ date, location }: { date: Date; location: string }) {
  return (
    <div className="flex items-center gap-0.5 hover:cursor-pointer">
      <Calendar />
      <Text text={formatSeminarDateStr(date)} />
      <VerticalDivider />
      <Distance />
      <Text text={location} />
    </div>
  );
}

function Text({ text }: { text: string }) {
  return <span className="text-md font-normal text-neutral-500">{text}</span>;
}

function VerticalDivider() {
  return <span className="w-4 text-center text-md font-normal text-neutral-500 sm:w-5">|</span>;
}
