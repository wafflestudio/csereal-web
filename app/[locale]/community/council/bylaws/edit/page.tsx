import CouncilByLawsEditClientPage from '@/app/[locale]/community/council/bylaws/edit/components/CouncilByLawsEditClientPage';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default function CouncilBylawsEditPage() {
  return (
    <PageLayout title="학생 회칙 및 세칙 수정" titleType="big" hideNavbar>
      <CouncilByLawsEditClientPage />
    </PageLayout>
  );
}
