import type { Identifier, XYCoord } from 'dnd-core';
import Image from 'next/image';
import { ChangeEventHandler, useRef, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import FilePickerRow from './FilePickerRow';

interface Item {
  url: string;
  blob: Blob;
}

export default function FilePicker() {
  const [files, setFiles] = useState<Item[]>([]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    const fileURL = URL.createObjectURL(file);

    if (files.find((x) => x.url === fileURL) !== undefined) {
      // 직접 해보니 URL이 겹치지는 않는데 혹시 모르니 처리
      // TODO: toast 같은걸로 대체
      alert('이미 추가된 파일입니다.');
      return;
    }

    setFiles((files) => [...files, { blob: file, url: fileURL }]);

    // stackoverflow.com/questions/12030686/html-input-file-selection-event-not-firing-upon-selecting-the-same-file
    e.target.value = '';
  };

  const moveFile = (dragIndex: number, hoverIndex: number) => {
    setFiles((prevFiles) => {
      const nextFiles = [...prevFiles];
      nextFiles.splice(dragIndex, 1);
      nextFiles.splice(hoverIndex, 0, prevFiles[dragIndex]);
      return nextFiles;
    });
  };

  const deleteFileAtIndex = (index: number) => {
    setFiles((prevFiles) => {
      const nextFiles = [...prevFiles];
      nextFiles.splice(index, 1);
      return nextFiles;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <label
        className={`rounded-sm border-[1px] border-neutral-700
            h-[1.875rem] px-[.62rem] mb-3
            flex items-center
            font-noto text-xs font-normal self-start 
            hover:bg-neutral-100`}
      >
        파일 선택
        <input type="file" className="hidden" onChange={handleChange} />
      </label>
      <ol
        className={`
          self-start
        bg-neutral-50 rounded-sm border-[1px] border-neutral-200
      `}
      >
        {files.map((file, index) => (
          <FilePickerRow
            key={file.url}
            index={index}
            url={file.url}
            blob={file.blob}
            moveFile={moveFile}
            deleteFile={() => deleteFileAtIndex(index)}
          />
        ))}
      </ol>
    </DndProvider>
  );
}
