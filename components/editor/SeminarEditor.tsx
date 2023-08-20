'use client';

import { useRouter } from 'next/navigation';
import { ChangeEventHandler, MouseEventHandler, MutableRefObject, useRef, useState } from 'react';
import SunEditorCore from 'suneditor/src/lib/core';

import SunEditorWrapper from '@/components/editor/SunEditorWrapper';

import BasicTextInput from './BasicTextInput';
import Fieldset from './Fieldset';
import FilePicker, { FilePickerProps } from './FilePicker';
import ImagePicker, { ImagePickerProps } from './ImagePicker';
import { CreateAction, EditAction, EditorContent, EditorProps } from './PostEditorProp';
import TagCheckbox from '../common/search/TagCheckbox';

// TODO: 나중에 태그 확정되면 반응형 추가해서 수정
const gridStyle = 'grid-cols-[repeat(7,_max-content)]';

interface SeminarEditorContent {
  title: string;
  summary: string;
  location: string;
}

const placeholderContent: EditorContent = {
  title: '',
  description: '',
  attachments: [],
  tags: [],
  isPublic: true,
  isPinned: false,
  isSlide: false,
};

export default function SeminarEditor({
  tags,
  showMainImage = false,
  showIsPinned = false,
  showIsSlide = false,
  actions,
  initialContent,
}: EditorProps) {
  const summaryEditorRef = useRef<SunEditorCore>();
  const speakerIntroductionEditorRef = useRef<SunEditorCore>();

  // description(HTML)의 경우 useRef를 사용하기에 여기에 최신값이 반영되지 않음 주의
  const [content, setContent] = useState<EditorContent>({
    ...placeholderContent,
    ...initialContent,
  });

  const getContentWithDescription = (): EditorContent => ({
    ...content,
    description: summaryEditorRef.current?.getContents(false) ?? '',
  });

  const setContentByKey = <T extends keyof EditorContent>(key: T, value: EditorContent[T]) => {
    setContent((content) => ({ ...content, [key]: value }));
  };

  const toggleCheck = (tag: string, isChecked: boolean) => {
    let nextTags = [...content.tags];
    if (isChecked) nextTags = nextTags.filter((x) => x !== tag);
    else nextTags.push(tag);
    setContentByKey('tags', nextTags);
  };

  return (
    <form className="flex flex-col">
      <TitleFieldset
        value={content.title}
        onChange={(e) => setContentByKey('title', e.target.value)}
      />

      <SummaryEditorFieldset summaryEditorRef={summaryEditorRef} />

      <ImageFieldset
        file={content.mainImage}
        setFile={(file) => setContentByKey('mainImage', file)}
      />

      <FileFieldset
        files={content.attachments}
        setFiles={(dispatch) => {
          if (typeof dispatch === 'function') {
            setContent((content) => ({
              ...content,
              attachments: dispatch(content.attachments),
            }));
          } else {
            setContentByKey('attachments', dispatch);
          }
        }}
      />

      <Fieldset title="태그" mb="mb-6" titleMb="mb-3">
        <div className={`grow grid  gap-x-6 gap-y-2.5 ${gridStyle}`}>
          {tags.map((tag) => (
            <TagCheckbox
              key={tag}
              tag={tag}
              isChecked={content.tags.includes(tag)}
              toggleCheck={toggleCheck}
            />
          ))}
        </div>
      </Fieldset>

      <Fieldset title="게시 설정" mb="mb-6" titleMb="mb-3">
        <div className="flex flex-col gap-2">
          <TagCheckbox
            tag="비공개 글"
            isChecked={!content.isPublic}
            toggleCheck={() => setContentByKey('isPublic', !content.isPublic)}
          />
          {showIsPinned && (
            <TagCheckbox
              tag="목록 상단에 고정"
              isChecked={content.isPinned}
              toggleCheck={() => setContentByKey('isPinned', !content.isPinned)}
            />
          )}
          {showIsSlide && (
            <TagCheckbox
              tag="슬라이드 쇼에 표시"
              isChecked={content.isSlide}
              toggleCheck={() => setContentByKey('isSlide', !content.isSlide)}
            />
          )}
        </div>
      </Fieldset>

      <div className="self-end flex gap-3">
        {actions.type === 'CREATE' && (
          <CreateActionButtons {...actions} getContent={getContentWithDescription} />
        )}
        {actions.type === 'EDIT' && (
          <EditActionButtons {...actions} getContent={getContentWithDescription} />
        )}
      </div>
    </form>
  );
}

function TitleFieldset({
  value,
  onChange,
}: {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <Fieldset title="제목" mb="mb-6" titleMb="mb-2">
      <BasicTextInput placeholder="제목을 입력하세요." value={value} onChange={onChange} />
    </Fieldset>
  );
}

function SummaryEditorFieldset({
  summaryEditorRef,
}: {
  summaryEditorRef: MutableRefObject<SunEditorCore | undefined>;
}) {
  return (
    <Fieldset title="요약" mb="mb-6" titleMb="mb-2">
      <SunEditorWrapper editorRef={summaryEditorRef} />
    </Fieldset>
  );
}

function ImageFieldset({ file, setFile }: ImagePickerProps) {
  return (
    <Fieldset title="대표 이미지" mb="mb-6" titleMb="mb-2">
      <label className="font-yoon text-sm font-normal tracking-wide mb-3">
        이미지는 글 우측 상단에 표시됩니다.
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

function EditActionButtons({
  onDelete,
  onComplete,
  getContent,
}: EditAction & { getContent: () => EditorContent }) {
  const requesting = useRef(false);
  const router = useRouter();
  const cancel = () => {
    // 정말 취소하시겠습니까? 같은 창을 띄워야할 때는 대비해 router로 처리
    router.back();
  };
  return (
    <>
      <GrayButton title="취소" onClick={cancel} />
      <BlackButton
        title="삭제"
        onClick={async (e) => {
          e.preventDefault();
          if (requesting.current) return;
          try {
            requesting.current = true;
            await onDelete();
            router.back();
          } catch (e) {
            console.error(e);
          } finally {
            requesting.current = false;
          }
        }}
      />
      <BlackButton
        title="수정하기"
        onClick={async (e) => {
          e.preventDefault();
          if (requesting.current) return;
          try {
            requesting.current = true;
            await onComplete(getContent());
            router.back();
          } catch (e) {
            console.error(e);
          } finally {
            requesting.current = false;
          }
        }}
      />
    </>
  );
}

function CreateActionButtons({
  onComplete,
  getContent,
}: CreateAction & { getContent: () => EditorContent }) {
  const requesting = useRef(false);
  const router = useRouter();
  const cancel = () => {
    // 정말 취소하시겠습니까? 같은 창을 띄워야할 때는 대비해 router로 처리
    router.back();
  };
  return (
    <>
      <GrayButton title="취소" onClick={cancel} />
      <BlackButton
        title="게시하기"
        onClick={(e) => {
          e.preventDefault();
          if (requesting.current) return;
          try {
            requesting.current = true;
            onComplete(getContent());
          } catch (e) {
            console.error(e);
          } finally {
            requesting.current = false;
          }
        }}
      />
    </>
  );
}

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
              px-[.875rem] py-[.1875rem] rounded-[.0625rem] 
              bg-neutral-700 hover:bg-neutral-500
              font-noto text-xs font-medium leading-8 text-white
            `}
    onClick={onClick}
  >
    {title}
  </button>
);
