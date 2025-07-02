// nextjs
import Image from 'next/image';

export default function Header() {
  return (
    <header role="header" className="headerPage">
      <Image src="/assets/i/logo.svg" alt="edlou" width="200" height="40" />
    </header>
  );
}
