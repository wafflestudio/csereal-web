import { getResearchLabs } from '@/apis/v2/research/lab';
import { Language } from '@/types/language';
import { FacultyStatus } from '@/apis/types/people';

import FacultyCreatePageContent from './FacultyCreatePageContent';

export default async function FacultyCreatePage(props: {
  params: Promise<{ locale: Language }>;
  searchParams: Promise<{ status?: FacultyStatus }>;
}) {
  const searchParams = await props.searchParams;

  const { status = 'ACTIVE' } = searchParams;

  const params = await props.params;

  const { locale } = params;

  const [koLabs, enLabs] = await Promise.all([getResearchLabs('ko'), getResearchLabs('en')]);

  return (
    <FacultyCreatePageContent language={locale} status={status} labs={{ ko: koLabs, en: enLabs }} />
  );
}
