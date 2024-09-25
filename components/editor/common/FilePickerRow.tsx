import { MouseEventHandler } from 'react';

import ClearIcon from '@/public/image/clear_icon.svg';

import { PostEditorFile } from '../PostEditorTypes';

interface FileRowProps {
  file: PostEditorFile;
  deleteFile: MouseEventHandler<HTMLButtonElement>;
}

export default function FilePickerRow({ file, deleteFile }: FileRowProps) {
  return (
    <li className="flex h-[1.875rem] items-center border-b-[1px] border-dashed border-neutral-200 px-3 last:border-none">
      <p className="mr-4 text-sm">{file.file.name}</p>
      <button className="ml-auto" onClick={deleteFile}>
        <ClearIcon />
      </button>
    </li>
  );
}
