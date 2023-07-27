import React, { SetStateAction } from 'react';

interface SearchBarProps {
  keyword: string;
  setKeyword: React.Dispatch<SetStateAction<string>>;
}

export default function KeywordInput({ keyword, setKeyword: setKeyword }: SearchBarProps) {
  return (
    <div className="col-start-1 flex items-center">
      <h5 className="font-yoon text-[14px] font-bold mr-3">검색어</h5>
      <input
        type="text"
        id="search"
        className="px-1.5 h-[1.875rem] w-[13.5rem] border rounded outline-none font-yoon text-xs"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
}
