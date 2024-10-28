import { getFutureCareeres } from '@/apis/about';

import CareerDescriptionEditPageContent from './CareerDescriptionEditContent';

export default async function CareerDescriptionEditPage() {
  const [koData, enData] = await Promise.all([getFutureCareeres('ko'), getFutureCareeres('en')]);

  return (
    <CareerDescriptionEditPageContent data={{ ko: koData.description, en: enData.description }} />
  );
}
