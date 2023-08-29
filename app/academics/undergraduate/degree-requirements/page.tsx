'use client';

import { useState } from 'react';
import useSWR from 'swr';

import DegreeRequirementsContent from '@/public/image/undergraduate_degree_requirements.svg';

import { getDegreeRequirements } from '@/apis/academics';

import Attachments from '@/components/common/Attachments';
import Dropdown from '@/components/common/Dropdown';
import { StraightNode } from '@/components/common/Nodes';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { DegreeRequirements } from '@/types/academics';

export default function UndergraduteDegreeRequirementsPage() {
  const { data } = useSWR<DegreeRequirements[]>(
    `academics/undergraduate/degree-requirements`,
    getDegreeRequirements,
  );
  const [selectedDegreeRequirementsIndex, setSelectedDegreeRequirementsIndex] = useState(0);

  return (
    data && (
      <PageLayout titleType="big" titleMargin="mb-9">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <p className="font-noto text-sm font-normal">입학연도</p>
              <Dropdown
                contents={data.map((item) => item.year.toString())}
                selectedIndex={selectedDegreeRequirementsIndex}
                onClick={setSelectedDegreeRequirementsIndex}
              />
            </div>
            <Attachments files={[data[selectedDegreeRequirementsIndex].attachment]} />
          </div>
          <div className="flex flex-col mt-6">
            <div className="flex flex-col w-[200px] mb-4">
              <h3 className="font-noto text-lg font-bold pl-3 mb-2">공통:졸업사정 유의사항</h3>
              <StraightNode />
            </div>
            <DegreeRequirementsContent />
          </div>
          <HTMLViewer
            htmlContent={data[selectedDegreeRequirementsIndex].description}
            margin="mt-7"
          />
        </div>
      </PageLayout>
    )
  );
}
