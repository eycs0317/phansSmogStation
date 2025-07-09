// react
import React, {type ReactNode} from 'react';

// styles
import '@/app/globals.css';

// nextjs
import type {Metadata} from 'next';

// lib
import {getSession} from '@/lib/session';

// ui
import Header from '@/ui/molecules/header';

export async function generateMetadata(): Promise<Metadata> {
  const session = await getSession();
  const lang = session?.lang ?? 'en-US';

  const localizedTitles: Record<string, string> = {
    'en-US': 'edlou.com',
    'zh-HK': 'edlou.com',
  };

  return {
    title: {
      template: '%s | ' + (localizedTitles[lang] ?? 'edlou.com'),
      default: localizedTitles[lang] ?? 'edlou.com',
    },
    description: 'edlou.com',
    icons: {
      icon: [
        {
          media: '(prefers-color-scheme: light)',
          url: '/assets/i/brand/favicon_light.ico',
          href: '/assets/i/brand/favicon_light.svg',
        },
        {
          media: '(prefers-color-scheme: dark)',
          url: '/assets/i/brand/favicon_dark.ico',
          href: '/assets/i/brand/favicon_dark.svg',
        },
      ],
    },
  };
}

interface LayoutProps {
  children: ReactNode;
}

export default async function RootLayout({
  children,
}: LayoutProps) {
  const session = await getSession();
  const lang = session?.lang ?? 'en-US';

  return (
    <html lang={lang}>
      <body>
        <Header
          logo={{
            src: '/assets/i/logo.svg',
            width: 200,
            height: 40
          }}
          home={{
            href: '/'
          }}
        />
        {children}
      </body>
    </html>
  );
}
