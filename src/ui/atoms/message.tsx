// utils
import {l10n} from '@/lib/l10n';

// lib
import {getSession} from '@/lib/session';

interface MessageProps {
  messageCode: string;
}

export default async function Message({messageCode}: MessageProps) {
  const session = await getSession();
  const lang = session?.lang ?? 'zh-HK';

  if (!messageCode) return null;

  const message = l10n('message', messageCode.toLowerCase(), lang);

  const classMap: Record<string, string> = {
    e: 'messageError',
    i: 'messageInfo',
    s: 'messageSuccess',
  };

  const prefix = messageCode.charAt(0).toLowerCase();
  const baseClasses = 'bg-primary-300 px-5 py-7 border border-neutral-000 mb-4 text-neutral-000 border-4 rounded-2xl';
  const className = `${classMap[prefix] ?? ''} ${baseClasses}`.trim();

  return (
    <section className={className}>
      <p>{message}</p>
    </section>
  );
}
