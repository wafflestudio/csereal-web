'use client';

import { MutableRefObject, Suspense, lazy } from 'react';
import { ko } from 'suneditor/src/lang/';
import SunEditorCore from 'suneditor/src/lib/core';
import plugins from 'suneditor/src/plugins';

const SunEditor = lazy(() => import('suneditor-react'));

import './suneditor.custom.css';

const initialContent =
  '<h2 style="margin: 1.07143em 0px 0.714286em; font-family: &quot;Lucida Sans Unicode&quot;, Verdana, Helvetica, Arial, &quot;맑은 고딕&quot;, 나눔고딕, 서울남산체, sans-serif; color: rgb(109, 172, 255); font-size: 1.4em; padding-bottom: 0.357143em; border-bottom: 1px solid rgb(236, 236, 236); overflow: hidden; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">장학 금액</h2><ul style="margin: 1em 0px; padding-left: 2em; list-style-type: square; color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><li style="margin: 0.2em 0px; padding: 0px;">유형1 (월 40시간) - 시급 9000원</li><li style="margin: 0.2em 0px; padding: 0px;">유형2 (월 60시간) - 시급 9000원</li></ul><h2 style="margin: 1.07143em 0px 0.714286em; font-family: &quot;Lucida Sans Unicode&quot;, Verdana, Helvetica, Arial, &quot;맑은 고딕&quot;, 나눔고딕, 서울남산체, sans-serif; color: rgb(109, 172, 255); font-size: 1.4em; padding-bottom: 0.357143em; border-bottom: 1px solid rgb(236, 236, 236); overflow: hidden; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">자격</h2><p style="margin: 1em 0px; color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">근로를 원하는 학사과정 재학생</p><h2 style="margin: 1.07143em 0px 0.714286em; font-family: &quot;Lucida Sans Unicode&quot;, Verdana, Helvetica, Arial, &quot;맑은 고딕&quot;, 나눔고딕, 서울남산체, sans-serif; color: rgb(109, 172, 255); font-size: 1.4em; padding-bottom: 0.357143em; border-bottom: 1px solid rgb(236, 236, 236); overflow: hidden; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">선발기준</h2><p style="margin: 1em 0px; color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">각 기관에서 성실하게 근로할 수 있는 학생 (기관별 상이)</p><h2 style="margin: 1.07143em 0px 0.714286em; font-family: &quot;Lucida Sans Unicode&quot;, Verdana, Helvetica, Arial, &quot;맑은 고딕&quot;, 나눔고딕, 서울남산체, sans-serif; color: rgb(109, 172, 255); font-size: 1.4em; padding-bottom: 0.357143em; border-bottom: 1px solid rgb(236, 236, 236); overflow: hidden; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">신청 시기</h2><ul style="margin: 1em 0px; padding-left: 2em; list-style-type: square; color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><li style="margin: 0.2em 0px; padding: 0px;">1학기 (2월)</li><li style="margin: 0.2em 0px; padding: 0px;">2학기 (8월)</li></ul><h2 style="margin: 1.07143em 0px 0.714286em; font-family: &quot;Lucida Sans Unicode&quot;, Verdana, Helvetica, Arial, &quot;맑은 고딕&quot;, 나눔고딕, 서울남산체, sans-serif; color: rgb(109, 172, 255); font-size: 1.4em; padding-bottom: 0.357143em; border-bottom: 1px solid rgb(236, 236, 236); overflow: hidden; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">신청 절차</h2><p style="margin: 1em 0px; color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">마이스누에서 신청</p>';

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
