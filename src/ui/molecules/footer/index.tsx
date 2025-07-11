// styles
import '@/ui/molecules/footer/styles.css';

// nextjs
import Link from 'next/link';

// ui - molecules
import LanguageToggle from '@/ui/molecules/languageToggle';

// lib
import {getSite} from '@/lib/getSite';

// utils
import {l10n} from '@/lib/l10n';

// type
type EntityProps = {
  url: string;
  name: string;
};

export type FooterProps = {
  year: string;
  entity: EntityProps;
  className?: string;
  id?: string;
};

export default async function Footer({
  year,
  entity,
  className,
  id,
}: FooterProps) {
  const classes = ['footerPage'];
  if (className) classes.push(className);

  const {lang} = await getSite();

  return (
    <footer role="contentinfo" className={classes.join(' ')} id={id}>
      <div className="wrapper">
        <p><small>&copy;{year} <Link href={entity.url}>{entity.name}</Link>. {l10n('layout-footer-legal', lang)}</small></p>
        <LanguageToggle />
      </div>
    </footer>
  );
}
