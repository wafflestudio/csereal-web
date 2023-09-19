import { getFutureCareeres } from '@/apis/about';

import CareerStat from '@/components/futureCareers/CareerStat';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { FutureCareers } from '@/types/about';

export default async function GreetingsPage() {
  const { description, stat, companies } = await getFutureCareeres();
  return (
    <PageLayout titleType="big" titleMargin="mb-[2.31rem]">
      <p className="text-sm font-normal leading-[1.625rem] mb-9 break-keep whitespace-pre-wrap">
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
      <h3 className="text-base font-noto font-bold leading-[1.625rem] mb-[0.8rem]">
        졸업생 창업 기업
      </h3>
      <div className="text-xs font-normal border-y-[1px] border-neutral-200 inline-block">
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

const TABLE_COLUMN_SIZE = ['w-12', 'w-[12.5rem]', 'w-80', 'w-20'];

function CompanyTableHeader() {
  return (
    <div className="flex py-3 border-b-[1px] border-neutral-200 [&_p]:pl-3">
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
    <li className="flex py-3 odd:bg-neutral-100">
      <p className={'pl-5 ' + TABLE_COLUMN_SIZE[0]}>{index}</p>
      <p className={'pl-3 ' + TABLE_COLUMN_SIZE[1]}>{name}</p>
      <a
        className={'text-link pl-3 hover:underline ' + TABLE_COLUMN_SIZE[2]}
        href={url}
        target="_blank"
      >
        {url}
      </a>
      <p className={'pl-5 ' + TABLE_COLUMN_SIZE[3]}>{year}</p>
    </li>
  );
}
