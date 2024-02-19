import { getGeneralStudiesRequirements } from '@/apis/academicsServer';

import GeneralStudiesRequirementsPageContent from '@/components/academics/GeneralStudiesRequirmentsContent';

export default async function UndergraduateGeneralStudiesRequirementsPage() {
  const { overview, subjectChanges, description } = await getGeneralStudiesRequirements();

  return (
    <GeneralStudiesRequirementsPageContent
      overview={overview}
      subjectChanges={subjectChanges}
      description={description}
    />
  );
}
