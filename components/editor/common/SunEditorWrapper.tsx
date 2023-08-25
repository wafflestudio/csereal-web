'use client';

import { MutableRefObject } from 'react';
import { ko } from 'suneditor/src/lang/';
import SunEditorCore from 'suneditor/src/lib/core';
import plugins from 'suneditor/src/plugins';
import SunEditor from 'suneditor-react';

import 'suneditor/dist/css/suneditor.min.css';

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
      height="400px"
      lang={ko}
      defaultValue={initialContent}
      setOptions={{
        plugins,
        buttonList: [
          ['undo', 'redo'],
          ['font', 'fontSize', 'formatBlock'],
          ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
          '/', // Line break
          ['fontColor', 'hiliteColor'],
          ['align', 'horizontalRule', 'list'],
          ['table', 'link', 'image'],
        ],
      }}
    />
  );
}
