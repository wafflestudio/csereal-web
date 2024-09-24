import { getResearchGroups } from '@/apis/research';

import ResearchLabCreatePageContent from './ResearchLabCreatePageContent';

export default async function ResearchLabCreatePage() {
  const [koLabs, enLabs] = await Promise.all([getResearchGroups('ko'), getResearchGroups('en')]);

  return <ResearchLabCreatePageContent groups={{ ko: koLabs, en: enLabs }} />;
}
