import { getAcademicsByPostType } from '@/apis/v2/academics/[studentType]/[postType]';
import GeneralStudiesEditPageContent from '@/app/[locale]/academics/undergraduate/general-studies-requirements/edit/GeneralStudiesEditPageContent';
import { FETCH_TAG_GENERAL_STUDIES } from '@/constants/network';

export default async function GeneralStudiesEditPage(props: {
  searchParams: Promise<{ year: string }>;
}) {
  const searchParams = await props.searchParams;
  const data = await getAcademicsByPostType(
    'undergraduate',
    'general-studies-requirements',
    FETCH_TAG_GENERAL_STUDIES,
  );
  const year = Number(searchParams.year);
  const selected = data.find((x) => x.year === year);

  if (!selected) {
    return <div>해당 연도 내용이 존재하지 않습니다.</div>;
  }

  return <GeneralStudiesEditPageContent initContent={selected} />;
}
