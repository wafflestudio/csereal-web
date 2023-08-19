import Link from 'next/link';

import FacebookIcon from '@/public/image/Facebook_icon.svg';
import SnuEngineeringIcon from '@/public/image/SNU_Engineering.svg';
import SnuLogoWithText from '@/public/image/SNU_Logo_with_Text.svg';
import SnucomIcon from '@/public/image/SNUCOM.svg';

import {
  aboutLinks,
  resourcesLinks,
  researchLinks,
  moreLinks,
  FooterLink,
  snucseFacebookLink,
  snucomLink,
  snuEngLink,
  snuLink,
} from '@/constants/footer';

import { contact, directions } from '@/types/page';

import { getPath } from '@/utils/page';

// TODO: 개인정보처리방침 링크
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
      <ul className="text-neutral-500 text-[.625rem] font-normal tracking-[.0125rem]">
        {links.map((link, i) => (
          <li key={i} className="mb-2">
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
      <FooterBottomLeft />
      <FooterBottomRight />
    </div>
  );
}

function FooterBottomLeft() {
  return (
    <div className="text-neutral-500 font-noto text-[.5625rem] tracking-[.01125rem]">
      <div className="flex [&>a]:font-bold [&>span]:font-normal gap-1">
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
  );
}

function FooterBottomRight() {
  return (
    <div className="flex items-end gap-7">
      <Link href={snucseFacebookLink}>
        <FacebookIcon />
      </Link>
      <Link href={snucomLink}>
        <SnucomIcon />
      </Link>
      <Link href={snuEngLink}>
        <SnuEngineeringIcon />
      </Link>
      <Link href={snuLink}>
        <SnuLogoWithText />
      </Link>
    </div>
  );
}
