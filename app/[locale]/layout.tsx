export const dynamic = 'force-dynamic';

import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { execSync } from 'child_process';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import MarginedMain from '@/app/[locale]/MarginedMain';
import Footer from '@/components/layout/footer/Footer';
import MobileNav from '@/components/layout/navbar/MobileNav';
import Navbar from '@/components/layout/navbar/Navbar';
import ModalContainer from '@/components/modal/ModalContainer';
import { isBeta, isProd } from '@/constants/env';
import ModalContextProvider from '@/contexts/ModalContext';
import { NavbarContextProvider } from '@/contexts/NavbarContext';
import SessionContextProvider from '@/contexts/SessionContext';
import { Link, routing } from '@/i18n/routing';

const PROD_URL = 'https://cse.snu.ac.kr';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  const { locale } = params;

  const t = await getTranslations({ locale, namespace: 'Title' });

  return {
    metadataBase: new URL(PROD_URL),
    title: {
      default: t('서울대학교 컴퓨터공학부'),
      template: `%s | ${t('서울대학교 컴퓨터공학부')}`,
    },
    description: '서울대학교 컴퓨터공학부 홈페이지입니다.',
    openGraph: {
      images: ['/image/main/mainGraphic.png'],
    },
    robots: !isProd ? 'noindex' : undefined,
  };
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;

  const { children } = props;

  return (
    <html lang={params.locale} className="bg-neutral-900 font-normal text-neutral-950">
      <body className="sm:min-w-[1200px]">
        <BuildVersion />
        <ContextProviders locale={params.locale}>
          <Navbar />
          <MobileNav />

          <MarginedMain>
            {children}
            <Footer />
          </MarginedMain>

          <ModalContainer />
          <ToastContainer />
        </ContextProviders>
      </body>
    </html>
  );
}

async function ContextProviders({ locale, children }: { locale: string; children: ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <SessionContextProvider>
        <ModalContextProvider>
          <NavbarContextProvider>{children}</NavbarContextProvider>
        </ModalContextProvider>
      </SessionContextProvider>
    </NextIntlClientProvider>
  );
}

function BuildVersion() {
  if (!isBeta) return;

  const buildVersion = execSync('git rev-parse --short HEAD').toString();
  if (!buildVersion) return;

  return (
    <div className="fixed bottom-0 right-0 z-50 bg-[royalblue] p-2 text-sm font-semibold text-white">
      <p>Beta Version: {buildVersion}</p>
      <Link
        className="text-white underline"
        href="https://cse.snu.ac.kr"
        target="_blank"
        rel="noopener noreferrer"
      >
        👉 공식 홈페이지 가기
      </Link>
    </div>
  );
}
