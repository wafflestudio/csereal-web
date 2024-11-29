import { getActiveFacultyList } from '@/apis/v2/professor/active';
import { getResearchGroups } from '@/apis/v2/research/groups';

import ResearchLabCreatePageContent from './ResearchLabCreatePageContent';

export default async function ResearchLabCreatePage() {
  const [koLabs, enLabs, koFacultyList, enFacultyList] = await Promise.all([
    getResearchGroups('ko'),
    getResearchGroups('en'),
    getActiveFacultyList('ko'),
    getActiveFacultyList('en'),
  ]);

  return (
    <ResearchLabCreatePageContent
      groups={{ ko: koLabs, en: enLabs }}
      professors={{ ko: koFacultyList.professors, en: enFacultyList.professors }}
    />
  );
}
