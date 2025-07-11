// styles
import '@/ui/organisms/resume/styles.css';

// ui - atoms
import Heading from '@/ui/atoms/heading';

// ui - molecules
import Hcard from '@/ui/molecules/hcard';

// lib
import {getSite} from '@/lib/getSite';
import {l10n} from '@/lib/l10n';

// type
export type ResumeProps = {
  resumeType: string;
  className?: string;
  id?: string;
};

export default async function Resume({
  resumeType = 'resumeUX',
  className,
  id,
}: ResumeProps) {
  const classes = ['resume'];
  if (className) classes.push(className);

  const site = await getSite();

  return (
    <div className={classes.join(' ')} id={id}>
      <Hcard
        name={l10n(resumeType + '-name', site.lang)}
        street1={l10n(resumeType + '-address-street-1', site.lang)}
        street2={l10n(resumeType + '-address-street-2', site.lang)}
        locality={l10n(resumeType + '-address-locality', site.lang)}
        region={l10n(resumeType + '-address-region', site.lang)}
        postalCode={l10n(resumeType + '-address-postal-code', site.lang)}
        email={l10n(resumeType + '-email', site.lang)}
        url={l10n(resumeType + '-url-linkedin', site.lang)}
        phone={l10n(resumeType + '-phone', site.lang)}
      />
      <section dangerouslySetInnerHTML={{ __html: l10n(resumeType + '-summary', site.lang) }} />
      <Heading level={2}>Core Competencies</Heading>
      <section dangerouslySetInnerHTML={{ __html: l10n(resumeType + '-core-competencies', site.lang) }} />
    </div>
  );
}
