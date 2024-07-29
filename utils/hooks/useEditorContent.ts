'use client';

import { useState } from 'react';

import { Language, WithLanguage } from '@/types/language';

export default function useEditorContent<T>(initialState: WithLanguage<T>, language: Language) {
  const [content, setContent] = useState<WithLanguage<T>>(initialState);

  const setContentByKey =
    <K extends keyof T>(key: K) =>
    (value: T[K]) => {
      setContent((prev) => ({
        ...prev,
        [language]: { ...content[language], [key]: value },
      }));
    };

  return { content, setContentByKey, setContent } as const;
}
