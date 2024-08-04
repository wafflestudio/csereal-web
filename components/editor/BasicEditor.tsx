import dynamic from 'next/dynamic';
import React, { MutableRefObject, useRef, useState } from 'react';
import SunEditorCore from 'suneditor/src/lib/core';

import SunEditorFallback from '@/components/editor/SunEditor/SunEditorFallback';

import { isContentEmpty } from '@/utils/post';

import { EditAction, EditActionButtons } from './common/ActionButtons';
import Fieldset from './common/Fieldset';
import FilePicker, { FilePickerProps } from './common/FilePicker';
import ImagePicker, { ImagePickerProps } from './common/ImagePicker';
import { PostEditorFile, PostEditorImage } from './PostEditorTypes';

const SunEditorWrapper = dynamic(() => import('./SunEditor/SunEditorWrapper'), {
  ssr: false,
  loading: () => <SunEditorFallback />,
});

export interface BasicEditorContent {
  description: string;
  mainImage: PostEditorImage;
  attachments: PostEditorFile[];
}

interface BasicPostEditorProps {
  actions: EditAction<BasicEditorContent>;
  initialContent: BasicEditorContent;
  showMainImage?: boolean;
  showAttachments?: boolean;
}

const defaultContent: BasicEditorContent = {
  description: '',
  mainImage: null,
  attachments: [],
};

export default function BasicEditor({
  actions,
  initialContent,
  showMainImage = false,
  showAttachments = false,
}: BasicPostEditorProps) {
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

  return (
    <form className="flex flex-col">
      <EditorFieldset editorRef={editorRef} initialContent={content.description} />
      {showMainImage && (
        <ImageFieldset
          file={content.mainImage}
          setFile={(file) => {
            setContent((prev) => ({ ...prev, mainImage: file }));
          }}
        />
      )}
      {showAttachments && (
        <FileFieldset
          files={content.attachments}
          setFiles={(dispatch) => {
            setContent((content) => ({ ...content, attachments: dispatch(content.attachments) }));
          }}
        />
      )}
      <div className="mb-6 flex justify-end gap-3">
        <EditActionButtons {...actions} getContent={getContent} />
      </div>
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

function ImageFieldset({ file, setFile }: ImagePickerProps) {
  return (
    <Fieldset title="사진" mb="mb-12" titleMb="mb-2">
      <label className="mb-3 whitespace-pre-wrap text-sm font-normal tracking-wide text-neutral-500">
        글 우측 상단에 들어가는 이미지입니다.
      </label>
      <ImagePicker file={file} setFile={setFile} />
    </Fieldset>
  );
}

function FileFieldset({ files, setFiles }: FilePickerProps) {
  return (
    <Fieldset title="첨부파일" mb="mb-6" titleMb="mb-3">
      <FilePicker files={files} setFiles={setFiles} />
    </Fieldset>
  );
}
