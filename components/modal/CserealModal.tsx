import useModal from '@/utils/hooks/useModal';

import ModalFrame from './ModalFrame';

const MEMBERS = [
  { part: 'Designer', members: ['유채원', '최유진'] },
  { part: 'Frontend Developer', members: ['이성열', '임찬솔'] },
  { part: 'Backend Developer', members: ['김준형', '우혁준', '조성규'] },
];

export default function CserealModal() {
  const { closeModal } = useModal();

  return (
    <ModalFrame onClose={closeModal}>
      <div className="font-noto flex w-[53.25rem] flex-col bg-white pb-[103px] pt-[98px] shadow-[0_0_30px_8px_rgba(0,0,0,0.25)]">
        <TeamName />
        <Members />
        <Contact />
      </div>
    </ModalFrame>
  );
}

function TeamName() {
  return (
    <h1 className="mx-auto mb-5 text-3xl tracking-[0.02em] text-main-orange">
      <span className="font-noto font-light">Team </span>
      <span className="font-noto font-bold">CSEREAL</span>
    </h1>
  );
}

function Members() {
  return (
    <div className="mb-[46px] ml-[201px] mr-[158px] flex gap-11">
      {MEMBERS.map((info) => (
        <Part part={info.part} members={info.members} key={info.part} />
      ))}
    </div>
  );
}

function Part({ part, members }: { part: string; members: string[] }) {
  return (
    <div>
      <h4 className="font-noto mb-2.5 whitespace-nowrap text-center text-base font-bold tracking-[0.02em] text-main-orange">
        {part}
      </h4>
      <p className="font-yoon flex justify-center gap-[1.0625rem] whitespace-nowrap text-md font-normal tracking-[0.02em]">
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
      <h4 className="font-noto mb-[7px] text-center text-base font-light tracking-[0.02em] text-main-orange">
        Contact Us
      </h4>
      <span className="font-yoon font-md font-normal tracking-[0.02em]">
        csereal.waffle@gmail.com
      </span>
    </div>
  );
}
