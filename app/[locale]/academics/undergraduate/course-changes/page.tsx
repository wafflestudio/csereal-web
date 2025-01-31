import { revalidateTag } from 'next/cache';

import TimelineViewer from '@/app/[locale]/academics/components/timeline/TimelineViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { FETCH_TAG_COURSE_CHANGES } from '@/constants/network';
import { undergraduateCourseChanges } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';
import { getCourseChanges } from '@/apis/v2/academics/[studentType]/course-changes';
import { deleteCourseChanges } from '@/apis/v2/academics/[studentType]/course-changes/[year]';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: undergraduateCourseChanges });
}

export default async function UndergraduateCourseChangesPage() {
  const changes = await getCourseChanges('undergraduate');

  const onDelete = async (year: number) => {
    'use server';
    await deleteCourseChanges('undergraduate', year);
    revalidateTag(FETCH_TAG_COURSE_CHANGES);
  };

  return (
    <PageLayout titleType="big">
      <TimelineViewer
        contents={changes}
        title={{ text: '교과목 변경 내역', unit: '학년도' }}
        deleteAction={onDelete}
      />
    </PageLayout>
  );
}
