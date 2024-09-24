import { getResearchGroups, getResearchLab } from '@/apis/research';
import InvalidIDFallback from '@/components/common/InvalidIDFallback';

import ResearchLabEditPageContent from './ResearchLabEditPageContent';

export default async function ResearchLabEditPage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  try {
    const id = parseInt(searchParams.id);
    const [lab, koGroups, enGroups] = await Promise.all([
      getResearchLab(id),
      getResearchGroups('ko'),
      getResearchGroups('en'),
    ]);

    return <ResearchLabEditPageContent lab={lab} groups={{ ko: koGroups, en: enGroups }} />;
  } catch {
    return <InvalidIDFallback rawID={searchParams.id} />;
  }
}
