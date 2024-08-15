'use client';

import './suneditor.css';
import './suneditor-contents.css';

import { MutableRefObject, useEffect, useState } from 'react';
import suneditor from 'suneditor';
import { ko } from 'suneditor/src/lang/';
import SunEditorCore from 'suneditor/src/lib/core';
import { SunEditorOptions } from 'suneditor/src/options';
import plugins from 'suneditor/src/plugins';

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

    const editor = suneditor.create(div, options);
    editor.onImageUploadBefore = handleImageUploadBefore;
    if (initialContent) editor.setContents(initialContent);

    editorRef.current = editor;
  }, [div, editorRef, initialContent]);

  return <div ref={setDiv} />;
}

// @ts-expect-error suneditor 내부 타입
const handleImageUploadBefore = (files, info, core, uploadHandler) => {
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

const options: SunEditorOptions = {
  defaultStyle: 'padding: 1rem',
  minHeight: '400px',
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
  imageMultipleFile: true,
  linkRelDefault: {
    // 안전하지 않은 써드파티 링크(target="_blank") 취약점 대응
    // TODO: 복사 붙여넣기 한 경우 대응
    check_new_window: 'noreferrer noopener',
  },
};
