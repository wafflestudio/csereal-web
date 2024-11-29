'use client';

import BasicButton from '@/app/[locale]/reservations/[roomType]/[roomName]/helper/BasicButton';
import ModalFrame from '@/components/modal/ModalFrame';
import { Link } from '@/i18n/routing';
import useModal from '@/utils/hooks/useModal';

import BottomForm from './MiddleForm';
import TopForm from './TopForm';
import useAddReservation from './useAddReservation';

export default function AddReservationModal({ roomId }: { roomId: number }) {
  const { handleSubmit, body, setBody, setDate, canSubmit } = useAddReservation(roomId);
  const { closeModal } = useModal();

  return (
    <ModalFrame onClose={closeModal}>
      <form
        className="border-b border-t-[3px] border-main-orange bg-neutral-100 px-7 pb-6 pt-7 text-md text-neutral-700"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-7 text-xl font-bold">시설 예약</h2>

        <TopForm body={body} setBody={setBody} setDate={setDate} />
        <BottomForm body={body} setBody={setBody} />
        <PrivacyFieldset
          checked={body.agreed}
          toggleChecked={() => setBody('agreed', !body.agreed)}
        />

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
    <fieldset className="mb-6 flex flex-col font-normal">
      <div className="flex items-center gap-5">
        <div
          className="flex select-none items-center gap-1 hover:cursor-pointer"
          onClick={toggleChecked}
        >
          <span className="material-symbols-outlined text-base text-neutral-500">
            {checked ? 'check_box' : 'check_box_outline_blank'}
          </span>
          <p>
            개인정보 수집 및 이용동의<span className="text-main-orange">*</span>
          </p>
        </div>

        <Link
          className="text-neutral-400"
          href="/reservations/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          보러가기
          <span className="material-symbols-outlined translate-y-[3px] text-base">
            chevron_right
          </span>
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
    <div className="flex h-[1.875rem] justify-end gap-2">
      <BasicButton className="w-[2.75rem] text-md" onClick={closeModal}>
        취소
      </BasicButton>
      <BasicButton type="submit" className="w-[4.25rem]" disabled={!canSubmit}>
        예약하기
      </BasicButton>
    </div>
  );
};
