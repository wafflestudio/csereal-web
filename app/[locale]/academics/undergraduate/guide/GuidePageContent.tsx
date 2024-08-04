'use client';

import { useState } from 'react';

import { BlackButton } from '@/components/common/Buttons';
import BasicEditor from '@/components/editor/BasicEditor';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Guide } from '@/types/academics';

export default function GuidePageContent({
  data,
}: {
  data: Guide;
  type: 'undergraduate' | 'graduate';
}) {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleComplete = async () => {};

  return (
    <PageLayout titleType="big">
      {isEditMode ? (
        <BasicEditor
          initialContent={{
            description: data.description,
            attachments: data.attachments.map((file) => ({ type: 'UPLOADED_FILE', file })),
            mainImage: null,
          }}
          actions={{
            type: 'EDIT',
            onCancel: () => setIsEditMode(false),
            onComplete: handleComplete,
          }}
        />
      ) : (
        <>
          <div className="text-right">
            <BlackButton title="편집" onClick={() => setIsEditMode(true)} />
          </div>
          <HTMLViewer htmlContent={data.description} />
        </>
      )}
    </PageLayout>
  );
}
