import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import ModalContextProvider from '@/contexts/ModalContext';
import { NavbarContextProvider } from '@/contexts/NavbarContext';
import SessionContextProvider from '@/contexts/SessionContext';

import BetaBanner from '@/components/common/BetaBanner';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import Navbar from '@/components/layout/navbar/Navbar';
import ModalContainer from '@/components/modal/ModalContainer';

import { noto, notoDemiLight, yoonGothic } from '@/styles/font';

import '@/styles/globals.css';

import { SWRProvider } from './swr-provider';

export const metadata = {
  title: '서울대학교 컴퓨터공학부',
  description: '서울대학교 컴퓨터공학부 홈페이지입니다.',
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ko' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang="ko">
      <body
        className={`${yoonGothic.variable} ${noto.variable} ${notoDemiLight.variable} text-neutral-700 font-normal bg-white min-w-fit`}
      >
        <BetaBanner />
        <div className="flex">
          <ContextProviders locale={params.locale}>
            <Navbar />
            <div className="min-w-fit flex flex-col flex-1 overflow-auto font-noto-demi">
              <Suspense>
                <Header />
              </Suspense>
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <ModalContainer />
            <Toaster />
          </ContextProviders>
        </div>
      </body>
    </html>
  );
}

async function ContextProviders({ locale, children }: { locale: string; children: ReactNode }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <SWRProvider>
      <SessionContextProvider>
        <NavbarContextProvider>
          <ModalContextProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </ModalContextProvider>
        </NavbarContextProvider>
      </SessionContextProvider>
    </SWRProvider>
  );
}
