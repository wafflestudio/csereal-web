import { ReactNode } from 'react';

import Action from '@/components/editor/rhf/Action';
import FilePicker from '@/components/editor/rhf/File';
import ImagePicker from '@/components/editor/rhf/Image';

function Form({ children }: { children: ReactNode }) {
  return <form className="flex flex-col">{children}</form>;
}

export default Object.assign(Form, { Action, Image: ImagePicker, File: FilePicker });
