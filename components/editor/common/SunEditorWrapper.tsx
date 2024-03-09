'use client';

import { MutableRefObject, Suspense } from 'react';
import { ko } from 'suneditor/src/lang/';
import SunEditorCore from 'suneditor/src/lib/core';
import plugins from 'suneditor/src/plugins';
import './suneditor.css';
import './suneditor-contents.css';
import SunEditor from 'suneditor-react';

import { BASE_URL } from '@/apis/network/common';

// TODO
// 정말 왜그러는지 모르겠는데 lazy + typeof window 조합으로만 빌드가 됨
// 건들지 말..것..

export default function SunEditorWrapper({
  editorRef,
  initialContent,
}: {
  editorRef: MutableRefObject<SunEditorCore | undefined>;
  initialContent?: string;
}) {
  return (
    <Suspense>
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
          imageUploadUrl: `${BASE_URL}/file/upload`,
        }}
      />
    </Suspense>
  );
}
