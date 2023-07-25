'use client';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useCallback, useRef, useState } from 'react';

const NoSsrEditor = dynamic(() => import('../../components/TuiEditor'), {
  ssr: false,
});

type FormValues = {
  title: string;
};

const Page = () => {
  const ref = useRef<any>(null);

  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const markdownContent = ref.current.getInstance().getMarkdown();
    console.log(title);
    console.log(markdownContent);
  };

  return (
    <>
      <div className="flex w-screen h-full overflow-hidden">
        <form onSubmit={handleSubmit} className="flex flex-col rmx-10">
          {/* md:mx-8 lg:mx-8 아래 css 내용 */}
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
          <NoSsrEditor content="" editorRef={ref} />
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
    </>
  );
};

export default Page;
