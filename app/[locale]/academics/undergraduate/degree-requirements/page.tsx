import { getDegreeRequirements } from '@/apis/academics';

import { StraightNode } from '@/components/common/Nodes';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import PdfPicker from './PdfPicker';

export default async function UndergraduteDegreeRequirementsPage() {
  const { description, yearList } = await getDegreeRequirements();

  return (
    <PageLayout titleType="big">
      <PdfPicker data={yearList} />
      <div className="mb-4 mt-6 flex w-[200px] flex-col">
        <h3 className=" mb-2 pl-3 text-lg font-bold">공통: 졸업사정 유의사항</h3>
        <StraightNode />
      </div>
      <HTMLViewer htmlContent={description} className="mt-7" />
    </PageLayout>
  );
}
