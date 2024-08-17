import { getStaff } from '@/apis/people';
import InvalidIDFallback from '@/components/common/InvalidIDFallback';
import { Language } from '@/types/language';

import StaffEditPageContent from './StaffEditPageContent';

interface FacultyEditPageProps {
  params: { id: string; locale: Language };
}

export default async function StaffEditPage({
  params: { id: rawId, locale },
}: FacultyEditPageProps) {
  try {
    const id = +rawId;
    if (Number.isNaN(id)) throw new Error('유효한 id가 아닙니다: ' + rawId);
    const data = await getStaff(id);

    return <StaffEditPageContent data={data} language={locale} />;
  } catch {
    return <InvalidIDFallback rawID={rawId} />;
  }
}
