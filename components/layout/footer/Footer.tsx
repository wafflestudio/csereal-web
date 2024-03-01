'use client';

import { useTranslations } from 'next-intl';

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

import useFooterDesignMode, { FooterMode } from './useFooterDesignMode';

export default function Footer() {
  const mode = useFooterDesignMode();

  const topBg = mode === 'light' ? 'bg-neutral-50' : 'bg-[#262728] sm:bg-neutral-900';
  const bottomBg = mode === 'light' ? 'bg-neutral-100' : 'bg-[rgb(30,30,30)]';
  const borderTop = mode === 'light' ? 'border-neutral-100' : 'border-neutral-800';

  return (
    <footer className={`border-t-2 ${borderTop}`}>
      <div
        className={`${topBg} px-6 py-9 sm:px-[3.75rem] sm:py-10 grid gap-y-8 grid-cols-[repeat(auto-fill,_minmax(110px,_auto))] sm:flex`}
      >
        <LinkGroup groupName="About" links={aboutLinks} width="w-[7.5rem]" mode={mode} />
        <LinkGroup groupName="Resources" links={resourcesLinks} width="w-[8.25rem]" mode={mode} />
        <LinkGroup groupName="Research" links={researchLinks} width="w-[9rem]" mode={mode} />
        <LinkGroup groupName="More" links={moreLinks} width="w-[8rem]" mode={mode} />
      </div>
      <div
        className={`${bottomBg} py-[30px] px-5 sm:px-[3.75rem] sm:py-8 flex flex-col sm:flex-row justify-between sm:items-center`}
      >
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

  const titleColor = mode === 'light' ? 'text-neutral-600' : 'text-neutral-200 sm:text-white';

  return (
    <section className={width}>
      <h3 className={`${titleColor} text-[0.9375rem] font-medium mb-[.44rem] tracking-[0.025rem]`}>
        {t(groupName)}
      </h3>

      <ul className="text-neutral-300 font-light sm:text-neutral-500 text-sm sm:font-normal flex flex-col gap-[0.63rem]">
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
      <div className="flex [&>a]:font-bold gap-[1ch] mb-2.5 sm:mb-0 ">
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
        <span className="whitespace-nowrap">© Department of CSE, SNU.</span>
        <span className="whitespace-nowrap"> All Rights Reserved.</span>
      </p>
    </div>
  );
}

function FooterBottomRight() {
  return (
    <div className="flex items-center gap-7 mt-7 sm:mt-0">
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
