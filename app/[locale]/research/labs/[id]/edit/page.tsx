import { getResearchLab } from '@/apis/research';
import InvalidIDFallback from '@/components/common/InvalidIDFallback';

import ResearchLabEditPageContent from './ResearchLabEditPageContent';

export default async function ResearchLabEditPage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  try {
    const id = parseInt(searchParams.id);
    const lab = await getResearchLab(id);

    return <ResearchLabEditPageContent lab={lab} />;
  } catch {
    return <InvalidIDFallback rawID={searchParams.id} />;
  }
}
