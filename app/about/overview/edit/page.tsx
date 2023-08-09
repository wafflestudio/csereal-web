'use client';
import { Editor } from '@toast-ui/react-editor';
import { useRef, useState } from 'react';

import {
  ContentEditor,
  LanguageSelect,
  ProfilePictureUpload,
  TitleInput,
} from '@/components/common/Editor/EditorOptions';
import PageTitle from '@/components/common/PageTitle';
import SubNavbar from '@/components/layout/SubNavbar';

import { overview } from '@/types/page';

export default function EditorPage() {
  const ref = useRef<Editor>(null);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [language, setLanguage] = useState<'korean' | 'english'>('korean');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const markdownContent = ref.current?.getInstance().getMarkdown();
    console.log(title);
    console.log(markdownContent);
  };

  const handleImageSelect = (file: File | null) => {
    console.log('Selected image:', file?.name);
  };

  return (
    <div className="mx-10 mt-5 mb-40 h-screen">
      <PageTitle title="학부 소개" currentPage={overview} textSize="text-lg" />
      <div className="flex w-full h-full my-4">
        <form onSubmit={handleSubmit} className="flex flex-col w-full mt-5 mr-10">
          <LanguageSelect language={language} setLanguage={setLanguage} />
          <ContentEditor content={content} editorRef={ref} />
          <ProfilePictureUpload onImageSelect={handleImageSelect} />
          <div className="flex flex-row-reverse">
            <button
              className="bg-neutral-600 text-white text-base rounded hover:bg-neutral-400 w-12 px-2 py-1 mt-5"
              type="submit"
            >
              작성
            </button>
          </div>
        </form>
        <SubNavbar currentTab={overview} />
      </div>
    </div>
  );
}
