'use client';

import { MutableRefObject, lazy } from 'react';
import { ko } from 'suneditor/src/lang/';
import SunEditorCore from 'suneditor/src/lib/core';
import plugins from 'suneditor/src/plugins';

// TODO
// 정말 왜그러는지 모르겠는데 lazy + typeof window 조합으로만 빌드가 됨
// 건들지 말..것..
const SunEditor = lazy(() => import('suneditor-react'));

import './suneditor.css';
import './suneditor-contents.css';

export default function SunEditorWrapper({
  editorRef,
  initialContent,
}: {
  editorRef: MutableRefObject<SunEditorCore | undefined>;
  initialContent?: string;
}) {
  return (
    typeof window !== 'undefined' && (
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
          // imageUploadUrl: `${BASE_URL}/file/upload`,
        }}
      />
    )
  );
}

// Suspense 쓰도록 고칠 때까지 삭제
// const SunEditorFallback = () => {
//   return (
//     <div className="animate-pulse flex flex-col mx-[3.75rem] mt-3 h-[400px]">
//       <div className="flex flex-col gap-2">
//         <div className="h-4 bg-[#ffffff] opacity-30 rounded w-2/5"></div>
//         <div className="h-4 bg-[#ffffff] opacity-30 rounded w-2/5"></div>
//       </div>
//       <div className="flex flex-1 flex-col gap-2 w-3/5 mt-4">
//         <div className="h-4 bg-[#ffffff] opacity-30 rounded"></div>
//         <div className="h-4 bg-[#ffffff] opacity-30 rounded"></div>
//         <div className="h-4 bg-[#ffffff] opacity-30 rounded"></div>
//       </div>
//     </div>
//   );
// };

// https://github.com/JiHong88/SunEditor/issues/199
export const isContentEmpty = (editor: SunEditorCore) => {
  const wysiwyg = editor.core.context.element.wysiwyg;
  if (!wysiwyg.textContent) return true;

  return (
    editor.util.onlyZeroWidthSpace(wysiwyg.textContent) &&
    !wysiwyg.querySelector('.se-component, pre, blockquote, hr, li, table, img, iframe, video') &&
    (wysiwyg.textContent.match(/\n/g) || '').length <= 1
  );
};
