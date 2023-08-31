import { getUndergraduateScholarshipList } from '@/apis/academicsServer';

import { ScholarshipRow } from '@/components/academics/ScholarshipRow';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function UndergraduateScholarshipPage() {
  const { description, scholarship } = await getUndergraduateScholarshipList();

  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <HTMLViewer htmlContent={description} margin="mt-7" />
      <div className="flex flex-col mt-10 font-noto">
        <h3 className="text-[20px] font-bold leading-10 border-b-[1px] pb-2 border-b-neutral-200">
          장학금 종류
        </h3>
        <ul className="mt-2">
          {scholarship.map((item) => (
            <ScholarshipRow id={item.id} name={item.name} key={item.id} />
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}
