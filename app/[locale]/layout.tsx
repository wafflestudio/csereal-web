import { NextIntlClientProvider, useMessages } from 'next-intl';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import ModalContextProvider from '@/contexts/ModalContext';
import { NavbarContextProvider } from '@/contexts/NavbarContext';
import { SessionContextProvider } from '@/contexts/SessionContext';

import Navbar from '@/components/layout/navbar/Navbar';
import ModalContainer from '@/components/modal/ModalContainer';

import '@/styles/globals.css';

import Content from './content';
import { SWRProvider } from './swr-provider';

export const metadata = {
  title: '서울대학교 컴퓨터공학부',
  description: '서울대학교 컴퓨터공학부 홈페이지입니다.',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html
      lang={params.locale}
      className="bg-neutral-900 font-normal text-neutral-800 sm:min-w-[1000px]"
    >
      <body>
        <ContextProviders locale={params.locale}>
          <NavbarContextProvider>
            <Navbar />
          </NavbarContextProvider>

          <Content>{children}</Content>
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
