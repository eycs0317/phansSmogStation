// nextjs
import Image from 'next/image';
import Link from 'next/link';

// ui
import Heading from '@/ui/atoms/heading';

// ui - molecules
import Hero from '@/ui/molecules/hero';
import Navigation from '@/ui/molecules/navigation';
import Message from '@/ui/molecules/message';

// lib
import {getSite} from '@/lib/getSite';

// utils
import {l10n} from '@/lib/l10n';

// type
export type PageProps = {
  searchParams?: Promise<Record<string, string | string[]>>;
};

// metadata
export async function generateMetadata({
  searchParams
}: PageProps) {
  const params = searchParams ? await searchParams : undefined;
  const site = await getSite(params);

  const localizedTitles: Record<string, string> = {
    'en-US': 'About',
    'zh-HK': '預約 [選擇日期]',
  };

  return {
    title: localizedTitles[site.lang] ?? '',
  };
}

export default async function MainPage({
  searchParams
}: PageProps) {
  const params = searchParams ? await searchParams : undefined;
  const site = await getSite(params);

  return (
    <>
      <Hero
        primary={
          <Image src="/assets/i/profile.svg" width="100" height="100" alt={l10n('layout-title', site.lang)} />
        }
        secondary={
          <>
            <Heading level={1}><strong>Eddie</strong> Lou</Heading>
            <p>I <strong>code</strong> web.<br />I <strong>design</strong> web.<br />Most importantly, I <strong>understand</strong> web.</p>
          </>
        }
      />
      {/*<FormInput fieldData={form} />*/}

      <main role="main">
        <Message messageCode={site.messageCode ?? ''} />
{/*        <Heading level={1}>{l10n('layout', 'title', lang)}</Heading>
        <Heading level={2}>{l10n('message', 'e0001', lang)}</Heading>*/}
        <div className="flex flex-row">
          <div className="w-50">
            <Navigation type="flyout" display="horizontal">
              <ul>
                <li><Link href="/item1">Link Item 1</Link></li>
                <li><Link href="/item2">Link Item 2</Link>
                  <ul>
                    <li><Link href="/item2a">Link Item 2a</Link></li>
                    <li><Link href="/item2b">Link Item 2b</Link>
                      <ul>
                        <li><Link href="/item2b1">Link Item 2b1</Link></li>
                        <li><Link href="/item2b2">Link Item 2b2</Link></li>
                      </ul>
                    </li>
                    <li><Link href="/item2c">Link Item 2c</Link></li>
                  </ul>
                </li>
                <li><Link href="/item3">Link Item 3</Link></li>
              </ul>
            </Navigation>
          </div>
          <div>Main Content</div>
        </div>
      </main>
    </>
  );
}
