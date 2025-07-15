'use client';

// styles
import '@/ui/molecules/languageToggle/styles.css';

// nextjs
import {useTransition} from 'react';
import {useRouter} from 'next/navigation';

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

  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleClick = async (lang: string) => {
    startTransition(async () => {
      const response = await fetch(`/api/language?lang=${lang}`);
      if (response.ok) {
        router.push(`/?message=S0001`);
        router.refresh();
      }
    });
  };

  return (
    <nav aria-labelledby="languageToggle" className={classes.join(' ')} id={id}>
      <ul>
        <li>
          <button type="button" onClick={() => handleClick('en-US')} disabled={isPending}>ENG</button>
        </li>
        <li>
          <button type="button" onClick={() => handleClick('zh-HK')} disabled={isPending}>繁</button>
        </li>
      </ul>
    </nav>
  );
}
