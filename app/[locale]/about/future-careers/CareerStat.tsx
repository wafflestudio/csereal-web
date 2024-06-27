'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import Dropdown from '@/components/common/form/Dropdown';

import { FutureCareers } from '@/types/about';

export const careerStatRows = ['삼성', 'LG', '기타 대기업', '중소기업', '진학', '기타'];
export const careerStatCols = ['학부', '석사', '박사'];

export default function CareerStat({ stat }: { stat: FutureCareers['stat'] }) {
  const [idx, setIdx] = useState(0);
  const t = useTranslations('Content');

  const year = stat[idx].year;
  const yearStat = stat.find((x) => x.year === year);

  if (yearStat === undefined) return <p>선택된 연도의 자료가 없습니다.</p>;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <h3 className="text-base font-bold">{t('졸업생 진로 현황')}</h3>
        <Dropdown
          contents={stat.map((x) => x.year.toString())}
          selectedIndex={idx}
          onClick={setIdx}
        />
      </div>
      <div className="mb-9 flex h-[14rem] flex-col justify-stretch border-y-[1px] border-y-neutral-300 text-xs font-normal sm:w-[432px]">
        <TableHeader />
        {careerStatRows.map((company, index) => {
          return (
            <TableRow
              key={index}
              rowName={company}
              values={[
                yearStat.bachelor.find((x) => x.name === company)?.count ?? 0,
                yearStat.master.find((x) => x.name === company)?.count ?? 0,
                yearStat.doctor.find((x) => x.name === company)?.count ?? 0,
              ]}
            />
          );
        })}
      </div>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="flex flex-1 border-b border-b-neutral-300 bg-neutral-100">
      <div className="w-[6.25rem]" />
      {careerStatCols.map((colName) => (
        <div key={colName} className="flex flex-1 items-center justify-center">
          <p className="text-sm">{colName}</p>
        </div>
      ))}
    </div>
  );
}

function TableRow({ rowName, values }: { rowName: string; values: number[] }) {
  return (
    <div className={`flex flex-1 flex-row border-b border-neutral-200 last:border-0`}>
      <div className="flex w-[6.25rem] items-center justify-center bg-neutral-100 text-sm">
        {rowName}
      </div>
      {values.map((value, index) => (
        <div key={index} className="flex flex-1 items-center justify-center text-md">
          {value}
        </div>
      ))}
    </div>
  );
}
