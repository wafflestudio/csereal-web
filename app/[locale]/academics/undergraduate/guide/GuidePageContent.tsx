'use client';

import { useState } from 'react';

import { putGuideAction } from '@/actions/academics';

import { BlackButton } from '@/components/common/Buttons';
import BasicEditor, { BasicEditorContent } from '@/components/editor/BasicEditor';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Guide } from '@/types/academics';

import { handleServerAction } from '@/utils/serverActionError';
import { errorToast } from '@/utils/toast';

export default function GuidePageContent({
  data,
  type,
}: {
  data: Guide;
  type: 'undergraduate' | 'graduate';
}) {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleComplete = async (content: BasicEditorContent) => {
    if (!content.description.ko) {
      throw new Error('내용을 입력해주세요');
    }
    const formData = contentToFormData(content);

    try {
      handleServerAction(await putGuideAction(type, formData));
    } catch {
      errorToast('오류가 발생했습니다');
    }
  };

  return (
    <PageLayout titleType="big">
      {isEditMode ? (
        <BasicEditor
          initialContent={{
            description: { ko: data.description, en: data.description },
            attachments: data.attachments.map((file) => ({ type: 'UPLOADED_FILE', file })),
            mainImage: null,
          }}
          actions={{
            type: 'EDIT',
            onCancel: () => setIsEditMode(false),
            onComplete: handleComplete,
          }}
          showAttachments
          showLanguage
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

const contentToFormData = (content: BasicEditorContent) => {
  const formData = new FormData();

  formData.append(
    'request',
    new Blob(
      [
        JSON.stringify({
          description: content.description.ko,
        }),
      ],
      {
        type: 'application/json',
      },
    ),
  );

  return formData;
};
