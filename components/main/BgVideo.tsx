export default function BgVideo() {
  return (
    <section className="absolute w-[468px] h-[263px] top-[144px]">
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
