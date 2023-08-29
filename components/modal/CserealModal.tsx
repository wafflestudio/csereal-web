import Link from 'next/link';

import ModalFrame from './ModalFrame';

const MEMBERS = [
  { part: 'Designer', members: ['유채원', '최유진'] },
  { part: 'Frontend Developer', members: ['이성열', '임찬솔', '한우현'] },
  { part: 'Backend Developer', members: ['김준형', '우혁준', '조성규'] },
];

// TODO: 시리얼 메일 파기
const MAIL = '';

export default function CserealModal({ onClose }: { onClose: () => void }) {
  return (
    <ModalFrame onClose={onClose}>
      <div className="flex flex-col items-center pt-20 pb-[7.25rem] w-[53.25rem] font-noto bg-white shadow-[0_0_30px_8px_rgba(0,0,0,0.25)]">
        <TeamName />
        <Members />
        <Contact />
      </div>
    </ModalFrame>
  );
}

function TeamName() {
  return (
    <h1 className="mb-5 text-3xl text-main-orange tracking-[0.02em]">
      <span className="font-light">Team </span>
      <span className="font-bold">CSEREAL</span>
    </h1>
  );
}

function Members() {
  return (
    <div className="flex gap-[3.25rem] mb-[4.5625rem]">
      {MEMBERS.map((info) => (
        <Part part={info.part} members={info.members} key={info.part} />
      ))}
    </div>
  );
}

function Part({ part, members }: { part: string; members: string[] }) {
  return (
    <div>
      <h4 className="mb-2.5 font-light text-main-orange text-base text-center tracking-[0.02em] ">
        {part}
      </h4>
      <p className="flex gap-[1.0625rem] font-yoon text-md tracking-[0.02em]">
        {members.map((member) => (
          <span key={member}>{member}</span>
        ))}
      </p>
    </div>
  );
}

function Contact() {
  return (
    <Link
      href={`mailto:${MAIL}`}
      className="font-light text-main-orange text-base text-center tracking-[0.02em]"
    >
      Contact Us
    </Link>
  );
}
