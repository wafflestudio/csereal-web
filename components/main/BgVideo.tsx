export default function BgVideo() {
  return (
    <section className="absolute top-[-70px] flex w-full justify-center">
      <video
        id="background-video"
        loop
        autoPlay
        playsInline
        muted
        className="w-[1200px]"
        src={'video/main_video_bg.mp4'}
      />
    </section>
  );
}
