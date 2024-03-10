export const dynamic = 'force-static';

import { getUndergraduateScholarshipList } from '@/apis/academicsServer';

import { ScholarshipRow } from '@/components/academics/ScholarshipRow';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function UndergraduateScholarshipListPage() {
  const { description, scholarship } = await getUndergraduateScholarshipList();

  return (
    <PageLayout titleType="big">
      <HTMLViewer htmlContent={description} />
      <div className=" mt-10 flex flex-col">
        <h3 className="border-b-[1px] border-b-neutral-200 pb-2 text-[20px] font-bold leading-10">
          장학금 종류
        </h3>
        <ul className="mt-2">
          {scholarship.map((item) => (
            <ScholarshipRow id={item.id} name={item.name} key={item.id} type="UNDERGRADUATE" />
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}
