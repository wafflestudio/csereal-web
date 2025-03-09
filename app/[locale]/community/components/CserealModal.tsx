import useModal from '@/utils/hooks/useModal';

import ModalFrame from '../../../../components/modal/ModalFrame';

const MEMBERS = [
  { part: 'Designer', members: ['유채원', '최유진'] },
  { part: 'Frontend Developer', members: ['이성열', '임찬솔'] },
  { part: 'Backend Developer', members: ['김준형', '우혁준', '조성규'] },
];

export default function CserealModal() {
  const { closeModal } = useModal();

  return (
    <ModalFrame onClose={closeModal}>
      <div className="styled-scrollbar flex w-[75vw] max-w-4xl flex-col items-center overflow-y-auto overflow-x-hidden bg-white px-16 pb-28 pt-24 shadow-[0_0_30px_8px_rgba(0,0,0,0.25)]">
        <TeamName />
        <Members />
        <Contact />
      </div>
    </ModalFrame>
  );
}

function TeamName() {
  return (
    <h1 className="mb-5 flex flex-col items-start text-3xl tracking-[0.02em] text-main-orange sm:block">
      <span className="font-light">Team </span>
      <span className="font-bold">CSEREAL</span>
    </h1>
  );
}

function Members() {
  return (
    <div className="mb-11 flex flex-col flex-wrap justify-center gap-11 sm:flex-row">
      {MEMBERS.map((info) => (
        <Part part={info.part} members={info.members} key={info.part} />
      ))}
    </div>
  );
}

function Part({ part, members }: { part: string; members: string[] }) {
  return (
    <div>
      <h4 className="mb-2.5 whitespace-nowrap text-center text-base font-bold tracking-[0.02em] text-main-orange">
        {part}
      </h4>
      <p className="flex justify-center gap-4 whitespace-nowrap text-md font-normal tracking-[0.02em]">
        {members.map((member) => (
          <span key={member}>{member}</span>
        ))}
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h4 className="mb-2 text-center text-base font-light tracking-[0.02em] text-main-orange">
        Contact Us
      </h4>
      <span className="font-md font-normal tracking-[0.02em]">csereal.waffle@gmail.com</span>
    </div>
  );
}
