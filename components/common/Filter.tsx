import Category from './Category';
import SearchBar from './SearchBar';

interface FilterProps {
  margin?: string;
}

export default function Filter({ margin = '' }: FilterProps) {
  // constants.ts 같은 곳에 넣어두면 좋을 것 같음
  const category = [
    '입학',
    '등록/복학/휴학/재입학',
    '졸업',
    '외부 행사/프로그림',
    '학사(학부)',
    '학사(대학원)',
    '교환학생/유학',
    '다전공/전과',
    '수업',
    '취업/인턴(공식 게시)',
    '기업게시판',
    '자료실',
    '학생공지(교내)',
    '미분류',
  ];

  return (
    <div className={`${margin} w-[840px]`}>
      <Category category={category} />
      <SearchBar />
    </div>
  );
}
