import dynamic from 'next/dynamic';
import React, { MutableRefObject, useRef, useState } from 'react';
import SunEditorCore from 'suneditor/src/lib/core';

import SunEditorFallback from '@/components/editor/SunEditor/SunEditorFallback';
import { Language, WithLanguage } from '@/types/language';
import { ResearchGroup, ResearchLab } from '@/types/research';
import useEditorContent from '@/utils/hooks/useEditorContent';
import { isContentEmpty } from '@/utils/post';

import Dropdown from '../common/form/Dropdown';
import { EditAction, EditActionButtons } from './common/ActionButtons';
import BasicTextInput from './common/BasicTextInput';
import Fieldset from './common/Fieldset';
import LangauageFieldset from './common/LanguageFieldset';

const SunEditorWrapper = dynamic(() => import('./SunEditor/SunEditorWrapper'), {
  ssr: false,
  loading: () => <SunEditorFallback />,
});

// export interface ResearchLab {
//   name: string;
//   professors: { id: number; name: string }[];
//   location: string;
//   tel: string;
//   acronym: string;
//   pdf: { url: string };
//   youtube: string;
//   description: string;
//   websiteURL: string;
//   group: string;
// }

interface ResearchLabEditorProps {
  actions: EditAction<WithLanguage<ResearchLab>>;
  initialContent?: WithLanguage<ResearchLab>;
}

export default function ResearchLabEditor({ actions, initialContent }: ResearchLabEditorProps) {
  const [language, setLanguage] = useState<Language>('ko');
  const { content, setContentByKey } = useEditorContent(
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
      <AcronymFieldset value={currLangContent.acronym} onChange={setContentByKey('acronym')} />
      <TelephoneFieldset
        value={currLangContent.tel ?? ''}
        onChange={setContentByKey('tel', true)}
      />
      <WebsiteFieldset
        value={currLangContent.websiteURL ?? ''}
        onChange={setContentByKey('websiteURL', true)}
      />
      {/* TODO: researchGroup id 달라고 요청하기 */}
      <ResearchGroupFieldset selected={0} onChange={() => {}} groups={[]} />
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
    <Fieldset title="연구실명" mb="mb-8" titleMb="mb-2" required>
      <BasicTextInput value={value} onChange={onChange} maxWidth="max-w-[30rem]" />
    </Fieldset>
  );
}

function AcronymFieldset({ value, onChange }: { value: string; onChange: (text: string) => void }) {
  return (
    <Fieldset title="연구실 약자" mb="mb-8" titleMb="mb-2">
      <BasicTextInput value={value} onChange={onChange} maxWidth="max-w-[30rem]" />
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
    <Fieldset title="전화" mb="mb-5" titleMb="mb-2">
      <BasicTextInput
        value={value}
        onChange={onChange}
        maxWidth="max-w-[20rem]"
        placeholder="예: (02) 880-7302"
      />
    </Fieldset>
  );
}

function WebsiteFieldset({ value, onChange }: { value: string; onChange: (text: string) => void }) {
  return (
    <Fieldset title="웹사이트 주소" mb="mb-8" titleMb="mb-2">
      <BasicTextInput
        value={value}
        onChange={onChange}
        maxWidth="max-w-[30rem]"
        placeholder="예: http://hcil.snu.ac.kr/"
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
    <Fieldset title="연구실" mb="mb-5" titleMb="mb-2">
      <Dropdown
        contents={['선택 안 함', ...groups.map((lab) => lab.name)]}
        selectedIndex={getSelectedIndex()}
        onClick={(i) => {
          onChange(i === 0 ? null : groups[i - 1].id);
        }}
      />
    </Fieldset>
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
    <Fieldset title="내용" mb="mb-10" titleMb="mb-2" required>
      <SunEditorWrapper editorRef={editorRef} initialContent={initialContent} />
    </Fieldset>
  );
}

const DEFAULT_CONTENT: ResearchLab = {
  id: 0, // TODO: 삭제
  name: '',
  professors: [],
  location: '',
  tel: '',
  acronym: '',
  pdf: { url: '' },
  youtube: '',
  description: '',
  websiteURL: '',
  group: '',
};

const getDefaultContentDetail = (content?: ResearchLab): ResearchLab => {
  return content || DEFAULT_CONTENT;
};

const getInitialContent = (initContent?: WithLanguage<ResearchLab>) => {
  return {
    ko: getDefaultContentDetail(initContent?.ko),
    en: getDefaultContentDetail(initContent?.en),
  };
};
