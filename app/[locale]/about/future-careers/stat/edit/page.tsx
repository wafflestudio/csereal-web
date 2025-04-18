import { getFutureCareeres } from '@/apis/v2/about/future-careers';
import CareerStatEditPageContent from '@/app/[locale]/about/future-careers/stat/edit/CareerStatEditPageContent';
import { Language } from '@/types/language';

interface CareerStatEditPageProps {
  params: Promise<{ locale: Language }>;
  searchParams: Promise<{ year: string }>;
}

export default async function CareerStatEditPage(props: CareerStatEditPageProps) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const { stat } = await getFutureCareeres(params.locale);
  const selectedStat = stat.find((x) => x.year.toString() === searchParams.year) ?? stat[0];

  return <CareerStatEditPageContent data={selectedStat} />;
}
