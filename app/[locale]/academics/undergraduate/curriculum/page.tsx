export const dynamic = 'force-static';

import { getCurriculum } from '@/apis/academicsServer';

import CurriculumBody from '@/components/academics/CurriculumBody';
import RoadMapButton from '@/components/academics/RoadMapButton';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function UndergradutecurriculumPage() {
  const data = await getCurriculum();

  return (
    <PageLayout titleType="big">
      <div className="flex flex-col">
        <RoadMapButton />
        <CurriculumBody data={data} />
      </div>
    </PageLayout>
  );
}
