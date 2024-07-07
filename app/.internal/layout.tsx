import { Toaster } from 'react-hot-toast';

import SessionContextProvider from '@/contexts/SessionContext';

import ModalContextProvider from '@/contexts/ModalContext';
import ModalContainer from '@/components/modal/ModalContainer';

import '@/styles/globals.css';

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale} className="font-normal sm:min-w-[1000px]">
      <body>
        <SessionContextProvider>
          <ModalContextProvider>
            {children}
            <ModalContainer />
            <Toaster />
          </ModalContextProvider>
        </SessionContextProvider>
      </body>
    </html>
  );
}
