'use client';

import { useTranslations } from 'next-intl';
<<<<<<< HEAD
=======
import Link from 'next-intl/link';
import { useState } from 'react';
>>>>>>> 1dafa61 (design: 네비바 디자인 적용, 리팩터링)

import { Link } from '@/navigation';
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
  contactPath,
  directionsPath,
  privacyPath,
} from '@/constants/footer';

import useModal from '@/hooks/useModal';

import useFooterDesignMode, { FooterMode } from './useFooterToDesignMode';

export default function Footer() {
<<<<<<< HEAD
  const mode = useFooterDesignMode();

  const topBg = mode === 'light' ? 'bg-neutral-50' : 'bg-neutral-900';
  const bottomBg = mode === 'light' ? 'bg-neutral-100' : 'bg-[rgb(30,30,30)]';
=======
  const [mode, setMode] = useState<'light' | 'dark'>();
>>>>>>> 1dafa61 (design: 네비바 디자인 적용, 리팩터링)

  return (
    <footer>
      <div className={`${topBg} px-[3.75rem] py-10 flex`}>
        <LinkGroup groupName="About" links={aboutLinks} width="w-[7.5rem]" mode={mode} />
        <LinkGroup groupName="Resources" links={resourcesLinks} width="w-[8.25rem]" mode={mode} />
        <LinkGroup groupName="Research" links={researchLinks} width="w-[9rem]" mode={mode} />
        <LinkGroup groupName="More" links={moreLinks} width="w-[8rem]" mode={mode} />
      </div>
      <div className={`${bottomBg} px-[3.75rem] py-8 flex justify-between items-center`}>
        <FooterBottomLeft />
        <FooterBottomRight />
      </div>
    </footer>
  );
}

type LinkGroupProps = {
  groupName: string;
  links: FooterLink[];
  width: string;
  mode: FooterMode;
};

function LinkGroup({ groupName, links, width, mode }: LinkGroupProps) {
  const t = useTranslations('Footer');

  const titleColor = mode === 'light' ? 'text-neutral-600' : 'text-white';

  return (
    <section className={width}>
      <h3 className={`${titleColor} text-[0.9375rem] font-medium mb-[.44rem] tracking-[0.025rem]`}>
        {t(groupName)}
      </h3>

      <ul className="text-neutral-500 text-sm font-normal flex flex-col gap-[0.63rem]">
        {links.map((link, i) => (
          <li key={i}>
            <Link href={link.href}>{t(link.title)}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function FooterBottomLeft() {
  const { openModal } = useModal();
  const t = useTranslations('Footer');

  return (
    <div className="text-neutral-500 text-sm">
      <div className="flex [&>a]:font-bold gap-[1ch]">
        <Link href={privacyPath}>{t('개인정보처리방침')}</Link>
        <span>|</span>
        <Link href={contactPath}>{t('학부 연락처')}</Link>
        <span>|</span>
        <Link href={directionsPath}>{t('찾아오시는 길')}</Link>
      </div>

      <address className="not-italic mb-[1.37rem]">{t('address')}</address>

      <p>
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
    <div className="flex items-center gap-7">
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
