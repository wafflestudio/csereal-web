'use client';

import { useRouter } from 'next/navigation';

import { deleteNotice } from '@/apis/notice';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { news } from '@/types/page';
import { Seminar } from '@/types/seminar';

import { getPath } from '@/utils/page';

import SeminarEditor from '../editor/SeminarEditor';
import { SeminarEditorContent, getSeminarEditorDefaultValue } from '../editor/SeminarEditorProps';

const newsPath = getPath(news);

export default function EditSeminarPageContent({ id, data }: { id: number; data: Seminar }) {
  const router = useRouter();
  const initialContent: SeminarEditorContent = {
    ...getSeminarEditorDefaultValue(),

    title: data.title,
    description: data.description,
    location: data.location,
    schedule: {
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
    },
    speaker: {
      name: data.name,
      nameURL: data.speakerUrl,
      title: data.title,
      organization: data.affiliation,
      organizationURL: data.affiliationUrl,
      description: data.introduction,
      image: data.imageURL ? { type: 'UPLOADED_IMAGE', url: data.imageURL } : null,
    },
    attachments: data.attachments.map((file) => ({ type: 'UPLOADED_FILE', file })),
    isPublic: data.isPublic,
    isImportant: data.isImportant,
  };

  const handleComplete = async (content: SeminarEditorContent) => {
    throwIfCantSubmit(content);

    // const uploadedAttachments = content.attachments.filter(isUploadedFile).map((x) => x.file);
    // const localAttachments = content.attachments.filter(isLocalFile).map((x) => x.file);

    router.replace(`${newsPath}/${id}`);
  };

  const handleDelete = async () => {
    await deleteNotice(id);
    router.replace(newsPath);
  };

  return (
    <PageLayout title="세미나 편집" titleType="big" titleMargin="mb-[2.25rem]">
      <SeminarEditor
        actions={{
          type: 'EDIT',
          onComplete: handleComplete,
          onDelete: handleDelete,
        }}
        initialContent={initialContent}
      />
    </PageLayout>
  );
}

const throwIfCantSubmit = (content: SeminarEditorContent) => {
  if (content.title === '') {
    throw new Error('제목을 입력해주세요');
  }
  if (content.description === '') {
    throw new Error('내용을 입력해주세요');
  }
};

const strToDate = (dateStr: string, timeStr: string): Date => {
  const date = new Date();
  const [y, m, d] = dateStr.split('-').map((x) => +x);
  const [h, mm] = timeStr.split(':').map((x) => +x);
  date.setFullYear(y);
  date.setMonth(m - 1);
  date.setDate(d);
  date.setHours(h);
  date.setMinutes(mm);
  return date;
};
