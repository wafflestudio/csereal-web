import { getCurriculum } from '@/apis/academics';

import CurriculumEditPageContent from './CurriculumEditPageContent';

export default async function CurriculumEditPage({
  searchParams,
}: {
  searchParams: { year: string };
}) {
  const data = await getCurriculum();
  const year = Number(searchParams.year);
  const selected = data.find((x) => x.year === year);

  if (!selected) {
    return <div>해당 연도 내용이 존재하지 않습니다.</div>;
  }

  return <CurriculumEditPageContent initContent={selected} />;
}
