'use client';

import { useState } from 'react';

import { careerCompanies, careerDescription, careerStat } from '@/data/futureCareers';

import Dropdown from '@/components/common/Dropdown';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default function GreetingsPage() {
  return (
    <PageLayout titleType="big" titleMargin="mb-[2.31rem]">
      <Description />
      <CareerStat />
      <CareerCompanies />
    </PageLayout>
  );
}

function Description() {
  return (
    <p className="text-sm font-normal leading-[1.625rem] mb-9 break-keep whitespace-pre-wrap">
      {careerDescription}
    </p>
  );
}

function CareerStat() {
  const [selectedCareerStatIndex, setSelectedCareerStatIndex] = useState(0);
  return (
    <div>
      <div className="flex gap-2 items-center mb-[0.8rem]">
        <h3 className="text-base font-bold leading-[1.625rem]">졸업생 진로 현황</h3>
        <Dropdown
          contents={Object.keys(careerStat).reverse()}
          selectedIndex={selectedCareerStatIndex}
          onClick={setSelectedCareerStatIndex}
        />
      </div>
      {/* 디자인 확정 후 표 추가 예정 */}
    </div>
  );
}

function CareerCompanies() {
  return (
    <div>
      <h3 className="text-base font-bold leading-[1.625rem] mb-[0.8rem]">졸업생 창업 기업</h3>
      <div className="text-xs font-normal border-y-[1px] border-neutral-200 inline-block">
        <CompanyTableHeader />
        <ol>
          {careerCompanies.map((company, index) => (
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
    <div className="flex pt-3 pb-[.81rem] border-b-[1px] border-neutral-200 [&_p]:pl-3 leading-3">
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
  url: string;
  year: number;
}

function CompanyTableRow({ index, name, url, year }: CompanyTableRowProps) {
  return (
    <li className={`flex pt-[.63rem] pb-3 ${index % 2 && 'bg-neutral-50'}`}>
      <p className={'pl-5 ' + TABLE_COLUMN_SIZE[0]}>{index}</p>
      <p className={'pl-3 ' + TABLE_COLUMN_SIZE[1]}>{name}</p>
      <a className={'text-link pl-3 ' + TABLE_COLUMN_SIZE[2]} href={url} target="_blank">
        {url}
      </a>
      <p className={'pl-5 ' + TABLE_COLUMN_SIZE[3]}>{year}</p>
    </li>
  );
}
