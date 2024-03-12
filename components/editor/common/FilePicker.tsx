import { ChangeEventHandler } from 'react';

import FilePickerRow from './FilePickerRow';
import { PostEditorFile } from '../PostEditorTypes';

export interface FilePickerProps {
  files: PostEditorFile[];
  setFiles: (f: (cur: PostEditorFile[]) => PostEditorFile[]) => void;
}

export default function FilePicker({ files, setFiles }: FilePickerProps) {
  // 성능 확인 필요
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    setFiles((files) => [...files, { type: 'LOCAL_FILE', file }]);
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
        rounded-sm border-[1px] border-neutral-200 bg-neutral-50
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

function SelectFileButton({ onChange }: { onChange: ChangeEventHandler<HTMLInputElement> }) {
  return (
    <label className="mb-3 flex h-[1.875rem] cursor-pointer items-center self-start rounded-sm border-[1px] border-neutral-300 px-[.62rem] text-xs hover:bg-neutral-100">
      파일 선택
      <input type="file" className="hidden" onChange={onChange} />
    </label>
  );
}
