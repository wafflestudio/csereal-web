import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getFutureCareeres } from '@/apis/about';

import CareerStat from '@/app/[locale]/about/future-careers/CareerStat';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { FutureCareers } from '@/types/about';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('졸업생 진로'),
    description: '서울대학교 컴퓨터공학부 졸업생 진로 페이지입니다.',
  };
}

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
    <div className="sm:max-w-[780px]">
      <h3 className="mb-3 text-base font-bold">졸업생 창업 기업</h3>
      <div className="border-y border-neutral-200 text-sm font-normal">
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

const TABLE_COLUMN_SIZE = ['sm:w-[3.5rem]', 'sm:w-[12.5rem]', 'sm:w-80', 'sm:w-20'];

function CompanyTableHeader() {
  return (
    <div className="hidden h-10 items-center gap-3 whitespace-nowrap border-b border-neutral-200 sm:flex sm:px-3">
      <p className={TABLE_COLUMN_SIZE[0]}>연번</p>
      <p className={TABLE_COLUMN_SIZE[1]}>창업 기업명</p>
      <p className={TABLE_COLUMN_SIZE[2]}>홈페이지</p>
      <p className={TABLE_COLUMN_SIZE[3] + ''}>창업연도</p>
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
    <li className="grid grid-cols-[22px,_auto,_1fr] items-center gap-x-1 px-7 py-6 odd:bg-neutral-100 sm:flex sm:h-10 sm:gap-3 sm:p-0 sm:px-3">
      <p className={`text-sm text-neutral-400 sm:pl-2 ${TABLE_COLUMN_SIZE[0]}`}>{index}</p>
      <p className={`text-md font-medium sm:text-sm sm:font-normal ${TABLE_COLUMN_SIZE[1]}`}>
        {name}
      </p>
      <a
        className={`order-last col-span-2 col-start-2 ${
          url && 'mt-1'
        } w-fit text-xs text-link hover:underline sm:order-none sm:mt-0 ${TABLE_COLUMN_SIZE[2]}
        `}
        href={url}
        target="_blank"
      >
        {url}
      </a>
      <p className={`pl-1 text-sm text-neutral-400 ${TABLE_COLUMN_SIZE[3]}`}>{year}</p>
    </li>
  );
}
