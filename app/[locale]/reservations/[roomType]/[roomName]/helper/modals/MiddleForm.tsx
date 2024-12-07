import { ReservationPostBody } from '@/apis/types/reservation';

import { SetReservationBody } from './useAddReservation';

export default function BottomForm({
  body,
  setBody,
}: {
  body: ReservationPostBody;
  setBody: SetReservationBody;
}) {
  return (
    <div className="mb-6 flex flex-col gap-2">
      <RequiredTextInputFieldset
        type="text"
        title="단체 이름"
        text={body.title}
        setText={(x) => setBody('title', x)}
      />
      <RequiredTextInputFieldset
        type="email"
        title="연락가능 이메일"
        text={body.contactEmail}
        setText={(x) => setBody('contactEmail', x)}
      />
      <RequiredTextInputFieldset
        type="tel"
        title="연락가능 전화번호"
        text={body.contactPhone}
        setText={(x) => setBody('contactPhone', x)}
      />
      <RequiredTextInputFieldset
        type="text"
        title="지도교수"
        text={body.professor}
        setText={(x) => setBody('professor', x)}
      />

      <PurposeTextInputFieldset text={body.purpose} setText={(x) => setBody('purpose', x)} />

      <div className="itmes-center flex gap-1 text-neutral-400">
        <span className="material-symbols-outlined my-auto text-base">error</span>
        <p className="font-normal">예약 시간 20분 후까지 사용하지 않을 시 예약이 취소됩니다.</p>
      </div>
    </div>
  );
}

const RequiredTextInputFieldset = ({
  type,
  title,
  text,
  setText,
}: {
  type: string;
  title: string;
  text: string;
  setText: (text: string) => void;
}) => {
  return (
    <fieldset className="w-[22rem] font-normal">
      <legend className="mb-1">
        {title}
        <span className="text-main-orange">*</span>
      </legend>
      <input
        type={type}
        className={`autofill-bg-white h-[1.75rem] w-full rounded-sm border border-neutral-200
            bg-neutral-50 pl-2 outline-none`}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') e.preventDefault();
        }}
      />
    </fieldset>
  );
};

const PurposeTextInputFieldset = ({
  text,
  setText,
}: {
  text: string;
  setText: (text: string) => void;
}) => {
  return (
    <fieldset className="font-normal">
      <legend className="mb-1">
        사용 목적<span className="text-main-orange">*</span>
      </legend>
      <textarea
        className="h-14 w-full rounded-sm border border-neutral-200 bg-neutral-50 p-1 outline-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </fieldset>
  );
};
