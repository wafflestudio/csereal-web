'use client';

import { useState } from 'react';

import BasicEditor from '@/components/editor/BasicEditor';
import BasicTextInput from '@/components/editor/common/BasicTextInput';
import Fieldset from '@/components/editor/common/Fieldset';

interface TimelineEditorProps {
  initialContent?: { year: number; description: string };
  onComplete: (content: { year: number; description: string }) => void;
  onCancel: () => void;
}

const NEXT_YEAR = new Date().getFullYear() + 1;

export default function TimelineEditor({
  initialContent,
  onComplete,
  onCancel,
}: TimelineEditorProps) {
  const [newYear, setNewYear] = useState<number>(initialContent?.year ?? NEXT_YEAR);

  return (
    <div>
      <YearFieldset year={newYear} onChange={setNewYear} disabled={Boolean(initialContent)} />
      <BasicEditor
        initialContent={{
          description: { ko: initialContent?.description ?? '', en: '' },
        }}
        actions={{
          type: 'EDIT',
          onCancel: onCancel,
          onComplete: async (content) =>
            onComplete({ year: newYear, description: content.description.ko }),
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
