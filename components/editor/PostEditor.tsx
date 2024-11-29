'use client';

import dynamic from 'next/dynamic';
import { MutableRefObject, useRef, useState } from 'react';
import SunEditorCore from 'suneditor/src/lib/core';

import useModal from '@/utils/hooks/useModal';
import { isContentEmpty } from '@/utils/post';

import Checkbox from '../common/form/Checkbox';
import MuiDateSelector from '../common/MuiDateSelector';
import ModalFrame from '../modal/ModalFrame';
import { CreateActionButtons, EditActionButtons } from './common/ActionButtons';
import BasicTextInput from './common/BasicTextInput';
import Fieldset from './common/Fieldset';
import FilePicker, { FilePickerProps } from './common/FilePicker';
import ImagePicker, { ImagePickerProps } from './common/ImagePicker';
import { defaultContent, PostEditorContent, PostEditorProps } from './PostEditorTypes';
import SunEditorFallback from './SunEditor/SunEditorFallback';

const SunEditorWrapper = dynamic(() => import('@/components/editor/SunEditor/SunEditorWrapper'), {
  ssr: false,
  loading: () => <SunEditorFallback />,
});

export default function PostEditor({
  tags,
  showMainImage = false,
  showIsImportant = false,
  showIsPinned = false,
  showIsSlide = false,
  showDate = false,
  actions,
  initialContent,
}: PostEditorProps) {
  const editorRef = useRef<SunEditorCore>();

  // description(HTML)는 useRef를 사용하기에 여기에 최신값이 반영되지 않음 주의
  const [content, setContent] = useState<PostEditorContent>({
    ...defaultContent,
    ...initialContent,
  });

  const getContent = (): PostEditorContent => {
    let description = '';
    if (editorRef.current && !isContentEmpty(editorRef.current))
      description = editorRef.current.getContents(false);

    return { ...content, description };
  };

  const setContentByKey =
    <T extends keyof PostEditorContent>(key: T) =>
    (value: PostEditorContent[T]) => {
      setContent((content) => ({ ...content, [key]: value }));
    };

  const toggleTag = (tag: string, isChecked: boolean) => {
    let nextTags = [...content.tags];
    if (isChecked) nextTags.push(tag);
    else nextTags = nextTags.filter((x) => x !== tag);
    setContentByKey('tags')(nextTags);
  };

  // 아래 설정들이 활성화되어있으면 비공개글일 수 없습니다.
  if (content.isPinned || content.isImportant || content.isSlide) {
    if (content.isPrivate) {
      setContentByKey('isPrivate')(false);
    }
  }

  return (
    <form className="flex flex-col">
      <TitleFieldset value={content.title} onChange={setContentByKey('title')} />

      <TitleForMainFieldset
        value={content.titleForMain}
        onChange={setContentByKey('titleForMain')}
      />

      {showDate && (
        <DateInputFieldSet
          date={new Date(content.date)}
          setDate={(x) => setContentByKey('date')(x.toISOString())}
        />
      )}

      <EditorFieldset editorRef={editorRef} initialContent={content.description} />

      {showMainImage && (
        <ImageFieldset file={content.mainImage} setFile={setContentByKey('mainImage')} />
      )}

      <FileFieldset
        files={content.attachments}
        setFiles={(dispatch) => {
          setContent((content) => ({ ...content, attachments: dispatch(content.attachments) }));
        }}
      />

      <Fieldset title="태그" mb="mb-8" titleMb="mb-3">
        <div className="flex grow flex-wrap  gap-x-6 gap-y-2.5">
          {tags.map((tag) => (
            <Checkbox
              key={tag}
              label={tag}
              isChecked={content.tags.includes(tag)}
              toggleCheck={toggleTag}
            />
          ))}
        </div>
      </Fieldset>

      <Fieldset title="게시 설정" mb="mb-6" titleMb="mb-3">
        <div className="flex flex-col gap-2">
          <Checkbox
            label="비공개 글"
            isChecked={content.isPrivate}
            toggleCheck={() => {
              setContentByKey('isPrivate')(!content.isPrivate);
              if (!content.isPrivate) {
                setContentByKey('isPinned')(false);
                setContentByKey('isImportant')(false);
                setContentByKey('isSlide')(false);
              }
            }}
          />
          {showIsPinned && (
            <Checkbox
              label="목록 상단에 고정"
              isChecked={content.isPinned}
              toggleCheck={() => {
                setContentByKey('isPinned')(!content.isPinned);
              }}
            />
          )}
          {showIsImportant && (
            <Checkbox
              label="메인-중요 안내에 표시"
              isChecked={content.isImportant}
              toggleCheck={() => {
                setContentByKey('isImportant')(!content.isImportant);
              }}
            />
          )}
          {showIsSlide && (
            <>
              <Checkbox
                label="메인-슬라이드쇼에 표시"
                isChecked={content.isSlide}
                toggleCheck={() => {
                  setContentByKey('isSlide')(!content.isSlide);
                }}
              />
              <p className="text-xs font-light tracking-wide text-neutral-700">
                * ‘슬라이드쇼에 표시’ 글은 대표이미지가 첨부되어있는지 확인 바랍니다.
              </p>
            </>
          )}
        </div>
      </Fieldset>

      <div className="flex gap-3 self-end">
        {actions.type === 'CREATE' && <CreateActionButtons {...actions} getContent={getContent} />}
        {actions.type === 'EDIT' && <EditActionButtons {...actions} getContent={getContent} />}
      </div>
    </form>
  );
}

function TitleFieldset({ value, onChange }: { value: string; onChange: (text: string) => void }) {
  return (
    <Fieldset title="제목" mb="mb-8" titleMb="mb-2" required>
      <BasicTextInput
        placeholder="제목을 입력하세요."
        value={value}
        onChange={onChange}
        maxWidth="max-w-[40rem]"
      />
    </Fieldset>
  );
}

function TitleForMainFieldset({
  value,
  onChange,
}: {
  value: string;
  onChange: (text: string) => void;
}) {
  return (
    <Fieldset title="메인-중요 안내용 제목" mb="mb-8" titleMb="mb-2">
      <BasicTextInput
        placeholder="미입력시 제목과 동일하게 표시됩니다."
        value={value}
        onChange={onChange}
        maxWidth="max-w-[40rem]"
      />
    </Fieldset>
  );
}

function DateInputFieldSet({ date, setDate }: { date: Date; setDate: (date: Date) => void }) {
  const { openModal, closeModal } = useModal();
  const labelStr = `${(date.getFullYear() + '').slice(2)}.${(date.getMonth() + 1 + '').padStart(
    2,
    '0',
  )}.${(date.getDate() + '').padStart(2, '0')}.`;

  return (
    <Fieldset title="시기" mb="mb-8" titleMb="mb-2" required>
      <button
        className="flex items-center justify-between gap-2 self-start rounded-sm border border-neutral-300 py-[.3125rem] pl-[.625rem] pr-[.3125rem] text-sm font-normal"
        onClick={(e) => {
          e.preventDefault();
          openModal(
            <ModalFrame onClose={closeModal}>
              <MuiDateSelector
                enablePast
                date={date}
                setDate={(date) => {
                  if (date) setDate(date);
                  closeModal();
                }}
                className="bg-white"
              />
            </ModalFrame>,
          );
        }}
      >
        {labelStr}
        <span className="material-symbols-outlined text-base">calendar_month</span>
      </button>
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
    <Fieldset title="대표 이미지" mb="mb-6" titleMb="mb-2">
      <label className="mb-3 text-sm font-normal tracking-wide">
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
