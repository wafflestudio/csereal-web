export const dynamic = 'force-dynamic';

import '@/styles/globals.css';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Toaster } from 'react-hot-toast';

import ModalContainer from '@/components/modal/ModalContainer';
import ModalContextProvider from '@/contexts/ModalContext';
import SessionContextProvider from '@/contexts/SessionContext';

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={params.locale} className="font-normal sm:min-w-[1000px]">
      <body>
        <NextIntlClientProvider messages={messages}>
          <SessionContextProvider>
            <ModalContextProvider>
              {children}
              <ModalContainer />
              <Toaster />
            </ModalContextProvider>
          </SessionContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
