import { putInternationalScholarshipsAction } from '@/actions/admissions';
import { getAdmissions } from '@/apis/v2/admissions/[mainType]/[postType]';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { FETCH_TAG_INTERNATIONAL_SCHOLARSHIPS } from '@/constants/network';
import { internationalScholarships } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

import AdmissionsEditor from '../../../components/AdmissionsEditor';

const path = getPath(internationalScholarships);

export default async function InternationalScholarshipsEditPage() {
  const data = await getAdmissions(
    'international',
    'scholarships',
    FETCH_TAG_INTERNATIONAL_SCHOLARSHIPS,
  );

  return (
    <PageLayout title="International Scholarships 편집" titleType="big">
      <AdmissionsEditor
        defaultValues={{ ko: data.ko.description, en: data.en.description }}
        cancelPath={path}
        onSubmitAction={putInternationalScholarshipsAction}
      />
    </PageLayout>
  );
}
