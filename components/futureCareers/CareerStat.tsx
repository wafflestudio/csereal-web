'use client';

import { useState } from 'react';

import { FutureCareers } from '@/types/about';

import Dropdown from '../common/Dropdown';

export default function CareerStat({ stat }: { stat: FutureCareers['stat'] }) {
  const [selectedCareerStatIndex, setSelectedCareerStatIndex] = useState(0);
  return (
    <div>
      <div className="flex gap-2 items-center mb-[0.8rem]">
        <h3 className="text-base font-bold leading-[1.625rem]">졸업생 진로 현황</h3>
        <Dropdown
          contents={Object.keys(stat).reverse()}
          selectedIndex={selectedCareerStatIndex}
          onClick={setSelectedCareerStatIndex}
        />
      </div>
      {/* 디자인 확정 후 표 추가 예정 */}
    </div>
  );
}
