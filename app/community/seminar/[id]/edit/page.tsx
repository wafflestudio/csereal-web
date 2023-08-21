'use client';

import useSWR from 'swr';

import {
  SeminarEditorContent,
  seminarEditorPlaceholder,
} from '@/components/editor/SeminarEditorProps';
import SeminarEditor from '@/components/editor/SeminarEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default function SeminarEditPage() {
  //   const { data: currentSeminar } = useSWR('/');
  const mockSeminarContent: SeminarEditorContent = {
    title: '기존 글',
    description: '<b>기존 글 내용</b>',
    location: '위치',
    schedule: {
      allDay: true,
      showEndDate: true,
      startDate: new Date(0),
      endDate: new Date(1000000000),
    },
    host: '주최자 이름',
    speaker: {
      name: '연설자 이름',
      nameURL: '연설자 URL',
      title: '직함',
      organization: '소속',
      organizationURL: '소속 URL',
      description: '연사 소개개개개개',
    },
    attachments: [],
    isPublic: false,
  };

  const handleComplete = async (content: SeminarEditorContent) => {
    console.log(content);
    // throw new Error();
  };

  const handleDelete = async () => {
    //
  };

  return (
    <PageLayout title={'세미나 쓰기'} titleType="small" titleMargin="mb-3">
      <SeminarEditor
        actions={{
          type: 'EDIT',
          onComplete: handleComplete,
          onDelete: handleDelete,
        }}
        initialContent={mockSeminarContent}
      />
    </PageLayout>
  );
}
