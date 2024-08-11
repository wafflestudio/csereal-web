'use client';

import { useState } from 'react';

import BasicEditor from '@/components/editor/BasicEditor';
import BasicTextInput from '@/components/editor/common/BasicTextInput';
import Fieldset from '@/components/editor/common/Fieldset';
import { useRouter } from '@/navigation';
import { CustomError, handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

interface TimelineEditorProps {
  initialContent?: { year: number; description: string };
  action: (data: TimelineContent) => Promise<CustomError | void>;
  fallbackPathname: string;
}

const NEXT_YEAR = new Date().getFullYear() + 1;

type TimelineContent = { year: number; description: string };

export default function TimelineEditor({
  initialContent,
  action,
  fallbackPathname,
}: TimelineEditorProps) {
  const [newYear, setNewYear] = useState<number>(initialContent?.year ?? NEXT_YEAR);
  const router = useRouter();

  const goToOriginalPage = () => router.replace(fallbackPathname);

  const handleComplete = async (description: string) => {
    if (!description) {
      throw new Error('내용을 입력해주세요');
    }

    try {
      handleServerAction(await action({ description, year: newYear }));
      successToast('저장했습니다.');
      goToOriginalPage();
    } catch (e) {
      errorToast('오류가 발생했습니다');
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
          onComplete: (content) => handleComplete(content.description.ko),
        }}
      />
    </div>
  );
}

const NUMBER_REGEX = /^\d*$/;

function YearFieldset({
  year,
  onChange,
  disabled = false,
}: {
  year: number;
  onChange: (value: number) => void;
  disabled?: boolean;
}) {
  const isNumber = (value: string) => NUMBER_REGEX.test(value);

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
