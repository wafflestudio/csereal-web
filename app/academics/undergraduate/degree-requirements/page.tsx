import { getDegreeRequirements } from '@/apis/academics';

import DegreeRequirementsBody from '@/components/academics/DegreeRequirements';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function UndergraduteDegreeRequirementsPage() {
  const data = await getDegreeRequirements();

  return (
    data && (
      <PageLayout titleType="big" titleMargin="mb-9">
        <div className="flex flex-col">
          <DegreeRequirementsBody data={data} />
        </div>
      </PageLayout>
    )
  );
}
