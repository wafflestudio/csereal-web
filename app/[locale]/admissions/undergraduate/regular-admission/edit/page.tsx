import { putUndergraduateRegularAdmissionsAction } from '@/actions/admissions';
import { getAdmissions } from '@/apis/v2/admissions/[mainType]/[postType]';
import AdmissionsEditor from '@/app/[locale]/admissions/components/AdmissionsEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { FETCH_TAG_REGULAR_ADMISSION } from '@/constants/network';
import { undergraduateRegularAdmission } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

const path = getPath(undergraduateRegularAdmission);

export default async function UndergraduateRegularAdmissionEditPage() {
  const data = await getAdmissions(
    'undergraduate',
    'regular-admission',
    FETCH_TAG_REGULAR_ADMISSION,
  );

  return (
    <PageLayout title="학부 정시 모집 수정" titleType="big">
      <AdmissionsEditor
        defaultValues={{ ko: data.ko.description, en: data.en.description }}
        cancelPath={path}
        onSubmitAction={putUndergraduateRegularAdmissionsAction}
      />
    </PageLayout>
  );
}
