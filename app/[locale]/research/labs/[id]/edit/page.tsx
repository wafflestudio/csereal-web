import { getActiveFacultyList } from '@/apis/v2/professor/active';
import { getResearchGroups } from '@/apis/v2/research/groups';
import { getResearchLab } from '@/apis/v2/research/lab/[id]';
import ResearchLabEditPageContent from '@/app/[locale]/research/labs/[id]/edit/ResearchLabEditPageContent';
import InvalidIDFallback from '@/components/common/InvalidIDFallback';

export default async function ResearchLabEditPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  try {
    const id = parseInt(params.id);
    const [lab, koGroups, enGroups, koFacultyList, enFacultyList] = await Promise.all([
      getResearchLab(id),
      getResearchGroups('ko'),
      getResearchGroups('en'),
      getActiveFacultyList('ko'),
      getActiveFacultyList('en'),
    ]);

    return (
      <ResearchLabEditPageContent
        lab={lab}
        groups={{ ko: koGroups, en: enGroups }}
        professors={{ ko: koFacultyList.professors, en: enFacultyList.professors }}
      />
    );
  } catch {
    return <InvalidIDFallback rawID={params.id} />;
  }
}
