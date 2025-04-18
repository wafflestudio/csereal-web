'use client';

import { useTranslations } from 'next-intl';

import CserealModal from '@/app/[locale]/community/components/CserealModal';
import {
  aboutLinks,
  contactPath,
  directionsPath,
  FooterLink,
  moreLinks,
  privacyPath,
  researchLinks,
  resourcesLinks,
  snucomLink,
  snuEngLink,
  snuLink,
} from '@/components/layout/footer/constants';
import useFooterDesignMode, { FooterMode } from '@/components/layout/footer/useFooterDesignMode';
import { Link } from '@/i18n/routing';
import SnuEngineeringIcon from '@/public/image/footer/SNU_Engineering.svg';
import SnuLogoWithText from '@/public/image/footer/SNU_Logo_with_Text.svg';
import SnucomIcon from '@/public/image/footer/SNUCOM.svg';
import useModal from '@/utils/hooks/useModal';
import { useTypedLocale } from '@/utils/hooks/useTypedLocale';

export default function Footer() {
  const mode = useFooterDesignMode();
  const locale = useTypedLocale();
  const topBg = mode === 'light' ? 'bg-neutral-50' : 'bg-[#262728] sm:bg-neutral-900';
  const bottomBg = mode === 'light' ? 'bg-neutral-100' : 'bg-[rgb(30,30,30)]';
  const borderTop = mode === 'light' ? 'border-neutral-100' : 'border-neutral-800';

  return (
    <footer className={`border-t-2 ${borderTop}`}>
      <div className={`${topBg} flex flex-wrap gap-y-8 px-6 py-9 sm:px-[3.75rem] sm:py-10`}>
        <LinkGroup
          groupName="About"
          links={aboutLinks}
          width={locale === 'ko' ? 'w-[7.5rem]' : 'w-[10rem]'}
          mode={mode}
        />
        <LinkGroup groupName="Resources" links={resourcesLinks} width="w-[8.25rem]" mode={mode} />
        <LinkGroup groupName="Research" links={researchLinks} width="w-[9rem]" mode={mode} />
        <LinkGroup groupName="More" links={moreLinks} width="w-[8rem]" mode={mode} />
      </div>
      <div
        className={`${bottomBg} flex flex-col justify-between px-5 py-[30px] sm:flex-row sm:items-center sm:px-[3.75rem] sm:py-8`}
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
  const itemColor = mode === 'light' ? 'text-neutral-500' : 'text-neutral-300 sm:text-neutral-500';

  return (
    <section className={width}>
      <h3
        className={`${titleColor} mb-[.625rem] text-sm font-medium tracking-[0.025rem] sm:text-[0.9375rem]`}
      >
        {t(groupName)}
      </h3>

      <ul className={`${itemColor} flex flex-col gap-[0.625rem] text-sm font-light sm:font-normal`}>
        {links.map((link, i) => (
          <li key={i}>
            <Link href={link.href} className="whitespace-nowrap">
              {t(link.title)}
            </Link>
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
    <div className="text-xs text-neutral-500 sm:text-sm">
      <div className="mb-1 flex gap-[1ch] [&>a]:font-bold ">
        <Link href={privacyPath}>{t('개인정보처리방침')}</Link>
        <span>|</span>
        <Link href={contactPath}>{t('학부 연락처')}</Link>
        <span>|</span>
        <Link href={directionsPath}>{t('찾아오시는 길')}</Link>
      </div>

      <address className="mb-[1.37rem] not-italic">{t('address')}</address>

      <p className="leading-[1.125rem]">
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
    <div className="mt-7 flex flex-wrap gap-7 sm:mt-0 sm:flex-nowrap sm:items-center">
      <Link href={snucomLink} aria-label="서울대 컴퓨터공학 동문회 홈페이지로 이동">
        <SnucomIcon />
      </Link>
      <Link href={snuEngLink} aria-label="서울대 공과대학 홈페이지로 이동">
        <SnuEngineeringIcon />
      </Link>
      <Link href={snuLink} aria-label="서울대 홈페이지로 이동">
        <SnuLogoWithText />
      </Link>
    </div>
  );
}
