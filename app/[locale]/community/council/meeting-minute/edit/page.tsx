import { getCouncilMinute } from '@/apis/v2/council/meeting-minute';
import EditMinutePageContent from '@/app/[locale]/community/council/meeting-minute/edit/EditMinutePageContent';

interface MinuteEditPageProps {
  searchParams: Promise<{ year: string; index: string }>;
}

export default async function CouncilMinuteEditPage(props: MinuteEditPageProps) {
  const searchParams = await props.searchParams;
  const year = Number(searchParams.year);
  const index = Number(searchParams.index);

  if (Number.isNaN(year) || Number.isNaN(index))
    throw new Error('/meeting-minute?year=[year]&index=[index]: year나 index가 숫자가 아닙니다.');

  const data = await getCouncilMinute(year, index);

  return <EditMinutePageContent year={year} index={index} data={data} />;
}
