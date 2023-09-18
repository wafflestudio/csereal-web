import React, { SetStateAction, useRef } from 'react';

interface KeywordInputProps {
  keyword: string;
  setKeyword: React.Dispatch<SetStateAction<string>>;
  disabled?: boolean;
}

export default function KeywordInput({ keyword, setKeyword, disabled = false }: KeywordInputProps) {
  const resetKeyword = () => setKeyword('');

  return (
    <div className="col-start-1 flex items-center">
      <h5 className="font-yoon text-md font-bold mr-3 whitespace-nowrap tracking-wide">검색어</h5>
      <Input keyword={keyword} disabled={disabled} onChange={setKeyword} />
    </div>
  );
}

interface InputProps {
  keyword: string;
  disabled: boolean;
  onChange: (newKeyword: string) => void;
}

function Input({ keyword, disabled, onChange }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const resetKeyword = () => {
    onChange('');
    inputRef.current?.focus();
  };

  return (
    <div className="relative w-fit">
      <input
        type="text"
        id="search"
        ref={inputRef}
        className={`${
          keyword ? 'pl-1.5 pr-6' : 'px-1.5'
        } w-[13.5rem] h-[1.875rem] rounded-[0.1875rem] outline outline-1 outline-neutral-300 focus:outline-neutral-700 font-yoon text-xs tracking-wide bg-transparent autofill-bg-white`}
        value={keyword}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
      />
      {keyword && !disabled && <ResetKeywordButton onClick={resetKeyword} />}
    </div>
  );
}

interface ResetKeywordButtonProps {
  onClick: () => void;
}

function ResetKeywordButton({ onClick }: ResetKeywordButtonProps) {
  return (
    <span
      className="material-symbols-outlined absolute top-[8px] right-1.5 text-neutral-500 hover:text-neutral-700 text-md cursor-pointer"
      onClick={onClick}
    >
      close
    </span>
  );
}
