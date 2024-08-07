import useModal from '@/utils/hooks/useModal';

import AddCourseModal from './AddCourseModal';

// TODO: StudentType 사용
export default function AddCourseButton({
  studentType,
}: {
  studentType: 'undergraduate' | 'graduate';
}) {
  const { openModal, closeModal } = useModal();

  return (
    <button
      className="mb-8 ml-auto block rounded-[.0625rem] bg-main-orange px-[.875rem] py-2 text-[15px] font-semibold text-white"
      onClick={() => openModal(<AddCourseModal onClose={closeModal} studentType={studentType} />)}
    >
      새 교과목
    </button>
  );
}
