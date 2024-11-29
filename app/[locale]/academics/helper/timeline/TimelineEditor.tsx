'use client';

import { useState } from 'react';

import { Attachment } from '@/components/common/Attachments';
import BasicEditor, { BasicEditorContent } from '@/components/editor/BasicEditor';
import BasicTextInput from '@/components/editor/common/BasicTextInput';
import Fieldset from '@/components/editor/common/Fieldset';
import { useRouter } from '@/navigation';
import { TimelineContent } from '@/types/academics';
import { errorToStr } from '@/utils/error';
import { contentToFormData, getAttachmentDeleteIds } from '@/utils/formData';
import { isNumber } from '@/utils/number';
import { CustomError, handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

interface TimelineEditorProps {
  initialContent?: TimelineContent;
  submitAction: (year: number, formData: FormData) => Promise<CustomError | void>;
  fallbackPathname: string;
  pageName?: string;
}

const getNextYear = () => new Date().getFullYear() + 1;

export default function TimelineEditor({
  initialContent,
  submitAction,
  fallbackPathname,
  pageName,
}: TimelineEditorProps) {
  const [newYear, setNewYear] = useState<number>(initialContent?.year ?? getNextYear());
  const router = useRouter();

  const goToOriginalPage = () => router.push(fallbackPathname);

  const handleSubmit = async (content: BasicEditorContent) => {
    if (!content.description) {
      throw new Error('내용을 입력해주세요');
    }

    const formData = initialContent
      ? contentToFormData('EDIT', {
          requestObject: getEditRequestObject(content, initialContent.attachments),
          attachments: content.attachments,
        })
      : contentToFormData('CREATE', {
          requestObject: getCreateRequestObject(newYear, pageName ?? '', content),
          attachments: content.attachments,
        });

    try {
      handleServerAction(await submitAction(newYear, formData));
      successToast('저장했습니다.');
      goToOriginalPage();
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <div>
      <YearFieldset year={newYear} onChange={setNewYear} disabled={Boolean(initialContent)} />
      <BasicEditor
        initialContent={{
          description: { ko: initialContent?.description ?? '', en: '' },
          attachments: initialContent?.attachments.map((file) => ({ type: 'UPLOADED_FILE', file })),
        }}
        actions={{
          type: 'EDIT',
          onCancel: goToOriginalPage,
          onSubmit: handleSubmit,
        }}
        showAttachments
      />
    </div>
  );
}

function YearFieldset({
  year,
  onChange,
  disabled = false,
}: {
  year: number;
  onChange: (value: number) => void;
  disabled?: boolean;
}) {
  return (
    <Fieldset title="연도" mb="mb-6" titleMb="mb-2">
      <BasicTextInput
        value={year.toString()}
        onChange={(text) => isNumber(text) && onChange(Number(text))}
        maxWidth="w-[55px]"
        disabled={disabled}
      />
    </Fieldset>
  );
}

const getCreateRequestObject = (year: number, name: string, newContent: BasicEditorContent) => {
  return {
    year,
    name,
    description: newContent.description.ko,
  };
};

const getEditRequestObject = (newContent: BasicEditorContent, prevAttachments: Attachment[]) => {
  const deleteIds = getAttachmentDeleteIds(
    newContent.attachments,
    prevAttachments.map((x) => x.id),
  );

  return {
    description: newContent.description.ko,
    deleteIds,
  };
};
