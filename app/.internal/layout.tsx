import { Toaster } from 'react-hot-toast';

import SessionContextProvider from '@/contexts/SessionContext';

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
          {children}
          <Toaster />
        </SessionContextProvider>
      </body>
    </html>
  );
}
