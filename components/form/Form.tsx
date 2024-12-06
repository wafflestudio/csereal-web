import { ReactNode } from 'react';

import Action from '@/components/form/Action';
import Calendar from '@/components/form/Calendar';
import Checkbox from '@/components/form/Checkbox';
import DateSelector from '@/components/form/Date';
import Dropdown from '@/components/form/Dropdown';
import FilePicker from '@/components/form/File';
import HTMLEditor from '@/components/form/html/HTMLEditor';
import ImagePicker from '@/components/form/Image';
import Radio from '@/components/form/Radio';
import Section from '@/components/form/Section';
import Text from '@/components/form/Text';
import TextArea from '@/components/form/TextArea';
import TextList from '@/components/form/TextList';

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
  Radio,
  Dropdown,
  Section,
  TextArea,
  HTML: HTMLEditor,
});
