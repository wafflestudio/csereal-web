'use client';

import { Dispatch, MutableRefObject, SetStateAction, useRef, useState } from 'react';
import SunEditorCore from 'suneditor/src/lib/core';

import SunEditorWrapper from '@/components/editor/common/SunEditorWrapper';

import { CreateActionButtons, EditActionButtons } from './common/ActionButtons';
import BasicTextInput from './common/BasicTextInput';
import DateSelector from './common/DateSelector';
import Fieldset from './common/Fieldset';
import FilePicker, { FilePickerProps } from './common/FilePicker';
import ImagePicker, { ImagePickerProps } from './common/ImagePicker';
import {
  SeminarEditorContent,
  SeminarEditorProps,
  SeminarSchedule,
  SeminarSpeaker,
  seminarEditorPlaceholder,
} from './SeminarEditorProps';
import TagCheckbox from '../common/search/TagCheckbox';

export default function SeminarEditor({ actions, initialContent }: SeminarEditorProps) {
  const summaryEditorRef = useRef<SunEditorCore>();
  const speakerIntroductionEditorRef = useRef<SunEditorCore>();

  // description(HTML)의 경우 useRef를 사용하기에 여기에 최신값이 반영되지 않음 주의
  const [content, setContent] = useState<SeminarEditorContent>({
    ...seminarEditorPlaceholder,
    ...initialContent,
  });

  const getContentWithDescription = (): SeminarEditorContent => ({
    ...content,
    description: summaryEditorRef.current?.getContents(false) ?? '',
    speaker: {
      ...content.speaker,
      description: speakerIntroductionEditorRef.current?.getContents(false) ?? '',
    },
  });

  const setContentByKey =
    <T extends keyof SeminarEditorContent>(key: T) =>
    (value: SeminarEditorContent[T]) => {
      setContent((content) => ({ ...content, [key]: value }));
    };

  const setScheduleContentByKey =
    <T extends keyof SeminarEditorContent['schedule']>(key: T) =>
    (value: SeminarEditorContent['schedule'][T]) => {
      setContent((content) => ({ ...content, schedule: { ...content.schedule, [key]: value } }));
    };

  const setSpeakerContentByKey =
    <T extends keyof SeminarEditorContent['speaker']>(key: T) =>
    (value: SeminarEditorContent['speaker'][T]) => {
      setContent((content) => ({ ...content, speaker: { ...content.speaker, [key]: value } }));
    };

  const setFiles: Dispatch<SetStateAction<File[]>> = (dispatch) => {
    if (typeof dispatch === 'function') {
      setContent((content) => ({
        ...content,
        attachments: dispatch(content.attachments),
      }));
    } else {
      setContentByKey('attachments')(dispatch);
    }
  };

  return (
    <form className="flex flex-col">
      <TitleFieldset value={content.title} onChange={setContentByKey('title')} />
      <SummaryEditorFieldset
        summaryEditorRef={summaryEditorRef}
        initialContent={content.description}
      />
      <LocationFieldset value={content.location} onChange={setContentByKey('location')} />
      <ScheduleFieldset values={content.schedule} setValues={setScheduleContentByKey} />
      <HostFieldset value={content.host} onChange={setContentByKey('host')} />
      <SpeakerFieldsetGroup values={content.speaker} setValues={setSpeakerContentByKey} />
      <SpeakerIntroductionEditorFieldset
        speakerIntroductionEditorRef={speakerIntroductionEditorRef}
        initialContent={content.speaker.description}
      />
      <ImageFieldset file={content.speaker.image} setFile={setSpeakerContentByKey('image')} />
      <FileFieldset files={content.attachments} setFiles={setFiles} />
      <CheckboxFieldset
        isPublic={content.isPublic}
        isImportant={content.isImportant}
        setIsPublic={setContentByKey('isPublic')}
        setIsImportant={setContentByKey('isImportant')}
      />

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
    <Fieldset title="제목" mb="mb-10" titleMb="mb-2" required>
      <BasicTextInput
        placeholder="제목을 입력하세요."
        value={value}
        onChange={onChange}
        maxWidth="max-w-[40rem]"
      />
    </Fieldset>
  );
}

function SummaryEditorFieldset({
  summaryEditorRef,
  initialContent,
}: {
  summaryEditorRef: MutableRefObject<SunEditorCore | undefined>;
  initialContent?: string;
}) {
  return (
    <Fieldset title="요약" mb="mb-10" titleMb="mb-2">
      <SunEditorWrapper editorRef={summaryEditorRef} initialContent={initialContent} />
    </Fieldset>
  );
}

function LocationFieldset({
  value,
  onChange,
}: {
  value: string;
  onChange: (text: string) => void;
}) {
  return (
    <Fieldset title="장소" mb="mb-4" titleMb="mb-2" required>
      <BasicTextInput
        placeholder="제목을 입력하세요."
        value={value}
        onChange={onChange}
        maxWidth="max-w-[24.625rem]"
      />
    </Fieldset>
  );
}

function ScheduleFieldset({
  values,
  setValues,
}: {
  values: SeminarSchedule;
  setValues: <T extends keyof SeminarSchedule>(key: T) => (value: SeminarSchedule[T]) => void;
}) {
  return (
    <div>
      <div className="flex gap-2 mt-4 mb-2">
        <TagCheckbox
          tag="하루 종일"
          isChecked={values.allDay}
          toggleCheck={(tag, isChecked) => setValues('allDay')(!isChecked)}
        />
        <TagCheckbox
          tag="종료 일시 표시"
          isChecked={values.showEndDate}
          toggleCheck={(tag, isChecked) => setValues('showEndDate')(!isChecked)}
        />
      </div>
      <div className="flex mb-4 gap-8">
        <Fieldset title="시작 일시" titleMb="mb-[.54rem]" required grow={false}>
          <DateSelector
            date={values.startDate}
            setDate={setValues('startDate')}
            hideTime={values.allDay}
          />
        </Fieldset>
        {values.showEndDate && (
          <Fieldset title="종료 일시" titleMb="mb-[.54rem]" required grow={false}>
            <DateSelector
              date={values.endDate}
              setDate={setValues('endDate')}
              hideTime={values.allDay}
            />
          </Fieldset>
        )}
      </div>
    </div>
  );
}

function HostFieldset({ value, onChange }: { value: string; onChange: (text: string) => void }) {
  return (
    <Fieldset title="주최" mb="mb-10" titleMb="mb-2">
      <BasicTextInput value={value} onChange={onChange} maxWidth="max-w-[24.625rem]" />
    </Fieldset>
  );
}

function SpeakerFieldsetGroup({
  values,
  setValues,
}: {
  values: SeminarSpeaker;
  setValues: <T extends keyof SeminarSpeaker>(key: T) => (value: SeminarSpeaker[T]) => void;
}) {
  return (
    <div className="mb-10">
      <legend className="font-yoon text-sm font-medium tracking-wide mb-3">연사 정보</legend>
      <div className="flex flex-col gap-4">
        <div className="flex gap-5">
          <Fieldset title="이름" titleMb="mb-2" required>
            <BasicTextInput
              maxWidth="max-w-[24.625rem]"
              value={values.name}
              onChange={setValues('name')}
            />
          </Fieldset>
          <Fieldset title="이름 링크(url)" titleMb="mb-2">
            <BasicTextInput
              maxWidth="max-w-[24.625rem]"
              value={values.nameURL}
              onChange={setValues('nameURL')}
            />
          </Fieldset>
        </div>
        <Fieldset title="직함" titleMb="mb-2">
          <BasicTextInput
            maxWidth="max-w-[24.625rem]"
            value={values.title}
            onChange={setValues('title')}
          />
        </Fieldset>
        <div className="flex gap-5">
          <Fieldset title="소속" titleMb="mb-2" required>
            <BasicTextInput
              maxWidth="max-w-[24.625rem]"
              value={values.organization}
              onChange={setValues('organization')}
            />
          </Fieldset>
          <Fieldset title="소속 링크(url)" titleMb="mb-2">
            <BasicTextInput
              maxWidth="max-w-[24.625rem]"
              value={values.organizationURL}
              onChange={setValues('organizationURL')}
            />
          </Fieldset>
        </div>
      </div>
    </div>
  );
}

function SpeakerIntroductionEditorFieldset({
  speakerIntroductionEditorRef,
  initialContent,
}: {
  speakerIntroductionEditorRef: MutableRefObject<SunEditorCore | undefined>;
  initialContent?: string;
}) {
  return (
    <Fieldset title="연사 소개" mb="mb-10" titleMb="mb-2">
      <SunEditorWrapper editorRef={speakerIntroductionEditorRef} initialContent={initialContent} />
    </Fieldset>
  );
}

function ImageFieldset({ file, setFile }: ImagePickerProps) {
  return (
    <Fieldset title="연사 사진" mb="mb-6" titleMb="mb-2">
      <label className="font-yoon text-sm font-normal tracking-wide mb-3 whitespace-pre-wrap">
        {`필수는 아니지만, 없을 경우 대체 이미지가 표시되니 가급적 첨부 바랍니다.
이미지는 글 우측 상단에 표시됩니다.`}
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

function CheckboxFieldset({
  isPublic,
  setIsPublic,
  isImportant,
  setIsImportant,
}: {
  isPublic: boolean;
  isImportant: boolean;
  setIsPublic: (value: boolean) => void;
  setIsImportant: (value: boolean) => void;
}) {
  return (
    <Fieldset title="게시 설정" titleMb="mb-3" mb="mb-11">
      <div className="flex flex-col gap-1">
        <TagCheckbox
          tag="비공개 글"
          isChecked={!isPublic}
          toggleCheck={(tag, isChecked) => setIsPublic(!isChecked)}
        />
        <TagCheckbox
          tag="메인-중요 안내에 표시"
          isChecked={isImportant}
          toggleCheck={(tag, isChecked) => setIsImportant(!isChecked)}
        />
      </div>
    </Fieldset>
  );
}
