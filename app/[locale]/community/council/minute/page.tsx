import { getCouncilMinutesByYear } from '@/apis/v2/council/meeting-minute';
import { councilMinute } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';

import PageLayout from '@/components/layout/pageLayout/PageLayout';
import LoginVisible from '@/components/common/LoginVisible';
import { Link } from '@/i18n/routing';
import { getPath } from '@/utils/page';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: councilMinute });
}

const path = getPath(councilMinute);

export default async function CouncilMinutePage() {
  const data = await getCouncilMinutesByYear(2025);
  console.log(data);
  // return <MinutePageContent contents={data} />;
  return (
    <PageLayout titleType="big">
      <AddButton pathname={path} />
      <div>hihi</div>
    </PageLayout>
  );
}

function AddButton({ pathname }: { pathname: string }) {
  return (
    <LoginVisible staff>
      <Link
        href={`${pathname}/create`}
        className="mb-7 ml-0.5 flex h-[30px] w-fit items-center rounded-2xl border border-main-orange pl-0.5 pr-2 pt-px text-md text-main-orange duration-200 hover:bg-main-orange hover:text-white"
      >
        <span className="material-symbols-outlined text-xl font-light">add</span>
        <span className="font-semibold">연도 추가</span>
      </Link>
    </LoginVisible>
  );
}
