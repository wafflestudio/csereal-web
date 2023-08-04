import Image from 'next/image';
import Link from 'next/link';

import facebookIcon from '@/public/image/Facebook_icon.svg';
import snuEngineeringIcon from '@/public/image/SNU_Engineering.svg';
import snuLogoWithText from '@/public/image/SNU_Logo_with_Text.svg';
import snucomIcon from '@/public/image/SNUCOM.svg';

import { contact, directions } from '@/types/page';

import { getPath } from '@/utils/page';

import { aboutLinks, resourcesLinks, researchLinks, moreLinks, FooterLink } from './footerLinks';

const privacyPath = '/404';
const contactPath = getPath(contact);
const directionsPath = getPath(directions);

export default function Footer() {
  return (
    <footer className="border-t-2 border-neutral-100 mt-20">
      <FooterTop />
      <FooterBottom />
    </footer>
  );
}

function FooterTop() {
  return (
    <div className="bg-white px-[3.75rem] py-8 flex">
      <LinkGroup groupName="About" links={aboutLinks} width="w-[7.5rem]" />
      <LinkGroup groupName="Resources" links={resourcesLinks} width="w-[8.25rem]" />
      <LinkGroup groupName="Research" links={researchLinks} width="w-[9rem]" />
      <LinkGroup groupName="More" links={moreLinks} width="w-[6.5rem]" />
    </div>
  );
}

interface LinkGroupProps {
  groupName: string;
  links: FooterLink[];
  width: string;
}

function LinkGroup({ groupName, links, width }: LinkGroupProps) {
  return (
    <section className={`${width}`}>
      <h3 className={`text-neutral-600 text-xs font-medium mb-2`}>{groupName}</h3>
      <ul>
        {links.map((link, i) => (
          <li
            key={i}
            className="text-neutral-500 text-[.625rem] font-normal mb-2 tracking-[.0125rem]"
          >
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function FooterBottom() {
  return (
    <div className="bg-neutral-100 px-[3.75rem] py-8 flex justify-between items-center">
      <div className="text-neutral-500 font-noto text-[.5625rem] tracking-[.01125rem]">
        <div className="flex [&>a]:font-bold [&>span]:font-normal gap-1 tracking-[10%]">
          <Link href={privacyPath}>개인정보처리방침</Link>
          <span>|</span>
          <Link href={contactPath}>학부 연락처</Link>
          <span>|</span>
          <Link href={directionsPath}>찾아오시는 길</Link>
        </div>
        <address className="not-italic mb-4">
          8826 서울특별시 관악구 관악로 1 서울대학교 공과대학 컴퓨터공학부 행정실(301동 316호)
        </address>
        <p className="font-normal">
          Powered by CSEREAL <br />
          Copyright © Department of CSE, SNU. All Rights Reserved.
        </p>
      </div>

      <div className="flex gap-7">
        <Link href="https://www.facebook.com/groups/snucsegroup/">
          <Image src={facebookIcon} alt="페이스북 로고" />
        </Link>
        <Link href="http://www.snucom.org/">
          <Image src={snucomIcon} alt="서울대 컴퓨터공학 동문회 로고" />
        </Link>
        <Link href="http://eng.snu.ac.kr/">
          <Image src={snuEngineeringIcon} alt="서울대 공과대학 로고" />
        </Link>
        <Link href="https://www.snu.ac.kr/snunow/pr/videos">
          <Image src={snuLogoWithText} alt="서울대 로고" />
        </Link>
      </div>
    </div>
  );
}
