import { getCouncilMinutesByYear } from '@/apis/v2/council/meeting-minute';
import { councilMinute } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';

import PageLayout from '@/components/layout/pageLayout/PageLayout';
import LoginVisible from '@/components/common/LoginVisible';
import { Link } from '@/i18n/routing';
import { getPath } from '@/utils/page';

import MinutePageContent from './MinutePageContent';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: councilMinute });
}

const path = getPath(councilMinute);

export default async function CouncilMinutePage() {
  const data = await getCouncilMinutesByYear(2025);
  console.log(data);

  return <MinutePageContent contents={data} />;
  // return (
  //   <PageLayout titleType="big">
  //     <AddButton pathname={path} />
  //     <div>hihi</div>
  //   </PageLayout>
  // );
}
