'use client';

import { useState } from 'react';

import { FutureCareers } from '@/types/about';
import { getKeys } from '@/types/object';
import { isNumber } from '@/utils/number';

import { EditAction, EditActionButtons } from './common/ActionButtons';
import BasicTextInput from './common/BasicTextInput';
import Fieldset from './common/Fieldset';

interface Stat {
  career: COMPANY;
  bachelor: number;
  master: number;
  doctor: number;
}

export interface CareerStatEditorContent {
  year: number;
  statList: Stat[];
}

interface CareerStatEditorProps {
  initialContent?: FutureCareers['stat'][number];
  actions: EditAction<CareerStatEditorContent>;
}

const COMPANY_MAP = {
  SAMSUNG: '삼성',
  LG: 'LG',
  LARGE: '기타 대기업',
  SMALL: '중소기업',
  GRADUATE: '진학',
  OTHER: '기타',
} as const;

const DEGREE_MAP = {
  bachelor: '학부',
  master: '석사',
  doctor: '박사',
} as const;

type COMPANY = keyof typeof COMPANY_MAP;
type DEGREE = keyof typeof DEGREE_MAP;

const CAREER_COMPANIES = getKeys(COMPANY_MAP);
const CAREER_DEGREES = getKeys(DEGREE_MAP);

const getNextYear = () => new Date().getFullYear() + 1;

export default function CareerStatEditor({ actions, initialContent }: CareerStatEditorProps) {
  const [year, setYear] = useState<number>(initialContent?.year ?? getNextYear());
  const [stats, setStats] = useState<Stat[]>(getInitialStats(initialContent));

  const handleStatChange = (company: COMPANY, degree: DEGREE, count: number) => {
    setStats((prev) =>
      prev.map((stat) => (stat.career === company ? { ...stat, [degree]: count } : stat)),
    );
  };

  return (
    <form className="flex flex-col">
      <YearFieldset year={year} onChange={setYear} disabled={Boolean(initialContent)} />
      <div className="border-y-[1px] border-y-neutral-300 text-xs font-normal sm:w-[432px]">
        <TableHeader />
        {stats.map((stat, index) => {
          return (
            <TableRow
              key={index}
              company={stat.career}
              stats={[
                { degree: 'bachelor', count: stat.bachelor },
                { degree: 'master', count: stat.master },
                { degree: 'doctor', count: stat.doctor },
              ]}
              onChange={handleStatChange}
            />
          );
        })}
      </div>
      <div className="mt-5 flex gap-3 self-end">
        {actions.type === 'EDIT' && (
          <EditActionButtons {...actions} getContent={() => ({ year: year, statList: stats })} />
        )}
      </div>
    </form>
  );
}

function YearFieldset({
  year,
  onChange,
  disabled = false,
}: {
  year: number;
  onChange: (value: number) => void;
  disabled?: boolean;
}) {
  return (
    <Fieldset title="연도" mb="mb-6" titleMb="mb-2">
      <BasicTextInput
        value={year.toString()}
        onChange={(text) => isNumber(text) && onChange(Number(text))}
        maxWidth="w-[55px]"
        disabled={disabled}
      />
    </Fieldset>
  );
}

function TableHeader() {
  return (
    <div className="flex h-9 flex-1 border-b border-b-neutral-300 bg-neutral-100">
      <div className="w-[6.25rem]" />
      {CAREER_DEGREES.map((degree) => (
        <div key={degree} className="flex flex-1 items-center justify-center">
          <p className="text-sm">{DEGREE_MAP[degree]}</p>
        </div>
      ))}
    </div>
  );
}

function TableRow({
  company,
  stats,
  onChange,
}: {
  company: COMPANY;
  stats: { degree: DEGREE; count: number }[];
  onChange: (company: COMPANY, degree: DEGREE, count: number) => void;
}) {
  return (
    <div className={`flex flex-1 flex-row border-b border-neutral-200 last:border-0`}>
      <div className="flex w-[6.25rem] items-center justify-center bg-neutral-100 text-sm">
        {COMPANY_MAP[company]}
      </div>
      {stats.map((stat) => (
        <div key={stat.degree} className="flex flex-1 items-center justify-center py-1.5 text-md">
          <BasicTextInput
            value={stat.count.toString()}
            onChange={(text) => isNumber(text) && onChange(company, stat.degree, Number(text))}
            maxWidth="max-w-[80px]"
            textCenter
          />
        </div>
      ))}
    </div>
  );
}

const DEFAULT_STATS = CAREER_COMPANIES.map((company) => ({
  career: company,
  bachelor: 0,
  master: 0,
  doctor: 0,
}));

const refinedStats = (initStats: FutureCareers['stat'][number]) => {
  const values = CAREER_COMPANIES.map((company) => ({
    career: company,
    bachelor: initStats.bachelor.find((x) => x.name === COMPANY_MAP[company])?.count ?? 0,
    master: initStats.master.find((x) => x.name === COMPANY_MAP[company])?.count ?? 0,
    doctor: initStats.doctor.find((x) => x.name === COMPANY_MAP[company])?.count ?? 0,
  }));

  return values;
};

const getInitialStats = (initStats?: FutureCareers['stat'][number]) => {
  return initStats ? refinedStats(initStats) : DEFAULT_STATS;
};
