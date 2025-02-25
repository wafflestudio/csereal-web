'use client';

import { putMinuteAction } from '@/actions/council';
import { CouncilMeetingMinute } from '@/apis/types/council';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { councilMinute } from '@/constants/segmentNode';
import { useRouter } from '@/i18n/routing';
import { contentToFormData, getAttachmentDeleteIds, getEditorFile } from '@/utils/formData';
import { getPath } from '@/utils/page';

import CouncilMeetingMinuteEditor, { MinuteFormData } from '../CouncilMeetingMinuteEditor';

const minutePath = getPath(councilMinute);

export default function EditMinutePageContent({
  year,
  index,
  data,
}: {
  year: number;
  index: number;
  data: CouncilMeetingMinute;
}) {
  const router = useRouter();

  const onCancel = () => router.push(minutePath);

  const onSubmit = async (requestObject: MinuteFormData) => {
    const removeFileIds = getAttachmentDeleteIds(requestObject.file, data.attachments);
    const formData = contentToFormData(
      'EDIT',
      { requestObject: removeFileIds, attachments: requestObject.file },
      { request: 'removeFileIds', attachments: 'addFiles' },
    );
    await putMinuteAction(year, index, formData);
  };

  return (
    // TODO: 영문 번역
    <PageLayout title={`${year}년 학생회 ${index}차 회의록 편집`} titleType="big">
      <CouncilMeetingMinuteEditor
        defaultValues={{ year, file: getEditorFile(data.attachments) }}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    </PageLayout>
  );
}
