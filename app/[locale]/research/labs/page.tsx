import { getResearchLabs } from '@/apis/research';
import { OrangeButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { Link } from '@/navigation';
import { Language } from '@/types/language';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';
import { researchLabs } from '@/utils/segmentNode';

import ResearchLabListHeader from './ResearchLabListHeader';
import ResearchLabListRow from './ResearchLabListRow';

interface ResearchLabPageProps {
  params: { locale: Language };
}

const labsPath = getPath(researchLabs);

export async function generateMetadata({ params: { locale } }: ResearchLabPageProps) {
  return await getMetadata({ locale, node: researchLabs });
}

export default async function ResearchLabsPage({ params: { locale } }: ResearchLabPageProps) {
  const labInformations = await getResearchLabs(locale);

  return (
    <PageLayout titleType="big">
      <LoginVisible staff>
        <div className="mb-7 text-right">
          <Link href={`${labsPath}/create`}>
            <OrangeButton title="연구실 추가" />
          </Link>
        </div>
      </LoginVisible>
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
