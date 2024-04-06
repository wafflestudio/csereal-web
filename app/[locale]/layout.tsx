import Script from 'next/script';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import ModalContextProvider from '@/contexts/ModalContext';
import { NavbarContextProvider } from '@/contexts/NavbarContext';
import SessionContextProvider from '@/contexts/SessionContext';

import Footer from '@/components/layout/footer/Footer';
import MobileNav from '@/components/layout/navbar/MobileNav';
import Navbar from '@/components/layout/navbar/Navbar';
import ModalContainer from '@/components/modal/ModalContainer';

import '@/styles/globals.css';

import MarginedMain from './MarginedMain';

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
    <html lang={params.locale} className="bg-neutral-900 font-normal text-neutral-950">
      <Script
        type="module"
        src="https://8fl3k30sy0.execute-api.ap-northeast-2.amazonaws.com/v1/api/fontstream/djs/?sid=gAAAAABmERKxhfDey2qfPcjgFRkqpXwpei80obWPEPGgtzmc1srWnLLM7CwF6IB-jSHY8hwosajn3Gf6fF78x40vCqY73IHI7gAfsQB5_s3rFFOXAIfEzDO8pPh1kuI-MOAQIB06VNZirmAuXXAk8G0AkXFglUB3D2qkZZBWIBYEoezeYy5qE-kChjhuabFzkXxUNpfRrIdlFm4DhZTLr1SjdGNKgJx15nlvFpAX6PqeRNKoS6uL4Ye8346heclwa_f8pdXV9-0G"
      />
      <body className="sm:min-w-[1000px]">
        <ContextProviders locale={params.locale}>
          <Navbar />
          <MobileNav />

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
    <SessionContextProvider>
      <ModalContextProvider>
        <NavbarContextProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </NavbarContextProvider>
      </ModalContextProvider>
    </SessionContextProvider>
  );
}
