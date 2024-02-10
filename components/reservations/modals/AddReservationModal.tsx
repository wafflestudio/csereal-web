'use client';

import Link from 'next-intl/link';

import ModalFrame from '@/components/modal/ModalFrame';
import BasicButton from '@/components/reservations/BasicButton';

import useModal from '@/hooks/useModal';

import BottomForm from './MiddleForm';
import TopForm from './TopForm';
import useAddReservation from './useAddReservation';

export default function AddReservationModal({ roomId }: { roomId: number }) {
  const { handleSubmit, body, setBody, setDate, privacyChecked, togglePrivacyChecked, canSubmit } =
    useAddReservation(roomId);
  const { closeModal } = useModal();

  return (
    <ModalFrame onClose={closeModal}>
      <form
        className="bg-neutral-100 text-md text-neutral-700 px-5 pt-7 pb-6 border-main-orange border-t-[3px] border-b"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl mb-7 font-bold">시설 예약</h2>

        <TopForm body={body} setBody={setBody} setDate={setDate} />
        <BottomForm body={body} setBody={setBody} />
        <PrivacyFieldset checked={privacyChecked} toggleChecked={togglePrivacyChecked} />

        <BottomButton closeModal={closeModal} canSubmit={canSubmit} />
      </form>
    </ModalFrame>
  );
}

const PrivacyFieldset = ({
  checked,
  toggleChecked,
}: {
  checked: boolean;
  toggleChecked: () => void;
}) => {
  return (
    <fieldset className="flex flex-col mb-6 font-normal">
      <legend className="mb-1">개인정보 수집 및 이용동의</legend>

      <div className="flex items-center gap-3">
        <div
          className="flex items-center gap-1 hover:cursor-pointer select-none"
          onClick={toggleChecked}
        >
          <span className="material-symbols-outlined text-neutral-500 text-base">
            {checked ? 'check_box' : 'check_box_outline_blank'}
          </span>
          <p>
            개인정보 수집이용에 관한 사항(필수)<span className="text-main-orange">*</span>
          </p>
        </div>

        <Link
          className="text-neutral-400 flex items-center"
          href="/reservations/privacy-policy"
          target="_blank"
        >
          <span className="material-symbols-outlined text-base">chevron_right</span>
        </Link>
      </div>
    </fieldset>
  );
};

const BottomButton = ({
  closeModal,
  canSubmit,
}: {
  closeModal: () => void;
  canSubmit: boolean;
}) => {
  return (
    <div className="flex justify-end h-[1.875rem] gap-2">
      <BasicButton className="w-[2.75rem] text-md" onClick={closeModal}>
        취소
      </BasicButton>
      <BasicButton type="submit" className="w-[4.25rem]" disabled={!canSubmit}>
        예약하기
      </BasicButton>
    </div>
  );
};
