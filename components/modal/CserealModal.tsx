import useModal from '@/hooks/useModal';

import ModalFrame from './ModalFrame';

const MEMBERS = [
  { part: 'Designer', members: ['유채원', '최유진'] },
  { part: 'Frontend Developer', members: ['이성열', '임찬솔'] },
  { part: 'Backend Developer', members: ['김준형', '우혁준', '조성규'] },
];

const MAIL = 'csereal.waffle@gmail.com';

export default function CserealModal() {
  const { closeModal } = useModal();

  return (
    <ModalFrame onClose={closeModal}>
      <div className="flex flex-col pt-[98px] pb-[103px] w-[53.25rem] font-noto bg-white shadow-[0_0_30px_8px_rgba(0,0,0,0.25)]">
        <TeamName />
        <Members />
        <Contact />
      </div>
    </ModalFrame>
  );
}

function TeamName() {
  return (
    <h1 className="mx-auto mb-5 text-3xl text-main-orange tracking-[0.02em]">
      <span className="font-noto font-light">Team </span>
      <span className="font-noto font-bold">CSEREAL</span>
    </h1>
  );
}

function Members() {
  return (
    <div className="ml-[201px] mr-[158px] flex gap-11 mb-[46px]">
      {MEMBERS.map((info) => (
        <Part part={info.part} members={info.members} key={info.part} />
      ))}
    </div>
  );
}

function Part({ part, members }: { part: string; members: string[] }) {
  return (
    <div>
      <h4 className="whitespace-nowrap mb-2.5 font-noto font-bold text-main-orange text-base text-center tracking-[0.02em]">
        {part}
      </h4>
      <p className="whitespace-nowrap flex justify-center gap-[1.0625rem] font-yoon font-normal text-md tracking-[0.02em]">
        {members.map((member) => (
          <span key={member}>{member}</span>
        ))}
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="mx-auto">
      <h4 className="font-noto font-light mb-[7px] text-main-orange text-base text-center tracking-[0.02em]">
        Contact Us
      </h4>
      <span className="font-yoon font-normal font-md tracking-[0.02em]">
        csereal.waffle@gmail.com
      </span>
    </div>
  );
}
