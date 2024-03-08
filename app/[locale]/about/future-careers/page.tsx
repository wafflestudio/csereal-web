import { getFutureCareeres } from '@/apis/about';

import CareerStat from '@/app/[locale]/about/future-careers/CareerStat';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { FutureCareers } from '@/types/about';

export default async function GreetingsPage() {
  const { description, stat, companies } = await getFutureCareeres();
  return (
    <PageLayout titleType="big">
      <p className="mb-9 whitespace-pre-wrap break-keep text-md font-normal leading-[1.625rem]">
        {description}
      </p>
      <CareerStat stat={stat} />
      <CareerCompanies companies={companies} />
    </PageLayout>
  );
}

function CareerCompanies({ companies }: { companies: FutureCareers['companies'] }) {
  return (
    <div>
      <h3 className="font-noto mb-[0.8rem] text-base font-bold leading-[1.625rem]">
        졸업생 창업 기업
      </h3>
      <div className="inline-block border-y-[1px] border-neutral-200 text-sm font-normal">
        <CompanyTableHeader />
        <ol>
          {companies.map((company, index) => (
            <CompanyTableRow key={index} index={index + 1} {...company} />
          ))}
        </ol>
      </div>
    </div>
  );
}

const TABLE_COLUMN_SIZE = ['w-[3.5rem]', 'w-[12.5rem]', 'w-80', 'w-20'];

function CompanyTableHeader() {
  return (
    <div className="flex h-10 items-center border-b-[1px] border-neutral-200 [&_p]:pl-3">
      <p className={TABLE_COLUMN_SIZE[0]}>연번</p>
      <p className={TABLE_COLUMN_SIZE[1]}>창업 기업명</p>
      <p className={TABLE_COLUMN_SIZE[2]}>홈페이지</p>
      <p className={TABLE_COLUMN_SIZE[3]}>창업연도</p>
    </div>
  );
}

interface CompanyTableRowProps {
  index: number;
  name: string;
  url?: string;
  year: number;
}

function CompanyTableRow({ index, name, url, year }: CompanyTableRowProps) {
  return (
    <li className="flex h-10 items-center odd:bg-neutral-100">
      <p className={'pl-5 ' + TABLE_COLUMN_SIZE[0]}>{index}</p>
      <p className={'pl-3 ' + TABLE_COLUMN_SIZE[1]}>{name}</p>
      <a
        className={'pl-3 text-link hover:underline ' + TABLE_COLUMN_SIZE[2]}
        href={url}
        target="_blank"
      >
        {url}
      </a>
      <p className={'pl-5 ' + TABLE_COLUMN_SIZE[3]}>{year}</p>
    </li>
  );
}
