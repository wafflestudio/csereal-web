'use client';

import { postSeminar } from '@/apis/seminar';

import { infoToast } from '@/components/common/toast';
import SeminarEditor from '@/components/editor/SeminarEditor';
import { SeminarEditorContent } from '@/components/editor/SeminarEditorProps';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default function SeminarCreatePage() {
  const handleComplete = async (content: SeminarEditorContent) => {
    if (content.title === '') {
      infoToast('제목을 입력해주세요');
      return;
    }

    await postSeminar({
      request: {
        title: content.title,
        description: content.description,
        introduction: content.speaker.description,
        name: content.speaker.name,
        speakerURL: content.speaker.nameURL,
        speakerTitle: content.speaker.title,
        affiliation: content.speaker.organization,
        affiliationURL: content.speaker.organizationURL,
        startDate: content.schedule.startDate.toLocaleDateString(),
        startTime: content.schedule.startDate.toLocaleTimeString(),
        endDate: content.schedule.endDate.toLocaleDateString(),
        endTime: content.schedule.endDate.toLocaleTimeString(),
        location: content.location,
        host: content.host,
        isPublic: content.isPublic,
        isImportant: content.isImportant,
      },
      image: content.speaker.image,
      attachments: content.attachments,
    });
  };

  return (
    <PageLayout title={'세미나 쓰기'} titleType="small" titleMargin="mb-3">
      <SeminarEditor
        actions={{
          type: 'CREATE',
          onComplete: handleComplete,
        }}
      />
    </PageLayout>
  );
}
