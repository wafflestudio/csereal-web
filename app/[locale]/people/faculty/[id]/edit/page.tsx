import { getFaculty } from '@/apis/people';

import { Locale } from '@/types/locale';

import FacultyEditPageContent from './FacultyEditPageContent';

interface FacultyEditPageProps {
  params: { id: string; locale: Locale };
}

export default async function FacultyEditPage({
  params: { id: rawId, locale },
}: FacultyEditPageProps) {
  const id = +rawId;
  if (Number.isNaN(id)) throw new Error('유효한 id가 아닙니다: ' + rawId);

  const data = await getFaculty(id);

  return <FacultyEditPageContent data={data} locale={locale} id={{ ko: id, en: id }} />;
}
