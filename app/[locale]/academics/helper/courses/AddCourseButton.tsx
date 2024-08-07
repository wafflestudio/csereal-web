import useModal from '@/utils/hooks/useModal';

import AddCourseModal from './AddCourseModal';

export default function AddCourseButton() {
  const { openModal, closeModal } = useModal();

  return (
    <button
      className="mb-8 ml-auto block rounded-[.0625rem] bg-main-orange px-[.875rem] py-2 text-[15px] font-semibold text-white"
      onClick={() => openModal(<AddCourseModal onClose={closeModal} />)}
    >
      새 교과목
    </button>
  );
}
