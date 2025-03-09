import { putInternationalExchangeAction } from '@/actions/admissions';
import { getAdmissions } from '@/apis/v2/admissions/[mainType]/[postType]';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { FETCH_TAG_EXCHANGE } from '@/constants/network';
import { exchangeVisitingProgram } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

import AdmissionsEditor from '../../../components/AdmissionsEditor';

const path = getPath(exchangeVisitingProgram);

export default async function InternationalExchangeEditPage() {
  const data = await getAdmissions('international', 'exchange-visiting', FETCH_TAG_EXCHANGE);

  return (
    <PageLayout title="International Exchange/Visiting Program 편집" titleType="big">
      <AdmissionsEditor
        defaultValues={{ ko: data.ko.description, en: data.en.description }}
        cancelPath={path}
        onSubmit={putInternationalExchangeAction}
      />
    </PageLayout>
  );
}
