import { useState } from 'react';

import BasicTextInput from './BasicTextInput';

interface DynamicTextInputListProps {
  list: string[];
  setList: (newList: string[]) => void;
  placeholder: string;
}

export default function DynamicTextInputList({
  list,
  setList,
  placeholder,
}: DynamicTextInputListProps) {
  const [newInput, setNewInput] = useState('');

  const handleAdd = () => {
    const newList = [newInput, ...list];
    setList(newList);
    setNewInput('');
  };

  const handleChange = (index: number, value: string) => {
    const newList = list.map((item, i) => (i === index ? value : item));
    setList(newList);
  };

  const handleDelete = (index: number) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div>
      <InputWithButton
        inputValue={newInput}
        placeholder={placeholder}
        buttonText="추가"
        onChangeInput={setNewInput}
        onClickButton={handleAdd}
        bgColor="bg-neutral-50"
      />
      {list.map((item, i) => (
        <InputWithButton
          key={i}
          inputValue={item}
          buttonText="삭제"
          onChangeInput={(value: string) => handleChange(i, value)}
          onClickButton={() => handleDelete(i)}
        />
      ))}
    </div>
  );
}

function InputWithButton({
  inputValue,
  placeholder,
  buttonText,
  onChangeInput,
  onClickButton,
  bgColor,
}: {
  inputValue: string;
  placeholder?: string;
  buttonText: string;
  onChangeInput: (value: string) => void;
  onClickButton: () => void;
  bgColor?: string;
}) {
  return (
    <div className="mb-2.5 flex gap-3">
      <BasicTextInput
        maxWidth="w-[25rem]"
        onChange={onChangeInput}
        value={inputValue}
        bgColor={bgColor}
        placeholder={placeholder}
      />
      <Button text={buttonText} onClick={onClickButton} bgColor={bgColor} />
    </div>
  );
}

function Button({
  text,
  onClick,
  bgColor,
}: {
  text: string;
  onClick: () => void;
  bgColor?: string;
}) {
  return (
    <button
      className={`h-8 rounded-sm border border-neutral-300 ${bgColor} px-2.5 text-sm text-neutral-700 hover:bg-neutral-300`}
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  );
}
