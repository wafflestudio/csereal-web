import Image from 'next/image';

import mainBg from '@/public/image/main_bg.gif';

export default function BgVideo() {
  return (
    <section className="absolute flex w-full justify-center top-[-60px]">
      <Image src={mainBg} alt="main_gif" width={1200} />
      {/* <video
        id="background-video"
        loop
        autoPlay
        muted
        className="w-[1200px]"
        src={'video/main_video_bg.mp4'}
      /> */}
    </section>
  );
}
