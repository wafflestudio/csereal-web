import { getDegreeRequirements } from '@/apis/academicsServer';

import DegreeRequirementsBody from '@/app/[locale]/academics/helper/DegreeRequirements';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function UndergraduteDegreeRequirementsPage() {
  const data = await getDegreeRequirements();

  return (
    <PageLayout titleType="big">
      <div className="flex flex-col">
        <DegreeRequirementsBody data={data} />
      </div>
    </PageLayout>
  );
}
