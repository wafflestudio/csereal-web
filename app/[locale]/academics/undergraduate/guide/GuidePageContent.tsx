'use client';

import { useState } from 'react';

import BasicEditor from '@/components/editor/BasicEditor';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default function GuidePageContent({
  description,
}: {
  description: string;
  type: 'undergraduate' | 'graduate';
}) {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleComplete = async () => {};

  return (
    <PageLayout titleType="big">
      {isEditMode ? (
        <BasicEditor
          initialContent={{ description }}
          actions={{
            type: 'EDIT',
            onCancel: () => setIsEditMode(false),
            onComplete: handleComplete,
          }}
        />
      ) : (
        <>
          {/* TODO: BlackButton으로 변경 */}
          <button onClick={() => setIsEditMode(true)}>편집</button>
          <HTMLViewer htmlContent={description} />
        </>
      )}
    </PageLayout>
  );
}
