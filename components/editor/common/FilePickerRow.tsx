import { MouseEventHandler } from 'react';

import ClearIcon from '@/public/image/clear_icon.svg';

import { PostEditorFile } from '../PostEditorProps';

interface FileRowProps {
  file: PostEditorFile;
  deleteFile: MouseEventHandler<HTMLButtonElement>;
}

export default function FilePickerRow({ file, deleteFile }: FileRowProps) {
  return (
    <li className="flex items-center h-8 px-3 border-b-[1px] border-dashed border-neutral-200 last:border-none">
      <p className="text-xs mr-4">{file.file.name}</p>
      <button className="ml-auto" onClick={deleteFile}>
        <ClearIcon />
      </button>
    </li>
  );
}
