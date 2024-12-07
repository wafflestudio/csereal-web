'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { EditButton, OrangeButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import Dropdown from '@/components/form/legacy/Dropdown';
import { futureCareers } from '@/constants/segmentNode';
import { Link } from '@/i18n/routing';
import { FutureCareers } from '@/apis/types/about';
import { getPath } from '@/utils/page';

export const CAREER_STAT_ROWS = ['삼성', 'LG', '기타 대기업', '중소기업', '진학', '기타'];
export const CAREER_STAT_COLS = ['학부', '석사', '박사'];

const careerPath = getPath(futureCareers);

export default function CareerStat({ stat }: { stat: FutureCareers['stat'] }) {
  const [idx, setIdx] = useState(0);
  const t = useTranslations('Content');

  const year = stat[idx].year;
  const yearStat = stat.find((x) => x.year === year);

  if (yearStat === undefined) return <p>선택된 연도의 자료가 없습니다.</p>;

  return (
    <div className="mt-7 flex flex-col gap-3">
      <div className="flex justify-between sm:w-[432px]">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-bold">{t('졸업생 진로 현황')}</h3>
          <Dropdown
            contents={stat.map((x) => x.year.toString())}
            selectedIndex={idx}
            onClick={setIdx}
            height="h-9"
          />
        </div>
        <LoginVisible staff>
          <div className="flex justify-end gap-3">
            <Link href={`${careerPath}/stat/create`}>
              <OrangeButton title="연도 추가" />
            </Link>
            <EditButton href={`${careerPath}/stat/edit?year=${year}`} />
          </div>
        </LoginVisible>
      </div>

      <div className="border-y-[1px] border-y-neutral-300 text-xs font-normal sm:w-[432px]">
        <TableHeader />
        {CAREER_STAT_ROWS.map((company, index) => {
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
    <div className="flex h-8 flex-1 border-b border-b-neutral-300 bg-neutral-100">
      <div className="w-[6.25rem]" />
      {CAREER_STAT_COLS.map((colName) => (
        <div key={colName} className="flex flex-1 items-center justify-center">
          <p className="text-sm">{colName}</p>
        </div>
      ))}
    </div>
  );
}

function TableRow({ rowName, values }: { rowName: string; values: number[] }) {
  return (
    <div className={`flex h-8 flex-1 flex-row border-b border-neutral-200 last:border-0`}>
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
