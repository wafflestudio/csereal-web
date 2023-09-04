'use client';

import { useRouter } from 'next/navigation';

import { postSeminar } from '@/apis/seminar';

import { infoToast } from '@/components/common/toast';
import { isLocalFile } from '@/components/editor/PostEditorProps';
import SeminarEditor from '@/components/editor/SeminarEditor';
import { SeminarEditorContent } from '@/components/editor/SeminarEditorProps';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { seminar } from '@/types/page';

import { getPath } from '@/utils/page';

const seminarPath = getPath(seminar);

export default function SeminarCreatePage() {
  const router = useRouter();

  const handleComplete = async (content: SeminarEditorContent) => {
    if (content.title === '') {
      infoToast('제목을 입력해주세요');
      return;
    }

    const attachments = content.attachments.filter(isLocalFile).map((x) => x.file);
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
      attachments,
    });

    router.replace(seminarPath);
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
