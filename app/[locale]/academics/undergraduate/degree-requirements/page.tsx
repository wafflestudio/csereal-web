import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getDegreeRequirements } from '@/apis/academics';

import Attachments from '@/components/common/Attachments';
import { StraightNode } from '@/components/common/Nodes';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('졸업 규정'),
    description: '서울대학교 컴퓨터공학부 졸업 규정(학부) 페이지입니다.',
  };
}

export default async function UndergraduteDegreeRequirementsPage() {
  const { description, attachments } = await getDegreeRequirements();

  return (
    <PageLayout titleType="big">
      <Attachments files={attachments} />
      <div className="mb-4 mt-6 flex w-[200px] flex-col">
        <h3 className=" mb-2 pl-3 text-lg font-bold">공통: 졸업사정 유의사항</h3>
        <StraightNode />
      </div>
      <HTMLViewer htmlContent={description} className="mt-7" />
    </PageLayout>
  );
}
