import { getStaff } from '@/apis/v2/staff/[id]';
import StaffEditPageContent from '@/app/[locale]/people/staff/[id]/edit/StaffEditPageContent';
import InvalidIDFallback from '@/components/common/InvalidIDFallback';
import { Language } from '@/types/language';

interface FacultyEditPageProps {
  params: Promise<{ id: string; locale: Language }>;
}

export default async function StaffEditPage(props: FacultyEditPageProps) {
  const params = await props.params;

  const { id: rawId, locale } = params;

  try {
    const id = +rawId;
    if (Number.isNaN(id)) throw new Error('유효한 id가 아닙니다: ' + rawId);
    const data = await getStaff(id);

    return <StaffEditPageContent data={data} language={locale} />;
  } catch {
    return <InvalidIDFallback rawID={rawId} />;
  }
}
