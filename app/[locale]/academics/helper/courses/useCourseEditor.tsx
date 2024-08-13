import { Classification, Course } from '@/types/academics';
import { Language } from '@/types/language';

import useEditorContent from '@/utils/hooks/useEditorContent';

export default function useCourseEditor(initCourse: Course) {
  const { content, setContent, setContentByKey } = useEditorContent(initCourse);

  const setLanguageContent = (key: 'name' | 'description', value: string, language: Language) => {
    setContent((prev) => ({ ...prev, [language]: { ...prev[language], [key]: value } }));
  };

  const setClassification = (value: Classification) =>
    setContent((prev) => ({
      ...prev,
      ko: { ...prev.ko, classification: value },
      en: { ...prev.en, classification: value },
    }));

  return { content, setContentByKey, setLanguageContent, setClassification };
}
