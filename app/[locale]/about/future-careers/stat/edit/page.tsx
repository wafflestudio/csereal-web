import { getFutureCareeres } from '@/apis/about';
import { Language } from '@/types/language';

import CareerStatEditPageContent from './CareerStatEditPageContent';

interface CareerStatEditPageProps {
  params: { locale: Language };
  searchParams: { year: string };
}

export default async function CareerStatEditPage({
  params,
  searchParams,
}: CareerStatEditPageProps) {
  const { stat } = await getFutureCareeres(params.locale);
  const selectedStat = stat.find((x) => x.year.toString() === searchParams.year) ?? stat[0];

  return <CareerStatEditPageContent data={selectedStat} />;
}
