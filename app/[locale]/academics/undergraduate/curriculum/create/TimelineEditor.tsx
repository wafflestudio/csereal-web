'use client';

import { useState } from 'react';

import BasicEditor from '@/components/editor/BasicEditor';
import Fieldset from '@/components/editor/common/Fieldset';

interface TimelineEditorProps {
  initialContent?: { year: number; description: string };
  onComplete: (content: { year: number; description: string }) => void;
  onCancel: () => void;
}

export default function TimelineEditor({
  initialContent,
  onComplete,
  onCancel,
}: TimelineEditorProps) {
  const [newYear, setNewYear] = useState<number>(initialContent?.year ?? 2024);

  const handleComplete = async () => {
    onComplete({ year: 5, description: '' });
  };

  return (
    <div>
      <YearFieldset year={newYear} onChange={setNewYear} disabled={Boolean(initialContent)} />
      <BasicEditor
        initialContent={{
          description: { ko: initialContent?.description ?? '', en: '' },
          // TODO: 아래 항목 옵션으로 변경되면 삭제
          mainImage: null,
          attachments: [],
        }}
        actions={{
          type: 'EDIT',
          onCancel: onCancel,
          onComplete: handleComplete,
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
      <input
        type="number"
        className={`autofill-bg-white h-8 w-[50px] rounded-sm border border-neutral-300 bg-white pl-2 text-sm outline-none placeholder:text-neutral-300`}
        placeholder={'연도'}
        value={year}
        onChange={(e) => isNumber(e.target.value) && onChange(Number(e.target.value))}
        disabled={disabled}
      />
    </Fieldset>
  );
}
