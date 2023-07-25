import Category from './Category';
import SearchBar from './SearchBar';

interface FilterProps {
  margin?: string;
}

export default function Filter({ margin = '' }: FilterProps) {
  const category = [
    '입학',
    '등록',
    '졸업',
    '외부',
    '교환학생',
    '다적오',
    '수업',
    '취업/인턴',
    '미분류',
  ];

  return (
    <div className={`${margin}`}>
      <Category category={category} />
      <SearchBar />
    </div>
  );
}
