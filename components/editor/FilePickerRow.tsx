import Image from 'next/image';
import { MouseEventHandler } from 'react';

import ClearIcon from '@/public/image/clear_icon.svg';

import useDragDrop from '../../hooks/useDragDrop';

interface FileRowProps {
  index: number;
  url: string;
  file: File;
  moveFile: (dragIndex: number, hoverIndex: number) => void;
  deleteFile: MouseEventHandler<HTMLButtonElement>;
}

export default function FilePickerRow({ index, url, file, moveFile, deleteFile }: FileRowProps) {
  const { ref, handlerId, isDragging } = useDragDrop(url, index, moveFile);

  return (
    <li
      ref={ref}
      data-handler-id={handlerId}
      style={{ opacity: isDragging ? 0.3 : 1 }}
      className="flex items-center h-8 px-3 border-b-[1px] border-dashed border-neutral-200 last:border-none"
    >
      <span className="material-symbols-rounded text-lg text-neutral-400 mr-2">drag_pan</span>
      <p className="font-noto text-xs font-normal mr-4">{file.name}</p>
      <button className="ml-auto" onClick={deleteFile}>
        <ClearIcon />
      </button>
    </li>
  );
}
