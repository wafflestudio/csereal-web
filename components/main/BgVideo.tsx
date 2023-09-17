export default function BgVideo() {
  return (
    <section className="w-[500px] mt-[133px]">
      <video
        id="background-video"
        loop
        autoPlay
        muted
        className="w-full"
        src={'video/main_video_bg.mp4'}
      />
    </section>
  );
}
