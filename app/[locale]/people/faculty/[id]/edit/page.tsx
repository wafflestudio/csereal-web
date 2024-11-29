import { getFaculty } from '@/apis/v2/professor/[id]';
import { getResearchLabs } from '@/apis/v2/research/lab';
import { Language } from '@/types/language';

import FacultyEditPageContent from './FacultyEditPageContent';

interface FacultyEditPageProps {
  params: { id: string; locale: Language };
}

export default async function FacultyEditPage({
  params: { id: rawId, locale },
}: FacultyEditPageProps) {
  const id = +rawId;
  if (Number.isNaN(id)) throw new Error('유효한 id가 아닙니다: ' + rawId);

  const [faculty, koLabs, enLabs] = await Promise.all([
    getFaculty(id),
    getResearchLabs('ko'),
    getResearchLabs('en'),
  ]);

  return (
    <FacultyEditPageContent data={faculty} labs={{ ko: koLabs, en: enLabs }} language={locale} />
  );
}
