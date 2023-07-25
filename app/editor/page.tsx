'use client';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';

const NoSsrEditor = dynamic(() => import('../../components/TuiEditor'), {
  ssr: false,
});

type FormValues = {
  title: string;
};

export default function EditorPage() {
  const ref = useRef<any>(null);

  const [title, setTitle] = useState('');
  const content = `![사인](data:image/png;base64,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)
이건 제 사인입니다.

***

사인 맞아요.`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const markdownContent = ref.current.getInstance().getMarkdown();
    console.log(title);
    console.log(markdownContent);
  };

  return (
    <div className="flex w-screen h-full overflow-hidden">
      <form onSubmit={handleSubmit} className="flex flex-col mx-10">
        <div className="flex flex-col my-4">
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
            className="w-[50%] rounded border border-gray bg-gray bg-opacity-20 py-1 px-3 text-base leading-8 outline-none placeholder:text-sm focus:border-blue-500 focus:bg-opacity-0"
          />
        </div>
        <NoSsrEditor content={content} editorRef={ref} />
        <div className="flex justify-between h-8 my-3">
          <button
            className="w-20 bg-gray-light text-sm font-medium text-white hover:bg-orange"
            onClick={() => console.log('go back')}
          >
            취소
          </button>
          <button
            className="w-20 bg-gray text-sm font-medium text-white hover:bg-orange"
            type="submit"
          >
            작성
          </button>
        </div>
      </form>
    </div>
  );
}
