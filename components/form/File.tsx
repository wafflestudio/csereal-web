import { ChangeEventHandler, MouseEventHandler } from 'react';
import { RegisterOptions, useFormContext, useWatch } from 'react-hook-form';

import ClearIcon from '@/public/image/clear_icon.svg';

import { LocalFile, EditorFile } from './types';

interface FilePickerProps {
  name: string;
  options?: RegisterOptions;
  multiple?: boolean;
}

export default function FilePicker({ name, options, multiple = true }: FilePickerProps) {
  const { register, setValue } = useFormContext();
  const files = useWatch({ name }) as EditorFile[];

  register(name, options);

  // 성능 확인 필요
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files === null) return;

    const newFiles: LocalFile[] = Array.from(e.target.files, (file) => ({
      type: 'LOCAL_FILE',
      file,
    }));

    setValue(name, [...files, ...newFiles]);

    // 같은 파일에 대해서 선택이 가능하도록 처리
    // https://stackoverflow.com/a/12102992
    e.target.value = '';
  };

  const deleteFileAtIndex = (index: number) => {
    const nextFiles = [...files];
    nextFiles.splice(index, 1);
    setValue(name, nextFiles);
  };

  return (
    <>
      <SelectFileButton onChange={handleChange} multiple={multiple} />
      <ol
        className={`
          
        self-start rounded-sm border-[1px] border-neutral-200 bg-neutral-50
      `}
      >
        {files.map((item, idx) => (
          <FilePickerRow
            //   순서를 안바꾸기로 했으니 키값으로 인덱스 써도 ㄱㅊ
            key={idx}
            file={item}
            deleteFile={(e) => {
              e.preventDefault();
              deleteFileAtIndex(idx);
            }}
          />
        ))}
      </ol>
    </>
  );
}

function SelectFileButton({
  onChange,
  multiple,
}: {
  onChange: ChangeEventHandler<HTMLInputElement>;
  multiple: boolean;
}) {
  return (
    <label className="mr-3 flex h-8 cursor-pointer items-center self-start rounded-sm border-[1px] border-neutral-300 px-[.62rem] text-xs hover:bg-neutral-100">
      파일 선택
      <input type="file" className="hidden" onChange={onChange} multiple={multiple} />
    </label>
  );
}

interface FileRowProps {
  file: EditorFile;
  deleteFile: MouseEventHandler<HTMLButtonElement>;
}

function FilePickerRow({ file, deleteFile }: FileRowProps) {
  return (
    <li className="flex h-[1.875rem] items-center border-b-[1px] border-dashed border-neutral-200 px-3 last:border-none">
      <p className="mr-4 text-sm">{file.file.name}</p>
      <button className="ml-auto" onClick={deleteFile}>
        <ClearIcon />
      </button>
    </li>
  );
}
