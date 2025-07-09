// styles
import '@/ui/molecules/header/styles.css';

// nextjs
import Image from 'next/image';
import Link from 'next/link';

// type
type LogoProps = {
  src: string;
  width: number;
  height: number;
};

type HomeProps = {
  href: string;
};

export type HeaderProps = {
  logo: LogoProps;
  home?: HomeProps;
  className?: string | null;
  id?: string;
};

export default function Header({
  logo,
  home,
  className,
  id,
}: HeaderProps) {
  const classes = ['headerPage'];
  if (className) classes.push(className);

  const logoImage = (
    <Image
      src={logo.src}
      alt="Home"
      width={logo.width}
      height={logo.height}
    />
  );

  return (
    <header role="banner" className={classes.join(' ')} id={id}>
      {home ? (
        <Link href={home.href}>{logoImage}</Link>
      ) : (
        logoImage
      )}
    </header>
  );
}
