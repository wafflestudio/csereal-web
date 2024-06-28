import { getCurriculum } from '@/apis/academics';

import RoadMapButton from '@/app/[locale]/academics/helper/RoadMapButton';
import CurriculumBody from '@/app/[locale]/academics/undergraduate/curriculum/CurriculumBody';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { curriculum } from '@/constants/navTreeNode';

import { getMetadata } from '@/utils/metadata';

import './style.css';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return await getMetadata({ locale, node: curriculum });
}

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
