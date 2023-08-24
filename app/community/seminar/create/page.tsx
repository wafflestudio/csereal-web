'use client';

import SeminarEditor from '@/components/editor/SeminarEditor';
import { SeminarEditorContent } from '@/components/editor/SeminarEditorProps';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default function SeminarCreatePage() {
  const handleComplete = async (content: SeminarEditorContent) => {
    console.log(content);
    // throw new Error();
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
