import { useState } from 'react';

import BasicTextInput from './BasicTextInput';

interface DynamicTextInputListProps {
  list: { id: number; value: string }[];
  setList: (newList: { id: number; value: string }[]) => void;
  placeholder: string;
}

export default function DynamicTextInputList({
  list,
  setList,
  placeholder,
}: DynamicTextInputListProps) {
  const [newInput, setNewInput] = useState('');

  const handleAdd = () => {
    const newList = [{ id: getUniqueId(list), value: newInput }, ...list];
    setList(newList);
    setNewInput('');
  };

  const handleChange = (id: number, value: string) => {
    const newList = list.map((item) => (item.id === id ? { ...item, value } : item));
    setList(newList);
  };

  const handleDelete = (id: number) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <div>
      <div className="mb-2.5 flex gap-3">
        <InputWithButton
          inputValue={newInput}
          placeholder={placeholder}
          buttonText="추가"
          onChangeInput={setNewInput}
          onClickButton={handleAdd}
          bgColor="bg-neutral-50"
        />
      </div>
      {list.map((item) => (
        <InputWithButton
          key={item.id}
          inputValue={item.value}
          buttonText="삭제"
          onChangeInput={(value: string) => handleChange(item.id, value)}
          onClickButton={() => handleDelete(item.id)}
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

const getUniqueId = <T extends { id: number }>(list: T[]) => {
  if (list.length === 0) return 1;
  return Math.max(...list.map((item) => item.id)) + 1;
};
