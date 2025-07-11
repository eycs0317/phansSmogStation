// styles
import '@/ui/molecules/languageToggle/styles.css';

// nextjs
import Link from 'next/link';

// type
type LanguageToggleProps = {
  className?: string;
  id?: string;
};

export default function LanguageToggle({
  className,
  id,
}: LanguageToggleProps) {
  const classes = ['languageToggle'];
  if (className) classes.push(className);

  return (
    <nav aria-labelledby="languageToggle" className={classes.join(' ')} id={id}>
      <ul>
        <li><Link href="/api/language?lang=en-US">ENG</Link></li>
        <li><Link href="/api/language?lang=zh-HK">繁</Link></li>
      </ul>
    </nav>
  );
}
