import Category from './Category';
import SearchBar from './SearchBar';

interface FilterProps {
  margin?: string;
}

export default function Filter({ margin = '' }: FilterProps) {
  // constants.ts 같은 곳에 넣어두면 좋을 것 같음

  return (
    <div className={`${margin} w-[740px]`}>
      {/* <Category category={category} /> */}
      <SearchBar />
    </div>
  );
}
