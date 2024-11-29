import { getResearchGroups, getResearchLab } from '@/apis/research';
import { getActiveFacultyList } from '@/apis/v2/professor/active';
import InvalidIDFallback from '@/components/common/InvalidIDFallback';

import ResearchLabEditPageContent from './ResearchLabEditPageContent';

export default async function ResearchLabEditPage({ params }: { params: { id: string } }) {
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
