'use client';

import { useRef } from 'react';
import SunEditorCore from 'suneditor/src/lib/core';

import SunEditorWrapper from '@/components/editor/SunEditorWrapper';
import PageLayout from '@/components/layout/PageLayout';

import Fieldset from './Fieldset';

type EditorProps =
  | {
      type: 'NEWS_CREATE';
    }
  | {
      type: 'NEWS_EDIT';
    }
  | {
      type: 'NOTICE_CREATE';
    }
  | {
      type: 'NOTICE_EDIT';
    };

export default function NewsNoticeEditor({}: EditorProps) {
  const editorRef = useRef<SunEditorCore>();

  return (
    <PageLayout title="새소식 쓰기" titleType="small">
      <form className="flex flex-col">
        <Fieldset title="제목" mb="mb-6">
          <input
            type="text"
            className={`mw-[40rem] rounded-sm border-[1px] border-neutral-700 h-[1.875rem] 
            outline-none font-noto text-xs pl-2 font-normal `}
            placeholder="제목을 입력하세요."
          />
        </Fieldset>
        <Fieldset title="내용" mb="mb-6">
          <SunEditorWrapper editorRef={editorRef} />
        </Fieldset>
        <Fieldset title="대표 이미지" mb="mb-6">
          ㅁ
        </Fieldset>
        <Fieldset title="첨부파일" mb="mb-6">
          ㅁ
        </Fieldset>
        <Fieldset title="태그" mb="mb-6">
          ㅁ
        </Fieldset>
        <Fieldset title="게시 설정" mb="mb-6">
          ㅁ
        </Fieldset>
      </form>
    </PageLayout>
  );
}
