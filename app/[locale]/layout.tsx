import { NextIntlClientProvider, useMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import ModalContextProvider from '@/contexts/ModalContext';
import { NavbarContextProvider } from '@/contexts/NavbarContext';
import SessionContextProvider from '@/contexts/SessionContextProvider';

import Footer from '@/components/layout/footer/Footer';
import Navbar from '@/components/layout/navbar/Navbar';
import ModalContainer from '@/components/modal/ModalContainer';

import '@/styles/globals.css';

import MarginedMain from './MarginedMain';
import { SWRProvider } from './swr-provider';

export const metadata = {
  title: '서울대학교 컴퓨터공학부',
  description: '서울대학교 컴퓨터공학부 홈페이지입니다.',
};

// i18n의 Static rendering 관련 에러 제거 위해 추가
export function generateStaticParams() {
  const locales = ['en', 'ko'];
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // i18n의 Static rendering 관련 에러 제거 위해 추가
  // unstable인데 왜 안쓰면 빌드 안시켜줌??????
  unstable_setRequestLocale(params.locale);

  return (
    <html
      lang={params.locale}
      className="bg-neutral-900 font-normal text-neutral-800 sm:min-w-[1000px]"
    >
      <head>
        <link rel="icon" href="/icon" type="image/png" sizes="32x32" />
      </head>
      <body>
        <ContextProviders locale={params.locale}>
          <NavbarContextProvider>
            <Navbar />
          </NavbarContextProvider>

          <MarginedMain>
            {children}
            <Footer />
          </MarginedMain>

          <ModalContainer />
          <Toaster />
        </ContextProviders>
      </body>
    </html>
  );
}

function ContextProviders({ locale, children }: { locale: string; children: ReactNode }) {
  const messages = useMessages();

  return (
    <SWRProvider>
      <SessionContextProvider>
        <ModalContextProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ModalContextProvider>
      </SessionContextProvider>
    </SWRProvider>
  );
}
