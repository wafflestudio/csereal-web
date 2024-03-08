import React, { SetStateAction, useRef } from 'react';

interface KeywordInputProps {
  keyword: string;
  setKeyword: React.Dispatch<SetStateAction<string>>;
  disabled?: boolean;
}

export default function KeywordInput({ keyword, setKeyword, disabled = false }: KeywordInputProps) {
  return (
    <div className="flex items-center">
      <h5 className="mr-7 whitespace-nowrap text-md font-bold tracking-wide">검색</h5>
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

  return (
    <div className="relative flex h-[1.875rem] w-[13.5rem] items-center justify-between rounded-sm bg-white pr-3">
      <input
        type="text"
        id="search"
        ref={inputRef}
        className={`autofill-bg-white w-full rounded-sm bg-transparent px-2 text-sm tracking-wide outline-none`}
        value={keyword}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
      />
      <button className="material-symbols-rounded text-[1.25rem] font-light text-neutral-800 hover:text-neutral-500">
        search
      </button>
    </div>
  );
}
