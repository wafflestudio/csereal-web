import { Editor } from '@toast-ui/react-editor';
import dynamic from 'next/dynamic';
import React, { LegacyRef, useRef } from 'react';

import ImageUpload from '@/components/common/ImageUpload';

interface LanguageSelectProps {
  language: 'korean' | 'english';
  setLanguage: React.Dispatch<React.SetStateAction<'korean' | 'english'>>;
}

export const LanguageSelect = ({ language, setLanguage }: LanguageSelectProps) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor="language" className="text-base leading-10 font-bold">
        언어
      </label>
      <select
        id="language"
        name="language"
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'korean' | 'english')}
        className="w-[10%] rounded border bg-gray bg-opacity-20 py-1 px-2 text-base leading-8 outline-none focus:border-blue-500 focus:bg-opacity-0"
      >
        <option value="korean">한국어</option>
        <option value="english">영어</option>
      </select>
    </div>
  );
};

interface TitleInputProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

export const TitleInput = ({ title, setTitle }: TitleInputProps) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor="title" className="text-base leading-10 font-bold">
        제목
      </label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력해주세요"
        className="w-[50%] rounded border bg-gray bg-opacity-20 py-1 px-3 text-base leading-8 outline-none placeholder:text-sm focus:border-blue-500 focus:bg-opacity-0"
      />
    </div>
  );
};

interface ContentEditorProps {
  content: string;
  editorRef: LegacyRef<Editor>;
}

const NoSsrEditor = dynamic(() => import('./TuiEditor'), {
  ssr: false,
});

export const ContentEditor = ({ content, editorRef }: ContentEditorProps) => {
  return (
    <>
      <label className="text-base leading-10 font-bold">내용</label>
      <NoSsrEditor content={content} editorRef={editorRef} />
    </>
  );
};

interface ProfilePictureUploadProps {
  onImageSelect: (file: File | null) => void;
}

export const ProfilePictureUpload = ({ onImageSelect }: ProfilePictureUploadProps) => {
  return (
    <div className="mt-4">
      <label className="text-base leading-10 font-bold">프로필 사진</label>
      <ImageUpload onImageSelect={onImageSelect} />
    </div>
  );
};
