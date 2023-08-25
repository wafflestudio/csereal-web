'use client';

import { MutableRefObject } from 'react';
import { ko } from 'suneditor/src/lang/';
import SunEditorCore from 'suneditor/src/lib/core';
import plugins from 'suneditor/src/plugins';
import SunEditor from 'suneditor-react';

import './suneditor.custom.css';

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
      defaultValue={
        '<p>고교 졸업생 자격으로 수시 모집과 정시 모집에 지원할 수 있으며, 학사 학위 소지자는 학사 편입학에 지원할 수 있습니다.<br></p><p><br></p><h3>모집 시기</h3><hr class="__se__solid"><p>12월경 지원서 접수가 시작됩니다. 자세한 일정한 해당 기간 서울대학교 입학관리본부에서 확인하실 수 있습니다.</p><p><br></p><h3>지원 자격</h3><hr class="__se__solid"><p><strong>일반 전형</strong><br></p><p>고등학교 졸업(예정)자 또는 법령에 의하여 고등학교 졸업 이상의 학력이 있다고 인정된 자로서 서울대학교 자연계열의 대학수학능력시험 응시 지정영역 및 영역별 응시기준을 충족한 자</p><p><strong><br></strong></p><p><strong>기회균형선발특별전형 - 특수교육대상자</strong></p><p>서울대학교 특수교육대상자 지원자격심사위원회에서 특수교육 대상자로 선정된 자</p><p><strong><br></strong></p><p><strong>기회균형선발특별전형 - 새터민 (북한이탈주민)</strong><br></p><p>최근 5년 이내 (인터넷 접수 마감일 기준)에 입국한 새터민 (북한이탈주민)으로서, 고등학교 졸업(예정)자 또는 법령에 의하여 이와 동등 이상의 학력이 있다고 인정된 자로서, 서울대학교 자연계열의 대학수학능력시험 응시 지정 영역 및 영역별 응시기준을 충족하는 자</p><p><br></p><h3>지원서 접수</h3><hr class="__se__solid"><p>지원서는 인터넷으로만 접수를 받고 있습니다. 지원 기간에 서울대학교 입학본부에서 안내에 따라 지원서를 제출합니다.</p><p><br></p><h3>선발 방식</h3><hr class="__se__solid"><p>단계별 전형을 실시하며, 서류평가, 논술고사 결과를 종합적으로 고려하여 선발합니다.</p><p><br></p><h3>합격자 발표</h3><hr class="__se__solid"><p>2월 서울대학교 입학 본부 또는 ARS 전화 060-700-1930를 이용하여 합격여부를 확인하실 수 있습니다. 합격여부를 확인할 책임은 지원자 본인에게 있습니다.<br></p>'
      }
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
        attributesWhitelist: {
          all: 'style',
        },
      }}
    />
  );
}
