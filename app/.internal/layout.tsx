import '@/styles/globals.css';

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
