import { getGeneralStudies } from '@/apis/v1/academics/undergraduate/general-studies-requirements';

import GeneralStudiesEditPageContent from './GeneralStudiesEditPageContent';

export default async function GeneralStudiesEditPage({
  searchParams,
}: {
  searchParams: { year: string };
}) {
  const { generalStudies } = await getGeneralStudies();
  const year = Number(searchParams.year);
  const selected = generalStudies.find((x) => x.year === year);

  if (!selected) {
    return <div>해당 연도 내용이 존재하지 않습니다.</div>;
  }

  return <GeneralStudiesEditPageContent initContent={selected} />;
}
