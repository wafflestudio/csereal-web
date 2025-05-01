import { StudentType } from '@/apis/types/academics';
import AddCourseModal from '@/app/[locale]/academics/components/courses/AddCourseModal';
import useModal from '@/utils/hooks/useModal';

export default function AddCourseButton({ studentType }: { studentType: StudentType }) {
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
