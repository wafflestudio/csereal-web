import Image from 'next/image';
import Link from 'next/link';

import facebookIcon from '@/public/image/Facebook_icon.svg';
import snuEngineeringIcon from '@/public/image/SNU_Engineering.svg';
import snuLogoWithText from '@/public/image/SNU_Logo_With_Text.svg';
import snucomIcon from '@/public/image/SNUCOM.svg';

import { aboutLinks, resourcesLinks, researchLinks, moreLinks, FooterLink } from './footerLinks';

export default function Footer() {
  return (
    <>
      <FooterTop />
      <FooterBottom />
    </>
  );
}

function FooterTop() {
  return (
    <div className="bg-white px-[3.75rem] py-8 flex ">
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
    <section>
      <h3 className={`text-neutral-600 text-xs font-medium mb-2 ${width}`}>{groupName}</h3>
      <ul>
        {links.map((link, i) => (
          <li key={i} className="text-neutral-500 text-[.625rem] font-normal mb-2">
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function FooterBottom() {
  return (
    <div className="bg-neutral-100 px-8 py-15">
      <Image src={facebookIcon} alt="페이스북 로고" />
      <Image src={snucomIcon} alt="서울대 컴퓨터공학 동문회 로고" />
      <Image src={snuEngineeringIcon} alt="서울대 공과대학 로고" />
      <Image src={snuLogoWithText} alt="서울대 로고" />
    </div>
  );
}
