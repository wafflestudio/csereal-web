import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import './style.css';

import { getCurriculum } from '@/apis/academics';

import RoadMapButton from '@/app/[locale]/academics/helper/RoadMapButton';
import CurriculumBody from '@/app/[locale]/academics/undergraduate/curriculum/CurriculumBody';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('전공 이수 표준 형태'),
    description: '서울대학교 컴퓨터공학부 전공 이수 표준 형태(학부) 페이지입니다.',
  };
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
