import { getAcademicsByPostType } from '@/apis/v2/academics/[studentType]/[postType]';
import { FETCH_TAG_CURRICULUM } from '@/constants/network';

import CurriculumEditPageContent from './CurriculumEditPageContent';

export default async function CurriculumEditPage(props: {
  searchParams: Promise<{ year: string }>;
}) {
  const searchParams = await props.searchParams;
  const data = await getAcademicsByPostType('undergraduate', 'curriculum', FETCH_TAG_CURRICULUM);
  const year = Number(searchParams.year);
  const selected = data.find((x) => x.year === year);

  if (!selected) {
    return <div>해당 연도 내용이 존재하지 않습니다.</div>;
  }

  return <CurriculumEditPageContent initContent={selected} />;
}
