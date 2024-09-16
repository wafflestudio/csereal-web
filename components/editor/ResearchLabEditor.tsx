import dynamic from 'next/dynamic';
import React, { MutableRefObject, useRef, useState } from 'react';
import SunEditorCore from 'suneditor/src/lib/core';

import SunEditorFallback from '@/components/editor/SunEditor/SunEditorFallback';
import { Language, WithLanguage } from '@/types/language';
import { ResearchLab } from '@/types/research';
import useEditorContent from '@/utils/hooks/useEditorContent';
import { isContentEmpty } from '@/utils/post';

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
      <WebsiteFieldset
        value={currLangContent.websiteURL ?? ''}
        onChange={setContentByKey('websiteURL', true)}
      />
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
    <Fieldset title="이름" mb="mb-8" titleMb="mb-2" required>
      <BasicTextInput value={value} onChange={onChange} maxWidth="max-w-[30rem]" />
    </Fieldset>
  );
}

function WebsiteFieldset({ value, onChange }: { value: string; onChange: (text: string) => void }) {
  return (
    <Fieldset title="웹사이트 주소" mb="mb-8" titleMb="mb-2">
      <BasicTextInput value={value} onChange={onChange} maxWidth="max-w-[30rem]" />
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
