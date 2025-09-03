export function HeroVideo({
  videoMp4,
  videoMov,
  title,
  content,
}: {
  videoMp4?: string;
  videoMov?: string;
  title: string;
  content: string;
}) {
  return (
    <div className="relative w-full h-[350px] overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src={videoMp4} type="video/mp4" />
    <source src={videoMov} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
    <h1 className="text-6xl font-bold drop-shadow-lg">{title}</h1>
    <p className="text-2xl mt-4 drop-shadow">{content}</p>
  </div>
</div>

  );
}
