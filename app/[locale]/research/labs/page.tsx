import { getResearchLabs } from '@/apis/research';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import ResearchLabListHeader from './ResearchLabListHeader';
import ResearchLabListRow from './ResearchLabListRow';

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
