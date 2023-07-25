interface SearchBarProps {
  margin?: string;
}

export default function SearchBar({ margin = '' }: SearchBarProps) {
  return (
    <div className={`flex items-center gap-2.5 ${margin}`}>
      <label htmlFor="search" className="text-sm font-yoon font-bold">
        검색
      </label>
      <div className="flex items-center py-1 px-1.5 h-[30px] border rounded-[3px]">
        <input type="text" id="search" className="outline-none" />
        <span className="material-symbols-rounded text-xl mr-1.5">search</span>
      </div>
    </div>
  );
}
