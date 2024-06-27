import { ChangeEventHandler } from 'react';

import FilePickerRow from './FilePickerRow';
import { LocalFile, PostEditorFile } from '../PostEditorTypes';

export interface FilePickerProps {
  files: PostEditorFile[];
  setFiles: (f: (cur: PostEditorFile[]) => PostEditorFile[]) => void;
}

export default function FilePicker({ files, setFiles }: FilePickerProps) {
  // 성능 확인 필요
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files === null) return;
    const newFiles: LocalFile[] = Array.from(e.target.files, (file) => ({
      type: 'LOCAL_FILE',
      file,
    }));

    setFiles((files) => [...files, ...newFiles]);

    // 같은 파일에 대해서 선택이 가능하도록 처리
    // https://stackoverflow.com/a/12102992
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
      <input type="file" className="hidden" onChange={onChange} multiple />
    </label>
  );
}
