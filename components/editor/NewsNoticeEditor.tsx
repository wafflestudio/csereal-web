'use client';

import { useRouter } from 'next/navigation';
import { MouseEventHandler, useRef, useState } from 'react';
import SunEditorCore from 'suneditor/src/lib/core';

import SunEditorWrapper from '@/components/editor/SunEditorWrapper';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { NewsTags } from '@/constants/tag';

import { NewsPost, NoticePost } from '@/types/post';

import Fieldset from './Fieldset';
import FilePicker from './FilePicker';
import ImagePicker from './ImagePicker';
import { FilePickerItem } from './useDragDrop';
import TagCheckbox from '../common/search/TagCheckbox';

type NewsEditorContent = NewsPost & { type: 'NEWS' };

type EditorProps =
  | {
      type: 'NEWS_CREATE';
    }
  | {
      type: 'NEWS_EDIT';
    }
  | {
      type: 'NOTICE_CREATE';
    }
  | {
      type: 'NOTICE_EDIT';
    };

// TODO: 나중에 태그 확정되면 반응형 추가해서 수정
const gridStyle = 'grid-cols-[repeat(7,_max-content)]';

export default function NewsNoticeEditor({}: EditorProps) {
  const router = useRouter();
  const editorRef = useRef<SunEditorCore>();
  const [blob, setBlob] = useState<Blob>();
  const [fileItems, setFileItems] = useState<FilePickerItem[]>([]);
  const tags = NewsTags;

  return (
    <PageLayout title="새소식 쓰기" titleType="small">
      <form className="flex flex-col">
        <Fieldset title="제목" mb="mb-6" titleMb="mb-2">
          <TitleTextInput />
        </Fieldset>

        <Fieldset title="내용" mb="mb-6" titleMb="mb-2">
          <SunEditorWrapper editorRef={editorRef} />
        </Fieldset>

        <Fieldset title="대표 이미지" mb="mb-6" titleMb="mb-2">
          <label className="font-yoon text-sm font-normal tracking-wide mb-3">
            이미지는 글 우측 상단에 표시됩니다.
          </label>
          <ImagePicker blob={blob} setBlob={setBlob} />
        </Fieldset>

        <Fieldset title="첨부파일" mb="mb-6" titleMb="mb-3">
          <FilePicker fileItems={fileItems} setFileItems={setFileItems} />
        </Fieldset>

        <Fieldset title="태그" mb="mb-6" titleMb="mb-3">
          <div className={`grow grid  gap-x-6 gap-y-2.5 ${gridStyle}`}>
            {tags.map((tag) => (
              <TagCheckbox key={tag} tag={tag} isChecked={false} toggleCheck={() => {}} />
            ))}
          </div>
        </Fieldset>

        <Fieldset title="게시 설정" mb="mb-6" titleMb="mb-3">
          <div className="flex flex-col gap-2">
            <TagCheckbox tag="비공개 글" isChecked={false} toggleCheck={() => {}} />
            <TagCheckbox tag="목록 상단에 고정" isChecked={false} toggleCheck={() => {}} />
            <TagCheckbox tag="슬라이드 쇼에 표시" isChecked={false} toggleCheck={() => {}} />
          </div>
        </Fieldset>

        <div className="self-end flex gap-3">
          {/* TODO: 취소 다시 물어보기? */}
          <GrayButton title="취소하기" onClick={router.back} />
          <BlackButton
            title="게시하기"
            onClick={(e) => {
              e.preventDefault();
              console.log(editorRef.current?.getContents(true));
            }}
          />
        </div>
      </form>
    </PageLayout>
  );
}

const TitleTextInput = () => (
  <input
    type="text"
    className={`mw-[40rem] rounded-sm border-[1px] border-neutral-700 h-[1.875rem] 
            outline-none font-noto text-xs pl-2 font-normal `}
    placeholder="제목을 입력하세요."
  />
);

const GrayButton = ({
  title,
  onClick,
}: {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => (
  <button
    className={`
              px-[.875rem] py-[.1875rem] rounded-[.0625rem] border-neutral-200 border-[1px]
              bg-neutral-100 hover:bg-neutral-200
              font-noto text-xs font-medium leading-8 text-neutral-500
            `}
    onClick={onClick}
  >
    {title}
  </button>
);

const BlackButton = ({
  title,
  onClick,
}: {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => (
  <button
    className={`
              px-[.875rem] py-[.1875rem] rounded-[.0625rem] -neutral-200 border-[1px]
              bg-neutral-700 hover:bg-neutral-500
              font-noto text-xs font-medium leading-8 text-white
            `}
    onClick={onClick}
  >
    {title}
  </button>
);
