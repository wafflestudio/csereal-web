'use client';

import Pentagon200 from '@/public/image/pentagon_200.svg';
import SignPostIcon from '@/public/image/signpost_icon.svg';

import useModal from '@/utils/hooks/useModal';

import RoadMapModal from './RoadMapModal';

export default function RoadMapButton() {
  const { openModal, closeModal } = useModal();

  return (
    <button
      className="group relative h-11 w-[200px]"
      onClick={() => openModal(<RoadMapModal onClose={closeModal} />)}
    >
      <div className="absolute flex h-full w-full items-center justify-center gap-2 pr-2">
        <SignPostIcon className="fill-main-orange duration-300 group-hover:fill-white" />
        <span className="text-[15px] font-medium text-main-orange duration-300 group-hover:text-white">
          교과목 로드맵 보기
        </span>
      </div>
      <Pentagon200 className="text-white duration-300 group-hover:text-main-orange" />
    </button>
  );
}
