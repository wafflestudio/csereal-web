import { getResearchGroup } from '@/apis/v2/research/[id]';
import InvalidIDFallback from '@/components/common/InvalidIDFallback';

import ResearchGroupEditPageContent from './ResearchGroupEditPageContent';

export default async function ResearchGroupEditPage(props: {
  searchParams: Promise<{ id: string }>;
}) {
  const searchParams = await props.searchParams;
  try {
    const id = parseInt(searchParams.id);
    const group = await getResearchGroup(id);

    return <ResearchGroupEditPageContent group={group} />;
  } catch {
    return <InvalidIDFallback rawID={searchParams.id} />;
  }
}
