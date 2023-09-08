'use client';

import { useRouter } from 'next/navigation';

import { postSeminar } from '@/apis/seminar';

import { infoToast } from '@/components/common/toast';
import { isLocalFile, isLocalImage } from '@/components/editor/PostEditorProps';
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
      throw new Error('제목을 입력해주세요');
    }

    const image =
      content.speaker.image && isLocalImage(content.speaker.image)
        ? content.speaker.image.file
        : null;
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
        endDate: content.schedule.endDate?.toLocaleDateString() ?? null,
        location: content.location,
        host: content.host,
        isPublic: content.isPublic,
        isImportant: content.isImportant,
      },
      image,
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
