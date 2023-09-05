import Image from 'next/image';

import roadmap from '@/public/image/roadmap.png';
import SignPostIcon from '@/public/image/signpost_icon.svg';

import ModalFrame from '@/components/modal/ModalFrame';

export default function RoadMapModal({ onClose }: { onClose: () => void }) {
  return (
    <ModalFrame onClose={onClose}>
      <div className="relative flex flex-col gap-4 p-6 w-fit max-w-[768px] bg-neutral-100 border-t-2 border-b rounded-t-sm border-main-orange overflow-auto styled-scrollbar overflow-x-hidden">
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
        <span className="font-bold">교과목 로드맵 </span>
        <span className="text-neutral-600 text-xs">(선수 교과목)</span>
      </span>
    </h4>
  );
}

function RoadMapDescription() {
  return (
    <p className="text-sm leading-loose">
      선수 교과목 그래프는 컴퓨터공학부 학부과정에서 어떤 전공과목을 수강하기에 앞서 자신이 과연
      수강하려 하는 전공과목에 대해 얼마나 많은 배경지식을 가지고 있는지를 확인해 볼 수 있게 해 주는
      그래프입니다. 어떤 과목을 수강하기 위해서는 그 과목으로 들어오는 화살표가 있는 과목들을 모두
      들어두는 것이 유리합니다.
    </p>
  );
}

function RoadMap() {
  return (
    <div className="relative h-[430px]">
      <Image src={roadmap} alt="교과목_로드맵" priority fill objectFit="contain" />
    </div>
  );
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button className="absolute top-3 right-3" onClick={onClick}>
      <span className="material-symbols-rounded font-light text-neutral-300 text-2xl">close</span>
    </button>
  );
}
