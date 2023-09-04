'use client';

import { useState } from 'react';

import { careerStatCols, careerStatRows } from '@/data/objects';

import { FutureCareers } from '@/types/about';

import Dropdown from '../common/Dropdown';

export default function CareerStat({ stat }: { stat: FutureCareers['stat'] }) {
  const [selectedCareerStatIndex, setSelectedCareerStatIndex] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2 items-center mb-[0.8rem]">
        <h3 className="text-base font-bold leading-[1.625rem]">졸업생 진로 현황</h3>
        <Dropdown
          contents={Object.keys(stat).reverse()}
          selectedIndex={selectedCareerStatIndex}
          onClick={setSelectedCareerStatIndex}
        />
      </div>
      <div className="w-[21.3rem] h-[13.1rem] flex flex-col text-xs font-normal justify-stretch border-y-[1px] border-y-neutral-300 mb-9">
        <StatTableHeader />
        {stat[2021 - selectedCareerStatIndex].map((arr, index) => (
          <StatTableHeaderRow key={index} rowName={careerStatRows[index]} values={arr} />
        ))}
      </div>
    </div>
  );
}

function StatTableHeader() {
  return (
    <div className="flex flex-1 border-b-[1px] border-b-neutral-300 bg-neutral-100">
      <div className="flex-1" />
      {careerStatCols.map((colName) => (
        <div key={colName} className="flex justify-center items-center w-[5rem]">
          <p>{colName}</p>
        </div>
      ))}
    </div>
  );
}

function StatTableHeaderRow({ rowName, values }: { rowName: string; values: number[] }) {
  return (
    <div className={`flex flex-1 flex-row border-b border-neutral-200 last:border-0`}>
      <div className="flex w-[6.25rem] bg-neutral-100 justify-center items-center">{rowName}</div>
      {values.map((value, index) => (
        <div key={index} className="flex flex-1 justify-center items-center">
          {value}
        </div>
      ))}
    </div>
  );
}
