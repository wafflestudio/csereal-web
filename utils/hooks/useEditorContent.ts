'use client';

import { useState } from 'react';

import { Language, WithLanguage } from '@/types/language';

// 기본
export default function useEditorContent<T>(initialState: T): {
  content: T;
  setContentByKey: <K extends keyof T>(key: K) => (value: T[K]) => void;
  setContent: React.Dispatch<React.SetStateAction<T>>;
};

// content가 {ko: T, en: T} 구조일경우
export default function useEditorContent<T>(
  initialState: WithLanguage<T>,
  language: Language,
): {
  content: WithLanguage<T>;
  setContentByKey: <K extends keyof T>(key: K, commonAttribute?: boolean) => (value: T[K]) => void;
  setContent: React.Dispatch<React.SetStateAction<WithLanguage<T>>>;
};

export default function useEditorContent<T>(
  initialState: WithLanguage<T> | T,
  language?: Language,
) {
  const [content, setContent] = useState<WithLanguage<T> | T>(initialState);

  const isWithLanguage = (state: WithLanguage<T> | T): state is WithLanguage<T> => {
    return state && typeof state === 'object' && 'ko' in state && 'en' in state;
  };

  const setContentByKey =
    <K extends keyof T>(key: K, commonAttribute: boolean = false) =>
    (value: T[K]) => {
      setContent((prev) => {
        if (language && isWithLanguage(prev)) {
          return commonAttribute
            ? // 한영 공통 속성인 경우
              {
                ko: { ...prev.ko, [key]: value },
                en: { ...prev.en, [key]: value },
              }
            : {
                ...prev,
                [language]: { ...prev[language], [key]: value },
              };
        }

        return {
          ...prev,
          [key]: value,
        };
      });
    };

  return { content, setContentByKey, setContent } as const;
}
