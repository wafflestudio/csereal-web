import React, { SetStateAction } from 'react';

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
      <div className="flex gap-1 items-center px-1.5 w-[13.5rem] h-[1.875rem] border rounded-[0.1875rem]">
        <Input keyword={keyword} disabled={disabled} onChange={setKeyword} />
        {keyword && <ResetKeywordButton onClick={resetKeyword} />}
      </div>
    </div>
  );
}

interface InputProps {
  keyword: string;
  disabled: boolean;
  onChange: (newKeyword: string) => void;
}

function Input({ keyword, disabled, onChange }: InputProps) {
  return (
    <input
      type="text"
      id="search"
      className="outline-none grow font-yoon text-xs tracking-wide bg-transparent autofill-bg-white"
      value={keyword}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

interface ResetKeywordButtonProps {
  onClick: () => void;
}

function ResetKeywordButton({ onClick }: ResetKeywordButtonProps) {
  return (
    <span
      className="material-symbols-outlined text-neutral-500 hover:text-neutral-700 text-md cursor-pointer"
      onClick={onClick}
    >
      close
    </span>
  );
}
