import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

import ModalContextProvider from '@/contexts/ModalContext';
import { NavbarContextProvider } from '@/contexts/NavbarContext';
import SessionContextProvider from '@/contexts/SessionContext';

import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import Navbar from '@/components/layout/navbar/Navbar';
import ModalContainer from '@/components/modal/ModalContainer';

import { noto, yoonGothic } from '@/styles/font';

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
  let messages;
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang="ko">
      <body
        className={`flex ${yoonGothic.variable} ${noto.variable} text-neutral-700 font-normal overscroll-none bg-white`}
      >
        <ContextProviders>
          <NextIntlClientProvider locale={params.locale} messages={messages}>
            <Navbar />
            <div className="flex flex-col flex-1">
              <Header />
              <div className="min-w-fit flex flex-col flex-1 mt-[9.25rem] overflow-auto">
                <main className="flex-1">
                  <SWRProvider>
                    <div className="font-noto">{children}</div>
                  </SWRProvider>
                </main>
                <Footer />
              </div>
            </div>
            <ModalContainer />
            <Toaster />
          </NextIntlClientProvider>
        </ContextProviders>
      </body>
    </html>
  );
}

function ContextProviders({ children }: PropsWithChildren) {
  return (
    <SessionContextProvider>
      <NavbarContextProvider>
        <ModalContextProvider>{children}</ModalContextProvider>
      </NavbarContextProvider>
    </SessionContextProvider>
  );
}
