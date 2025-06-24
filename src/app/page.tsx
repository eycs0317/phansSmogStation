// react
import React from 'react';

// lib
import {getSession} from '@/lib/session';

// ui
import Header from '@/ui/atoms/heading';
import Message from '@/ui/atoms/message';

// utils
import {l10n} from '@/lib/l10n';

interface PageProps {
  searchParams: Promise<{message?: string}>;
}

export default async function MainPage({searchParams}: PageProps) {
  const session = await getSession();
  const lang = session?.lang ?? 'en-US';

  const paramsGET = await searchParams;
  const message = paramsGET?.message;

  return (
    <main role="main">
      <Message messageCode={message ?? ''} />
      <Header level={1} content={l10n('layout', 'title', lang)} />
      <Header level={2} content={l10n('message', 'e0001', lang)} />
      <Header level={3} content="Hello World" />
      <Header level={4} content="Hello World" />
    </main>
  );
}
