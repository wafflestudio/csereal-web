'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import SnuEngineeringIcon from '@/public/image/SNU_Engineering.svg';
import SnuLogoWithText from '@/public/image/SNU_Logo_with_Text.svg';
import SnucomIcon from '@/public/image/SNUCOM.svg';

import CserealModal from '@/components/modal/CserealModal';

import {
  aboutLinks,
  resourcesLinks,
  researchLinks,
  moreLinks,
  FooterLink,
  snucomLink,
  snuEngLink,
  snuLink,
} from '@/constants/footer';

import useModal from '@/hooks/useModal';

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
  const t = useTranslations('Footer');

  return (
    <div className="bg-neutral-100 px-[3.75rem] py-8 flex">
      <LinkGroup groupName={t('About')} links={aboutLinks} width="w-[7.8rem]" />
      <LinkGroup groupName={t('Resources')} links={resourcesLinks} width="w-[8.55rem]" />
      <LinkGroup groupName={t('Research')} links={researchLinks} width="w-[9.3rem]" />
      <LinkGroup groupName={t('More')} links={moreLinks} width="w-[6.9rem]" />
    </div>
  );
}

interface LinkGroupProps {
  groupName: string;
  links: FooterLink[];
  width: string;
}

function LinkGroup({ groupName, links, width }: LinkGroupProps) {
  const t = useTranslations('Footer');
  return (
    <section className={`${width}`}>
      <h3 className={`text-neutral-600 text-xs font-medium mb-2`}>{groupName}</h3>
      <ul className="text-neutral-500 text-[.6875rem] font-normal tracking-[.0125rem]">
        {links.map((link, i) => (
          <li key={i} className="mb-2">
            <Link href={link.href}>{t(link.title)}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function FooterBottom() {
  return (
    <div className="bg-neutral-50 px-[3.75rem] py-8 flex justify-between items-center">
      <FooterBottomLeft />
      <FooterBottomRight />
    </div>
  );
}

function FooterBottomLeft() {
  const { openModal } = useModal();
  const t = useTranslations('Footer');

  return (
    <div className="text-neutral-500 font-noto text-[.6875rem] tracking-[.01125rem]">
      <div className="flex [&>a]:font-bold [&>span]:font-normal gap-1">
        <Link href={privacyPath}>{t('개인정보처리방침')}</Link>
        <span>|</span>
        <Link href={contactPath}>{t('학부 연락처')}</Link>
        <span>|</span>
        <Link href={directionsPath}>{t('찾아오시는 길')}</Link>
      </div>
      <address className="not-italic mb-4">{t('address')}</address>
      <p className="font-normal">
        Powered by{' '}
        <span
          className="cursor-pointer hover:underline"
          onClick={() => openModal(<CserealModal />)}
        >
          CSEREAL
        </span>
        <br />
        Copyright © Department of CSE, SNU. All Rights Reserved.
      </p>
    </div>
  );
}

function FooterBottomRight() {
  return (
    <div className="flex items-end gap-7">
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
