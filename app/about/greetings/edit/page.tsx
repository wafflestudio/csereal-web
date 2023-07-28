'use client';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';

import ImageUpload from '@/components/common/ImageUpload';
import PageTitle from '@/components/common/PageTitle';
import Sidebar from '@/components/common/Sidebar';

import { greetings } from '@/types/page';

const NoSsrEditor = dynamic(() => import('../../../../components/TuiEditor'), {
  ssr: false,
});

export default function EditorPage() {
  const ref = useRef<any>(null);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [language, setLanguage] = useState('korean'); // 'korean' is the default value

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const markdownContent = ref.current.getInstance().getMarkdown();
    console.log(title);
    console.log(markdownContent);
  };

  const handleImageSelect = (file: File | null) => {
    console.log('Selected image:', file?.name);
  };

  return (
    <div className="mx-10 mt-5 mb-40 h-screen">
      <PageTitle currentPage={greetings}>
        <h3 className="text-2xl font-bold break-keep font-yoon">학부장 인사말</h3>
      </PageTitle>
      <div className="flex w-full h-full my-4">
        <form onSubmit={handleSubmit} className="flex flex-col w-full mt-5 mr-10">
          <div className="flex flex-col mb-4">
            <label htmlFor="language" className="text-base leading-10 font-bold">
              언어
            </label>
            <select
              id="language"
              name="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-[10%] rounded border bg-gray bg-opacity-20 py-1 px-2 text-base leading-8 outline-none focus:border-blue-500 focus:bg-opacity-0"
            >
              <option value="korean">한국어</option>
              <option value="english">영어</option>
            </select>
          </div>
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
          <label className="text-base leading-10 font-bold">내용</label>
          <NoSsrEditor content={content} editorRef={ref} />
          <div className="mt-4">
            <label className="text-base leading-10 font-bold">프로필 사진</label>
            <ImageUpload onImageSelect={handleImageSelect} />
          </div>
          <div className="flex flex-row-reverse">
            <button
              className=" bg-neutral-600 text-white text-base rounded hover:bg-neutral-400 w-12 px-2 py-1 mt-5"
              type="submit"
            >
              작성
            </button>
          </div>
        </form>
        <Sidebar currentTab={greetings} />
      </div>
    </div>
  );
}
