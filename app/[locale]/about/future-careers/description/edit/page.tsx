import { getFutureCareeres } from '@/apis/v2/about/future-careers';

import CareerDescriptionEditor from './CareerDescriptionEditor';

export default async function CareerDescriptionEditPage() {
  const [koData, enData] = await Promise.all([getFutureCareeres('ko'), getFutureCareeres('en')]);

  return <CareerDescriptionEditor data={{ ko: koData.description, en: enData.description }} />;
}
