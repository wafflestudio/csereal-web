'use client';

// import { useReducer } from 'react';

// import { putInternalAction } from '@/actions/internal';

// import LoginVisible from '@/components/common/LoginVisible';
// import BasicEditor, { BasicEditorContent } from '@/components/editor/BasicEditor';
import HTMLViewer from '@/components/editor/HTMLViewer';
// import { GrayButton } from '@/components/editor/common/ActionButtons';

// import { errorToast, successToast } from '@/utils/toast';
// import { handleServerAction } from '@/utils/serverActionError';

export default function InternalContent({ description }: { description: string }) {
  // const [isEditMode, toggleEditMode] = useReducer((x) => !x, false);

  // const handleComplete = async (content: BasicEditorContent) => {
  //   try {
  //     handleServerAction(await putInternalAction(content.description));
  //     successToast('본문을 수정했습니다.');
  //   } catch (e) {
  //     errorToast('본문을 수정하지 못했습니다.');
  //   }
  // };

  return <HTMLViewer htmlContent={description} />;

  // isEditMode ? (
  //   <BasicEditor
  //     initialContent={{ description }}
  //     actions={{
  //       type: 'EDIT',
  //       onComplete: handleComplete,
  //       onCancel: toggleEditMode,
  //     }}
  //   />
  // ) : (
  //   <>
  //     <LoginVisible staff>
  //       <GrayButton title="편집" onClick={toggleEditMode} disabled={false} />
  //     </LoginVisible>
  //     <HTMLViewer htmlContent={description} />
  //   </>
  // );
}