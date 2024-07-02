'use client';

import React from 'react';
import { useReducer, useRef } from 'react';
import dynamic from 'next/dynamic';
import SunEditorCore from 'suneditor/src/lib/core';

import { putInternalAction } from '@/actions/internal';

import LoginVisible from '@/components/common/LoginVisible';
import HTMLViewer from '@/components/editor/HTMLViewer';
import SunEditorFallback from '@/components/editor/SunEditor/SunEditorFallback';

import { isContentEmpty } from '@/utils/post';
import { errorToast, successToast } from '@/utils/toast';

const SunEditorWrapper = dynamic(
  () => import('../../components/editor/SunEditor/SunEditorWrapper'),
  {
    ssr: false,
    loading: () => <SunEditorFallback />,
  },
);

export default function InternalContent({ description }: { description: string }) {
  const [isEditMode, toggleEditMode] = useReducer((x) => !x, false);
  const editorRef = useRef<SunEditorCore>();

  const getContent = () => {
    let description = '';
    if (editorRef.current && !isContentEmpty(editorRef.current))
      description = editorRef.current.getContents(false);

    return description;
  };

  const handleComplete = async () => {
    const newDesc = getContent();

    const result = await putInternalAction(newDesc);
    if (result) {
      errorToast('본문을 수정하지 못했습니다.');
    } else {
      successToast('본문을 수정했습니다.');
      toggleEditMode();
    }
  };

  return (
    <>
      <LoginVisible staff>
        <button
          onClick={toggleEditMode}
          className="rounded-[.0625rem] border-[1px] border-neutral-200 bg-neutral-100 px-[.875rem] py-[.34rem] text-sm font-medium leading-[1.5rem] text-neutral-500  enabled:hover:bg-neutral-200"
        >
          {isEditMode ? '취소' : '편집'}
        </button>
      </LoginVisible>
      {isEditMode ? (
        <div>
          <button
            onClick={handleComplete}
            className="my-2.5 rounded-[.0625rem] bg-neutral-700 px-[.875rem] py-[.34rem] text-sm font-bold leading-[1.5rem] text-white enabled:hover:bg-neutral-500"
          >
            수정
          </button>
          <SunEditorWrapper editorRef={editorRef} initialContent={description} />
        </div>
      ) : (
        <HTMLViewer htmlContent={description} />
      )}
    </>
  );
}
