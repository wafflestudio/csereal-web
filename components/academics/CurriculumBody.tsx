'use client';

import { useState } from 'react';

import { Curriculum } from '@/types/academics';

import Dropdown from '../common/form/Dropdown';
import HTMLViewer from '../editor/HTMLViewer';

export default function CurriculumBody({ data }: { data: Curriculum[] }) {
  const [selectedcurriculumIndex, setSelectedcurriculumIndex] = useState(0);
  return (
    <>
      <div className="flex flex-col mt-8">
        <div className="flex flex-row items-center gap-2">
          <p className="font-noto text-sm font-normal">입학연도</p>
          <Dropdown
            contents={data.map((item) => item.year.toString())}
            selectedIndex={selectedcurriculumIndex}
            onClick={setSelectedcurriculumIndex}
          />
        </div>
      </div>
      <HTMLViewer htmlContent={data[selectedcurriculumIndex].description} margin="mt-7" />
    </>
  );
}
