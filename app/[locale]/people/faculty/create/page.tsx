import { getResearchLabs } from '@/apis/research';

import { Language } from '@/types/language';
import { FacultyStatus } from '@/types/people';

import FacultyCreatePageContent from './FacultyCreatePageContent';

export default async function FacultyCreatePage({
  params: { locale },
  searchParams: { status = 'ACTIVE' },
}: {
  params: { locale: Language };
  searchParams: { status?: FacultyStatus };
}) {
  const [koLabs, enLabs] = await Promise.all([getResearchLabs('ko'), getResearchLabs('en')]);

  return (
    <FacultyCreatePageContent language={locale} status={status} labs={{ ko: koLabs, en: enLabs }} />
  );
}
