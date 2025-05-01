import { putGraduateAdmissionsAction } from '@/actions/admissions';
import { getAdmissions } from '@/apis/v2/admissions/[mainType]/[postType]';
import AdmissionsEditor from '@/app/[locale]/admissions/components/AdmissionsEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { FETCH_TAG_GRADUATE_ADMISSION } from '@/constants/network';
import { graduateRegularAdmission } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

const path = getPath(graduateRegularAdmission);

export default async function GraduateRegularAdmissionEditPage() {
  const data = await getAdmissions('graduate', 'regular-admission', FETCH_TAG_GRADUATE_ADMISSION);

  return (
    <PageLayout title="대학원 전기/후기 모집 수정" titleType="big">
      <AdmissionsEditor
        defaultValues={{ ko: data.ko.description, en: data.en.description }}
        cancelPath={path}
        onSubmit={putGraduateAdmissionsAction}
      />
    </PageLayout>
  );
}
