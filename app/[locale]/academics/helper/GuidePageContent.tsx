'use client';

import { useState } from 'react';

import { putGuideAction } from '@/actions/academics';

import Attachments from '@/components/common/Attachments';
import { BlackButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import BasicEditor, { BasicEditorContent } from '@/components/editor/BasicEditor';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Guide, StudentType } from '@/types/academics';

import { contentToFormData, getAttachmentDeleteIds } from '@/utils/formData';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast } from '@/utils/toast';

export default function GuidePageContent({ data, type }: { data: Guide; type: StudentType }) {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleComplete = async (content: BasicEditorContent) => {
    if (!content.description.ko) {
      throw new Error('내용을 입력해주세요');
    }

    const formData = contentToFormData({
      requestObject: {
        description: content.description.ko,
        deleteIds: getAttachmentDeleteIds(
          content.attachments,
          data.attachments.map((x) => x.id),
        ),
      },
      attachments: content.attachments,
    });

    try {
      handleServerAction(await putGuideAction(type, formData));
      setIsEditMode(false);
      window.scrollTo({ top: 0 });
    } catch (e) {
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
          }}
          actions={{
            type: 'EDIT',
            onCancel: () => setIsEditMode(false),
            onComplete: handleComplete,
          }}
          showAttachments
        />
      ) : (
        <>
          <LoginVisible staff>
            <div className="text-right">
              <BlackButton title="편집" onClick={() => setIsEditMode(true)} />
            </div>
          </LoginVisible>
          <Attachments files={data.attachments} />
          <HTMLViewer htmlContent={data.description} />
        </>
      )}
    </PageLayout>
  );
}
