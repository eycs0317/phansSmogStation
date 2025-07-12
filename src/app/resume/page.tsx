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

// ui - organisms
import Resume from '@/ui/organisms/resume';

// lib
import {getSite} from '@/lib/getSite';

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
        <Resume contentType="resumeUX" />
      </main>
    </>
  );
}
