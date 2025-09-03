export interface BannerProps {
  children: string | React.ReactNode;
  size?: 1 | 2 | 3 | 4;
}

export function Banner({ children, size = 1 }: BannerProps) {
  const fontSize = `text-${size}xl`;
  return (
    <div className={`bg-red-800 p-2 rounded-md ${fontSize}  font-bold bg-red-500 w-full text-white text-center`}>
      {children}
    </div>
  );
}
