import { getDegreeRequirements } from '@/apis/v1/academics/undergraduate/degree-requirements';
import { getMetadata } from '@/utils/metadata';
import { degree } from '@/utils/segmentNode';

import DegreeRequirementsPageContent from './DegreeRequirementsPageContent';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return await getMetadata({ locale, node: degree });
}

export default async function UndergraduteDegreeRequirementsPage() {
  const data = await getDegreeRequirements();

  return <DegreeRequirementsPageContent data={data} />;
}
