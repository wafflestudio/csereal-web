import { getDegreeRequirements } from '@/apis/academics';

import DegreeRequirementsEditPageContent from './DegreeRequirementsEditPageContent';

export default async function DegreeRequirementsEditPage() {
  const data = await getDegreeRequirements();

  return <DegreeRequirementsEditPageContent data={data} />;
}
