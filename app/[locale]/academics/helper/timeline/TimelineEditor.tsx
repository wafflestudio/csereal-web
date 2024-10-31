'use client';

import { useState } from 'react';

import BasicEditor from '@/components/editor/BasicEditor';
import BasicTextInput from '@/components/editor/common/BasicTextInput';
import Fieldset from '@/components/editor/common/Fieldset';
import { useRouter } from '@/navigation';
import { errorToStr } from '@/utils/error';
import { isNumber } from '@/utils/number';
import { CustomError, handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

interface TimelineEditorProps {
  initialContent?: { year: number; description: string };
  submitAction: (data: TimelineContent) => Promise<CustomError | void>;
  fallbackPathname: string;
}

const getNextYear = () => new Date().getFullYear() + 1;

type TimelineContent = { year: number; description: string };

export default function TimelineEditor({
  initialContent,
  submitAction,
  fallbackPathname,
}: TimelineEditorProps) {
  const [newYear, setNewYear] = useState<number>(initialContent?.year ?? getNextYear());
  const router = useRouter();

  const goToOriginalPage = () => router.push(fallbackPathname);

  const handleSubmit = async (description: string) => {
    if (!description) {
      throw new Error('내용을 입력해주세요');
    }

    try {
      handleServerAction(await submitAction({ description, year: newYear }));
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
        }}
        actions={{
          type: 'EDIT',
          onCancel: goToOriginalPage,
          onSubmit: (content) => handleSubmit(content.description.ko),
        }}
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
