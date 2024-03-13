'use client';

import { useState } from 'react';

import Attachments from '@/components/common/Attachments';
import Dropdown from '@/components/common/form/Dropdown';

import { DegreeRequirements } from '@/types/academics';

export default function PdfPicker({ data }: { data: DegreeRequirements['yearList'] }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center gap-2">
        <p className="text-sm">입학연도</p>
        <Dropdown
          contents={data.map((item) => item.year.toString())}
          selectedIndex={index}
          onClick={setIndex}
        />
      </div>
      <Attachments files={[data[index].attachment]} />
    </div>
  );
}
