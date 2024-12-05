import { ReactNode } from 'react';

import Action from '@/components/editor/rhf/Action';
import Calendar from '@/components/editor/rhf/Calendar';
import Checkbox from '@/components/editor/rhf/Checkbox';
import DateSelector from '@/components/editor/rhf/Date';
import FilePicker from '@/components/editor/rhf/File';
import ImagePicker from '@/components/editor/rhf/Image';
import Text from '@/components/editor/rhf/Text';
import TextList from '@/components/editor/rhf/TextList';

function Form({ children }: { children: ReactNode }) {
  return <form className="flex flex-col">{children}</form>;
}

export default Object.assign(Form, {
  Action,
  Image: ImagePicker,
  File: FilePicker,
  Text,
  TextList,
  Calendar,
  Checkbox,
  Date: DateSelector,
});
