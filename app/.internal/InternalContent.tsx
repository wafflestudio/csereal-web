'use client';

import { useReducer } from 'react';

import { putInternalAction } from '@/actions/internal';

import { GrayButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import BasicEditor, { BasicEditorContent } from '@/components/editor/BasicEditor';
import HTMLViewer from '@/components/editor/HTMLViewer';

import { errorToast, successToast } from '@/utils/toast';
import { handleServerAction } from '@/utils/serverActionError';

export default function InternalContent({ description }: { description: string }) {
  const [isEditMode, toggleEditMode] = useReducer((x) => !x, false);

  const handleSubmit = async (content: BasicEditorContent) => {
    try {
      handleServerAction(await putInternalAction(content.description.ko));
      successToast('본문을 수정했습니다.');
      toggleEditMode();
    } catch (e) {
      errorToast('본문을 수정하지 못했습니다.');
    }
  };

  return isEditMode ? (
    <BasicEditor
      initialContent={{ description: { ko: description, en: '' } }}
      actions={{
        type: 'EDIT',
        onSubmit: handleSubmit,
        onCancel: toggleEditMode,
      }}
    />
  ) : (
    <>
      <LoginVisible staff>
        <GrayButton title="편집" onClick={toggleEditMode} disabled={false} />
      </LoginVisible>
      <HTMLViewer htmlContent={description} />
    </>
  );
}
