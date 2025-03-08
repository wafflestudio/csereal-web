import { getCouncilRules } from '@/apis/v2/council/rule';
import CouncilByLawsEditClientPage from '@/app/[locale]/community/council/rules/edit/client';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function CouncilBylawsEditPage() {
  const councilRules = await getCouncilRules();

  return (
    <PageLayout title="학생 회칙 및 세칙 수정" titleType="big" hideNavbar>
      <CouncilByLawsEditClientPage councilRules={councilRules} />
    </PageLayout>
  );
}
