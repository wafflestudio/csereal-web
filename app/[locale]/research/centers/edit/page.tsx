import { getResearchCenter } from '@/apis/v2/research/[id]';
import ResearchCenterEditPageContent from '@/app/[locale]/research/centers/edit/ResearchCenterEditPageContent';
import InvalidIDFallback from '@/components/common/InvalidIDFallback';

export default async function ResearchCenterEditPage(props: {
  searchParams: Promise<{ id: string }>;
}) {
  const searchParams = await props.searchParams;
  try {
    const id = parseInt(searchParams.id);
    const center = await getResearchCenter(id);

    return <ResearchCenterEditPageContent center={center} />;
  } catch {
    return <InvalidIDFallback rawID={searchParams.id} />;
  }
}
