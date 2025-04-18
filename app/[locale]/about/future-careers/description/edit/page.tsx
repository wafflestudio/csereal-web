import { getFutureCareeres } from '@/apis/v2/about/future-careers';
import CareerDescriptionEditor from '@/app/[locale]/about/future-careers/description/edit/CareerDescriptionEditor';

export default async function CareerDescriptionEditPage() {
  const [koData, enData] = await Promise.all([getFutureCareeres('ko'), getFutureCareeres('en')]);

  return <CareerDescriptionEditor data={{ ko: koData.description, en: enData.description }} />;
}
