'use client';

import { MutableRefObject, useEffect, useState } from 'react';
import suneditor from 'suneditor';
import { ko } from 'suneditor/src/lang/';
import SunEditorCore from 'suneditor/src/lib/core';
import plugins from 'suneditor/src/plugins';
import './suneditor.css';
import './suneditor-contents.css';

import { postImage } from '@/apis/image';

export default function SunEditorWrapper({
  editorRef,
  initialContent,
}: {
  editorRef: MutableRefObject<SunEditorCore | undefined>;
  initialContent?: string;
}) {
  const [div, setDiv] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (div === null) return;
    const editor = suneditor.create(div, {
      defaultStyle: 'padding: 1rem',
      height: '400px',
      lang: ko,
      plugins,
      buttonList: [
        ['undo', 'redo'],
        ['fontSize', 'formatBlock'],
        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
        '/', // Line break
        ['fontColor', 'hiliteColor'],
        ['lineHeight', 'align', 'horizontalRule', 'list'],
        ['table', 'link', 'image', 'preview'],
      ],
    });

    editor.onImageUploadBefore = handleImageUploadBefore;

    if (initialContent) editor.setContents(initialContent);

    editorRef.current = editor;
  }, [div, editorRef, initialContent]);

  return <div ref={setDiv} />;
}

// @ts-expect-error suneditor 내부 타입
const handleImageUploadBefore = (files, info, uploadHandler) => {
  const formData = new FormData();
  // @ts-expect-error suneditor 내부 타입
  files.forEach((file, idx) => {
    const ext = file.name.split('.').pop();
    const newFile = new File([file], `file-${idx}.${ext}`);
    formData.append(newFile.name, newFile);
  });

  postImage(formData)
    .then((resp) => uploadHandler(resp))
    .catch((reason) => uploadHandler(reason + ''));

  return undefined;
};
