'use client';

import { MutableRefObject, useRef, useState } from 'react';
import SunEditorCore from 'suneditor/src/lib/core';

import SunEditorWrapper from '@/components/editor/common/SunEditorWrapper';

import { CreateActionButtons, EditActionButtons } from './common/ActionButtons';
import BasicTextInput from './common/BasicTextInput';
import Fieldset from './common/Fieldset';
import FilePicker, { FilePickerProps } from './common/FilePicker';
import ImagePicker, { ImagePickerProps } from './common/ImagePicker';
import { PostEditorContent, PostEditorProps, postEditorDefaultValue } from './PostEditorProps';
import TagCheckbox from '../common/search/TagCheckbox';

// TODO: 나중에 태그 확정되면 반응형 추가해서 수정
const gridStyle = 'grid-cols-[repeat(7,_max-content)]';

export default function PostEditor({
  tags,
  showMainImage = false,
  showIsImportant = false,
  showIsPinned = false,
  showIsSlide = false,
  actions,
  initialContent,
}: PostEditorProps) {
  const editorRef = useRef<SunEditorCore>();
  // description(HTML)의 경우 useRef를 사용하기에 여기에 최신값이 반영되지 않음 주의
  const [content, setContent] = useState<PostEditorContent>({
    ...postEditorDefaultValue,
    ...initialContent,
  });

  const getContentWithDescription = (): PostEditorContent => ({
    ...content,
    description: editorRef.current?.getContents(false) ?? '',
  });

  const setContentByKey =
    <T extends keyof PostEditorContent>(key: T) =>
    (value: PostEditorContent[T]) => {
      setContent((content) => ({ ...content, [key]: value }));
    };

  const toggleCheck = (tag: string, isChecked: boolean) => {
    let nextTags = [...content.tags];
    if (isChecked) nextTags = nextTags.filter((x) => x !== tag);
    else nextTags.push(tag);
    setContentByKey('tags')(nextTags);
  };

  return (
    <form className="flex flex-col">
      <TitleFieldset value={content.title} onChange={setContentByKey('title')} />

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
            toggleCheck={() => {
              setContentByKey('isPublic')(!content.isPublic);
              if (content.isPublic) {
                setContentByKey('isPinned')(false);
              }
            }}
          />
          {showIsPinned && (
            <TagCheckbox
              tag="목록 상단에 고정"
              isChecked={content.isPinned}
              toggleCheck={() => {
                setContentByKey('isPinned')(!content.isPinned);
                if (!content.isPinned) {
                  setContentByKey('isPublic')(true);
                }
              }}
            />
          )}
          {showIsImportant && (
            <TagCheckbox
              tag="메인-중요 안내에 표시"
              isChecked={content.isImportant}
              toggleCheck={() => setContentByKey('isImportant')(!content.isImportant)}
            />
          )}
          {showIsSlide && (
            <>
              <TagCheckbox
                tag="메인-슬라이드쇼에 표시"
                isChecked={content.isSlide}
                toggleCheck={() => setContentByKey('isSlide')(!content.isSlide)}
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
    <Fieldset title="제목" mb="mb-6" titleMb="mb-2">
      <BasicTextInput
        placeholder="제목을 입력하세요."
        value={value}
        onChange={onChange}
        maxWidth="max-w-[40rem]"
      />
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
    <Fieldset title="내용" mb="mb-6" titleMb="mb-2">
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
