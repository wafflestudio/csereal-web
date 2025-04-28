import { ElementType, PropsWithChildren } from 'react';

import { SeminarPreview } from '@/apis/types/seminar';
import PaginatedLink from '@/app/[locale]/community/components/PaginatedLink';
import ImageWithFallback from '@/components/common/ImageWithFallback';
import { seminar } from '@/constants/segmentNode';
import Calendar from '@/public/image/calendar.svg';
import Distance from '@/public/image/distance.svg';
import Person from '@/public/image/person.svg';
import { useDayjs } from '@/utils/hooks/useDayjs';
import { getPath } from '@/utils/page';

interface SeminarRowProps {
  seminar: SeminarPreview;
}

const seminarPath = getPath(seminar);

export default function SeminarRow({
  seminar: { id, imageURL, title, name, affiliation, startDate, location },
}: SeminarRowProps) {
  const seminarPostPath = `${seminarPath}/${id}`;

  return (
    <PaginatedLink href={seminarPostPath}>
      <article className="group flex flex-col gap-4 sm:flex-row sm:gap-5">
        <ImageCell imageURL={imageURL} />
        <div className="flex flex-col items-start gap-1 break-all sm:gap-0">
          <TitleCell title={title} />
          <div className="flex flex-col gap-0.5">
            <HostInformationCell host={name} company={affiliation} />
            <DateAndLocationCell date={new Date(startDate)} location={location} />
          </div>
        </div>
      </article>
    </PaginatedLink>
  );
}

function ImageCell({ imageURL }: { imageURL: string | null }) {
  return (
    // title에 밀리는 것을 막기 위해 shrink-0 사용
    <div
      className={`relative h-[10rem] w-[10rem] shrink-0 sm:h-[6.25rem] sm:w-[6.25rem] ${
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
    <div className="flex cursor-pointer flex-wrap gap-x-0.5">
      <IconTextWrapper>
        <IconWrapper IconComponent={Person} />
        <Text text={host} />
      </IconTextWrapper>
      <VerticalDivider />
      <Text text={company} />
    </div>
  );
}

function DateAndLocationCell({ date, location }: { date: Date; location: string }) {
  const formatDate = useDayjs();
  return (
    <div className="flex flex-wrap gap-0.5 hover:cursor-pointer">
      <IconTextWrapper>
        <IconWrapper IconComponent={Calendar} />
        <Text text={formatDate ? formatDate({ date: date, format: 'time' }) : ''} />
      </IconTextWrapper>
      <VerticalDivider />
      <IconTextWrapper>
        <IconWrapper IconComponent={Distance} />
        <Text text={location} />
      </IconTextWrapper>
    </div>
  );
}

function IconTextWrapper({ children }: PropsWithChildren) {
  return <div className="flex items-start gap-0.5 hover:cursor-pointer">{children}</div>;
}

function IconWrapper({ IconComponent }: { IconComponent: ElementType }) {
  return <IconComponent className="shrink-0 -translate-y-0.5" />;
}

function Text({ text }: { text: string }) {
  return <span className="pt-0 text-md font-normal text-neutral-500">{text}</span>;
}

function VerticalDivider() {
  return <span className="w-4 text-center text-md font-normal text-neutral-500 sm:w-5">|</span>;
}
