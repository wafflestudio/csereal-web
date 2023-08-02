import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/header/Header';
import Navbar from '@/components/layout/navbar/Navbar';

import '@/styles/globals.css';
import { noto, yoonGothic } from './font';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body
        className={`grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] ${yoonGothic.variable} ${noto.variable}`}
      >
        <Navbar />
        <div className="overflow-auto">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
