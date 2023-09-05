import React, { SetStateAction } from 'react';

interface KeywordInputProps {
  keyword: string;
  setKeyword: React.Dispatch<SetStateAction<string>>;
  disabled?: boolean;
}

export default function KeywordInput({ keyword, setKeyword, disabled = false }: KeywordInputProps) {
  return (
    <div className="col-start-1 flex items-center">
      <h5 className="font-yoon text-md font-bold mr-3 whitespace-nowrap tracking-wide">검색어</h5>
      <div className="flex gap-1 items-center px-1.5 w-[13.5rem] h-[1.875rem] border rounded">
        <input
          type="text"
          id="search"
          className="outline-none grow font-yoon text-xs tracking-wide bg-transparent"
          value={keyword}
          disabled={disabled}
          onChange={(e) => setKeyword(e.target.value)}
        />
        {keyword && (
          <span
            className="material-symbols-outlined text-neutral-400 text-md cursor-pointer"
            onClick={() => setKeyword('')}
          >
            close
          </span>
        )}
      </div>
    </div>
  );
}
