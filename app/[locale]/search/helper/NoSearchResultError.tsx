import MagnificentGlass from '@/public/image/search/magnificent_glass.svg';

export default function NoSearchResultError() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-base font-medium text-neutral-300">검색 결과가 존재하지 않습니다</p>
      <MagnificentGlass />
    </div>
  );
}
