import { getResearchLabs } from '@/apis/research';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Locale } from '@/types/locale';

import { getMetadata } from '@/utils/metadata';
import { researchLabs } from '@/utils/segmentNode';

import ResearchLabListHeader from './ResearchLabListHeader';
import ResearchLabListRow from './ResearchLabListRow';

interface ResearchLabPageProps {
  params: { locale: Locale };
}

export async function generateMetadata({ params: { locale } }: ResearchLabPageProps) {
  return await getMetadata({ locale, node: researchLabs });
}

export default async function ResearchLabsPage({ params: { locale } }: ResearchLabPageProps) {
  const labInformations = await getResearchLabs(locale);

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
