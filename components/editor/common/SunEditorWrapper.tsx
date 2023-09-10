'use client';

import { MutableRefObject, Suspense, lazy } from 'react';
import { ko } from 'suneditor/src/lang/';
import SunEditorCore from 'suneditor/src/lib/core';
import plugins from 'suneditor/src/plugins';

const SunEditor = lazy(() => import('suneditor-react'));

import './suneditor.custom.css';

const initialContent = `<ol><li>학사과정 전공교과목 이수 표준형태 (2002학번부터 적용)</li><li><table style="margin: 1em 0px; border-collapse: collapse; color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><tbody><tr><th style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(236, 236, 236); text-align: center;"><div>구분</div></th><th style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(236, 236, 236); text-align: center;"><div>1학기</div></th><th style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(236, 236, 236); text-align: center;"><div>2학기</div></th></tr><tr><th style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(236, 236, 236); text-align: center;"><div>1학년</div></th><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><ul style="margin: 0.5em 0px; padding-left: 2em; list-style-type: square;"><li style="margin: 0.2em 0px; padding: 0px;">400.016 컴퓨터의 기초</li><li style="margin: 0.2em 0px; padding: 0px;">400.101 공학개론 1</li></ul></td><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><ul style="margin: 0.5em 0px; padding-left: 2em; list-style-type: square;"><li style="margin: 0.2em 0px; padding: 0px;">400.102 공학개론 2</li></ul></td></tr><tr><th style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(236, 236, 236); text-align: center;"><div>2학년</div></th><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><ul style="margin: 0.5em 0px; padding-left: 2em; list-style-type: square;"><li style="margin: 0.2em 0px; padding: 0px;">400.001* 공학수학 1</li><li style="margin: 0.2em 0px; padding: 0px;">4190.201* 논리설계</li><li style="margin: 0.2em 0px; padding: 0px;">4190.202* 논리설계실험</li><li style="margin: 0.2em 0px; padding: 0px;">4190.101* 이산수학</li><li style="margin: 0.2em 0px; padding: 0px;">4190.102 컴퓨터프로그래밍</li><li style="margin: 0.2em 0px; padding: 0px;">881.007 선형대수학</li></ul></td><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><ul style="margin: 0.5em 0px; padding-left: 2em; list-style-type: square;"><li style="margin: 0.2em 0px; padding: 0px;">400.002* 공학수학 2</li><li style="margin: 0.2em 0px; padding: 0px;">4190.203 시스템프로그래밍</li><li style="margin: 0.2em 0px; padding: 0px;">4190.204* 자료구조</li><li style="margin: 0.2em 0px; padding: 0px;">4190.208 회로이론</li><li style="margin: 0.2em 0px; padding: 0px;">420.402 세미나</li></ul></td></tr><tr><th style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(236, 236, 236); text-align: center;"><div>3학년</div></th><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><ul style="margin: 0.5em 0px; padding-left: 2em; list-style-type: square;"><li style="margin: 0.2em 0px; padding: 0px;">4190.205 전기전자회로실험</li><li style="margin: 0.2em 0px; padding: 0px;">4190.206 전자회로</li><li style="margin: 0.2em 0px; padding: 0px;">4190.306 오토마타이론</li><li style="margin: 0.2em 0px; padding: 0px;">4190.308 컴퓨터구조</li><li style="margin: 0.2em 0px; padding: 0px;">4190.309 컴퓨터시스템설계</li><li style="margin: 0.2em 0px; padding: 0px;">4190.312 화일처리</li><li style="margin: 0.2em 0px; padding: 0px;">( )* 공대공통교과목 중 택1</li></ul></td><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><ul style="margin: 0.5em 0px; padding-left: 2em; list-style-type: square;"><li style="margin: 0.2em 0px; padding: 0px;">4190.301 데이터베이스</li><li style="margin: 0.2em 0px; padding: 0px;">4190.302 데이터통신</li><li style="margin: 0.2em 0px; padding: 0px;">4190.303 마이크로프로세서응용</li><li style="margin: 0.2em 0px; padding: 0px;">4190.305 스위칭이론</li><li style="margin: 0.2em 0px; padding: 0px;">4190.307 운영체제</li><li style="margin: 0.2em 0px; padding: 0px;">4190.310 프로그래밍언어</li></ul></td></tr><tr><th style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(236, 236, 236); text-align: center;"><div>4학년</div></th><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><ul style="margin: 0.5em 0px; padding-left: 2em; list-style-type: square;"><li style="margin: 0.2em 0px; padding: 0px;">4190.311 프로젝트 1</li><li style="margin: 0.2em 0px; padding: 0px;">4190.401 VLSI 회로</li><li style="margin: 0.2em 0px; padding: 0px;">4190.402 소프트웨어공학</li><li style="margin: 0.2em 0px; padding: 0px;">4190.407 알고리즘</li><li style="margin: 0.2em 0px; padding: 0px;">4190.409 컴파일러</li><li style="margin: 0.2em 0px; padding: 0px;">4190.411 컴퓨터네트워크</li></ul></td><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><ul style="margin: 0.5em 0px; padding-left: 2em; list-style-type: square;"><li style="margin: 0.2em 0px; padding: 0px;">4190.403 소프트웨어응용</li><li style="margin: 0.2em 0px; padding: 0px;">4190.406 신형컴퓨터시스템</li><li style="margin: 0.2em 0px; padding: 0px;">4190.408 인공지능</li><li style="margin: 0.2em 0px; padding: 0px;">4190.410 컴퓨터그래픽스</li><li style="margin: 0.2em 0px; padding: 0px;">4190.412 컴퓨터모델링</li><li style="margin: 0.2em 0px; padding: 0px;">4190.413 프로젝트 2</li></ul></td></tr></tbody></table></li><li>전공선택 인정교과목</li><li style="margin: 0.2em 0px; padding: 0px;">공과대학 전기공학부·산업공학과 및 자연과학대학 수학과 교과목중 학부장이 인정하는 교과목</li><li>교과목 이수규정</li><li style="margin: 0.2em 0px; padding: 0px;">( )*는 전공필수 선택과목으로 400.013, 400.015, 400.019의 3개 교과목 중 1개 교과목을 이수하여야 함.</li><li>복수전공 이수규정</li><li style="margin: 0.2em 0px; padding: 0px;">학부내규에 따름.</li><li>부전공 이수규정</li><li style="margin: 0.2em 0px; padding: 0px;">해당사항 없음.</li></ol>`;

export default function SunEditorWrapper({
  editorRef,
}: {
  editorRef: MutableRefObject<SunEditorCore | undefined>;
  initialContent?: string;
}) {
  return (
    <Suspense fallback={<SunEditorFallback />}>
      <SunEditor
        getSunEditorInstance={(x) => (editorRef.current = x)}
        setDefaultStyle="padding: 1rem"
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
            ['lineHeight', 'align', 'horizontalRule', 'list'],
            ['table', 'link', 'image', 'preview'],
          ],
          attributesBlacklist: {
            all: 'style',
          },
        }}
      />
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
