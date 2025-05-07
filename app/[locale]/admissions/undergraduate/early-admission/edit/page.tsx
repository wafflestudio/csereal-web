import { putUndergraduateEarlyAdmissionsAction } from '@/actions/admissions';
import { getAdmissions } from '@/apis/v2/admissions/[mainType]/[postType]';
import AdmissionsEditor from '@/app/[locale]/admissions/components/AdmissionsEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { FETCH_TAG_EARLY_ADMISSION } from '@/constants/network';
import { undergraduateEarlyAdmission } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

const path = getPath(undergraduateEarlyAdmission);

export default async function UndergraduateEarlyAdmissionEditPage() {
  const data = await getAdmissions('undergraduate', 'early-admission', FETCH_TAG_EARLY_ADMISSION);

  return (
    <PageLayout title="학부 수시 모집 수정" titleType="big">
      <AdmissionsEditor
        defaultValues={{ ko: data.ko.description, en: data.en.description }}
        cancelPath={path}
        onSubmitAction={putUndergraduateEarlyAdmissionsAction}
      />
    </PageLayout>
  );
}
