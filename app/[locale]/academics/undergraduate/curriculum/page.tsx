export const dynamic = 'force-static';

import { getCurriculum } from '@/apis/academicsServer';

import RoadMapButton from '@/app/[locale]/academics/helper/RoadMapButton';
import CurriculumBody from '@/app/[locale]/academics/undergraduate/curriculum/CurriculumBody';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function UndergradutecurriculumPage() {
  const curriculumList = await getCurriculum();

  return (
    <PageLayout titleType="big">
      <div className="flex flex-col">
        <RoadMapButton />
        <CurriculumBody curriculumList={curriculumList} />
      </div>
    </PageLayout>
  );
}
