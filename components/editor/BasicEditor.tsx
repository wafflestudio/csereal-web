import dynamic from 'next/dynamic';
import { MutableRefObject, useRef, useState } from 'react';
import SunEditorCore from 'suneditor/src/lib/core';

import SunEditorFallback from '@/components/editor/SunEditor/SunEditorFallback';
import { Language, WithLanguage } from '@/types/language';
import { isContentEmpty } from '@/utils/post';

import { EditAction, EditActionButtons } from './common/ActionButtons';
import BasicTextInput from './common/BasicTextInput';
import Fieldset from './common/Fieldset';
import FilePicker, { FilePickerProps } from './common/FilePicker';
import ImagePicker, { ImagePickerProps } from './common/ImagePicker';
import LanguagePicker from './common/LanguagePicker';
import { PostEditorFile, PostEditorImage } from './PostEditorTypes';

const SunEditorWrapper = dynamic(() => import('./SunEditor/SunEditorWrapper'), {
  ssr: false,
  loading: () => <SunEditorFallback />,
});

interface OptionalBasicEditorContent {
  description: WithLanguage<string>;
  title?: WithLanguage<string>;
  mainImage?: PostEditorImage;
  attachments?: PostEditorFile[];
}

export type BasicEditorContent = Required<OptionalBasicEditorContent>;

interface BasicPostEditorProps {
  actions: EditAction<BasicEditorContent>;
  initialContent?: OptionalBasicEditorContent;
  showMainImage?: boolean;
  showAttachments?: boolean;
  showLanguage?: boolean;
  showTitle?: boolean;
}

export default function BasicEditor({
  actions,
  initialContent,
  showMainImage = false,
  showAttachments = false,
  showLanguage = false,
  showTitle = false,
}: BasicPostEditorProps) {
  const [language, setLanguage] = useState<Language>('ko');
  const editorRef = { ko: useRef<SunEditorCore>(), en: useRef<SunEditorCore>() };
  const [content, setContent] = useState<BasicEditorContent>(
    getEditorInitialContent(initialContent),
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

  const setTitle = (title: string) => {
    setContent((prev) => ({ ...prev, title: { ...prev.title, [language]: title } }));
  };

  return (
    <form className="flex flex-col">
      {showLanguage && <LanguagePicker onChange={changeLanguage} selected={language} />}
      {showTitle && <TitleFieldset title={content.title[language]} setTitle={setTitle} />}
      <EditorFieldset
        key={language}
        editorRef={editorRef[language]}
        initialContent={content.description[language]}
      />
      {showMainImage && (
        <ImageFieldset
          file={content.mainImage}
          setFile={(file) => {
            setContent((prev) => ({ ...prev, mainImage: file }));
          }}
        />
      )}
      {showAttachments && (
        <FileFieldset
          files={content.attachments}
          setFiles={(dispatch) => {
            setContent((prev) => ({ ...prev, attachments: dispatch(prev.attachments) }));
          }}
        />
      )}
      <div className="mb-6 flex justify-end gap-3">
        <EditActionButtons {...actions} getContent={getContent} />
      </div>
    </form>
  );
}

function TitleFieldset({ title, setTitle }: { title: string; setTitle: (value: string) => void }) {
  return (
    <Fieldset title="제목" mb="mb-6" titleMb="mb-2" required>
      <BasicTextInput value={title} onChange={setTitle} maxWidth="w-[30rem]" />
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
        글 우측 상단에 들어가는 이미지입니다.
      </label>
      <ImagePicker file={file} setFile={setFile} />
    </Fieldset>
  );
}

function FileFieldset({ files, setFiles }: FilePickerProps) {
  return (
    <Fieldset title="첨부파일" mb="mb-6" titleMb="mb-3">
      <FilePicker files={files} setFiles={setFiles} />
    </Fieldset>
  );
}

const getEditorInitialContent = (initContent?: OptionalBasicEditorContent) => {
  return {
    description: initContent?.description ?? { ko: '', en: '' },
    title: initContent?.title ?? { ko: '', en: '' },
    mainImage: initContent?.mainImage ?? null,
    attachments: initContent?.attachments ?? [],
  };
};
