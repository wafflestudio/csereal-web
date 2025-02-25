import { getCouncilMinutes } from '@/apis/v2/council/meeting-minute';
import { councilMinute } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';

import MinutePageContent from './MinutePageContent';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: councilMinute });
}

export default async function CouncilMinutePage() {
  const data = await getCouncilMinutes();

  return <MinutePageContent contents={data} />;
}
