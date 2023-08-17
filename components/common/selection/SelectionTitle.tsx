import { StraightNode } from '@/components/common/Nodes';

// 컴포넌트 사용할 때 key prop 넣어야 애니메이션 지속적으로 작동 가능
// children 프롭으로는 보통 제목 문자열만 넣으면 됨!
// 연구 센터처럼 제목에 문자열 말고 다른 것(e.g. 링크 아이콘)도 들어가는 경우 때문에 리액트 노드 타입으로 받고 있음
export default function SelectionTitle({ key, children }: { key: string; children: React.ReactNode }) {
  return (
    <div className="w-fit mb-5">
      <h4 className="px-2.5 mb-1 font-bold text-[1.25rem] font-noto">{children}</h4>
      <div className="animate-stretch">
        <StraightNode />
      </div>
    </div>
  );
}
