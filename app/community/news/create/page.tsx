'use client';

import { ReactNode, useRef } from 'react';
import SunEditorCore from 'suneditor/src/lib/core';

import Editor from '@/components/editor/SunEditorWrapper';
import PageLayout from '@/components/layout/PageLayout';

export default function NewsCreate() {
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
          <Editor editorRef={editorRef} />
        </Fieldset>
        <Fieldset title="대표 이미지" mb="mb-6">
          ㅁ
        </Fieldset>
        <Fieldset title="첨부파일" mb="mb-6">
          ㅁ
        </Fieldset>
        <Fieldset title="태그" mb="mb-6">ㅁ</Fieldset>
        <Fieldset title="게시 설정" mb="mb-6">ㅁ</Fieldset>
      </form>
    </PageLayout>
  );
}

interface FieldsetProps {
  title: string;
  mb: 'mb-6' | 'mb-9';
  children: ReactNode;
}

const Fieldset = ({ title, mb, children }: FieldsetProps) => {
  return (
    <fieldset className={`flex flex-col ${mb}`}>
      <label className="font-yoon text-sm font-medium tracking-wide mb-2">{title}</label>
      {children}
    </fieldset>
  );
};
