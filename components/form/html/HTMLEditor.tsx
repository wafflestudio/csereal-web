'use client';

import '@/components/form/html/suneditor.css';
import '@/components/form/html/suneditor-contents.css';

import { useEffect, useState } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import suneditor from 'suneditor';
import { ko } from 'suneditor/src/lang/';
import { SunEditorOptions } from 'suneditor/src/options';
import plugins from 'suneditor/src/plugins';

import { postImage } from '@/apis/v1/file/upload';
import { isContentEmpty } from '@/utils/post';

export interface HTMLEditorProps {
  name: string;
  isHidden?: boolean;
  options?: RegisterOptions;
}

// MEMO: defaultValues에 비동기 함수를 건네도 동작할지 모르겠음.
export default function HTMLEditor({ name, isHidden, options: registerOptions }: HTMLEditorProps) {
  const { register, setValue, getValues } = useFormContext();
  const [div, setDiv] = useState<HTMLDivElement | null>(null);
  const { onBlur } = register(name, registerOptions);

  useEffect(() => {
    if (!div) return;

    const editor = suneditor.create(div, suneditorOptions);
    editor.onImageUploadBefore = handleImageUploadBefore;
    editor.onBlur = onBlur;
    editor.onChange = (contents) => {
      setValue(name, isContentEmpty(editor) ? '' : contents, {
        shouldDirty: true,
      });
    };

    editor.setContents(getValues(name));

    return () => {
      editor.destroy();
      return;
    };
  }, [div, getValues, name, onBlur, setValue]);

  if (isHidden) return null;

  return <div ref={setDiv} />;
}

// @ts-expect-error suneditor 내부 타입
const handleImageUploadBefore = (files, _info, _core, uploadHandler) => {
  const formData = new FormData();
  // @ts-expect-error suneditor 내부 타입
  files.forEach((file, idx) => {
    const ext = file.name.split('.').pop();
    const newFile = new File([file], `file-${idx}.${ext}`);
    formData.append(newFile.name, newFile);
  });

  postImage(formData)
    .then((resp) => {
      uploadHandler(resp);
    })
    .catch((reason) => uploadHandler(reason + ''));

  return undefined;
};

const suneditorOptions: SunEditorOptions = {
  defaultStyle: 'padding: 1rem',
  minHeight: '400px',
  lang: ko,
  plugins,
  buttonList: [
    ['undo', 'redo'],
    ['fontSize', 'formatBlock'],
    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
    '/', // Line break
    ['fontColor', 'hiliteColor'],
    ['lineHeight', 'align', 'horizontalRule', 'list'],
    ['table', 'link', 'image', 'preview'],
  ],
  imageMultipleFile: true,
  linkRelDefault: {
    // 안전하지 않은 써드파티 링크(target="_blank") 취약점 대응
    // TODO: 복사 붙여넣기 한 경우 대응
    check_new_window: 'noreferrer noopener',
  },
};
