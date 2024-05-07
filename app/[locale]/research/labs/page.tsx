import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getResearchLabs } from '@/apis/research';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import ResearchLabListHeader from './ResearchLabListHeader';
import ResearchLabListRow from './ResearchLabListRow';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('연구실 목록'),
    description: '서울대학교 컴퓨터공학부 연구실 목록 페이지입니다.',
  };
}

export default async function ResearchLabsPage() {
  const labInformations = await getResearchLabs();

  return (
    <PageLayout titleType="big">
      <div className="sm:border-y sm:border-neutral-200">
        <ResearchLabListHeader />
        <ul className="sm:divide-y sm:divide-dashed sm:divide-neutral-200">
          {labInformations.map((lab) => (
            <ResearchLabListRow key={lab.id} lab={lab} />
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}
