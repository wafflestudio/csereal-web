'use client';

import { MutableRefObject, Suspense, lazy } from 'react';
import { ko } from 'suneditor/src/lang/';
import SunEditorCore from 'suneditor/src/lib/core';
import plugins from 'suneditor/src/plugins';

const SunEditor = lazy(() => import('suneditor-react'));

import './suneditor.custom.css';

const initialContent = `<p>​<span style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">서울대학교 AI 연구원은 인공지능 및 딥러닝 관련 혁신 연구의 중심지로, 차세대 인공지능 기술 분야에서 세계를 이끄는 연구자들이 모여 대한민국과 전 세계의 과학·기술·경제 흐름을 바꾸는 획기적인 연구를 수행하는 것을 목표로 한다. 연구자들은 컴퓨터 비전, 음성 인식, 자연어 처리, 로봇 공학, 인공지능 비서, 인공 신경망, 머신러닝 소프트웨어 및 하드웨어, 대용량 병렬 처리, 분산 시스템, 컴퓨터 그래픽스, 확률 추론, 베이즈 통계, 통계 물리학, 정보 이론, 뉴로모픽 컴퓨팅, 뇌과학, 인지 과학 등 다양한 분야에서 활약하는 전문가들로 이루어져 있으며, 산·학·연이 서로 협력하여 센터의 중장기 비전을 실현하는 데에 힘쓰고 있다.</span>​<br></p>`;

export default function SunEditorWrapper({
  editorRef,
} //   initialContent,
: {
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
