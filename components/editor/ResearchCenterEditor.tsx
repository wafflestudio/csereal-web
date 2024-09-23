import dynamic from 'next/dynamic';
import React, { MutableRefObject, useRef, useState } from 'react';
import SunEditorCore from 'suneditor/src/lib/core';

import SunEditorFallback from '@/components/editor/SunEditor/SunEditorFallback';
import { Language, WithLanguage } from '@/types/language';
import { ResearchCenter } from '@/types/research';
import useEditorContent from '@/utils/hooks/useEditorContent';
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

export interface ResearchCenterEditorContent {
  name: string;
  description: string;
  websiteURL: string;
  mainImage: PostEditorImage;
}

interface ResearchCenterEditorProps {
  actions: EditAction<WithLanguage<ResearchCenterEditorContent>>;
  initialContent?: WithLanguage<ResearchCenter>;
}

export default function ResearchCenterEditor({
  actions,
  initialContent,
}: ResearchCenterEditorProps) {
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
        value={currLangContent.websiteURL}
        onChange={setContentByKey('websiteURL', true)}
      />
      <EditorFieldset
        key={language}
        editorRef={editorRef[language]}
        initialContent={currLangContent.description}
      />

      <ImageFieldset
        file={currLangContent.mainImage}
        setFile={setContentByKey('mainImage', true)}
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

function ImageFieldset({ file, setFile }: ImagePickerProps) {
  return (
    <Fieldset title="사진" mb="mb-12" titleMb="mb-2">
      <label className="mb-3 whitespace-pre-wrap text-sm font-normal tracking-wide text-neutral-500">
        연구 센터 대표 이미지입니다.
      </label>
      <ImagePicker file={file} setFile={setFile} />
    </Fieldset>
  );
}

const DEFAULT_CONTENT: ResearchCenterEditorContent = {
  name: '',
  description: '',
  websiteURL: '',
  mainImage: null,
};

const getDefaultContentDetail = (content?: ResearchCenter): ResearchCenterEditorContent => {
  if (content) {
    const { mainImageUrl, ...editorContent } = content;

    return {
      ...editorContent, // imageURL 속성 제외한 나머지
      mainImage: mainImageUrl ? { type: 'UPLOADED_IMAGE', url: mainImageUrl } : null,
    };
  }

  return DEFAULT_CONTENT;
};

const getInitialContent = (initContent?: WithLanguage<ResearchCenter>) => {
  return {
    ko: getDefaultContentDetail(initContent?.ko),
    en: getDefaultContentDetail(initContent?.en),
  };
};
