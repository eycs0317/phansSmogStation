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

// next
import Link from 'next/link';

// ui - molecules
import Message from '@/ui/molecules/message';
import Navigation from '@/ui/molecules/navigation';

// ui - organisms
import Resume from '@/ui/organisms/resume';

// lib
import {getSite} from '@/lib/getSite';

// styles
import '@/ui/atoms/formField/styles.css';

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
        <Navigation display="horizontal" align="right">
          <ul>
            <li><Link href="/assets/r/Eddie_Lou-2025.pdf" className="formButton primary" target="_blank">Download Resume</Link></li>
          </ul>
        </Navigation>
        <Resume contentType="resumeUX" />
      </main>
    </>
  );
}
