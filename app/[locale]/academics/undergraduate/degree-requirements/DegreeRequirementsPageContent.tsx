'use client';

import { Link } from '@/navigation';

import Attachments from '@/components/common/Attachments';
import { BlackButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import { StraightNode } from '@/components/common/Nodes';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { DegreeRequirements } from '@/types/academics';

import { getPath } from '@/utils/page';
import { degree } from '@/utils/segmentNode';

const degreeRequirementsPath = getPath(degree);

export default function DegreeRequirementsPageContent({ data }: { data: DegreeRequirements }) {
  return (
    <PageLayout titleType="big">
      <LoginVisible staff>
        <div className="text-right">
          <Link href={`${degreeRequirementsPath}/edit`}>
            <BlackButton title="편집" />
          </Link>
        </div>
      </LoginVisible>

      <Attachments files={data.attachments} />
      <div className="mb-4 mt-6 flex w-[200px] flex-col">
        <h3 className=" mb-2 pl-3 text-lg font-bold">공통: 졸업사정 유의사항</h3>
        <StraightNode />
      </div>
      <HTMLViewer htmlContent={data.description} className="mt-7" />
    </PageLayout>
  );
}
