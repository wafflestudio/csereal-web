import { putInternationalUndergraduateAction } from '@/actions/admissions';
import { getAdmissions } from '@/apis/v2/admissions/[mainType]/[postType]';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { FETCH_TAG_INTERNATIONAL_UNDERGRADUATE } from '@/constants/network';
import { internationalUndergraduateAdmission } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

import AdmissionsEditor from '../../../components/AdmissionsEditor';

const path = getPath(internationalUndergraduateAdmission);

export default async function InternationalUndergraduateAdmissionEditPage() {
  const data = await getAdmissions(
    'international',
    'undergraduate',
    FETCH_TAG_INTERNATIONAL_UNDERGRADUATE,
  );

  return (
    <PageLayout title="International Undergraduate Admission 편집" titleType="big">
      <AdmissionsEditor
        defaultValues={{ ko: data.ko.description, en: data.en.description }}
        cancelPath={path}
        onSubmitAction={putInternationalUndergraduateAction}
      />
    </PageLayout>
  );
}
