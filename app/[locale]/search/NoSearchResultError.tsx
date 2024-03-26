import MagnificentGlass from '@/public/image/search/magnificent_glass.svg';

export default function NoSearchResultError({ tag }: { tag?: string[] }) {
  // TODO: 검색 결과 유무 확인
  console.log(tag);

  return (
    <div className="flex flex-col items-center">
      <p className="text-base font-medium text-neutral-300">검색 결과가 존재하지 않습니다</p>
      <MagnificentGlass />
    </div>
  );
}
