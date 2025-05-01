'use client';

import { postMinutesByYearAction } from '@/actions/council';
import CouncilMeetingMinuteEditor, {
  MinuteFormData,
} from '@/app/[locale]/community/council/meeting-minute/CouncilMeetingMinuteEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { councilMinute } from '@/constants/segmentNode';
import { useRouter } from '@/i18n/routing';
import { contentToFormData } from '@/utils/formData';
import { getPath } from '@/utils/page';

const minutePath = getPath(councilMinute);

export default function CouncilMinuteCreateClientPage({
  year,
  index,
}: {
  year: number;
  index: number;
}) {
  const router = useRouter();

  const onCancel = () => router.push(minutePath);

  const onSubmit = async (requestObject: MinuteFormData) => {
    const formData = contentToFormData('CREATE', { attachments: requestObject.file });
    await postMinutesByYearAction(requestObject.year, formData);
  };

  return (
    // TODO: 영문 번역
    <PageLayout
      title={`${year ? `${year}년 ` : ''}학생회${index ? ` ${index}차` : ''} 회의록 추가`}
      titleType="big"
      hideNavbar
    >
      <CouncilMeetingMinuteEditor
        defaultValues={year ? { year, index, file: [] } : undefined}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    </PageLayout>
  );
}
