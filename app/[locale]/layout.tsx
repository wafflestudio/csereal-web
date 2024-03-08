import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import ModalContextProvider from '@/contexts/ModalContext';
import NavbarContextProviderWrapper from '@/contexts/NavbarContextWrapper';
import SessionContextProvider from '@/contexts/SessionContext';

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
  // https://next-intl-docs.vercel.app/docs/getting-started/app-router#static-rendering
  unstable_setRequestLocale(params.locale);

  return (
    <html
      lang={params.locale}
      className="bg-neutral-900 font-normal text-neutral-800 sm:min-w-[1000px]"
    >
      <body>
        <ContextProviders locale={params.locale}>
          <Navbar />
          <Content>{children}</Content>
          <ModalContainer />
          <Toaster />
        </ContextProviders>
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
        <NavbarContextProviderWrapper>
          <ModalContextProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </ModalContextProvider>
        </NavbarContextProviderWrapper>
      </SessionContextProvider>
    </SWRProvider>
  );
}
