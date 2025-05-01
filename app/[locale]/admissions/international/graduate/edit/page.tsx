import { putInternationalGraduateAction } from '@/actions/admissions';
import { getAdmissions } from '@/apis/v2/admissions/[mainType]/[postType]';
import AdmissionsEditor from '@/app/[locale]/admissions/components/AdmissionsEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { FETCH_TAG_INTERNATIONAL_GRADUATE } from '@/constants/network';
import { internationalGraduateAdmission } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

const path = getPath(internationalGraduateAdmission);

export default async function InternationalGraduateAdmissionEditPage() {
  const data = await getAdmissions('international', 'graduate', FETCH_TAG_INTERNATIONAL_GRADUATE);

  return (
    <PageLayout title="International Graduate Admission 편집" titleType="big">
      <AdmissionsEditor
        defaultValues={{ ko: data.ko.description, en: data.en.description }}
        cancelPath={path}
        onSubmit={putInternationalGraduateAction}
      />
    </PageLayout>
  );
}
