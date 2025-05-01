import { getFaculty } from '@/apis/v2/professor/[id]';
import { getResearchLabs } from '@/apis/v2/research/lab';
import FacultyEditPageContent from '@/app/[locale]/people/faculty/[id]/edit/FacultyEditPageContent';
import { Language } from '@/types/language';

interface FacultyEditPageProps {
  params: Promise<{ id: string; locale: Language }>;
}

export default async function FacultyEditPage(props: FacultyEditPageProps) {
  const params = await props.params;

  const { id: rawId, locale } = params;

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
