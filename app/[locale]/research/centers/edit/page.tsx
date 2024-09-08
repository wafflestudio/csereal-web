import { getResearchCenter } from '@/apis/research';
import InvalidIDFallback from '@/components/common/InvalidIDFallback';

import ResearchCenterEditPageContent from './ResearchCenterEditPageContent';

export default async function ResearchCenterEditPage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  try {
    const id = parseInt(searchParams.id);
    const center = await getResearchCenter(id);

    return <ResearchCenterEditPageContent center={center} />;
  } catch {
    return <InvalidIDFallback rawID={searchParams.id} />;
  }
}
