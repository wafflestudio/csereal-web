import { ChangeEventHandler } from 'react';

import FilePickerRow from './FilePickerRow';
import { PostEditorFile } from '../PostEditorProps';

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
        bg-neutral-50 rounded-sm border-[1px] border-neutral-200
      `}
      >
        {files.map((item, idx) => (
          <FilePickerRow
            //   순서를 안바꾸기로 했으니 키값으로 인덱스 써도 ㄱㅊ
            key={idx}
            file={item}
            deleteFile={() => deleteFileAtIndex(idx)}
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
