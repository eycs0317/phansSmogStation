// react
import React, { type ReactNode } from 'react';

// styles
import '@/app/globals.css';

// nextjs
import type { Metadata } from 'next';
import Script from 'next/script';
import { Noto_Sans } from 'next/font/google';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

// lib
import { getSession } from '@/lib/session';
import { l10n } from '@/lib/l10n';

// ui
import Header from '@/ui/molecules/header';
import Footer from '@/ui/molecules/footer';

export async function generateMetadata(): Promise<Metadata> {
  const session = await getSession();
  const lang = session?.lang ?? 'en-US';

  const localizedTitles: Record<string, string> = {
    'en-US': 'edlou.com',
    'zh-HK': 'edlou.com (NEW)',
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

export default async function RootLayout({ children }: LayoutProps) {
  const session = await getSession();
  const lang = session?.lang ?? 'en-US';

  return (
    <html lang={lang}>
      <body className={notoSans.className}>
        <Header
          logo={{
            src: '/assets/i/logo.svg',
            alt: l10n('layout-logo-link', lang),
            width: 200,
            height: 40,
          }}
        />
        {children}
        <Footer
          year="2025"
          entity={{
            url: '/',
            name: 'edlou.com',
          }}
        />

        <Script
          id="set-page-id"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function updatePageId() {
                  try {
                    const pathname = window.location.pathname;
                    const pageId =
                      'page' +
                      (pathname === '/'
                        ? 'Home'
                        : pathname
                            .slice(1)
                            .split('/')
                            .map(part => part[0].toUpperCase() + part.slice(1))
                            .join(''));
                    
                    document.body.id = pageId;
                    
                    const logoLink = document.querySelector('[data-logo-link]');
                    if (logoLink) {
                      logoLink.classList.toggle('notLink', pageId === 'pageHome');
                    }
                  } catch (e) {
                    console.error('Error setting page ID:', e);
                  }
                }

                // Initial update on load
                updatePageId();

                // Listen for history changes (pushState / replaceState)
                const pushState = history.pushState;
                history.pushState = function() {
                  pushState.apply(this, arguments);
                  updatePageId();
                };

                const replaceState = history.replaceState;
                history.replaceState = function() {
                  replaceState.apply(this, arguments);
                  updatePageId();
                };

                // Listen for back/forward navigation
                window.addEventListener('popstate', updatePageId);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
