import dynamic from 'next/dynamic';
import React, { MutableRefObject, useRef, useState } from 'react';
import SunEditorCore from 'suneditor/src/lib/core';

import SunEditorFallback from '@/components/editor/SunEditor/SunEditorFallback';

import { isContentEmpty } from '@/utils/post';

import { EditAction, EditActionButtons } from './common/ActionButtons';
import Fieldset from './common/Fieldset';
import { PostEditorFile, PostEditorImage } from './PostEditorTypes';

const SunEditorWrapper = dynamic(() => import('./SunEditor/SunEditorWrapper'), {
  ssr: false,
  loading: () => <SunEditorFallback />,
});

export interface BasicEditorContent {
  description: string;
  mainImage?: PostEditorImage;
  attachments?: PostEditorFile[];
}

interface BasicPostEditorProps {
  actions: EditAction<BasicEditorContent>;
  initialContent: BasicEditorContent;
}

const defaultContent: BasicEditorContent = {
  description: '',
  mainImage: null,
  attachments: [],
};

export default function BasicEditor({ actions, initialContent }: BasicPostEditorProps) {
  const editorRef = useRef<SunEditorCore>();
  const [content, setContent] = useState<BasicEditorContent>({
    ...defaultContent,
    ...initialContent,
  });

  const getContent = () => {
    let description = '';
    if (editorRef.current && !isContentEmpty(editorRef.current))
      description = editorRef.current.getContents(false);

    return { ...content, description };
  };

  // TODO: mainImage 관련 로직
  // TODO: attachments 관련 로직

  return (
    <form className="flex flex-col">
      <div className="mb-6 flex gap-3">
        <EditActionButtons {...actions} getContent={getContent} showDelete={false} />
      </div>
      <EditorFieldset editorRef={editorRef} initialContent={content.description} />
    </form>
  );
}

function EditorFieldset({
  editorRef,
  initialContent,
}: {
  editorRef: MutableRefObject<SunEditorCore | undefined>;
  initialContent: string;
}) {
  return (
    <Fieldset title="내용" mb="mb-6" titleMb="mb-2" required>
      <SunEditorWrapper editorRef={editorRef} initialContent={initialContent} />
    </Fieldset>
  );
}
