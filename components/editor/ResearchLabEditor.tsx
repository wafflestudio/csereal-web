import dynamic from 'next/dynamic';
import React, { MutableRefObject, useRef, useState } from 'react';
import SunEditorCore from 'suneditor/src/lib/core';

import SunEditorFallback from '@/components/editor/SunEditor/SunEditorFallback';
import { Language, WithLanguage } from '@/types/language';
import { SimpleFaculty } from '@/types/people';
import { ResearchGroup, ResearchLab } from '@/types/research';
import useEditorContent from '@/utils/hooks/useEditorContent';
import { isContentEmpty } from '@/utils/post';

import Dropdown from '../common/form/Dropdown';
import { EditAction, EditActionButtons } from './common/ActionButtons';
import BasicTextInput from './common/BasicTextInput';
import Fieldset from './common/Fieldset';
import FilePicker, { FilePickerProps } from './common/FilePicker';
import LangauageFieldset from './common/LanguageFieldset';
import { PostEditorFile } from './PostEditorTypes';

const SunEditorWrapper = dynamic(() => import('./SunEditor/SunEditorWrapper'), {
  ssr: false,
  loading: () => <SunEditorFallback />,
});

export interface ResearchLabEditorContent {
  name: string;
  description: string;
  groupId: number | null;
  professorIds: number[];
  location: string;
  tel: string;
  acronym: string;
  pdf: PostEditorFile[];
  youtube: string;
  websiteURL: string;
}

interface ResearchLabEditorProps {
  professors: WithLanguage<SimpleFaculty[]>;
  groups: WithLanguage<ResearchGroup[]>;
  actions: EditAction<WithLanguage<ResearchLabEditorContent>>;
  initialContent?: WithLanguage<ResearchLab>;
}

export default function ResearchLabEditor({
  professors,
  groups,
  actions,
  initialContent,
}: ResearchLabEditorProps) {
  const [language, setLanguage] = useState<Language>('ko');
  const { content, setContentByKey, setContent } = useEditorContent(
    getInitialContent(initialContent),
    language,
  );
  const editorRef = { ko: useRef<SunEditorCore>(), en: useRef<SunEditorCore>() };
  const currLangContent = content[language];

  const getEditorContent = (lang: Language) => {
    const currEditor = editorRef[lang].current;
    return currEditor && !isContentEmpty(currEditor) ? currEditor.getContents(false) : '';
  };

  const updateEditorContent = () => {
    const editorContent = getEditorContent(language);
    if (editorContent) {
      setContentByKey('description')(editorContent);
    }
  };

  const getContent = () => {
    const koDesc = getEditorContent('ko') || (initialContent?.ko.description ?? '');
    const enDesc = getEditorContent('en') || (initialContent?.en.description ?? '');

    return {
      ko: { ...content.ko, description: koDesc },
      en: { ...content.en, description: enDesc },
    };
  };

  const changeLanguage = (newLang: Language) => {
    updateEditorContent(); // 언어 바꾸기 전에 현재 언어 에디터 내용 저장
    setLanguage(newLang);
  };

  return (
    <form className="flex flex-col">
      <LangauageFieldset onChange={changeLanguage} selected={language} />
      <NameFieldset value={currLangContent.name} onChange={setContentByKey('name')} />
      <div className="flex w-[30rem] gap-6">
        <ProfessorFieldset
          professors={professors[language]}
          selected={currLangContent.professorIds[0] ?? null}
          onChange={(id) => setContentByKey('professorIds')(id === null ? [] : [id])}
        />
        <AcronymFieldset
          value={currLangContent.acronym}
          onChange={setContentByKey('acronym', true)}
        />
      </div>
      <div className="flex w-[45rem] gap-6">
        <TelephoneFieldset value={currLangContent.tel} onChange={setContentByKey('tel', true)} />
        <WebsiteFieldset
          value={currLangContent.websiteURL}
          onChange={setContentByKey('websiteURL', true)}
        />
      </div>
      <LocationFieldset value={currLangContent.location} onChange={setContentByKey('location')} />
      <ResearchGroupFieldset
        groups={groups[language]}
        selected={currLangContent.groupId}
        onChange={setContentByKey('groupId')}
      />
      <Fieldset title="소개 자료" mb="mb-8" titleMb="mb-2">
        <FileFieldset
          files={currLangContent.pdf}
          setFiles={(dispatch) => {
            setContent((prev) => ({
              ko: { ...prev.ko, pdf: dispatch(prev.ko.pdf) },
              en: { ...prev.en, pdf: dispatch(prev.en.pdf) },
            }));
          }}
        />
        <YoutubeFieldset
          value={currLangContent.youtube}
          onChange={setContentByKey('youtube', true)}
        />
      </Fieldset>
      <EditorFieldset
        key={language}
        editorRef={editorRef[language]}
        initialContent={currLangContent.description}
      />

      <div className="mb-6 flex justify-end gap-3">
        <EditActionButtons {...actions} getContent={getContent} />
      </div>
    </form>
  );
}

function NameFieldset({ value, onChange }: { value: string; onChange: (text: string) => void }) {
  return (
    <Fieldset title="연구실명" mb="mb-6" titleMb="mb-2" required>
      <BasicTextInput value={value} onChange={onChange} maxWidth="max-w-[30rem]" />
    </Fieldset>
  );
}

// TODO: 지도교수 복수 선택 가능하도록
function ProfessorFieldset({
  professors,
  selected,
  onChange,
}: {
  professors: SimpleFaculty[];
  selected: number | null;
  onChange: (id: number | null) => void;
}) {
  const getSelectedIndex = () => {
    const idx = professors.findIndex((e) => e.id === selected);
    return idx === -1 ? 0 : idx + 1;
  };

  return (
    <Fieldset title="지도교수" mb="mb-11" titleMb="mb-2" required>
      <Dropdown
        contents={['선택 안 함', ...professors.map((prof) => prof.name)]}
        selectedIndex={getSelectedIndex()}
        onClick={(i) => {
          onChange(i === 0 ? null : professors[i - 1].id);
        }}
      />
    </Fieldset>
  );
}

function AcronymFieldset({ value, onChange }: { value: string; onChange: (text: string) => void }) {
  return (
    <Fieldset title="연구실 약자" mb="mb-11" titleMb="mb-2">
      <BasicTextInput value={value} onChange={onChange} maxWidth="w-[17rem]" />
    </Fieldset>
  );
}

function TelephoneFieldset({
  value,
  onChange,
}: {
  value: string;
  onChange: (text: string) => void;
}) {
  return (
    <Fieldset title="전화" mb="mb-6" titleMb="mb-2">
      <BasicTextInput
        value={value}
        onChange={onChange}
        maxWidth="w-[21.75rem]"
        placeholder="예: (02) 880-7302"
      />
    </Fieldset>
  );
}

function WebsiteFieldset({ value, onChange }: { value: string; onChange: (text: string) => void }) {
  return (
    <Fieldset title="웹사이트 주소" mb="mb-6" titleMb="mb-2">
      <BasicTextInput
        value={value}
        onChange={onChange}
        maxWidth="w-[21.75rem]"
        placeholder="예: http://hcil.snu.ac.kr/"
      />
    </Fieldset>
  );
}

function LocationFieldset({
  value,
  onChange,
}: {
  value: string;
  onChange: (text: string) => void;
}) {
  return (
    <Fieldset title="연구실 위치" mb="mb-11" titleMb="mb-2">
      <BasicTextInput
        value={value}
        onChange={onChange}
        maxWidth="w-[45rem]"
        placeholder="복수일 경우 “ / ”로 구분해주세요. 예: 301동 515호 / 518호 / 551-1호"
      />
    </Fieldset>
  );
}

function ResearchGroupFieldset({
  groups,
  selected,
  onChange,
}: {
  groups: ResearchGroup[];
  selected: number | null;
  onChange: (id: number | null) => void;
}) {
  const getSelectedIndex = () => {
    const idx = groups.findIndex((e) => e.id === selected);
    return idx === -1 ? 0 : idx + 1;
  };

  return (
    <Fieldset title="연구·교육 스트림" mb="mb-11" titleMb="mb-2" required>
      <Dropdown
        contents={['선택 안 함', ...groups.map((lab) => `${lab.name} 스트림`)]}
        selectedIndex={getSelectedIndex()}
        onClick={(i) => {
          onChange(i === 0 ? null : groups[i - 1].id);
        }}
      />
    </Fieldset>
  );
}

function FileFieldset({ files, setFiles }: FilePickerProps) {
  return (
    <div className="mb-2.5 flex w-[45rem] items-center">
      <span className="w-[3.5rem] text-sm text-neutral-400">| 문서</span>
      <FilePicker files={files} setFiles={setFiles} multiple={false} />
    </div>
  );
}

function YoutubeFieldset({ value, onChange }: { value: string; onChange: (text: string) => void }) {
  return (
    <div className="flex w-[45rem] items-center">
      <span className="w-[3.5rem] text-sm text-neutral-400">| 유튜브</span>
      <BasicTextInput
        value={value}
        onChange={onChange}
        maxWidth="w-[41.5rem]"
        placeholder="예: https://www.youtube.com/watch?v=bCLWYhurBuo"
      />
    </div>
  );
}

function EditorFieldset({
  editorRef,
  initialContent,
}: {
  editorRef: MutableRefObject<SunEditorCore | undefined>;
  initialContent: string;
}) {
  return (
    <Fieldset title="연구실 설명 및 이미지" mb="mb-10" titleMb="mb-2" required>
      <SunEditorWrapper editorRef={editorRef} initialContent={initialContent} />
    </Fieldset>
  );
}

const DEFAULT_CONTENT: ResearchLabEditorContent = {
  name: '',
  description: '',
  professorIds: [],
  location: '',
  tel: '',
  acronym: '',
  pdf: [],
  youtube: '',
  websiteURL: '',
  groupId: null,
};

const getDefaultContentDetail = (content?: ResearchLab): ResearchLabEditorContent => {
  return content
    ? {
        ...content,
        professorIds: content.professors.map((prof) => prof.id),
        groupId: content.group.id,
        pdf: content.pdf ? [{ type: 'UPLOADED_FILE', file: content.pdf }] : [],
        websiteURL: content.websiteURL ?? '',
      }
    : DEFAULT_CONTENT;
};

const getInitialContent = (initContent?: WithLanguage<ResearchLab>) => {
  return {
    ko: getDefaultContentDetail(initContent?.ko),
    en: getDefaultContentDetail(initContent?.en),
  };
};
