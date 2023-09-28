import Image from 'next/image';

import mainBg from '@/public/image/main_bg.webp';

export default function BgVideo() {
  return (
    <section className="absolute flex w-full justify-center top-[-60px]">
      <Image src={mainBg} alt="main_gif" width={1200} priority />
    </section>
  );
}
