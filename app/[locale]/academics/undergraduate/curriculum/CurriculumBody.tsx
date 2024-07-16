'use client';

import { useState } from 'react';

import Dropdown from '@/components/common/form/Dropdown';
import HTMLViewer from '@/components/editor/HTMLViewer';

import { Curriculum } from '@/types/academics';

export default function CurriculumBody({ curriculumList }: { curriculumList: Curriculum[] }) {
  const [index, setIndex] = useState(0);

  const dropdownContents = curriculumList.map((curriculum) => curriculum.year.toString());
  const html = curriculumList[index].description;

  return (
    <>
      <div className="mt-8 flex flex-row items-center gap-2">
        <p className="text-sm font-normal">입학연도</p>
        <Dropdown contents={dropdownContents} selectedIndex={index} onClick={setIndex} />
      </div>
      <HTMLViewer htmlContent={html} className="mt-7" />
    </>
  );
}
