import Image from 'next/image';
import { useTranslations } from 'next-intl';

import roadmap from '@/public/image/roadmap.png';
import SignPostIcon from '@/public/image/signpost_icon.svg';

import ModalFrame from '@/components/modal/ModalFrame';

export default function RoadMapModal({ onClose }: { onClose: () => void }) {
  return (
    <ModalFrame onClose={onClose}>
      <div className="styled-scrollbar relative flex w-fit max-w-[768px] flex-col gap-4 overflow-auto overflow-x-hidden rounded-t-sm border-b border-t-2 border-main-orange bg-neutral-50 p-6">
        <RoadMapTitle />
        <RoadMapDescription />
        <RoadMap />
        <CloseButton onClick={onClose} />
      </div>
    </ModalFrame>
  );
}

function RoadMapTitle() {
  const t = useTranslations('Content');

  return (
    <h4 className="flex items-center gap-2">
      <SignPostIcon className="fill-main-orange" />
      <span className="align-bottom">
        <span className="text-lg font-bold">{t('교과목 로드맵')} </span>
        <span className="text-sm text-neutral-600">({t('선수 교과목')})</span>
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
    <div className="relative h-[31.25rem] min-h-[19.375rem]">
      <Image src={roadmap} alt="교과목_로드맵" priority fill objectFit="contain" />
    </div>
  );
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button className="absolute right-3 top-3" onClick={onClick}>
      <span className="material-symbols-rounded text-2xl font-light text-neutral-400">close</span>
    </button>
  );
}
