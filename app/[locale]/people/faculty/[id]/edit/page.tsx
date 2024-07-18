import { getFaculty } from '@/apis/people';

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

  const data = await getFaculty(id);

  // TODO: 영어 데이터 같이 오는 형식 확정되면 해당 사항 반영해서 data 타입 수정
  return <FacultyEditPageContent data={data} language={locale} id={{ ko: id, en: id }} />;
}
