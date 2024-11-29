import { getDegreeRequirements } from '@/apis/v1/academics/undergraduate/degree-requirements';

import DegreeRequirementsEditPageContent from './DegreeRequirementsEditPageContent';

export default async function DegreeRequirementsEditPage() {
  const data = await getDegreeRequirements();

  return <DegreeRequirementsEditPageContent data={data} />;
}
