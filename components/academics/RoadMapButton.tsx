'use client';

import SignPostIcon from '@/public/image/signpost_icon.svg';

import useModal from '@/hooks/useModal';

import RoadMapModal from './RoadMapModal';

export default function RoadMapButton() {
  const { openModal, closeModal } = useModal();

  return (
    <button
      className="flex items-center gap-2 py-2.5 pl-4 pr-5 rounded-sm outline-none font-medium text-[0.9375rem] text-white bg-neutral-500 hover:bg-neutral-600 active:bg-neutral-700 shadow-[2px_2px_3px_0_rgba(255,255,255,0.05)_inset,_-2px_-2px_4px_0_rgba(0,0,0,0.10)_inset]"
      onClick={() => openModal(<RoadMapModal onClose={closeModal} />)}
    >
      <SignPostIcon className="fill-white" />
      <span>교과목 로드맵 보기</span>
    </button>
  );
}
