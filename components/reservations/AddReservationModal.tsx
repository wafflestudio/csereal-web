import useModal from '@/hooks/useModal';

import ModalFrame from '../modal/ModalFrame';

export default function AddReservationModal() {
  const { closeModal } = useModal();
  return (
    <ModalFrame onClose={closeModal}>
      <div className="bg-white w-[24.4rem] text-neutral-700 px-5 py-6">
        <h2 className="text-[1.25rem] mb-7">시설 예약</h2>
        
      </div>
    </ModalFrame>
  );
}
