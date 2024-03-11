'use client';

import { MutableRefObject } from 'react';
import { ko } from 'suneditor/src/lang/';
import SunEditorCore from 'suneditor/src/lib/core';
import plugins from 'suneditor/src/plugins';
import './suneditor.css';
import './suneditor-contents.css';
import SunEditor from 'suneditor-react';

import { BASE_URL } from '@/apis/common';

export default function SunEditorWrapper({
  editorRef,
  initialContent,
}: {
  editorRef: MutableRefObject<SunEditorCore | undefined>;
  initialContent?: string;
}) {
  return (
    <SunEditor
      getSunEditorInstance={(x) => (editorRef.current = x)}
      setDefaultStyle={`padding: 1rem;`}
      height="400px"
      lang={ko}
      defaultValue={initialContent}
      setOptions={{
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
        //   TODO: URL 논의
        imageUploadUrl: `${BASE_URL}/api/v1/file/upload`,
      }}
    />
  );
}
