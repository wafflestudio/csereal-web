'use client';

import { postMinutesByYearAction } from '@/actions/council';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { councilMinute } from '@/constants/segmentNode';
import { useRouter } from '@/i18n/routing';
import { contentToFormData } from '@/utils/formData';
import { getPath } from '@/utils/page';

import CouncilMeetingMinuteEditor, { MinuteFormData } from '../CouncilMeetingMinuteEditor';

const minutePath = getPath(councilMinute);

export default function CouncilMinuteCreateClientPage({ year }: { year: number }) {
  const router = useRouter();

  const onCancel = () => router.push(minutePath);

  const onSubmit = async (requestObject: MinuteFormData) => {
    const formData = contentToFormData('CREATE', { attachments: requestObject.file });
    await postMinutesByYearAction(requestObject.year, formData);
  };

  return (
    // TODO: 영문 번역
    <PageLayout title={`${year ? `${year}년 ` : ''}학생회 회의록 추가`} titleType="big" hideNavbar>
      <CouncilMeetingMinuteEditor
        defaultValues={year ? { year, file: [] } : undefined}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    </PageLayout>
  );
}
