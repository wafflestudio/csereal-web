export default function BgVideo() {
  return (
    <section className="absolute flex w-full justify-center top-0">
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
