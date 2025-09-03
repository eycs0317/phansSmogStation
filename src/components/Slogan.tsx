export interface SloganProps {
  backgroundImage: string
  title: string
  content: string
}

export function Slogan({ backgroundImage, title, content }: SloganProps) {
  return (
    <div
      className="bg-cover bg-center h-screen flex justify-center items-center "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-white text-center">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="text-2xl">{content}</p>
      </div>
    </div>
  )
}
