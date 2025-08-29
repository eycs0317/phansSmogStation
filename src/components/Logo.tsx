export interface BannerProps {
  children: string;
  size?: 1 | 2 | 3 | 4;
}

export function Banner({ children, size = 1 }: BannerProps) {
  const fontSize = `text-${size}xl`;
  return (
    <div className={`bg-primary-500 p-2 rounded-md ${fontSize}  font-bold `}>
      {children}
    </div>
  );
}
