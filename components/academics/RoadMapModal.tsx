import SignPostIcon from '@/public/image/signpost_icon.svg';

import ModalFrame from '../modal/ModalFrame';

export default function RoadMapModal({ onClose }: { onClose: () => void }) {
  return (
    <ModalFrame onClose={onClose}>
      <div className="relative flex flex-col gap-4 p-6 bg-neutral-100 border-t-2 border-b border-main-orange">
        <RoadMapTitle />
        <RoadMapDescription />
        <RoadMap />
        <CloseButton onClick={onClose} />
      </div>
    </ModalFrame>
  );
}

function RoadMapTitle() {
  return (
    <h4 className="flex items-center gap-2">
      <SignPostIcon />
      <span className="align-bottom">
        <span className="font-bold text-neutral-700">교과목 로드맵 </span>
        <span className="text-neutral-600 text-xs">(선수 교과목)</span>
      </span>
    </h4>
  );
}

function RoadMapDescription() {
  return (
    <p className="w-[45rem] text-sm text-neutral-700 leading-loose">
      선수 교과목 그래프는 컴퓨터공학부 학부과정에서 어떤 전공과목을 수강하기에 앞서 자신이 과연
      수강하려 하는 전공과목에 대해 얼마나 많은 배경지식을 가지고 있는지를 확인해 볼 수 있게 해 주는
      그래프 입니다. 어떤 과목을 수강하기 위해서는 그 과목으로 들어오는 화살표가 있는 과목들을 모두
      들어두는 것이 유리합니다.
    </p>
  );
}

function RoadMap() {
  return <div className="h-[430px] bg-neutral-300"></div>;
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button className="absolute top-3 right-3" onClick={onClick}>
      <span className="material-symbols-rounded font-light text-neutral-300 text-2xl">close</span>
    </button>
  );
}
