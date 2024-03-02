'use client';

import { MutableRefObject, useRef, useState } from 'react';
import SunEditorCore from 'suneditor/src/lib/core';

import SunEditorWrapper, { isContentEmpty } from '@/components/editor/common/SunEditorWrapper';

import useModal from '@/utils/hooks/useModal';

import { CreateActionButtons, EditActionButtons } from './common/ActionButtons';
import BasicTextInput from './common/BasicTextInput';
import Fieldset from './common/Fieldset';
import FilePicker, { FilePickerProps } from './common/FilePicker';
import ImagePicker, { ImagePickerProps } from './common/ImagePicker';
import { PostEditorContent, PostEditorProps, postEditorDefaultValue } from './PostEditorProps';
import Checkbox from '../common/Checkbox';
import ModalFrame from '../modal/ModalFrame';
import MuiDateSelector from '../mui/MuiDateSelector';

// TODO: 나중에 태그 확정되면 반응형 추가해서 수정
const gridStyle = 'grid-cols-[repeat(7,_max-content)]';

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
  // description(HTML)의 경우 useRef를 사용하기에 여기에 최신값이 반영되지 않음 주의
  const [content, setContent] = useState<PostEditorContent>({
    ...postEditorDefaultValue,
    ...initialContent,
  });

  const getContentWithDescription = (): PostEditorContent => {
    if (editorRef.current) {
      if (isContentEmpty(editorRef.current)) {
        return { ...content, description: '' };
      } else {
        const description = editorRef.current.getContents(false);
        return { ...content, description };
      }
    } else {
      return { ...content, description: '' };
    }
  };

  const setContentByKey =
    <T extends keyof PostEditorContent>(key: T) =>
    (value: PostEditorContent[T]) => {
      setContent((content) => ({ ...content, [key]: value }));
    };

  const toggleCheck = (tag: string, isChecked: boolean) => {
    let nextTags = [...content.tags];
    if (isChecked) nextTags.push(tag);
    else nextTags = nextTags.filter((x) => x !== tag);
    setContentByKey('tags')(nextTags);
  };

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

      <Fieldset title="태그" mb="mb-6" titleMb="mb-3">
        <div className={`grow grid  gap-x-6 gap-y-2.5 ${gridStyle}`}>
          {tags.map((tag) => (
            <Checkbox
              key={tag}
              label={tag}
              isChecked={content.tags.includes(tag)}
              toggleCheck={toggleCheck}
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
              <p className="font-yoon text-xs text-neutral-700 font-light tracking-wide">
                * ‘슬라이드쇼에 표시’ 글은 대표이미지가 첨부되어있는지 확인 바랍니다.
              </p>
            </>
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

function TitleFieldset({ value, onChange }: { value: string; onChange: (text: string) => void }) {
  return (
    <Fieldset title="제목" mb="mb-6" titleMb="mb-2" required>
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
    <Fieldset title="메인-중요 안내용 제목" mb="mb-6" titleMb="mb-2">
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
    <Fieldset title="시기" mb="mb-6" titleMb="mb-2" required>
      <button
        className="border border-neutral-900 rounded-sm text-sm font-normal flex items-center justify-between py-[.3125rem] pr-[.3125rem] pl-[.625rem] gap-2 self-start"
        onClick={(e) => {
          e.preventDefault();
          openModal(
            <ModalFrame onClose={closeModal}>
              <MuiDateSelector
                enablePast
                date={date}
                setDate={(date) => {
                  date && setDate(date);
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
