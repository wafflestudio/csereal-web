'use client';

import { MutableRefObject, Suspense, lazy } from 'react';
import { ko } from 'suneditor/src/lang/';
import SunEditorCore from 'suneditor/src/lib/core';
import plugins from 'suneditor/src/plugins';

const SunEditor = lazy(() => import('suneditor-react'));

import './suneditor.custom.css';

export default function SunEditorWrapper({
  editorRef,
  initialContent,
}: {
  editorRef: MutableRefObject<SunEditorCore | undefined>;
  initialContent?: string;
}) {
  return (
    <Suspense fallback={<SunEditorFallback />}>
      <div className="font-noto-demi [&_strong]:font-noto [&_h1]:font-noto [&_h2]:font-noto [&_h3]:font-noto">
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
          }}
        />
      </div>
    </Suspense>
  );
}

const SunEditorFallback = () => {
  return (
    <div className="animate-pulse flex flex-col mx-[3.75rem] mt-3 h-[400px]">
      <div className="flex flex-col gap-2">
        <div className="h-4 bg-[#ffffff] opacity-30 rounded w-2/5"></div>
        <div className="h-4 bg-[#ffffff] opacity-30 rounded w-2/5"></div>
      </div>
      <div className="flex flex-1 flex-col gap-2 w-3/5 mt-4">
        <div className="h-4 bg-[#ffffff] opacity-30 rounded"></div>
        <div className="h-4 bg-[#ffffff] opacity-30 rounded"></div>
        <div className="h-4 bg-[#ffffff] opacity-30 rounded"></div>
      </div>
    </div>
  );
};
