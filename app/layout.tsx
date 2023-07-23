import { Noto_Sans_KR } from 'next/font/google';
import localFont from 'next/font/local';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';

import '@/styles/globals.css';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};
const noto = Noto_Sans_KR({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto',
});

const yoonGothic = localFont({
  src: [
    {
      path: '../public/font/YoonGothicPro745.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/font/YoonGothicPro755.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-yoon',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="grid grid-rows-[80px_auto_80px] grid-cols-[172px_auto]">
        <Navbar />
        <Header />
        <main
          className={`row-start-2 row-end-3 col-start-2 col-end-3 ${yoonGothic.variable} ${noto.variable}`}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
