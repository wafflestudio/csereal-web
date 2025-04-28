export const dynamic = 'force-dynamic';

import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ToastContainer } from 'react-toastify';

import ModalContainer from '@/components/modal/ModalContainer';
import ModalContextProvider from '@/contexts/ModalContext';
import SessionContextProvider from '@/contexts/SessionContext';

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;

  const { children } = props;

  const messages = await getMessages();

  return (
    <html lang={params.locale} className="font-normal sm:min-w-[1000px]">
      <body>
        <NextIntlClientProvider messages={messages}>
          <SessionContextProvider>
            <ModalContextProvider>
              {children}
              <ModalContainer />
              <ToastContainer />
            </ModalContextProvider>
          </SessionContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
