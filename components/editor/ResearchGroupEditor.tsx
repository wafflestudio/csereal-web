import dynamic from 'next/dynamic';
import React, { MutableRefObject, useRef, useState } from 'react';
import SunEditorCore from 'suneditor/src/lib/core';

import SunEditorFallback from '@/components/editor/SunEditor/SunEditorFallback';
import { Language, WithLanguage } from '@/types/language';
import { SimpleResearchLab } from '@/types/research';
import { isContentEmpty } from '@/utils/post';

import { EditAction, EditActionButtons } from './common/ActionButtons';
import BasicTextInput from './common/BasicTextInput';
import Fieldset from './common/Fieldset';
import ImagePicker, { ImagePickerProps } from './common/ImagePicker';
import LangauageFieldset from './common/LanguageFieldset';
import { PostEditorImage } from './PostEditorTypes';

const SunEditorWrapper = dynamic(() => import('./SunEditor/SunEditorWrapper'), {
  ssr: false,
  loading: () => <SunEditorFallback />,
});

export interface ResearchGroupEditorContent {
  description: WithLanguage<string>;
  name: WithLanguage<string>;
  mainImage: PostEditorImage;
  labs: number[];
}

const DEFAULT_CONTENT: ResearchGroupEditorContent = {
  description: { ko: '', en: '' },
  name: { ko: '', en: '' },
  mainImage: null,
  labs: [],
};

interface ResearchGroupEditorProps {
  actions: EditAction<ResearchGroupEditorContent>;
  initialContent?: ResearchGroupEditorContent;
  labs: WithLanguage<SimpleResearchLab[]>;
}

export default function ResearchGroupEditor({
  actions,
  initialContent,
  labs,
}: ResearchGroupEditorProps) {
  const [language, setLanguage] = useState<Language>('ko');
  const editorRef = { ko: useRef<SunEditorCore>(), en: useRef<SunEditorCore>() };
  const [content, setContent] = useState<ResearchGroupEditorContent>(
    initialContent ?? DEFAULT_CONTENT,
  );

  const getEditorContent = (lang: Language) => {
    const currEditor = editorRef[lang].current;
    return currEditor && !isContentEmpty(currEditor) ? currEditor.getContents(false) : '';
  };

  const updateEditorContent = () => {
    const editorContent = getEditorContent(language);
    if (editorContent) {
      setContent((prev) => ({
        ...prev,
        description: { ...prev.description, [language]: editorContent },
      }));
    }
  };

  const getContent = () => {
    const description = {
      ko: getEditorContent('ko') || (initialContent?.description?.ko ?? ''),
      en: getEditorContent('en') || (initialContent?.description?.en ?? ''),
    };

    return { ...content, description };
  };

  const changeLanguage = (newLang: Language) => {
    updateEditorContent(); // 언어 바꾸기 전에 현재 언어 에디터 내용 저장
    setLanguage(newLang);
  };

  const setName = (name: string) => {
    setContent((prev) => ({ ...prev, name: { ...prev.name, [language]: name } }));
  };

  return (
    <form className="flex flex-col">
      <LangauageFieldset onChange={changeLanguage} selected={language} />
      <NameFieldset name={content.name[language]} setName={setName} />
      <EditorFieldset
        key={language}
        editorRef={editorRef[language]}
        initialContent={content.description[language]}
      />
      <ImageFieldset
        file={content.mainImage}
        setFile={(file) => {
          setContent((prev) => ({ ...prev, mainImage: file }));
        }}
      />
      <LabFieldset labs={labs[language]} />
      <div className="mb-6 flex justify-end gap-3">
        <EditActionButtons {...actions} getContent={getContent} />
      </div>
    </form>
  );
}

function NameFieldset({ name, setName }: { name: string; setName: (value: string) => void }) {
  return (
    <Fieldset title="이름" mb="mb-6" titleMb="mb-2" required>
      <BasicTextInput value={name} onChange={setName} maxWidth="w-[30rem]" />
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
    <Fieldset title="내용" mb="mb-6" titleMb="mb-2" required>
      <SunEditorWrapper editorRef={editorRef} initialContent={initialContent} />
    </Fieldset>
  );
}

function ImageFieldset({ file, setFile }: ImagePickerProps) {
  return (
    <Fieldset title="사진" mb="mb-12" titleMb="mb-2">
      <label className="mb-3 whitespace-pre-wrap text-sm font-normal tracking-wide text-neutral-500">
        연구 그룹 대표 이미지입니다.
      </label>
      <ImagePicker file={file} setFile={setFile} />
    </Fieldset>
  );
}

function LabFieldset({ labs }: { labs: SimpleResearchLab[] }) {
  return (
    <Fieldset title="연구실" mb="mb-5" titleMb="mb-2">
      {labs.toString()}
      다중 선택 가능한 무언가가 들어가야 함
    </Fieldset>
  );
}
