'use client';

import useSWR from 'swr';

import { SeminarEditorContent, seminarEditorPlaceholder } from '@/components/editor/EditorProps';
import SeminarEditor from '@/components/editor/SeminarEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default function SeminarEditPage() {
  //   const { data: currentSeminar } = useSWR('/');
  const currentSeminar: SeminarEditorContent = {
    ...seminarEditorPlaceholder,
    title: '기존 글',
    description: '<b>기존 글 내용</b>',
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
        initialContent={currentSeminar}
      />
    </PageLayout>
  );
}
