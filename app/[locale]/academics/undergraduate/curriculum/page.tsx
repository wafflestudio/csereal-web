import { getCurriculum } from '@/apis/academics';

import CurriculumBody from '@/app/[locale]/academics/undergraduate/curriculum/CurriculumBody';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { getMetadata } from '@/utils/metadata';
import { curriculum } from '@/utils/segmentNode';

import './style.css';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return await getMetadata({ locale, node: curriculum });
}

export default async function UndergradutecurriculumPage() {
  const curriculumList = await getCurriculum();

  return (
    <PageLayout titleType="big">
      <div className="flex flex-col">
        {/* 추후 RoadMapButton 복구 */}
        <CurriculumBody curriculumList={curriculumList} />
      </div>
    </PageLayout>
  );
}
