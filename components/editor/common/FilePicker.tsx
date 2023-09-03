import { ChangeEventHandler, Dispatch, SetStateAction, useState } from 'react';

import FilePickerRow from './FilePickerRow';

export interface FilePickerProps {
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
}

export default function FilePicker({ files, setFiles }: FilePickerProps) {
  // 성능 확인 필요
  const filesWithURL = files.map((file) => ({ file, url: URL.createObjectURL(file) }));
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    const fileURL = URL.createObjectURL(file);

    // 직접 해보니 URL이 겹치지는 않는데 혹시 모르니 중복 처리
    if (filesWithURL.find((x) => x.url === fileURL) !== undefined) {
      // TODO: toast 같은걸로 대체
      alert('이미 추가된 파일입니다.');
      return;
    }

    setFiles((files) => [...files, file]);

    // stackoverflow.com/questions/12030686/html-input-file-selection-event-not-firing-upon-selecting-the-same-file
    e.target.value = '';
  };

  const deleteFileAtIndex = (index: number) => {
    setFiles((prevFiles) => {
      const nextFiles = [...prevFiles];
      nextFiles.splice(index, 1);
      return nextFiles;
    });
  };

  return (
    <>
      <SelectFileButton onChange={handleChange} />
      <ol
        className={`
          self-start
        bg-neutral-50 rounded-sm border-[1px] border-neutral-200
      `}
      >
        {filesWithURL.map((item, index) => (
          <FilePickerRow
            key={item.url}
            file={item.file}
            deleteFile={() => deleteFileAtIndex(index)}
          />
        ))}
      </ol>
    </>
  );
}

function SelectFileButton({ onChange }: { onChange: ChangeEventHandler<HTMLInputElement> }) {
  return (
    <label
      className={`rounded-sm border-[1px] border-neutral-700
            h-[1.875rem] px-[.62rem] mb-3
            flex items-center
            font-noto text-xs font-normal self-start 
            hover:bg-neutral-100`}
    >
      파일 선택
      <input type="file" className="hidden" onChange={onChange} />
    </label>
  );
}
