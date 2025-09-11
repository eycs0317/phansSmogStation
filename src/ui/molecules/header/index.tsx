'use client';

// styles
import '@/ui/molecules/header/styles.css';

// nextjs
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// type
type LogoProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type HeaderProps = {
  logo?: LogoProps;
  children?: React.ReactNode;
  className?: string | null;
  id?: string;
};

export default function Header({ logo, children, className, id }: HeaderProps) {
  const classes = ['headerPage'];
  if (className) classes.push(className);

  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <header role="banner" className={classes.join(' ')} id={id}>
      {logo && (
        <Link
          href="/"
          className={isHomePage ? 'logoLink notLink' : 'logoLink'}
          data-logo-link="true"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
          />
        </Link>
      )}
      {children}
    </header>
  );
}
