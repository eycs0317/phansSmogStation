// nextjs
// import Link from 'next/link';

// lib
// import {getSession} from '@/lib/session';

// ui
import type {Node} from '@/ui/types/nodeTypes';
// import Heading from '@/ui/atoms/heading';
import Hero from '@/ui/molecules/hero';
// import Message from '@/ui/molecules/message';
// import Navigation from '@/ui/molecules/navigation';

// utils
// import {l10n} from '@/lib/l10n';

// interface PageProps {
//   searchParams: Promise<{message?: string}>;
// }

export default async function MainPage() {
// export default async function MainPage({searchParams}: PageProps) {
//   const session = await getSession();
//   const lang = session?.lang ?? 'en-US';

//   const paramsGET = await searchParams;
//   const message = paramsGET?.message;

const hero: Node[][] = [
  [
    {
      type: 'image',
      data: {
        src: '/assets/i/profile.svg',
        width: 100,
        height: 100,
        alt: 'Eddie T. Lou',
      },
    },
  ],
  [
    {
      type: 'heading',
      data: {
        level: 1,
        children: [
          {
            type: 'strong',
            data: {
              children: [
                {
                  type: 'content',
                  data: {
                    children: 'Eddie',
                  },
                },
              ],
            },
          },
          {
            type: 'content',
            data: {
              children: ' Lou',
            },
          },
        ],
      },
    },
    {
      type: 'paragraph',
      data: {
        children: [
          { type: 'content', data: { children: 'I ' } },
          {
            type: 'strong',
            data: {
              children: [
                { type: 'content', data: { children: 'code' } },
              ],
            },
          },
          { type: 'content', data: { children: ' web.' } },
          { type: 'break', data: {} },
          { type: 'content', data: { children: 'I ' } },
          {
            type: 'strong',
            data: {
              children: [
                { type: 'content', data: { children: 'design' } },
              ],
            },
          },
          { type: 'content', data: { children: ' web.' } },
          { type: 'break', data: {} },
          { type: 'content', data: { children: 'Most importantly, I ' } },
          {
            type: 'strong',
            data: {
              children: [
                { type: 'content', data: { children: 'understand' } },
              ],
            },
          },
          { type: 'content', data: { children: ' web.' } },
        ],
      },
    },
    {
      type: 'link',
      data: {
        href: '/resume',
        className: 'button',
        children: [
          {
            type: 'content',
            data: {
              children: 'Resume',
            },
          },
        ],
      },
    },
  ],
];
  return (
    <>
      <Hero content={hero} />
{/*      <main role="main">
        <Message messageCode={message ?? ''} />
        <Heading level={1}>{l10n('layout', 'title', lang)}</Heading>
        <Heading level={2}>{l10n('message', 'e0001', lang)}</Heading>
        <div className="flex flex-row">
          <div className="w-50">
            <Navigation type="flyout">
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
      </main>*/}
    </>
  );
}
