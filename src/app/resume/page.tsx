// metadata
export async function generateMetadata() {
  const {lang} = await getSite();

  const localizedTitles: Record<string, string> = {
    'en-US': 'Resume',
    'zh-HK': '履歷',
  };

  return {
    title: localizedTitles[lang] ?? '',
  };
}

// ui - molecules
import Message from '@/ui/molecules/message';
import Hcard from '@/ui/molecules/hcard';

// lib
import {getSite} from '@/lib/getSite';
import {l10n} from '@/lib/l10n';

// type
export type PageProps = {
  searchParams?: Promise<Record<string, string | string[]>>;
};

export default async function MainPage({
  searchParams
}: PageProps) {
  const params = searchParams ? await searchParams : undefined;
  const site = await getSite(params);

  return (
    <>
      <main role="main">
        <Message messageCode={site.messageCode ?? ''} />
        <Hcard
          name={l10n('resume-name', site.lang)}
          street1={l10n('resume-address-street-1', site.lang)}
          street2={l10n('resume-address-street-2', site.lang)}
          locality={l10n('resume-address-locality', site.lang)}
          region={l10n('resume-address-region', site.lang)}
          postalCode={l10n('resume-address-postal-code', site.lang)}
          email={l10n('resume-email', site.lang)}
          url={l10n('resume-url-linkedin', site.lang)}
          phone={l10n('resume-phone', site.lang)}
        />
        <section dangerouslySetInnerHTML={{ __html: l10n('resume-summary', site.lang) }} />
        <section dangerouslySetInnerHTML={{ __html: l10n('resume-core-competencies', site.lang) }} />
      </main>
    </>
  );
}
