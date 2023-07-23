import { Noto_Sans_KR } from 'next/font/google';
import localFont from 'next/font/local';

export const noto = Noto_Sans_KR({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto',
});

export const yoonGothic = localFont({
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
