import { putUndergraduateRegularAdmissionsAction } from '@/actions/admissions';
import { getAdmissions } from '@/apis/v2/admissions/[mainType]/[postType]';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { FETCH_TAG_REGULAR_ADMISSON } from '@/constants/network';
import { undergraduateScholarship } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

import AdmissionsEditor from '../../../components/AdmissionsEditor';

const path = getPath(undergraduateScholarship);

export default async function UndergraduateRegularAdmissionEditPage() {
  const data = await getAdmissions(
    'undergraduate',
    'regular-admission',
    FETCH_TAG_REGULAR_ADMISSON,
  );

  return (
    <PageLayout title="학부 정시 모집 수정" titleType="big">
      <AdmissionsEditor
        defaultValues={{ ko: data.ko.description, en: data.en.description }}
        cancelPath={path}
        onSubmit={putUndergraduateRegularAdmissionsAction}
      />
    </PageLayout>
  );
}
